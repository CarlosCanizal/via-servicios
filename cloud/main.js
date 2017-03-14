/*change log

Marzo-13-2017 Version inicial
change log*/


var Mailgun = null;
var production = true;

//Production

if(production){
  var domain = "sandbox96c4bed22c164404b1a3c41308f8d536.mailgun.org";
  Mailgun = require('mailgun-js')({domain:domain, apiKey:'key-207406cb7f186389bdbf6c20b4c82ce7'});

  var appId = "qJlZJ7Kjoxp4LSkiYzC2T34Mkea4ZMqHmavrcyQN";
  var masterKey = "GDF6rB6TfdUzV14WjPTCpsC8bT4ki0lzf0KC4L0Q";
  var javascriptKey = "IgkJ82CLUN4xIpiwD9UmFblPaUE650tRsw46Mbld";
}


/*Delete duplicates */

Parse.Cloud.define("distributor", function(request, response) {
  var info = request.params.info;
  var name = info.name;
  var address = info.address;
  var email =  info.email;
  var contact = info.contact;
  var phone = info.phone;
  var html = "<div>Empresa: "+name+"</div><div>Dirección: "+address+"</div><div>Contacto: "+contact+"</div><div>Email: "+email+"</div><div>Teléfono: "+phone+"</div>";  
  sendEmail('via.servicios.webmaster@gmail.com', 'Interes en ser Distribuidor', html, false).then(function(result){
    response.success(result);
  },function(err){
    response.error(err);
  })
});

Parse.Cloud.define("contact", function(request, response) {
  var info = request.params.info;
  var name = info.name;
  var email =  info.email;
  var message = info.message;
  var html = "<div>Nombre: "+name+"</div><div>Email: "+email+"</div><div>Mensaje: "+message+"</div>";  
  sendEmail('via.servicios.webmaster@gmail.com', 'Contacto Via Servicios', html, false).then(function(result){
    response.success(result);
  },function(err){
    response.error(err);
  })
});


var sendEmail = function(to, subject, html, bcc){
  var parse_promise = new Parse.Promise();
  var params = { to: 'via.servicios.webmaster@gmail.com',
                 from: "Contacto Via Servicios <contacto@viaservicios.com>",
                 subject: subject,
                 html: html
               };

  if(bcc){
    params.bcc = '';
  }

  Mailgun.messages().send(params,function(err, body) {
      if(err){
        console.log('error');
        // console.log(httpResponse);
        parse_promise.reject(err);
      }else{
        console.log('email-sent');
        parse_promise.resolve("Email sent!");
      }
  });
  return parse_promise;
}