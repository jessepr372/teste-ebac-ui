const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rxnvq7',
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    video: true, 
  },
});
