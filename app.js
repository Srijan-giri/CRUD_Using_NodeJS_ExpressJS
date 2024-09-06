const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models/user');
const route = require('./routes/route');

const port = 3000;

app.use(bodyParser.json());
app.use('/crud', route);

db.sequelize.sync().then(() => {
    console.log('Database Synced');
}).catch((err) => {
    console.log('Error syncing database:', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



