const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const closeTag = document.getElementById("close")
const popupTag = document.getElementById("popup")
const popupSmallTag = document.getElementById("popup-small")

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance
  progressTag.style.width = `${100 * percentage}%`
})

closeTag.addEventListener("click", function () {
  popupTag.style.display = "none";
  popupSmallTag.style.display = "block";
})

popupSmallTag.addEventListener("click", function () {
  popupTag.style.display = "block";
  popupSmallTag.style.display = "none";
})