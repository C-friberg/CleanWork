// Ett script som tar bort shorts från youtube.


// Funktionen 
function hideShorts() {
    const shortsSection = document.querySelectorAll("ytd-rich-shelf-renderer"); 

    shortsSection.forEach((section) => {
        section.style.display = "none"; 
    }); 

    const shortsButton = document.querySelector('a[title="Shorts"]'); 

    if(shortsButton) {
        shortsButton.style.display = "none"; 
    }

    const recommended = document.getElementById("secondary"); 
    if (recommended) 
        recommended.style.display = "none"; 

};

setInterval(hideShorts, 1000); 
