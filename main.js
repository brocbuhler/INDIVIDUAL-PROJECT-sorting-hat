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
    house: "images/Ravenclaw.jpg"},
    {id:2,
    name: "Carlyn",
    house: "images/Hufflepuff.jpg"},
    {id:3,
    name: "Barnabas",
    house: "images/Slytherin.jpg"}
  ]
  let darkArmy = [
    {id: students.length,
    name: "Tyler",
    house: "images/Slytherin.jpg"
    }
  ]
//
//base website rendering
  const allStudents = document.querySelector("#AllStudents")
  allStudents.innerHTML = `<h3 class="subtitle-2">First Years</h3>
  <div class = "school" id="wizards"></div>
  <h3 class="subtitle-2">Dark Lord's Army</h3>
  <div class = "school" id="dark-wizards"></div>`
//
//basic rendering of object
  const render = (IdEl, renderItem) => {
    const hogwartsStudents = document.querySelector(IdEl);
    hogwartsStudents.innerHTML = renderItem;
  };

  const studentHouses = (a, b) => {
    let profile = ""
    if (a === darkArmy) {
      for (let i = 0; i < a.length; i++) {
        const edgeLord = ["images/volde1.jpg", "images/volde2.webp", "images/volde3.jpg", "images/volde4.jpg", "images/volde5.jpg", "images/volde6.jpg"]
        const darkTitles = ["the flatulent", "the mean muggler", "the stain", "the evil darkness", "the flatnose", "the edgy"]
        let randomeDarktitles = darkTitles[Math.floor(Math.random() * 6)]
        let randomEdgeLord = edgeLord[Math.floor(Math.random() * 6)]
        a[i].house = randomEdgeLord
        profile += `<div class="darkprofile-el">
        <p class="darkname-el">${a[i].name} ${randomeDarktitles}</p>
        <img class="house-el" src="${a[i].house}">
        </div>`
      }
    } else {
      for (let i = 0; i < a.length; i++) {
        profile += `<div class="profile-el">
        <p class="name-el">${a[i].name}</p>
        <img class="house-el" src="${a[i].house}">
        <button class="expel-el" id="expel--${a[i].id}">Expel</button>
        </div>`
      }
    }
  render(b, profile)
  }
//

//new item rendering
  const studentForm = document.querySelector("form")
  studentForm.addEventListener("submit", newStudent)
  function newStudent(a) {
    a.preventDefault()
    let clans = ["images/Ravenclaw.jpg", "images/Gryfindor.jpg", "images/Slytherin.jpg", "images/Hufflepuff.jpg"]
    let randomHouse = clans[Math.floor(Math.random() * 4)]
    let firstYear = {
      id: students.length + 1,
      name: document.querySelector("#student-field").value,
      house: randomHouse
    }
    students.push(firstYear)
    studentHouses(students, "#wizards")
    form.reset()
    consoleTest()
  }
//

//filter buttons
  const viewAll = document.querySelector("#view-all")
  viewAll.addEventListener("click", () => studentHouses(darkArmy, "#dark-wizards"))
  viewAll.addEventListener("click", () => studentHouses(students, "#wizards"))
  const Gryffindor = document.querySelector("#Gryffindor")
  Gryffindor.addEventListener("click", () => houseFilter("images/Gryfindor.jpg"))
  const Hufflepuff = document.querySelector("#Hufflepuff")
  Hufflepuff.addEventListener("click", () => houseFilter("images/Hufflepuff.jpg"))
  const Ravenclaw = document.querySelector("#Ravenclaw")
  Ravenclaw.addEventListener("click", () => houseFilter("images/Ravenclaw.jpg"))
  const Slytherin = document.querySelector("#Slytherin")
  Slytherin.addEventListener("click", () => houseFilter("images/Slytherin.jpg"))
//

//filter button function
  const houseFilter = (houses) => {
    const cardfilter = students.filter(value => value.house === houses)
    studentHouses(cardfilter, "#wizards")
  }
//

//Expelling students
  const ExpelBtn = document.querySelector("#wizards")
  ExpelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.id.includes("expel")) {
      const [, id] = e.target.id.split("--")
      const index = students.findIndex( e => e.id === Number(id))
      darkArmy.push(students.splice(index, 1)[0])
      studentHouses(darkArmy, "#dark-wizards")
      studentHouses(students, "#wizards")
    }
  })
//
}
startApp()
