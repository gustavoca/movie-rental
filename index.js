require('express-async-errors');
const express = require('express');
const log     = require('./app/lib/logger');
const config  = require('config');
const morgan  = require('morgan'); //request logging
const helmet  = require('helmet'); //securing express
const errorMiddleware = require('./middleware/error');
const genresRoutes = require('./routes/genres.routes');
const customersRoutes = require('./routes/customers.routes');
const moviesRoutes = require('./routes/movies.routes');
const rentalsRoutes = require('./routes/rentals.routes');
const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');
const homeRoutes   = require('./routes/home.routes');

if (!config.get('jwtPrivateKey')) {
  log.error('FATAL: jwtPrivateKey is not defined');
  process.exit(1);
}
const app     = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use('/api/genres', genresRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/rentals', rentalsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use(errorMiddleware);
app.use('/', homeRoutes);

const port = process.env.PORT || 3000;
app.listen(port);
log.info(`Listening on port ${port}`);
