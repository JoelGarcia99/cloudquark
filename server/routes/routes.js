const app = require("express")();

app.use(require("../modules/cloud/routes"));

module.exports = app;