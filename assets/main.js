document.addEventListener("DOMContentLoaded", function() {
    var overview = document.getElementById("overview");
    var dropdownMenu = overview.querySelector(".dropdown-menu");
    
    dropdownMenu.style.display = "none";

    overview.addEventListener("mouseenter", function() {
        dropdownMenu.style.display = "block";
    });
 
    overview.addEventListener("mouseleave", function() {
        dropdownMenu.style.display = "none";
    });

    document.addEventListener("DOMContentLoaded", function() {
        var navBar = document.getElementById('header-text');
        var initialPaddingTop = parseFloat(window.getComputedStyle(navBar).paddingTop);
        var initialPaddingBottom = parseFloat(window.getComputedStyle(navBar).paddingBottom);
    
        window.addEventListener('scroll', function() {
            if (window.innerWidth <= 480) {
                var scrollY = window.scrollY || window.pageYOffset;
    
                var newPaddingTop = initialPaddingTop - scrollY;
                var newPaddingBottom = initialPaddingBottom - scrollY;
    
                newPaddingTop = Math.max(newPaddingTop, 0);
                newPaddingBottom = Math.max(newPaddingBottom, 0);
    
                navBar.style.paddingTop = newPaddingTop + 'px';
                navBar.style.paddingBottom = newPaddingBottom + 'px';
            }
        });
    });
    
    document.getElementById("submitBtn").addEventListener("click", function() {
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var message = document.getElementById("message").value.trim();

        if (name !== "" && email !== "" && phone !== "" && message !== "") {
            alert("Thank you for your submission!");
        } else {
            alert("Please fill out all fields.");
        }
    });

});