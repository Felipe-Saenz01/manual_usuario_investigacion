// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
	site: 'https://felipe-saenz01.github.io/manual_usuario_investigacion',
	base: '/manual_usuario_investigacion',
	vite: {
		resolve: {
			alias: {
				'@assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
			},
		},
	},
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki()],
			logo: {
				src: './src/assets/unitropico-logo.png'
			},
			title: 'Manual Procesos Investigativos Unitrópico',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
