let count = 649;
window.setInterval(function counter(){
  if(Math.random() <= 0.3 || Math.random() > 0.7) document.querySelector(".counter2").innerHTML = ++count < 10 ? "00" + count : count < 100 && count > 9 ? "0" + count : count;
  if(count >= 999) {
    count = 0;
    ++document.querySelector(".counter1").innerHTML;
  }
}, 1000);