var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akashbalu22@gmail.com',
    pass: 'NarutoUzumaki666'
  }
});

var mailOptions = {
  from: 'akashbalu22@gmail.com',
  to: 'akash.balu@dxc.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});