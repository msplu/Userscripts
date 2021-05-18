// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/mswebmaster/cookies-no-consent/main/cookies_no_consent.js
// @downloadURL https://raw.githubusercontent.com/mswebmaster/cookies-no-consent/main/cookies_no_consent.js
// ==/UserScript==

function removeModal() {
  document.body.classList.remove('didomi-popup-open');
  document.getElementById('didomi-host').remove();
}

const removeModalTimer = setTimeout(removeModal, 1500);
