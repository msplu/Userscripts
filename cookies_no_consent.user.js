// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.6
// @description 18/05/2021 à 17:40:00
// ==/UserScript==

function removeModal() {
  document.body.classList.remove('didomi-popup-open');
  document.body.style.overflow = 'initial';
  document.getElementById('didomi-host').remove();
  document.getElementById('didomiConsentOverlay').remove();
  document.getElementById('cookiesEncourag').remove();
}

const removeModalTimer = setTimeout(removeModal, 1500);
