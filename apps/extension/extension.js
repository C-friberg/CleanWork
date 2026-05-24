// Ett script som tar bort shorts från youtube.
console.log("Extension running"); 

const settings = {
    hideShorts: true,
    hideRecommended: true
}; 

function toggleShorts() {
    // Om shorts är syns, ta bort dom.
    // Om shorts inte syns, visa dom
    settings.hideShorts = !settings.hideShorts; 
};

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
};

function hideRecommended() {

    const recommended = document.getElementById("secondary"); 

    if (recommended) 
        recommended.style.display = "none"; 

}

function showRecommendations(){
    const recommended = document.getElementById("secondary"); 

    if(recommended)
        recommended.style.display = ""; 
}

function applyFocusMode() {
    if(settings.hideShorts){
        hideShorts();
    }
    if(settings.hideRecommended) {
        hideRecommended(); 
    }
} 

function toggleRecommended() {
    settings.hideRecommended = !settings.hideRecommended; 
}

applyFocusMode(); 

 
const observer = new MutationObserver(() => {
    applyFocusMode(); 
});

observer.observe(document.body, {
    childList: true,
    subtree: true
}); 

/* 
MutationObserver istället för setInterval
chrome.storage
popup UI
background scripts
messaging
TypeScript
build tools 
*/

