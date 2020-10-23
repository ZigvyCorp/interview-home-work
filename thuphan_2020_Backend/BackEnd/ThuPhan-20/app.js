const EXPRESS = require('express'); //import thu vien express vao project - de tao ung dung express
const BODY_PARSER = require('body-parser'); // import thu vien parse doi tuong thanh json
const MULTER = require('multer');// import thu vien upload file - enable FTP
var Response = require('./utils/response');

var app = EXPRESS();
var router = require('./routes');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

var models = require('./models');

app.use(BODY_PARSER.json()); // dung de parse doi tuong thanh json
app.use(BODY_PARSER.urlencoded({extended: true}));



models.sequelize.sync({ // tien trinh tao ra csdl dua tren model
    logging: false
})
.then(function(res) { 

    var server = app.listen(1607, function () {
        var host = server.address().address;
        var port = server.address().port;
    
        console.log('Server is running on http://%s:%s', host, port);
    
    });

    console.log(Response.successResponse("Connect to database successfully!", res));
})
.catch(function(err) {
    console.log(Response.requireDataResponse("Cannot connect to database!", err));
});

app.use(router);



