import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://lg-ccf.netlify.app', compressHTML: true, build: { inlineStylesheets: 'always' } });
