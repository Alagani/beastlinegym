# Configure the Azure provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "cost_optimized_vm" {
  name     = "rg-cost-optimized-vm"
  location = "Central India"
}

# Create a virtual network
resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-cost-optimized"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.cost_optimized_vm.location
  resource_group_name = azurerm_resource_group.cost_optimized_vm.name
}

# Create a subnet
resource "azurerm_subnet" "subnet" {
  name                 = "subnet-cost-optimized"
  resource_group_name  = azurerm_resource_group.cost_optimized_vm.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.1.0/24"]
}

# Create a public IP address
resource "azurerm_public_ip" "public_ip" {
  name                = "pip-cost-optimized"
  location            = azurerm_resource_group.cost_optimized_vm.location
  resource_group_name = azurerm_resource_group.cost_optimized_vm.name
  allocation_method   = "Dynamic"
}

# Create a network interface
resource "azurerm_network_interface" "nic" {
  name                = "nic-cost-optimized"
  location            = azurerm_resource_group.cost_optimized_vm.location
  resource_group_name = azurerm_resource_group.cost_optimized_vm.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.public_ip.id
  }
}

# Create a cost-optimized VM using B-series burstable instance
resource "azurerm_linux_virtual_machine" "cost_optimized" {
  name                = "vm-cost-optimized"
  resource_group_name = azurerm_resource_group.cost_optimized_vm.name
  location            = azurerm_resource_group.cost_optimized_vm.location
  size                = "Standard_B2s"  # B-series burstable VM for cost savings
  admin_username       = "azureuser"
  network_interface_ids = [azurerm_network_interface.nic.id]

  admin_ssh_key {
    username   = "azureuser"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type  = "Standard_LRS"  # Use Standard HDD for lower cost
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }

  # Enable auto-shutdown to save costs when not in use
  tags = {
    environment = "dev"
    cost-center = "engineering"
  }
}

# Optional: Auto-shutdown schedule to reduce costs
resource "azurerm_dev_test_global_vm_shutdown_schedule" "shutdown" {
  location              = azurerm_resource_group.cost_optimized_vm.location
  virtual_machine_id    = azurerm_linux_virtual_machine.cost_optimized.id
  enabled               = true
  daily_recurrence_time = "1900"  # 7 PM
  timezone              = "UTC"
  
  notification_settings {
    enabled         = true
    time_in_minutes = "30"
    email           = "admin@example.com"
  }
}