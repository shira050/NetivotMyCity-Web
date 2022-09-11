window.onload = function () {
    main();
}

function main() {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }


    document.getElementById("answer_yes").onclick = function yes() { alert("אנו שמחים לשמע שעזרנו לך נשמח לעזור גם בהמשך.") };
    document.getElementById("answer_no").onclick = function no() { alert("מצטערים לשמוע.אנא נסה ליצור איתנו קשר טלפוני וננסה לעזור לך .") };
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}