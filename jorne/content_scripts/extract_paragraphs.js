function findTitle() {
    return document.title;
}

function findParagraphs() {
    let result = [];

    // WARNING: HIGHLY ADVANCED ALGORITHM
    for (let p of document.getElementsByTagName("p")) {
        let text = p.textContent.trim();

        if (text != "")
            result.push(p.textContent);
    }

    return result;
}

function sendParagraphs(request, sender, sendResponse) {
    return Promise.resolve({title: findTitle(), paragraphs: findParagraphs()});
}

browser.runtime.onMessage.addListener(sendParagraphs);
