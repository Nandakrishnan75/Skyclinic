import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          vendor: ['react', 'react-dom'],
          // Router
          router: ['react-router-dom'],
          // UI library (Radix components)
          ui: [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast'
          ],
          // Form and validation
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Query and data
          query: ['@tanstack/react-query'],
          // Icons and utilities
          utils: ['lucide-react', 'clsx', 'tailwind-merge', 'class-variance-authority'],
          // Charts and visualization
          charts: ['recharts'],
          // Email service
          email: ['@emailjs/browser']
        }
      }
    }
  }
}));
