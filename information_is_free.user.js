// ==UserScript==
// @name        Information is free
// @match       https://www.leparisien.fr/*
// @grant       none
// @version     1.0
// @description 18/05/2021 à 17:30:00
// ==/UserScript==

function removeModalAndBlurs() {
    document.getElementsByClassName('piano-paywall')[0].remove();
    document.getElementsByClassName('article-section')[0].childNodes.forEach(function (blur) {
        blur.classList.remove('blurText');
    });
}

const removeModalAndBlur = setTimeout(removeModalAndBlurs, 1000);