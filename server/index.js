const express = require('express');
const helmet = require('helmet');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Sequelize = require('sequelize');

const app = express();
const router = require('./router');
const dbInstances = require('./configuration/db-instances');
const cors = require('cors');

app.use(morgan('combined'));
app.use(cors()); //you can pass as a parameter to cors only accept requests from a specific domain(s) - read docs on cors middleware module
app.use(bodyParser.json({ type: '*/*' }));
app.use(helmet());
app.use(helmet.hidePoweredBy());
// router(app);

if (process.env.NODE_ENV !== 'production') {
    // const webpackMiddleware = require('webpack-dev-middleware');
    // const webpack = require('webpack');
    // const webpackConfig = require('./webpack.config');
    // app.use(webpackMiddleware(webpack(webpackConfig)));
    dbInstances.connectToDBInstance();
} else {
    console.log('production mode enabled');
    // app.use(express.static('client/dist'));
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'client/dist/index.html'));
    // });
    /**TODO - add a connection to a production ready postgres db */
}

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ' + port);