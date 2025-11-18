import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    base: '/my-svelte-gemini-app/'   // <--- REQUIRED FOR GitHub Pages
});
