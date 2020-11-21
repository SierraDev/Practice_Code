//Callbacks

//passes an anonymous functio to Timeout, and that function alerts the string to the user after a short delay
setTimeout(function(){
    alert(`Got somethin' that might interest ya, stranger.`)
}, 2000);

const btn = document.querySelector(`button`);
//passes an anonymous function (the alert) that triggers when user clicks button
btn.addEventListener(`click`, function(){
    alert(`Stop clicking me!`)
});