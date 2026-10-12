/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canopy: '#0F3B2C',
        leaf: '#2E7D4F',
        sprout: '#8FBF6A',
        mist: '#F4F7F2',
      }
    },
  },
  plugins: [],
};
