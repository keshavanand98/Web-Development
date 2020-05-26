function getName(){
   return  document.getElementById('nameBox').value;
}
function getGreet(){
   return document.getElementById('greetBox').value;
}
function greet(name,greetval){
    var message= `${name} ${greetval}`;
    alert(message);

}
