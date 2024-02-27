const shareBtn = document.querySelector('#icon-share') as HTMLButtonElement
const shareBtnActive = document.querySelector('#icon-share-active') as HTMLButtonElement
const socialMediaDesktop = document.querySelector('#share-desktop') as HTMLDivElement
const socialMediaMobile = document.querySelector('#share-mobile') as HTMLDivElement

shareBtn.addEventListener('click', () => {
  socialMediaDesktop.classList.toggle('active')
  socialMediaMobile.classList.toggle('active')
})

shareBtnActive.addEventListener('click', () => {
  socialMediaMobile.classList.toggle('active')
})