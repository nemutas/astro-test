import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://nemutas.github.io',
	// base: '/astro-test',
	vite: ({ mode }) => ({
		base: mode === 'development' ? '/' : '/astro-test/',
	}),
})
