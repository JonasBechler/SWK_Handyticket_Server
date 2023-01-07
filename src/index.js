
const path = require('path');

const config = require('../../config.json')

config.port = config.handyticket.port
config.port_react = config.handyticket.port_react
config.session_secret = config.handyticket.session_secret
config.fusionauth = config.handyticket.fusionauth

const frontend_dir = path.join(__dirname, "..", "..", "SWK_Handyticket_React", "build")
const userDataPath = path.join(__dirname, "..", "data", "accounts.json")

var app = require('./SWK_Server_Template/src/main')(config, userDataPath, frontend_dir)


app.listen(config.port);
console.log(`Konrad server started on port ${config.port}`);




