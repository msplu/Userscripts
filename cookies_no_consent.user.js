// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.11
// @description 03/06/2021 à 14:40:00
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
  
  const ids = [
    'didomi-host',
    'didomiConsentOverlay',
    'cookiesEncourag',
    'sd-cmp',
    'qc-cmp2-container',
    'tarteaucitronRoot',
    'onetrust-consent-sdk'
  ];
  
  ids.forEach(id => document.getElementById(id) !== null && document.getElementById(id).remove());
}

const removeElementTimer = setTimeout(removeElement, 1000);
