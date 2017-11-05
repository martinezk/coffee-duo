//configure values for the Mongo database URL 
//and the port the application will run on.
exports.DATABASE_URL = process.env.DATABASE_URL ||
global.DATABASE_URL ||
'mongodb://java:password1@ds243335.mlab.com:43335/coffeeduo';
exports.PORT = process.env.PORT || 8080;