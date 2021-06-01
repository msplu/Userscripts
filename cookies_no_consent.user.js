// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.8
// @description 01/06/2021 à 15:50:00
// ==/UserScript==

function removeElement() {
  document.body.classList.remove('didomi-popup-open');
  document.body.style.overflow = 'initial';
  
  const didomiHost = document.getElementById('didomi-host');
  if (didomiHost) {
    didomiHost.remove();
  }
  
  const didomiConsentOverlay = document.getElementById('didomiConsentOverlay');
  if (didomiConsentOverlay) {
    didomiConsentOverlay.remove();
  }
  
  const cookiesEncourag = document.getElementById('cookiesEncourag');
  if (cookiesEncourag) {
    cookiesEncourag.remove();
  }

  const consentFramework = document.getElementById('sd-cmp');
  if (consentFramework) {
    consentFramework.remove();
  }
}

const removeElementTimer = setTimeout(removeElement, 1000);
