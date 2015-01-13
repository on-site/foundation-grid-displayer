javascript:
(function() {
  var head = document.getElementsByTagName("head")[0];
  var bklScript = document.createElement("script");
  bklScript.type = "text/javascript";
  bklScript.src = "https://raw.githubusercontent.com/on-site/foundation-grid-displayer/gh-pages/gd-bookmarklet.js";
  head.appendChild(bklScript);
})();