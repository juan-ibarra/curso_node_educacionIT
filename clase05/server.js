const dotenv = require('dotenv');
dotenv.config();

const app = require('/.app');

app.listen(process.env.PORT, () => {
    console.log(`listening on + http://localhost:${process.env.PORT}`);
});