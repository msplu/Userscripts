// ==UserScript==
// @name        Login password paste - paytweak.com
// @namespace   Violentmonkey Scripts
// @match       https://*paytweak.com/login
// @grant       none
// @version     1.0
// @author      -
// @description 08/04/2021 à 14:32:03
// ==/UserScript==
const inputPassword = document.querySelector('form[name="login"] input[type="password"]');
inputPassword.removeAttribute('onpaste');
inputPassword.removeAttribute('oncopy');
inputPassword.removeAttribute('oncut');
