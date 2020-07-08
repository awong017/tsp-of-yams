const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getReviews = makeRequest(graphql, `
    {
      allStrapiReview {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each review.
    result.data.allStrapiReview.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/review.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getDiscoveries = makeRequest(graphql, `
  {
    allStrapiDiscovery {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then(result => {
  // Create pages for each discovery.
  result.data.allStrapiDiscovery.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.id}`,
      component: path.resolve(`src/templates/discovery.js`),
      context: {
        id: node.id,
      },
    })
  })
});

const getRecipes = makeRequest(graphql, `
  {
    allStrapiRecipe {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then(result => {
  // Create pages for each recipe.
  result.data.allStrapiRecipe.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.id}`,
      component: path.resolve(`src/templates/recipe.js`),
      context: {
        id: node.id,
      },
    })
  })
});
  
  // Query for reviews, discoveries, and recipes nodes to use in creating pages.
  return getReviews;
  return getDiscoveries;
  return getRecipes;
};