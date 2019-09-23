const config = {
  dbUrL: process.env.DB_URL || '', // Define your own Mongodb String chaing connection ;)
  port : process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config;
