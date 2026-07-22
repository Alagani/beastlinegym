import os

# Folders to ignore
IGNORE_DIRS = {
    "node_modules",
    ".git",
    ".github",
    "dist",
    "build",
    ".next",
    ".vscode",
    "__pycache__",
    ".idea",
    ".azure"
}

# Files to ignore
IGNORE_FILES = {
    ".DS_Store"
}

def print_tree(path, prefix=""):
    items = sorted(os.listdir(path))

    # Remove ignored files/folders
    items = [
        item for item in items
        if item not in IGNORE_DIRS and item not in IGNORE_FILES
    ]

    for index, item in enumerate(items):
        item_path = os.path.join(path, item)
        is_last = index == len(items) - 1

        connector = "└── " if is_last else "├── "
        print(prefix + connector + item)

        if os.path.isdir(item_path):
            extension = "    " if is_last else "│   "
            print_tree(item_path, prefix + extension)

if __name__ == "__main__":
    project_path = "."  # Current directory
    print(os.path.abspath(project_path))
    print_tree(project_path)