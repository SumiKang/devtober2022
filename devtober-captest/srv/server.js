"use strict"
const cds = require('@sap/cds');
const proxy = require('@sap/cds-odata-v2-adapter-proxy');
cds.on('bootstrap', app=>{
    app.use(proxy());
});
module.exports = cds.server;

// if (cds.env.requires?.credentials?.authentication === "BasicAuthentication") {
//   const credentials = /* read your credentials */
//   cds.env.requires.credentials.username = credentials.username;
//   cds.env.requires.credentials.password = credentials.password;
// }
