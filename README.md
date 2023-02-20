# Nuxt 3 Minimal Starter

Starting a new project
```bash
npx nuxi init nuxt
npm install 
```


# Using TailwindCSS
docs -> https://tailwindcss.com/docs/guides/nuxtjs#3
```bash
# Install of tailwind
npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8

# start config
npx tailwindcss init

```
nuxt.config.js
```ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```
tailwind.config.js
```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Instaling icons library
```bash
npm install @headlessui/vue @heroicons/vue

```
