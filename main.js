//querySelector variables
var newTitle = document.querySelector("#titleInput")
var newBody = document.querySelector("#bodyInput")
var saveIdeaButton = document.querySelector("#saveButton")
var showStarredIdeasButton = document.querySelector("#showStarredIdeasButton")
var cardBox = document.querySelector(".user-idea-box")
var cardBoxDelete = document.querySelector(".bottom-section")



//eventListeners
newTitle.addEventListener("input", function(){
    hideSaveButton()
    showSaveButton()
    })
    
newBody.addEventListener("input",function(){
    hideSaveButton()
    showSaveButton()
    }) 

saveIdeaButton.addEventListener("click", function(event) {
    event.preventDefault()
    saveIdeas()
    makeUserIdeaCard()
})
// *cardBoxSave.addEventListener("click", somefunctionSave) //might need to change name for star button
cardBoxDelete.addEventListener("click", deleteUserCard) 

// // showStarredIdeasButton.addEventListener("click", somefunction)
var ideas = []
// // userIdeaBox.classList.toggle('hidden') this will un-hidden

function saveIdeas(){
    var newIdea = new Idea(newTitle.value, newBody.value)
    ideas.push(newIdea)
    resetForm()
    saveIdeaButton.style.opacity = "0.1"
}

function resetForm(){
    newTitle.value = ""
    newBody.value = ""
}

function showSaveButton() {
    if(newTitle.value != "" && newBody.value != ""){
    saveIdeaButton.style.opacity = "1"
    saveIdeaButton.style.cursor = "pointer" 
    }
}

function hideSaveButton() {
    if(newTitle.value === "" || newBody.value === ""){
    saveIdeaButton.style.opacity = "0.1"
    }
}
//this two fuctions above can be combine into one function just make an if /else{}

function makeUserIdeaCard() {
    cardBox.classList.remove('hidden');
    console.log('im the make user thing')
    cardBox.innerHTML = "";
    for (var i = 0; i < ideas.length; i++) {
        cardBox.innerHTML += 
    `<div class="user-idea-box" id="${ideas[i].id}">
                <div id="miniboxTop">
                    <button class="star-button" id="starButton"></button>
                    <button class="x-button" id="xButton"></button>
                </div>
                <div id="miniboxInner">
                    <h2 class="idea-title" id="ideaTitle">${ideas[i].title}</h2>
                    <p class="idea-body" id="ideaBody">${ideas[i].body}</p>
                </div>
                <div class="user-idea-box" id="miniboxFooter">
                </div>
            </div>`
    }
}

function deleteUserCard(){
    for(var i = 0; i< ideas.length; i++){
        if(event.target.closest(".user-idea-box").id == ideas[i].id){
        ideas.splice(i,1)
        event.target.closest(".user-idea-box").remove()
        }
    }
}


