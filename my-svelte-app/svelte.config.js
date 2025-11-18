import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const config = {
    kit: {
        adapter: adapter({
            fallback: '404.html'
        })
    },
    preprocess: sveltePreprocess()
};

export default config;
