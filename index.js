const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const closeTag = document.getElementById("close")
const popupTag = document.getElementById("popup")
const popupSmallTag = document.getElementById("popup-small")
const scrollTag = document.getElementById("scroll")
const backToTopTag = document.getElementById("back-to-top");

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

const toggleTag = function () {
  const pixels = window.pageYOffset;

  if (pixels > 50) {
    backToTopTag.style.display = "block";
    scrollTag.style.display = "none";
  } else {
    backToTopTag.style.display = "none";
    scrollTag.style.display = "block";
  }
};

document.addEventListener("scroll", function () {
  toggleTag();
});

const addEmoji = function () {
  const emojiTag = document.createElement("div");
  document.body.appendChild(emojiTag);
  emojiTag.innerHTML = "🧘";
  emojiTag.classList.add("emoji-tag")

  let interval = null;

  const startInterval = function () {
    clearInterval(interval);
    interval = setInterval(function () {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      console.log(x, y)

      emojiTag.style.top = `${x}%`;
      emojiTag.style.left = `${y}%`;
    }, 2000);
  };

  startInterval();

}

interval = setInterval(function () {
  addEmoji();
}, 2000)



  // document.addEventListener("mousemove", function (event) {
  //   startInterval();
  // });