$(document).ready(function () {

    $('#menu').click(function () {

        $(this).toggleClass('fa-times');

        $('.navbar').toggleClass('nav-toggle')

    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');

        $('.navbar').removeClass('nav-toggle')
    });

    $('.portfolio .button-container .btn').click(function () {
        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.portfolio .image-container .box').show('400')
        }
        else {
            $('.portfolio .image-container .box').not('.' + filter).hide('200')
            $('.portfolio .image-container .box').filter('.' + filter).show('400')
        }
    });

    // dark mode

    $('#theme-toggler').click(function () {
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });

    // smooth scrolling

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },

            500,
            'linear'

        );

    })
});

// scrool effect

const sr = ScrollReveal({
    distance: '100px',
    duration: 2800,
    // reset: true,
})


sr.reveal(' .exp-box, .title, .heading , .p1 , .services , .h3p, .cbox', {
    origin: 'top',
    interval: 100,
})

sr.reveal('.contact, .image', {
    origin: 'left',
    interval: 300,
})

sr.reveal('.btn , .map', {
    origin: 'right',
    interval: 300,
})

// progress bar

let number1 = document.getElementById("number1");
let countre1 = 0;
setInterval(() => {
    if (countre1 == 95) {
        clearInterval();
    }
    else {
        countre1 += 1;
    }
    number1.innerHTML = countre1 + "%";
}, 31);


let number2 = document.getElementById("number2");
let countre2 = 0;
setInterval(() => {
    if (countre2 == 85) {
        clearInterval();
    }
    else {
        countre2 += 1;
    }
    number2.innerHTML = countre2 + "%";
}, 35);

let number3 = document.getElementById("number3");
let countre3 = 0;
setInterval(() => {
    if (countre3 == 65) {
        clearInterval();
    }
    else {
        countre3 += 1;
    }
    number3.innerHTML = countre3 + "%";
}, 48);

let number4 = document.getElementById("number4");
let countre4 = 0;
setInterval(() => {
    if (countre4 == 75) {
        clearInterval();
    }
    else {
        countre4 += 1;
    }
    number4.innerHTML = countre4 + "%";
}, 38);

// prof

let number5 = document.getElementById("number5");
let countre5 = 0;
setInterval(() => {
    if (countre5 == 98) {
        clearInterval();
    }
    else {
        countre5 += 1;
    }
    number5.innerHTML = countre5 + "%";
}, 31);


let number6 = document.getElementById("number6");
let countre6 = 0;
setInterval(() => {
    if (countre6 == 65) {
        clearInterval();
    }
    else {
        countre6 += 1;
    }
    number6.innerHTML = countre6 + "%";
}, 45);

let number7 = document.getElementById("number7");
let countre7 = 0;
setInterval(() => {
    if (countre7 == 75) {
        clearInterval();
    }
    else {
        countre7 += 1;
    }
    number7.innerHTML = countre7 + "%";
}, 39);

let number8 = document.getElementById("number8");
let countre8 = 0;
setInterval(() => {
    if (countre8 == 60) {
        clearInterval();
    }
    else {
        countre8 += 1;
    }
    number8.innerHTML = countre8 + "%";
}, 48);

// multi text effect
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// read more
function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";
    }
}

function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
    }
}

function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline";
    }
}

function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var btnText4 = document.getElementById("myBtn4");

    if (dots4.style.display === "none") {
        dots4.style.display = "inline";
        btnText4.innerHTML = "Read more";
        moreText4.style.display = "none";
    } else {
        dots4.style.display = "none";
        btnText4.innerHTML = "Read less";
        moreText4.style.display = "inline";
    }
}

function myFunction5() {
    var dots5 = document.getElementById("dots5");
    var moreText5 = document.getElementById("more5");
    var btnText5 = document.getElementById("myBtn5");

    if (dots5.style.display === "none") {
        dots5.style.display = "inline";
        btnText5.innerHTML = "Read more";
        moreText5.style.display = "none";
    } else {
        dots5.style.display = "none";
        btnText5.innerHTML = "Read less";
        moreText5.style.display = "inline";
    }
}

function myFunction6() {
    var dots6 = document.getElementById("dots6");
    var moreText6 = document.getElementById("more6");
    var btnText6 = document.getElementById("myBtn6");

    if (dots6.style.display === "none") {
        dots6.style.display = "inline";
        btnText6.innerHTML = "Read more";
        moreText6.style.display = "none";
    } else {
        dots6.style.display = "none";
        btnText6.innerHTML = "Read less";
        moreText6.style.display = "inline";
    }
}


function _alert() {
    alert("This Service Is Temporarily Not Available");
}
