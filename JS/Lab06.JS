// alert('Choose any number between 0 and 100')
// function enthu(Enthusiasm) {
//     if(Enthusiasm >= 50 )
// {
//     alert('Lets Dive into Space');
//     document.write ("<h2>Lets Dive into Space</h2>")
// }
// if (Enthusiasm < 50)
// {
//     alert('No Take me to my Mom');
//     document.write ("<h2>No Take me to my Mom</h2")
// } 
// }

//document.write('<h3>' + theTime() + '</h3>')
var a = confirm("Are you planet lover?");
if ( a==false ){alert("leave the page Plz ");} 
  else{alert('Welcome to the club');}
function galaxy(){
  var kind;
  var img= '';
  while(kind!=="planet"&&kind!=="space"){;
     kind= prompt("which phote do you want to show");}
  var numberofimgs;
  numberofimgs=prompt("how many images do you want to see?");
  for(var x=0;x<numberofimgs;x++){
    if(kind==="planet"){
      img=img+'<img src="https://www.universetoday.com/wp-content/uploads/2019/10/bd20307_fnl_lynettecook.jpg">';
      }else if(kind==="space"){
        img = img+'<img src="https://lh3.googleusercontent.com/proxy/d7mi3AiM_cW5p6ZZgQnf_5I-LTXo51k7HbrGp9KG8i04sPOfuNTpVqL2-tC1dCwmqU4FvMXM7TiMLHH13g_8HzhXyavoOSiKdCJcXE-qvNddnqh3bNLgI2BhF63xEY_SaPMiTkixtkQKyK-pMi_DorDaXmNuoX-SiavZxNU">'
        }
        
  }
  return img;
}
document.write('<p>'+ galaxy() +'<p/>');


