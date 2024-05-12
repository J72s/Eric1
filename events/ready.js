const utils = require('../utils');

module.exports = client => {

    client.user.setActivity("Eric music", {type: "LISTENING"});

    utils.log(`Logged in as ${client.user.username} !`);

};
