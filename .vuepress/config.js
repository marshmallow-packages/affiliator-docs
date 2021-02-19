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
						text: 'API',
						items: [
							{text: 'Get transactions', link: '/transactions/get-transactions.html'},
                            {text: 'Update credentials', link: '/account/sites.html#update-your-site-credentials'},
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
			'/': require('./../sidebar'),
		},
	},
}
