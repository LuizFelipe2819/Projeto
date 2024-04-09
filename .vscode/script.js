function toggleMode(params) {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a imagem
  const img = document.querySelector("#profile img")
  // substituitr a imagem
  if (html.classList.contains("light")) {
    //se esiver no light mode mude
    img.setAttribute("src", "./avatar-light.png")
    img.setAttribute("alt", "o omi 2")
  } else {
    //se estiver no dark mode mantenha
    img.setAttribute("src", "./Avatar.png")
    img.setAttribute("alt", "o omi")
  }
}

//if (html.classList.contains("light")) {
// html.classList.remove("light")
// } else html.classList.add("light")
