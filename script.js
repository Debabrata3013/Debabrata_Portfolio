
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var  typed = new Typed("#myText", {
    strings: [
        "Software Engineer",
        "Automation Engineer",
        "Web Developer",
        "UI/UX Designer",
        "Manual Tester"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

function opentab(tabname, event) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var scriptURL = "https://script.google.com/macros/s/AKfycbz4tDHjsATV9CdAxA3x_IjBhxdNkCAQ5C9AMNVANxYalNdOaoerEWlbI-aIM8_jszVl/exec";
var contactForm = document.getElementById("contact-form");
var msg = document.getElementById("msg");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    msg.innerHTML = "Sending message...";

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(contactForm)
    })
    .then(function () {
        msg.innerHTML = "Message sent successfully!";
        contactForm.reset();
    })
    .catch(function (error) {
        msg.innerHTML = "Message failed. Please try again.";
        console.error(error);
    });
});
