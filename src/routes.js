const requireDir = require('require-dir');
router = requireDir('./app/middlewares');

const routes = function(server) {
  router.homeRoutes(server)
}

module.exports = routes;
