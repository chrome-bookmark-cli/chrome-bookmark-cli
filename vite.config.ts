import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';

const manifest = defineManifest({
  manifest_version: 3,
  name: 'chrome-bookmark-cli',
  description: '',
  version: '1.0.0',
  icons: {},
  permissions: ['bookmarks'],
  action: {
    default_popup: 'index.html',
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
