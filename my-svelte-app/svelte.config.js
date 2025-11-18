import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            fallback: 'index.html'
        }),
      paths: {
            base: '/sinhala1'  // your repo name
        }
    }
};

export default config;
