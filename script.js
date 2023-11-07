const tugas = document.querySelector("#tugasKe1")
const tugas2 = document.querySelector("#tugasKe2")
let btns = tugas.querySelectorAll("span")

const nav1 = document.querySelector(".nav1")
const nav2 = document.querySelector(".nav2")

const p = document.querySelectorAll("p")

nav1.addEventListener("click", (e)=>{
  e.preventDefault()
  tugasKe1.classList.remove("hide")
  tugasKe2.classList.add("hide")
})

nav2.addEventListener("click", (e)=>{
  e.preventDefault()
  tugasKe2.classList.remove("hide")
  tugasKe1.classList.add("hide")
})

btns.forEach(span => {
  span.addEventListener("click", ()=>{
    span.classList.toggle("active")
  })
})

p.forEach((item) =>{
  item.addEventListener("click", ()=>{
    item.querySelector("i").classList.toggle("on")
      let query = item.parentElement
      groupOn(query)
  })
})

const groupOn = (data) =>{
  const spans = data.querySelectorAll("span")
  spans.forEach((span =>{
    span.classList.toggle("active")
  }))
}

const groupFunction = (id) =>{
  const group = document.querySelector(id)
  const gSpan = group.querySelectorAll("span")
  gSpan.forEach((span =>{
    span.addEventListener("click", ()=>{
      span.classList.toggle("active")
      saklar(span.classList)
    })
  }))
}

const saklar = (data)=>{
  data.forEach(()=>{
    console.log(data.contains("active"))
  })
}

groupFunction("#keluarga")
groupFunction("#makan")
groupFunction("#tidur")
groupFunction("#tamu")
