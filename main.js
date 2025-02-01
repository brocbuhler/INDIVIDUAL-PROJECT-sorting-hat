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
    house: "Slytherin"}
  ]
//
//basic rendering of object
  const render = (IdEl, renderItem) => {
    const hogwartsStudents = document.querySelector(IdEl);
    hogwartsStudents.innerHTML = renderItem;
  };

  const studentHouses = (a) => {
    let profile = ""
    for (let i = 0; i < a.length; i++) {
      profile += `<div class="profile-el">
      <h1 class="name-el">${a[i].name}</h1>
      <h3 class="house-el">${a[i].house}</h3>
      </div>`
    }
    render("#wizards", profile)
  }
//

//new item rendering
  const studentForm = document.querySelector("form")
  studentForm.addEventListener("submit", newStudent)
  function newStudent(a) {
    a.preventDefault()
    let clans = ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"]
    let randomHouse = clans[Math.floor(Math.random() * 4)]
    let firstYear = {
      id: students.length + 1,
      name: document.querySelector("#student-field").value,
      house: randomHouse
    }
    students.push(firstYear)
    studentHouses(students)
    form.reset()
    consoleTest()
  }
//

//filter buttons
  const viewAll = document.querySelector("#view-all")
  viewAll.addEventListener("click", () => studentHouses(students))
  const Gryffindor = document.querySelector("#Gryffindor")
  Gryffindor.addEventListener("click", () => houseFilter("Gryffindor"))
  const Hufflepuff = document.querySelector("#Hufflepuff")
  Hufflepuff.addEventListener("click", () => houseFilter("Hufflepuff"))
  const Ravenclaw = document.querySelector("#Ravenclaw")
  Ravenclaw.addEventListener("click", () => houseFilter("Ravenclaw"))
  const Slytherin = document.querySelector("#Slytherin")
  Slytherin.addEventListener("click", () => houseFilter("Slytherin"))
//

//filter button function
const houseFilter = (houses) => {
  const cardfilter = students.filter(value => value.house === houses)
  studentHouses(cardfilter)
}
//
  studentHouses(students)
}
startApp()
