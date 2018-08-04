const morgan  = require('morgan'); //request logging
const helmet  = require('helmet'); //securing express
const express = require('express');
const genresRoutes = require('./routes/genres.routes');
const customersRoutes = require('./routes/customers.routes');
const moviesRoutes = require('./routes/movies.routes');
const rentalsRoutes = require('./routes/rentals.routes');
const usersRoutes = require('./routes/users.routes');
const authRoutes = require('./routes/auth.routes');
const homeRoutes   = require('./routes/home.routes');
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
app.use('/', homeRoutes);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
