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

// create all landing pages
async function createListingPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityListingPage {
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
  const pages = data.allSanityListingPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/listingPage.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

// create redirect
async function createPageRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityRedirect {
        edges {
          node {
            redirectPaths
            redirectTo
          }
        }
      }
    }
  `);

  const redirectEdges = data.allSanityRedirect.edges;
  redirectEdges.forEach((edge) => {
    const { redirectPaths, redirectTo } = edge.node;
    const toPath = redirectTo;

    redirectPaths.forEach((fromPath) => {
      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        force: true,
      });
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createLandingPages(actions, graphql);
  await createListingPages(actions, graphql);
  await createPageRedirects(actions, graphql);
};
