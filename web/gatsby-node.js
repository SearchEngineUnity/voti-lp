const path = require('path');
// create all landing pages
async function createLandingPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityLandingPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const pages = data.allSanityLandingPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/landingPage.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createLandingPages(actions, graphql);
};
