import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(env.VITE_DEV_FRONTEND_PORT || 5173);
  
  return {
    plugins: [
      react(), 
      tailwindcss(),
      visualizer({ open: false, filename: 'dist/stats.html' }),
    ],
    server: {
      host: true,
      port: port,
    },
    build: {
      modulePreload: { polyfill: true },
      rollupOptions: {
        output: {
          // Function form is required for dynamic imports — Rollup matches against
          // resolved absolute module IDs, not relative path strings.
          manualChunks(id) {
            if (id.includes('node_modules/react-window')) return 'vendor-react-window';
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-is')) return 'vendor-react';
            if (id.includes('/src/data/actives/')) return 'data-actives';
            if (id.includes('/src/data/passives/')) return 'data-passives';
            if (id.includes('/src/data/items/')) return 'data-items';
            if (id.includes('/src/data/collars')) return 'data-misc';
          },
        },
      },
    },
  }
})
