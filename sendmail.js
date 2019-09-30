var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nodetest77@gmail.com',
        pass: 'Password567'
    }
});

var mailOptions = {
    from: 'nodetest77@gmail.com',
    to: 'nodetest77@gmail.com',
    subject: 'Test Sending Email using Node.js',
    text: `Hi Smartherd, thank you for your nice Node.js tutorials.

I <b>will donate</b> for this course. Please send me payment options.`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});