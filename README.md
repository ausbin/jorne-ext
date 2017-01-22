This is the browser extension component of [Jorne][1], an incremental reading
tool.

It aims to support Chrome and Firefox using the [WebExtensions][2] API.

Installation
------------

First, get [the webextension-polyfill library][3] with:

    $ git submodule init --update

Next, install its dependencies and build it:

    $ cd webextension-polyfill
    $ npm install
    $ grunt

Then, in the browser of your choice (I've tested Chrome and Firefox), add the
extension. In Firefox, go to `about:debugging`, click "Load Temporary Add-on,"
and browse to `jorne/manifest.json`. In Chrome, go  to `chrome://extensions/`,
check "Developer Mode," click "Load unpacked extension...", and browse to the
extension root directory, `jorne/`.

[1]: https://github.com/suzil/jorne
[2]: https://developer.mozilla.org/en-US/Add-ons/WebExtensions
[3]: https://github.com/mozilla/webextension-polyfill
