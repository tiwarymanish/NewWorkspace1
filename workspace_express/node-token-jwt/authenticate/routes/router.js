const router = require('express').Router();
const oauth = require("oauth").OAuth2;
const jwt = require('jsonwebtoken');
const Request = require('superagent');
const cookieCode = "asdywiu45r61t..26t6wgy";
const Client_ID = "1d14d04e4e606d74da71"; //"d595532bb5ab99a235f8"; //
const Client_Secret = "43dd3f59e29144a7338aaa11e416296f8be2dd1b"; //"2775d2beb0ee820fa6fb106ca378358ce4a20d1e"; //
const OAuth2 = new oauth(Client_ID, Client_Secret, "https://github.com/", "login/oauth/authorize", "login/oauth/access_token");
const secretCode = "E7r9t8@Q#h%Hy+M";
const addUser = require('../userServices/adduser');
//parser imports
const bodyParser = require('body-parser');

//request parsers
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

// var adminList = [
//     'sagarpatke',
//     'NishaUttawani',
//     'dsrini94',
//     'varun7777',
//     'rsunray',
//     'subashchandarsiva',
//     'karanjeet298',
//     'akila543'
// ];

router.get('/authentication', function(req, response, next) {
    console.log('inside authentication');
    var code = req.query.code;
    console.log("hi dsadAFDSA  "+code);
    // OAuth2.getOAuthAccessToken(code,{}, (err, access_token) => {
    //     if (err)
    //         console.log(err);
    //     else {
    //         Request.get('https://api.github.com/user?access_token=' + access_token).set('Accept', 'application/json').end(function(err, res) {
    //             if (err || !res.ok) {
    //                 console.log(err);
    //                 response.send('Error in authentication.');
    //             } else {
    //                 var userName = res.body.login;
    //                 console.login("entered");
    //                 var id = res.body.id;
    //                 addUser(id, userName, res.body, (new Date().toISOString()), function() {
    //                     var encoded_accestoken = jwt.sign(access_token, secretCode);
    //                     response.cookie("access_token", encoded_accestoken);
    //                     response.cookie("user", userName);
    //                     response.cookie("repos_url", res.body.repos_url);
    //                     //response.cookie("avtar", res.body.avatar_url);
    //                     if (adminList.indexOf(userName) !== -1) {
    //                         response.cookie("type", "admin");
    //                         response.redirect("http://localhost:3000/#/monitor");
    //                     } else {
    //                         response.cookie("type", "user");
    //                         response.redirect("http://localhost:3000/user");
    //                     }
    //                 });
    //             }
    //         });

    //    }
    // })
});


module.exports = router;