import {col,row} from './utils';

export class Block{
    constructor(type, value){
        this.type = type;
        this.value = value;
    }

    toHTML(){
        throw new Error('Not implemented');
    }
}

export class TitleBlock extends Block{
    constructor(value){
        super('title', value);
    }
    toHTML(){
        return row(col(`${this.value}`));
    }
}

export class TextBlock extends Block{
    constructor(value){
        super('text', value);
    }
    toHTML(){
        return row(col(`<p>${this.value}</p>`));
    }
}

export class ColumnBlock extends Block {
    constructor(value) {
      super('columns', value);
      
    }
    
    toHTML() {
        let html = ''
        this.value.forEach(button =>{
            html += col(button.outerHTML)

        })

      return row(html)
    }
  }

export class GameBlock extends Block{
    constructor(value, dif){
        super('game', value)
        this.qnum = 0
        this.dif = dif
        localStorage.setItem('CorrectAnswer', 0)
    }
    
   //Return new question
    toHTML(){
        if(this.qnum == 10){
            let end = $('<spawn/>')
            end.classList = 'badge bg-info'
            end.style.fontSize = '20px'
            end.style.margin = '2px'
            end.style.padding = '2px'
            end.style.borderRadius = '50%'
            end.text("Game Over! you have answered " + localStorage.getItem('CorrectAnswer') + " questions correctly out of " + this.value.length)
            return end
        }
        //Create category bade
        let category = document.createElement('span')
        category.innerHTML = 'Category: ' + localStorage.getItem('category')
        category.classList = 'badge bg-info'
        category.style.fontSize = '20px'
        category.style.margin = '2px'

        //Create difficulty badge
        let dif = document.createElement('span')
        dif.innerHTML = 'Difficulty level:' + this.dif
        dif.classList = 'badge bg-info'
        dif.style.fontSize = '20px'
        dif.style.margin = '2px'

        //Create question number badge
        let qnum = document.createElement('span')
        qnum.innerHTML = 'Question number:' + (this.qnum+1) + '/' + this.value.length
        qnum.classList = 'badge bg-info'
        qnum.style.fontSize = '20px'
        qnum.style.margin = '2px'

        //Create correct answer badge
        let correct = document.createElement('span')
        correct.innerHTML = 'Correct Answers:' + localStorage.getItem('CorrectAnswer')
        correct.classList = 'badge bg-info'
        correct.style.fontSize = '20px'
        correct.style.margin = '2px'

       
        //Create return content
        let html = row(category.outerHTML)
        html += row(dif.outerHTML)
        html += row(qnum.outerHTML)
        html += row(correct.outerHTML)
        html += this.value[this.qnum++].toHTML()
        return html
    }

}

export class QuestionBlock extends Block{
    constructor(value, a1, a2, a3, cA){
        super('question', value)
        this.ans = []
        this.ans.push(a1)
        this.ans.push(a2)
        this.ans.push(a3)
        this.ans.push(cA)
        this.cA = cA;
        this.correct_answer = null
    }

    addListener(){
        this.addEventListener('click', ()=>{
            //Check if answer is correct
            if(button.innerHTML === cA){
                button.classList = "btn btn-success"
            }
            else{
                button.classList = "btn btn-danger"
                this.correct_answer.style.classList = "btn btn-success"
            }
        })

        //Run countdown
        this.startCountdown()
    }

    
    
    getQuestion(){
        let buttons = []
        let picked = new Set()
        for(let i = 0; i < 4; i++){

             //Pick a random answer
            let x = Math.floor(Math.random() * 4)
            while (picked.has(x)){
                x = Math.floor(Math.random() * 4)
            }

            picked.add(x)

            //Create a button
            let button = document.createElement('button')
            button.innerHTML = this.ans[x];
            if(this.ans[x] === this.cA){
                this.correct_answer = button
                button.id = 'correct_answer'
            }
            button.classList = 'btn btn-primary answer'
            button.style.width = '150px'
            button.style.height = '150px'
            button.style.margin = '20px'
            button.style.fontSize = '20px'
            buttons.push(button.outerHTML)
        }

        // Create a container div to hold the buttons and center it
        let container = document.createElement('div')
        container.style.display = 'flex'
        container.style.justifyContent = 'center'
        container.style.alignItems = 'center'
        container.style.textAlign = 'center'
        container.innerHTML = buttons.map(button => col(button)).join('')

        return container.outerHTML

    }

    toHTML(){
        let q = document.createElement('span')
        q.innerHTML = this.value
        q.classList = 'badge bg-secondary'
        q.style.margin = '20px'
        q.style.fontSize = '30px'
        
        let timer = document.createElement('span')
        timer.id = 'timer'
        timer.classList = 'badge bg-secondary'
        timer.style.fontSize = '20px'

        let html = ''
        html += row(col(q.outerHTML))
        html += row('<br />')
        html += row(col(timer.outerHTML))
        html += row('<br />')
        html += this.getQuestion()
        return html
    }
}

export class CategoryBlock extends Block{
    constructor(value){
        super('categories', value)
        CategoryBlock.categories = value

    }
    static categories
     //Get categories
    getCategories = () =>{
            //Create categories div
            let categories = document.createElement('div')
            categories.role = "group"
            categories.ariaLabel = "Categories"
            categories.className = "btn-group"
            categories.id = "dropdownMenuButton"
            categories.style.padding = "10px"

            //Create categories buttons
            let button = document.createElement('button')
            button.className = "btn btn-primary"
            button.innerHTML = "General"
            button.id = "categoryButton"
            categories.appendChild(button)

            //Create div group
            let group = document.createElement('div')
            group.role = "group"
            group.className = "btn-group"
            group.id = "dropdownMenu"

            //Drop down button
            let button2 = document.createElement('button')
            button.type = "button"
            button2.className = "btn btn-primary dropdown-toggle"
            button2.setAttribute("data-bs-toggle", "dropdown")
            button2.setAttribute("aria-haspopup", "true")
            button2.setAttribute("aria-expanded", "false")
            group.appendChild(button2)
            categories.appendChild(group)

            //Create dropdown menu
            let div = document.createElement('div')
            div.className = "dropdown-menu"
            div.setAttribute("aria-labelledby", "dropdownMenu")
            group.appendChild(div)

            //Add categories
            this.value.forEach(category => {
                let a = document.createElement('a')
                a.className = "dropdown-item"
                a.innerText = category['name']
                a.value = category['id']
                div.appendChild(a)
            })
            return categories.outerHTML
    }
    toHTML(){
        return row(this.getCategories())
    }
}


