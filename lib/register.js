// Generated by CoffeeScript 1.3.3
var ss;

ss = require("socketstream");

module.exports = function(responderId, config, send) {
  ss.registerApi("backbone", function(req) {
    var msg;
    msg = JSON.stringify(req);
    send(msg);
    return void 0;
  });
  return ss.message.on(responderId, function(msg, meta) {
    return console.log(msg);
  });
};
