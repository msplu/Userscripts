// ==UserScript==
// @name        Login password paste - paytweak.com
// @match       https://*paytweak.com/login
// @grant       none
// @version     1.2
// @description 18/05/2021 à 11:26:00
// ==/UserScript==

const inputPassword = document.querySelector('form[name="login"] input[type="password"]');
inputPassword.removeAttribute('onpaste');
inputPassword.removeAttribute('oncopy');
inputPassword.removeAttribute('oncut');
