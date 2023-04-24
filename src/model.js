import {TitleBlock, TextBlock, ColumnBlock, CategoryBlock} from './classes/block'
import {getCategories} from './classes/utils'
import img from './assets/logo-no-background.png'
//data
export let easy = document.createElement('button')
easy.className = "btn btn-success dif"
easy.innerText = "Easy"
easy.type = "button"
easy.value = "Easy"


export let medium = document.createElement('button')
medium.className = "btn btn-warning dif"
medium.innerText = "Medium"
medium.type = "button"
medium.value = "Medium"

export let hard = document.createElement('button')
hard.className = "btn btn-danger dif"
hard.innerText = "Hard"
hard.type = "button"
hard.value = "Hard"


export let model = [
    new TitleBlock(`<img src="${img}" width="350" height="200"/>`),

]

//Add difficulty buttons
export const loadModel = () => {
    return new Promise((resolve, reject) => {
      try {
        getCategories().then(() => {
          model.push(new TextBlock("<h3>Please choose a difficulty level:</h3>"))
          model.push(new ColumnBlock([easy, medium, hard]))
          resolve()
        })
        
      } catch (error) {
        reject(error)
      }
    })
  }

  

 