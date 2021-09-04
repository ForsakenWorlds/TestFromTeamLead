$(function () {
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }
    );
})

/*проверка на цифры*/ 
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

/*таймер*/ 

  let date = new Date()
  date.setMinutes(date.getMinutes() + 30);
  
  function counts() {
    let now = new Date();

    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60 
    let seconds = Math.floor(gap / 1000) % 60 
    console.log(days);

    if(gap < 0) {
      days = days + 0;
      hours = hours + 0;
      minutes = minutes + 60;
      seconds = seconds + 60;
    }

    document.getElementById('d').innerText = days + ' дней';
    document.getElementById('h').innerText = hours + ' часов';
    document.getElementById('m').innerText = minutes + ' минут';
    document.getElementById('s').innerText = seconds + ' секунд';
  }

  counts()

setInterval(counts, 1000)