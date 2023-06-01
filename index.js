const membersContainer = [...document.querySelectorAll(".members__members-info")];
const nextButton = [...document.querySelectorAll(".right")];
const previousButton = [...document.querySelectorAll(".left")];

membersContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextButton[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })

    previousButton[i].addEventListener("click", () => {
        if (item.scrollLeft > 0) {
          item.scrollLeft -= containerWidth;
        } else {
          item.scrollLeft = 0; // Scroll to the beginning
        }
      });

});