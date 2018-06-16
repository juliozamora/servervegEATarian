var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var path = require('path');
var mongoose = require('mongoose')

mongoose.connect('mongodb://jczamora:no1cares@ds245250.mlab.com:45250/vellies');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

    console.log('successfully connected to database');

});
var app = new express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors({
    origin: true,
    credentials: true
}));


app.get('/getGallery', function (request, response) {
    var gallery = [{
        url: '../assets/cultural/atole.jpg',
        type: 'culture',
    },
    {
        url: '../assets/cultural/concha.jpg',
        type: 'culture',
    },
    {
        url: '../assets/cultural/maizprieto.jpg',
        type: 'culture',
    },
    {
        url: '../assets/inktober/diadelosmuertos.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/llorona.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/politicalCartoon/ladyliberty.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/swamp.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/cultural/lucha.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/cultural/ojo.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/cultural/concha2.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/cultural/corazon.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/cultural/evy.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/cultural/muneca.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/cultural/nopales.jpg',
        type: 'cultural',
    },
    {
        url: '../assets/inktober/alienfrida.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/alienmab.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/bats.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/bruja.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/burton.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/calavera.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/cantinflas.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/chupacabras.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/coco.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/donramon.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/goblin.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/goblin2.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/hauntedhouse.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/jirafales.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/juanga.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/nosferatu.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/pumpkin.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/rat.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/raven.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/roadmonster.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/seamonster.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/spiderevy.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/tree.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/vampire.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/inktober/werewolf.jpg',
        type: 'inktober',
    },
    {
        url: '../assets/politicalCartoon/dolls.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/field.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/fist.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/icecream.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/kellyanne.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/ladyliberty.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/ladyliberty2.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/maga.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/mcconell.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/miller.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/ovarypower.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/Puppet.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/spicer.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/standingrock.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/swamp.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/politicalCartoon/toilet.jpg',
        type: 'politicalCartoon',
    },
    {
        url: '../assets/portraits/betty.jpg',
        type: 'portraits',
    },
    {
        url: '../assets/portraits/doctor.jpg',
        type: 'portraits',
    },
    {
        url: '../assets/portraits/smoking.jpg',
        type: 'portraits',
    },
    {
        url: '../assets/cactus.jpg',
        type: 'misc',
    },
    {
        url: '../assets/chameleon.jpg',
        type: 'misc',
    },
    {
        url: '../assets/flower.jpg',
        type: 'misc',
    },
    {
        url: '../assets/maiz.jpg',
        type: 'misc',
    },
    ];

    response.status(200).send(gallery);
});

app.post('/sendEmail', function (request, response) {

    console.log(request.body);

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'julio.cesar.zamora.23@gmail.com', // generated ethereal user
                pass: 'PASSWORD GOES HERE' // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: 'julio.cesar.zamora.23@gmail.com', // sender address
            to: 'julio.cesar.zamora.23@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            template: 'index',
            context: {
                name: request.body.name,
                email: request.body.email,
                phone: request.body.phone,
                message: request.body.message,

            }
        };

        let handlebarsOptions = {
            viewEngine: 'handlebars',
            viewPath: path.resolve('./templates'),
            extName: '.html'

        }
        transporter.use('compile', hbs(handlebarsOptions));
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });


    response.status(200).send('ok');
});


app.listen(8080, function () {
    console.log('my server is listening on localhost:8080');
})