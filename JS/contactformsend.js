const sendButton = document.getElementsByClassName("formSendButton")[0]

sendButton.addEventListener("click", () =>{

  let name = document.getElementById("name").value
  let mail = document.getElementById("mail").value
  let message = document.getElementById("message").value
  let namy = "Name:" + "<br />" + name + "<br />" + "<br />" + "Email:" + "<br />" + mail + "<br />" + "<br />" + "Message:" + "<br />" + message;
  var subjekt = "You have mail from " + name
  Email.send({
      SecureToken : ""/* Generate Token from https://smtpjs.com/ */,
      To : 'domenp93@gmail.com',
      From : "zapizdars99@gmail.com",
      Subject : subjekt,
      Body : namy
  }).then(
    message => alert("Message sent")
  );
  })
