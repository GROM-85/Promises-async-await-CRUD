const e=document.querySelector("#theme-switch"),t="theme";window.addEventListener("load",(function(){const d=localStorage.getItem(t)||"light";document.body.className=d,"dark"===d&&(e.checked=!0)})),e.addEventListener("change",(function(e){e.currentTarget.checked?(document.body.classList.add("dark"),document.body.classList.remove("light"),localStorage.setItem(t,"dark")):(document.body.classList.add("light"),document.body.classList.remove("dark"),localStorage.setItem(t,"light"))}));
//# sourceMappingURL=theme.fb3e5666.js.map