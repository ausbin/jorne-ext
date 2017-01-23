var title = document.getElementById("title");
var paragraphs = document.getElementById("paragraphs");

// Clear out stale values
title.value = "";
paragraphs.innerHTML = "";

browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
    let activeTabId = tabs[0].id;

    browser.tabs.executeScript(activeTabId, {
        file: "/browser-polyfill.js"
    });
    browser.tabs.executeScript(activeTabId, {
        file: "/content_scripts/extract_paragraphs.js"
    });

    browser.tabs.sendMessage(activeTabId, {}).then(resp => {
        title.value = resp.title;

        for (let paragraph of resp.paragraphs) {
            let p = document.createElement("li");
            p.textContent = paragraph;
            paragraphs.appendChild(p);
        }
    });
});
