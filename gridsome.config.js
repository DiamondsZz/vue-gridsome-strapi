// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://182.92.98.180:1337/",
        queryLimit: 1000, // Defaults to 100
        contentTypes: ["post",'item','other'],
      },
    },
  ],
  templates: {
    StrapiPost: [
      {
        path: "/blog/:id",
        component: "./src/templates/postDetails.vue",
      },
      {
        name: "edit",
        path: "/blog/edit/:id",
        component: "./src/templates/postEdit.vue",
      },
    ],
  },
};
