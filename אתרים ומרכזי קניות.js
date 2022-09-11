window.onload = function () {
    main();
}

function main() {
   
   
           document.getElementById("pariz").onmouseover = function p() {
               
               document.getElementById("pariz_p").innerHTML = "בעלי המלאכה 203";
           }
    document.getElementById("pariz").onmouseout= function p_2() {
                
        document.getElementById("pariz_p").innerHTML = "";
    }


    document.getElementById("man").onmouseover = function m() {

        document.getElementById("man_p").innerHTML =" הארזים 82, נתיבות  "+"  <br />"+"08-993-3775";
    }
    document.getElementById("man").onmouseout = function m_2() {

        document.getElementById("man_p").innerHTML = "";
    }

    document.getElementById("globus").onmouseover = function g() {
              
        document.getElementById("globus_p").innerHTML = " בעלי המלאכה 5  " + "  <br />" + "08-993-3759";
    }
    document.getElementById("globus").onmouseout = function g_2() {
                
        document.getElementById("globus_p").innerHTML = "";
    }



    document.getElementById("tzim").onmouseover = function tz() {
               
        document.getElementById("tzim_p").innerHTML = " בעלי המלאכה 5  " + "  <br />" + "073-796-2586";
    }
    document.getElementById("tzim").onmouseout = function tz_2() {

        document.getElementById("tzim_p").innerHTML = "";
    }
            



    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };
   
    }

    
    
 function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

 }

 





