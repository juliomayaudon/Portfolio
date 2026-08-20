import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Node standalone adapter: builds a self-contained server that reads
// HOST and PORT from the environment, which is exactly what Railway provides.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  // Change this to your real domain once it is connected in Railway.
  site: 'https://juliomayaudon.com',
});
