const config = {
  dbUrL: process.env.DB_URL || '', // Define your own Mongodb String chain connection ;)
  port : process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
  sgp: 'sgp_3L89du4eEJNZNSx3tsoV2LqCsAgJFTz05Ged4wVpHWchN7t2MMBL6ZMPhi8sbL3x' // This was revoked by GH secrets scanning, so I don't care if you wanna figure out what is it ;)
}

module.exports = config;
