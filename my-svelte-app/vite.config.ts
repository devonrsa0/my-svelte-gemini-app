import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
  build: {
    outDir: 'build',   // force visible output folder
    emptyOutDir: true
  }
});
