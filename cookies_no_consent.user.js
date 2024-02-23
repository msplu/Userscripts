// ==UserScript==
// @name        Cookies No Consent
// @match       *://*/*
// @grant       none
// @run-at      document-start
// @version     1.22
// @description 23/02/2024 à 13:57:00
// ==/UserScript==

function removeElements() {
  for (let i = document.documentElement.classList.length - 1; i >= 0; i--) {
      const className = document.documentElement.classList[i];
      if (className.startsWith('sd-cmp')) {
          document.documentElement.classList.remove(className);
      }
  }
  if (document.body) {
    document.body.style.overflow = 'initial';
  }

  const htmlClasses = [
    'popin-gdpr-no-scroll',
    'i-amphtml-scroll-disabled',
  ];
  
  const bodyClasses = [
    'didomi-popup-open',
    'appconsent_noscroll',
  ];
  
  const ids = [
    'didomi-host',
    'didomiConsentOverlay',
    'cookiesEncourag',
    'sd-cmp',
    'qc-cmp2-container',
    'tarteaucitronRoot',
    'onetrust-consent-sdk',
    'sp-cc',
    'footer_tc_privacy',
    'cookie-notice',
    'privacy_modal',
    'axeptio_overlay',
    'klaro',
    'cookies-consent',
    'appconsent',
    'CybotCookiebotDialogBodyUnderlay',
    'CybotCookiebotDialog',
    'cc-banner-wrap',
    'ez-cookie-dialog-wrapper',
    'tc-privacy-wrapper',
    'privacy-overlay',
  ];
  
  const classes = [
    'wt-cli-cookie-bar-container',
    'js-consent-banner',
    'truste_cm_outerdiv',
    'truste_overlay',
    'privacy-consent--backdrop',
    'privacy-consent--modal',
    'gdpr-hfp-wall',
    'i-amphtml-consent-ui-modal',
    'i-amphtml-consent-ui-mask',
  ];

  htmlClasses.forEach(className => document.documentElement.classList?.remove(className));
  ids.forEach(id => document.getElementById(id) !== null && document.getElementById(id).remove());
  bodyClasses.forEach(className => document.body?.classList?.remove(className));
  classes.forEach(className => Array.from(document.getElementsByClassName(className)).forEach(el => el.remove()));
}

const removeElementsInterval = setInterval(removeElements, 200);

setTimeout(() => { clearInterval(removeElementsInterval); }, 2000);
setTimeout(removeElements, 4000);
setTimeout(removeElements, 10000);
