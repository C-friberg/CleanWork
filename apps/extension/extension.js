console.log("Extension running");


const settings = {
    hideHomePageShorts: true,
    hideRecommended: true,
    hideSearchPageShorts: true
};

function toggleHomePageShorts() {
    settings.hideHomePageShorts = !settings.hideHomePageShorts;
    applyFocusMode();
}

function toggleSearchPageShorts() {
    settings.hideSearchPageShorts = !settings.hideSearchPageShorts;
    applyFocusMode();
}

function toggleRecommended() {
    settings.hideRecommended = !settings.hideRecommended;
    applyFocusMode();
}

function hideHomepageShorts() {
    const shortsLinks = document.querySelectorAll('a[href^="/shorts/"]');

    shortsLinks.forEach((link) => {
        const shelf = link.closest("ytd-rich-shelf-renderer");

        if (shelf) {
            shelf.style.display = "none";
        }
    });

    hideShortsButton();
}

function hideSearchPageShorts() {
    const shortsLinks = document.querySelectorAll('a[href^="/shorts/"]');

    shortsLinks.forEach((link) => {
        const row = link.closest(".ytGridShelfViewModelGridShelfRow");

        if (row) {
            row.style.display = "none";
        }
    });

    hideShortsButton();
}

function hideShortsButton() {
    const shortsButton = document.querySelector('a[title="Shorts"]');

    if (shortsButton) {
        shortsButton.style.display = "none";
    }
}

function hideRecommended() {
    const recommended = document.getElementById("secondary");

    if (recommended) {
        recommended.style.display = "none";
    }
}

function showRecommendations() {
    const recommended = document.getElementById("secondary");

    if (recommended) {
        recommended.style.display = "";
    }
}

function applyFocusMode() {
    if (settings.hideHomePageShorts) {
        hideHomepageShorts();
    }

    if (settings.hideSearchPageShorts) {
        hideSearchPageShorts();
    }

    if (settings.hideRecommended) {
        hideRecommended();
    } else {
        showRecommendations();
    }
}

applyFocusMode();

const observer = new MutationObserver(() => {
    applyFocusMode();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});


/* shorts in search mode: ytSectionHeaderViewModelHost */
/* shorts div: ytGridShelfViewModelGridShelfRow ytd-item-section-renderer */


/* 
MutationObserver istället för setInterval
chrome.storage
popup UI
background scripts
messaging
TypeScript
build tools 
*/

