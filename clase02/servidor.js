//const app = require('./express');
const {app} = require('./express');
const PORT = 3000;


app.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
});

