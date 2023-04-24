import {QuestionBlock, GameBlock, TextBlock, CategoryBlock} from './block'
import {model} from '../model.js'

export const row = (content) => `<div class="row">${content}</div>`

export const col = (content) => `<div class="col-sm">${content}</div>`

export const startGame = () =>{
    let dif = localStorage.getItem('difficulty').toLowerCase()
    let category = document.querySelector('#categoryButton').innerHTML
    localStorage.setItem('category', category)

    let catId = 0
    CategoryBlock.categories.forEach(cat => {
      if (cat['name'] === category) {
        catId = cat['id']
      }
    })
    //Initiate new game
    fetch(`https://opentdb.com/api.php?amount=10&category=${catId}&difficulty=${dif}&type=multiple`)
    .then(response => response.json())
    .then(result => arrangeQuestions(result))
    .catch(error => console.log('error', error));
}

//Arrange questions for new game
const arrangeQuestions = (result) => {
    let qblocks = []
    let questions = result.results
    questions.forEach(question => {
        let q = question['question']
        let a1 = question['incorrect_answers'][0]
        let a2 = question['incorrect_answers'][1]
        let a3 = question['incorrect_answers'][2]
        let ca = question['correct_answer']
        let qb = new QuestionBlock(q, a1, a2, a3, ca)
        qblocks.push(qb)
    })
    let title = model[0]
    model.length = 1
    let game = new GameBlock(qblocks, localStorage.getItem('difficulty'))
    model.push(game)
    render()

}

// render
const container = document.querySelector('#app')
export const render = () => {
    container.innerHTML = ''
    const html = model.map(m => m.toHTML()).join('')
    container.insertAdjacentHTML('beforeend', html)
    if (localStorage.getItem('gameStatus') === "started"){
        AddAnswerListener()
    }
}

export const AddAnswerListener = () => {
    let caButton = document.getElementById('correct_answer')
    document.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', () => {
            if (caButton.innerHTML === answer.innerHTML) {
                answer.classList = "btn btn-success"
                let correctAnswerCount = localStorage.getItem('CorrectAnswer')
                correctAnswerCount = parseInt(correctAnswerCount) + 1
                localStorage.setItem('CorrectAnswer', correctAnswerCount)
            }
            else{
                answer.classList = "btn btn-danger"
                caButton.classList = "btn btn-success"
            }

            //Hold the question for 3 seconds
            let seconds = 3
            let countdownIntervalId = setInterval(function() {
                seconds--; 
            
                if (seconds <= 0) {
                    clearInterval(countdownIntervalId)
                    render()
                }
              }, 1000)
        })

    })
}
    
 //Add listeners
 export const addListeners = () => {
    //Add listeners for the difficulty buttons
    document.querySelectorAll('.dif').forEach((button) => {
      button.addEventListener('click', () => {
        let mainButton = document.querySelector("#dropdownMenuButton button")
        localStorage.setItem('category', mainButton.innerHTML)
        localStorage.setItem('difficulty', button.value)
        localStorage.setItem('gameStatus', "started")
        console.log(button.value + " selected")
        
        //Start game
        startGame()
      })
    })

    //Add listeners for the category buttons
    let mainButton = document.querySelector("#dropdownMenuButton button")
    let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item")
    dropdownItems.forEach(item => {
      item.addEventListener("click", () => {
        // Update the text of the main button to match the selected category
        mainButton.innerHTML = item.innerText
      })
    })
  }

  //Get categories
  export const getCategories = () =>{
    return new Promise((resolve, reject) => {
      try {
          //Initiate new game
          fetch(`https://opentdb.com/api_category.php`)
          .then(response => response.json())
          .then(result => {
            model.push(new TextBlock("<h3>Please choose a category:</h3>"))
            model.push(new CategoryBlock(result['trivia_categories']))
            resolve()
          })
          .catch(error => console.log('error', error));
          
      } catch (error) {
        reject(error)
      }
    })
}