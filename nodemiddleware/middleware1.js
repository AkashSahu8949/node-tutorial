const { appendFile } = require("fs");

module.exports = (req, res, next) => {
    //console.log('LOGGED')

    if (!req.query.age) {
        res.send("plese enter your age");
    }
    else if (req.query.age < 18) {
        res.send("plese enter your  valide age");
    }
    else {
        res.send("home page");
        next()
    }
}


appendFile.use()