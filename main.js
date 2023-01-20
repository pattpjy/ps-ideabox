let ideas = [];

function saveIdeas() {
  const newIdea = new Idea(pom.newTitle.value, pom.newBody.value);
  ideas.push(newIdea);
  makeUserIdeaCard(newIdea);
  // controller invoke view method, give it a value and view update the dom
  resetForm();
}
