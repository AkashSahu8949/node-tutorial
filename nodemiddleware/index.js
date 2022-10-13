const express = require('express');
const app = express();
//const route = express.Router();



const myLogger = (req, res, next) => {
    //console.log('LOGGED')
    if (!req.query.age) {
        res.send("plese enter your age");
    }
    else if (req.query.age < 18) {
        res.send("you are a under age");
    }
    else {
        res.send("welocme here");
        next()
    }
}

//app.use(myLogger)

app.get('',(req, res) => {
    res.send("home page");
    res.redirect('');
});
app.get('/conatct',myLogger,(req, res) => {
    res.send("contact page");
    res.redirect('/conatct');
});
app.get('/about', (req, res) => {
    res.send("about page");
    res.redirect('/about')
}).listen(4400)