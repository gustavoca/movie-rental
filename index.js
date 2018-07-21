const morgan  = require('morgan'); //request logging
const helmet  = require('helmet'); //securing express
const express = require('express');
const genresRoutes = require('./routes/genres.routes');
const customersRoutes = require('./routes/customers.routes');
const homeRoutes   = require('./routes/home.routes');
const app     = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use('/api/genres', genresRoutes);
app.use('/api/customers', customersRoutes);
app.use('/', homeRoutes);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
