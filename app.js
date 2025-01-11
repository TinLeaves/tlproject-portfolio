const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/router');
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layout'); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
