// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.2
// @description 18/05/2021 à 11:24:00
// @updateURL   https://raw.githubusercontent.com/mswebmaster/cookies-no-consent/main/cookies_no_consent.js
// @downloadURL https://raw.githubusercontent.com/mswebmaster/cookies-no-consent/main/cookies_no_consent.js
// ==/UserScript==

function removeModal() {
  document.body.classList.remove('didomi-popup-open');
  document.getElementById('didomi-host').remove();
}

const removeModalTimer = setTimeout(removeModal, 1200);
