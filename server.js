const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize our app to creat a port
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up body parsing to route our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

//localhost:3000/notes

// Start the server on our port
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));