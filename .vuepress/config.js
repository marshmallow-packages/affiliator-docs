module.exports = {
	title: "MrMallow",
	description: "Documentation for Marshmallow :)",
	base: '/docs/',

	markdown: {
		lineNumbers: true,
	},

	themeConfig: {
		logo: '/assets/img/logo.png',
		displayAllHeaders: true,
		activeHeaderLinks: false,
		searchPlaceholder: 'Press / to search',
		lastUpdated: false, // string | boolean
		sidebarDepth: 0,

		repo: 'marshmallow-packages',

		docsRepo: 'marshmallow-packages',
		editLinks: false,
		editLinkText: 'Help us improve this page!',

		nav: [
			{
				text: 'Quick Links',
				items: [
					{
						text: 'Affiliates',
						items: [
							{text: 'Bol.com', link: '/bolcom/introduction.html'},
						]
					},
					{
						text: 'Github',
						items: [
							{
								text: 'Marshmallow Packages',
								link: 'https://github.com/orgs/marshmallow-packages/',
								icon: 'markdown'
							},
						]
					}
				]
			}
		],

		sidebar: {
			'/bolcom/': require('./../bolcom/bolcom'),
		},
	},
}
