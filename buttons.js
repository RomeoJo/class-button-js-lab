let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
    if(popbutton.classList.contains("pop")){
        popbutton.classList.remove("pop")
    }else{
        popbutton.classList.add("pop")
    }
})

let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
    if(bigbutton.classList.contains("big")){
    bigbutton.classList.remove("big")
  }else{
    bigbutton.classList.add("big")
  }
})

let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
    if(fancybutton.classList.contains("fancy")){
    fancybutton.classList.remove("fancy")
  }else{
    fancybutton.classList.add("fancy")
  }
})

let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
    if(negativebutton.classList.contains("negative")){
    negativebutton.classList.remove("negative")
  }else{
    negativebutton.classList.add("negative")
  }
})

let mybutton = document.querySelector("#mybutton")

mybutton.addEventListener("click", e => {
    if(mybutton.classList.contains("wierd")){
    mybutton.classList.remove("wierd")
  }else{
    mybutton.classList.add("wierd")
  }
})



