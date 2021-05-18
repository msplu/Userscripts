// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.3
// @description 18/05/2021 à 11:34:00
// ==/UserScript==

function removeModal() {
  document.body.classList.remove('didomi-popup-open');
  document.getElementById('didomi-host').remove();
}

const removeModalTimer = setTimeout(removeModal, 1000);
