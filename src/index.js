import {app} from './app';
const { PORT = 8080 } = process.env;
const test = app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
var io = require('socket.io')(test);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
