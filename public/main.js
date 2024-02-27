"use strict";
const shareBtn = document.querySelector('#icon-share');
const shareBtnActive = document.querySelector('#icon-share-active');
const socialMediaDesktop = document.querySelector('#share-desktop');
const socialMediaMobile = document.querySelector('#share-mobile');
shareBtn.addEventListener('click', () => {
    socialMediaDesktop.classList.toggle('active');
    socialMediaMobile.classList.toggle('active');
});
shareBtnActive.addEventListener('click', () => {
    socialMediaMobile.classList.toggle('active');
});
