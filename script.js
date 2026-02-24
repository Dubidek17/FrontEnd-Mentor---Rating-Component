let submitButton = document.getElementById("submitButton");
let thankyouPage = document.getElementById("thankyouPage");
let ratingPage = document.getElementById("ratingPage");
let ratingButtons = document.getElementsByClassName("ratingButton");
let ratingDisplay = document.getElementById("ratingDisplay");
let rating = 0;

ratingButtons = [...ratingButtons]
ratingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        ratingButtons.forEach(function (button) {
            button.classList.remove("selectedRatingButton");
            button.classList.add("unclickedButton");
        })
        button.classList.add("selectedRatingButton");
        button.classList.remove("unclickedButton");
        rating = button.textContent;
    })
});

submitButton.addEventListener("click", function () {
    if (rating > 0) {
        thankyouPage.classList.remove("hidden");
        ratingPage.classList.add("hidden");
        ratingDisplay.innerHTML = `You selected ${rating} out of 5`;
    }
})