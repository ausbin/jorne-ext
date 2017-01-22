function sendParagraphs(request, sender, sendResponse) {
    return Promise.resolve({title: "a dope title", paragraphs: ["foo", "bar", "baz"]});
}

browser.runtime.onMessage.addListener(sendParagraphs);
