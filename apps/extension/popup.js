const container = document.getElementById("popup-container"); 

const hideShortsHome = document.getElementById("hide-shorts-homepage"); 
const hideShortsSearch = document.getElementById("hide-shorts-search");
const hideRecommendations = document.getElementById("hide-recommendations");

const defaultSettings = {
    hideHomePageShorts: true,
    hideSearchPageShorts: true,
    hideRecommended: true
}

// Klick på checkbox ska spara i chrome.storage! 

async function loadSettings() {
    const settings = await chrome.storage.local.get(defaultSettings); 
    return settings; 
}

// Sparar till chrome-storage
async function saveSettings(key, value) {
    await chrome.storage.local.set({
        [key]: value
    }); 
}

// Shorts på home-page
hideShortsHome.addEventListener("change", () => {
    const isChecked = hideShortsHome.checked; 
    
    saveSettings("hideHomePageShorts", isChecked); 
    console.log(isChecked); 
}); 

// Shorts vid search-page
hideShortsSearch.addEventListener("change", () => {
    const isChecked = hideShortsSearch.checked;

    saveSettings("hideSearchPageShorts", isChecked); 

    console.log(isChecked); 
});

// All recommended videos i video-page. 
hideRecommendations.addEventListener("change", () => {
    const isChecked = hideRecommendations.checked;

    saveSettings("hideRecommended", isChecked); 

    console.log(isChecked); 
}); 

async function initializePopup() {
    const settings = await loadSettings(); 

    hideShortsHome.checked = settings.hideHomePageShorts;
    hideShortsSearch.checked = settings.hideSearchPageShorts; 
    hideRecommendations.checked = settings.hideRecommended; 
}

initializePopup(); 