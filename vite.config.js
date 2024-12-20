import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Optimize GIF images
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      // Optimize PNG images
      optipng: {
        optimizationLevel: 7,
      },
      // Optimize JPEG images
      mozjpeg: {
        quality: 80,
      },
      // Optimize SVG images
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
        ],
      },
      // Optimize WebP images
      webp: {
        quality: 80,
      },
    }),
    Sitemap({
      hostname: 'https://www.kiohtoursandtravel.com', // Replace with your actual domain
      routes: [
        '/',              // Home page
        '/about',         // About page
        '/destinations',  // Destinations page
        '/booking',       // Booking page
        '/contact',       // Contact page
        '/pricing',       // Pricing page
      ],
    }),
  ],
});
