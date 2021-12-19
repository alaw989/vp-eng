/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
	// Build Pages from Wordpress

	reporter.info('Pulling WP Pages via GraphQL');

	const getPages = `
				query getPages {
					allWpPage {
						nodes {
							id
							title
							uri
							template {
								templateName
							}
						}
					}
				}
        		`;

	const pages = await graphql(getPages);

	if (pages.error) {
		reporter.error('Error Fetching WP Posts via GraphQL');
	} else {
		reporter.info('Creating Pages');

		pages.data.allWpPage.nodes.map((page) => {
			const template = page.template.templateName.toLowerCase();

			reporter.info(`${page.uri}`);
            console.log(page.uri)

			actions.createPage({
				path: page.uri,
				component: require.resolve(`./src/templates/${template}.js`),
				context: { id: page.id }
			});
		});
	}
};
