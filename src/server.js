//will need to be combined with create-react-app server at some point

const express = require('express');
const mongoose = require('mongoose');

const { DATABASE_URL, PORT } = require('./config');
const router = require('./router');

const app = express();
app.use(express.static('public'));

app.use('/api', router);

mongoose.Promise = global.Promise;

let server; 

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }

            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`);
                resolve();
            })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}
if (require.main === module) {
    runServer().catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}
module.exports = { app, runServer, closeServer };
