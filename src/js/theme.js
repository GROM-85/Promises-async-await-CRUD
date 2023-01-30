const themeSwitch = document.querySelector("#theme-switch")
const THEME_KEY = "theme";

function changeTheme(event){
  const isChecked = event.currentTarget.checked;

  if(isChecked){
    document.body.classList.add("dark")
    document.body.classList.remove("light");
    localStorage.setItem(THEME_KEY, "dark")
  } else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem(THEME_KEY, "light")
  }
}

function getCurrentTheme(){
  const currentTheme = localStorage.getItem(THEME_KEY) || "light"
  document.body.className = currentTheme
  
  if(currentTheme === "dark"){
    themeSwitch.checked = true
  }
}

window.addEventListener("load", getCurrentTheme)
themeSwitch.addEventListener("change", changeTheme)