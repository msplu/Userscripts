// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @version     1.12
// @description 15/06/2021 à 08:24:00
// ==/UserScript==

function removeElements() {
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
    'onetrust-consent-sdk',
    'klaro'
  ];
  
  const classes = [
    'wt-cli-cookie-bar-container'
  ];
  
  ids.forEach(id => document.getElementById(id) !== null && document.getElementById(id).remove());
  classes.forEach(className => Array.from(document.getElementsByClassName(className)).forEach(el => el.remove()));
}

const removeElementsTimer = setTimeout(removeElements, 1000);
