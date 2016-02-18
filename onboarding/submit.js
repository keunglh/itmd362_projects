
$('#SPAMTHISGUY').submit(function (ev){
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    alert('Thank you for giving us permission to steal and sell your medical information!');
    email.value = "";
    name.value="";
});
