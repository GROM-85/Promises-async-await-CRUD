// const actions = document.querySelectorAll("[data-action]")
// const counterValue = document.querySelector(".counter-value")

// let counter = localStorage.getItem("COUNTER_KEY") || 0
// counterValue.textContent = counter;

// actions.forEach(action => {
//   action.addEventListener("click", ()=>{
//     const action_name = action.dataset.action

//     switch (action_name){
//       case "decrease":
//         counter--
//         localStorage.setItem("COUNTER_KEY", JSON.stringify(counter))
//         break;
      
//       case "increase":
//         counter++
//         localStorage.setItem("COUNTER_KEY", JSON.stringify(counter))
//         break;
      
//       case "reset":
//         counter = 0
//         localStorage.removeItem("COUNTER_KEY")
//         break
//     }

//     counterValue.textContent = counter;
//   })
// })

const actions = document.querySelector(".counter-controls");
const counterValue = document.querySelector(".counter-value");

class Counter{
  #COUNT;

  constructor({selectorValue,selectorControl} = {}){
    this.selectorValue = selectorValue;
    this.selectorControl = selectorControl; 
    this.count = 0;
    this.#COUNT = "count";

    this.selectorControl.addEventListener("click",this.pollActions.bind(this));
    
  }
  increase(){
    this.count++;
  }

  decrease(){
    this.count--;
  }
  reset(){
    this.count = 0;
  }

  updateUI(){
    this.selectorValue.textContent = this.count;
  }
  writeToStorage(){
    localStorage.setItem(this.#COUNT,this.count);
  }

  readFromStorage(){
    return localStorage.getItem(this.#COUNT) || 0;
  }
  pollActions({target}){
    console.log(target)
    if(target.dataset.action === "increase"){
      this.increase();
    }
    else if(target.dataset.action === "decrease"){
        this.decrease();
      }
      else{
        this.reset();
        this.updateUI();
        localStorage.removeItem(this.#COUNT);
        return;
      }
      this.writeToStorage()
      this.updateUI();
    }
}


let counter = new Counter({
  selectorValue:counterValue,
  selectorControl:actions,
});