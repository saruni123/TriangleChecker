var answer=function(){

var a= parseFloat(prompt("Enter side A: "));
  if (isNaN(a)=== true){
    alert("Please enter a number in the field");
}else{
  var b= parseFloat(prompt("Enter side B: "));
    if (isNaN(b)=== true){
        alert("Please enter a number in the field");
      }else{
        var c= parseFloat(prompt("Enter side C: "));
          if (isNaN(c)=== true){
            alert("Please enter a number in the field");
          }else{
            if((a+b)<=c || (b+c)<=a || (a+c)<=b){
              alert("Not a Triangle");
            }
