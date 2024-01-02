import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    type: 'commonjs',
    integrations: [react(), tailwind()],
    pages: {
        // Configure options for the about.astro page
        'index.astro': {},
        'about.astro': {},
        'contact.astro': {},
        'projects.astro': {}
    },
});