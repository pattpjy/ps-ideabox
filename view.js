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

// move related dom manipulation methods and use parameters so controller can pass value

function resetForm() {
  pom.newTitle.value = "";
  pom.newBody.value = "";
  pom.saveIdeaButton.disabled = true;
  pom.saveIdeaButton.style.opacity = "0.1";
}

function showSaveButton() {
  if (pom.newTitle.value != "" && pom.newBody.value != "") {
    pom.saveIdeaButton.style.opacity = "1";
    pom.saveIdeaButton.style.cursor = "pointer";
    pom.saveIdeaButton.disabled = false;
  }
}

function hideSaveButton() {
  if (pom.newTitle.value === "" || pom.newBody.value === "") {
    pom.saveIdeaButton.style.opacity = "0.1";
    pom.saveIdeaButton.style.cursor = "default";
    pom.saveIdeaButton.disabled = true;
  }
}
function makeUserIdeaCard() {
  pom.cardBox.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    pom.cardBox.innerHTML += `<div class="user-idea-box" id="${ideas[i].id}">
                <div id="miniboxTop">
                    <button class="star-button" id="starButtonInactive"></button>
                    <button class="x-button" id="xButton"></button>
                </div>
                <div id="miniboxInner">
                    <h2 class="idea-title" id="ideaTitle">${ideas[i].title}</h2>
                    <p class="idea-body" id="ideaBody">${ideas[i].body}</p>
                </div>
                <div id="miniboxFooter">
                </div>
            </div>`;
  }
}
function deleteUserCard(event) {
  if (event.target.id === "xButton") {
    for (var i = 0; i < ideas.length; i++) {
      if (
        event.target.closest(".user-idea-box").id === ideas[i].id.toString()
      ) {
        ideas.splice(i, 1);
        event.target.closest(".user-idea-box").remove();
      }
    }
  }
}
function switchStar(event) {
  if (
    event.target.id === "starButtonInactive" ||
    event.target.id === "starButtonActive"
  ) {
    for (var i = 0; i < ideas.length; i++) {
      if (
        event.target.closest(".user-idea-box").id === ideas[i].id.toString()
      ) {
        if (event.target.id === "starButtonInactive") {
          event.target.id = "starButtonActive";
          ideas[i].star = true;
        } else {
          event.target.id = "starButtonInactive";
          ideas[i].star = false;
        }
      }
    }
  }
}
