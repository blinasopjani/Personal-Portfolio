// window scroll
$(window).on("scroll", function(){
var scrollTop = $(window).scrollTop();
if(scrollTop > 0){
    $('body').addClass('fixed-header');
} else {
    $('body').removeClass('fixed-header');
}
});


$(document).ready(function(){
    new Typed('#type-it', {
        strings: ['Software Engineer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 800,
        startDelay: 500,
        loop: true,
        smartBackspace: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 300,
        showCursor: true
    });

    // OWL
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    items:2,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{ items:1 },
        900:{ items:2},
    }
});
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    // If all good, send email
    sendEmail({name, email, subject, message});
});

function sendEmail(data) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert('Failed to send message. Please try again later.');
        console.log(error);
    });
}











