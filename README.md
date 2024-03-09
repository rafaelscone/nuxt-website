# Nuxt 3 Minimal Starter

Starting a new project
```bash
# Start the project
npx nuxi init projectname
# OR
pnpm dlx nuxi@latest init projectname

# Install
 
# Enter de folder
cd projectname && pnpm install
```




# Adding TailwindCSS
docs -> https://tailwindcss.com/docs/guides/nuxtjs#3
```bash
# Install of tailwind
pnpm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8

# Install Icons
pnpm install @headlessui/vue @heroicons/vue

# Start file tailwind
npx tailwindcss init

# Create NuxtFolders and files
mkdir -p server/api components pages plugins layouts components assets/css middleware server/middleware utils server/utils plugins
touch assets/css/main.css
mv app.vue app2.vue

# start config
npx tailwindcss init
```

assets/css/main.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

nuxt.config.ts
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

# Integration with Prisma

```bash
# Install prisma
pnpm install @prisma/client
pnpm install -D prisma

# Start project
pnpm prisma init

## Configure file .env with database url

# Code to execute migration
pnpm prisma migrate dev --name init

# If you want to create model from bd
pnpm prisma db pull

# Generate prisma
pnpm prisma generate

# Show the database
pnpm prisma studio
```

