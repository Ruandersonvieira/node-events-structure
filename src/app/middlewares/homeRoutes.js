const homeRoutes = (server) => {
    server.get('/', (req,res,next) => {
        res.send('Rodando')
        next();
    });
};

module.exports = homeRoutes;
