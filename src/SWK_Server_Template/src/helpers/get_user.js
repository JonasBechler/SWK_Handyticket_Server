module.exports = function(userDataPath){
    var fs = require('fs');


    function getUserByEmail(email) {

        const userData = JSON.parse(fs.readFileSync(userDataPath, {encoding:'utf8', flag:'r'}));
        var selected_user = null;
        
        userData.users.forEach(user => {
            if (email === user.email) {
                selected_user = user;
            }
        });

        return {details: userData.details, user: selected_user }
    }

    function getDetails() {
        const userData = JSON.parse(fs.readFileSync(userDataPath, {encoding:'utf8', flag:'r'}));

        return {details: userData.details }
    }

    return {by_mail: getUserByEmail, details: getDetails}
}
