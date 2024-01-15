const User = require('../../Models/User');

module.exports.VerifyUser = async(userId) => {
    const user = User.findOne({ _id : userId });

    if(user) {
        return true;
    }

    return false;
}