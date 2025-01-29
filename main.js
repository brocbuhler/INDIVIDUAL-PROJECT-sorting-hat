const consoleTest = (e) => {
  console.log("Works!")
}
//focus on MVP
//everything will be in a startApp function/ scope
const startApp = (e) => {
//database
  const students = [
    {id: 1,
    name: "Broc",
    house: "Ravenclaw"},
    {id:2,
    name: "Carlyn",
    house: "Hufflepuff"},
    {id:3,
    name: "Barnabas",
    hosue: "Slytherin"}
  ]
//
//basic rendering of object
  const render = (IdEl, renderItem) => {
    const hogwartsStudents = document.querySelector(IdEl);
    hogwartsStudents.innerHTML = renderItem;
  };

  const studentHouses = (a) => {
    let profile = ""
    for (let i = 0; i < students.length; i++) {
      profile += `<div class="profile-el">
      <h1 class="name-el">${students[i].name}</h1>
      <h3 class="house-el">${students[i].house}</h3>
      </div>`
    }
    render("#wizards", profile)
  }
//
  studentHouses()
}
startApp()
