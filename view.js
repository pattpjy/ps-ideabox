//this file will have dom manipulation methods

// POM page object model - each  object corresponding to each screen

const pom = {
  newTitle: document.querySelector("#titleInput"),
  newBody: document.querySelector("#bodyInput"),
  saveIdeaButton: document.querySelector("#saveButton"),
  cardBox: document.querySelector(".bottom-section"),
  cardBoxDelete: document.querySelector(".bottom-section"),
};

pom.newTitle.addEventListener("input", function () {
  hideSaveButton();
  showSaveButton();
});

pom.newBody.addEventListener("input", function () {
  hideSaveButton();
  showSaveButton();
});

pom.saveIdeaButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveIdeas();
  makeUserIdeaCard();
});

pom.cardBoxDelete.addEventListener("click", function (event) {
  deleteUserCard(event);
  switchStar(event);
});
