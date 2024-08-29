function haired(){
  alert('Scroll to the bottom of this page and select chat and fill in the info to contact me');
}
function about(){
  alert('This section has not yet been created!');
}
function submitbox(){
  alert('Your information has been successfully submited!');
}

// userinput alerted
document.getElementById("mysubmit").onclick = function(){
  let balton;
 balton = document.getElementById("fullName").value;
alert("Thank you," + `${balton}`);
alert("This site is still being worked on, to get in touch, contact dircetly +0757190211");
let username = `${balton}`;
}
  
function talkmessage(){
 let sleepred = document.getElementById("talkmessage1");
 sleepred.textContent = `Do not have a Twitter acount yet`;
 sleepred.style.color = "red"
}




