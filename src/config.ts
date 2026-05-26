// src/config.ts
// Centralized configuration for the Vj's Beastline gym website.
// Values are read from Vite's environment variables.
// Ensure a .env file provides these variables for production.

export const PHONE = import.meta.env.VITE_PHONE || "919393936781";
export const BASE_URL = import.meta.env.BASE_URL;

// Additional configuration can be added here as needed.
