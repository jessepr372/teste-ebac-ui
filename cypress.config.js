const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vhvt3y",
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "http://lojaebac.ebaconline.art.br/", 
  },
});
