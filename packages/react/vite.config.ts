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
      rollupOptions: {
        output: {
          manualChunks: {
            // Split React runtime into its own chunk
            'vendor-react': ['react', 'react-dom'],
            // Split react-window into its own chunk
            'vendor-react-window': ['react-window'],
            // Split data into separate chunks per category
            'data-actives': [
              './src/data/actives/butcherActives',
              './src/data/actives/clericActives',
              './src/data/actives/collarlessActives',
              './src/data/actives/druidActives',
              './src/data/actives/fighterActives',
              './src/data/actives/hunterActives',
              './src/data/actives/jesterActives',
              './src/data/actives/mageActives',
              './src/data/actives/monkActives',
              './src/data/actives/necromancerActives',
              './src/data/actives/psychicActives',
              './src/data/actives/tankActives',
              './src/data/actives/thiefActives',
              './src/data/actives/tinkererActives',
            ],
            'data-passives': [
              './src/data/passives/butcherPassives',
              './src/data/passives/clericPassives',
              './src/data/passives/collarlessPassives',
              './src/data/passives/druidPassives',
              './src/data/passives/fighterPassives',
              './src/data/passives/hunterPassives',
              './src/data/passives/jesterPassives',
              './src/data/passives/magePassives',
              './src/data/passives/monkPassives',
              './src/data/passives/necromancerPassives',
              './src/data/passives/psychicPassives',
              './src/data/passives/tankPassives',
              './src/data/passives/thiefPassives',
              './src/data/passives/tinkererPassives',
            ],
            'data-items': [
              './src/data/items/consumableItems',
              './src/data/items/faceItems',
              './src/data/items/headItems',
              './src/data/items/neckItems',
              './src/data/items/trinketItems',
              './src/data/items/weaponItems',
            ],
            'data-misc': [
              './src/data/collars'
            ],
          },
        },
      },
    },
  }
})
