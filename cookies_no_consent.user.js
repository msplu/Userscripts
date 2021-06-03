// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.9
// @description 03/06/2021 à 10:07:00
// ==/UserScript==

function removeElement() {
  for (let i = document.documentElement.classList.length - 1; i >= 0; i--) {
      const className = document.documentElement.classList[i];
      if (className.startsWith('sd-cmp')) {
          document.documentElement.classList.remove(className);
      }
  }
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
