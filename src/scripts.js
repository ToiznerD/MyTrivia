
//data
const tempText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illum quia quaerat obcaecati perferendis aut sed perspiciatis laudantium eaque, sunt molestias. Temporibus eos, enim sit necessitatibus mollitia dolores quidem officiis."

const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: tempText},
    {type: 'columns', value: [tempText, tempText, tempText, tempText]},
    {type: 'image', value: './assets/ort.jpg'}
]

// utils
const row = (content) => `<div class="row">${content}</div>`
const col = (content) => `<div class="col-sm">${content}</div>`

// blocks
const Block = (type, value) => {
    switch (type){
        case 'title':
            return row(col(`<h1>${value}</h1>`))
        case 'text':
            return row(col(`<p>${value}</p>`))
        case 'columns':
            return row(col(`<div class="row">${value.map(col).join('')}</div>`))
        case 'image':
            return row(col(`<img src="${value}" alt="ort" class="img-fluid"/>`))
        default:
            return row(col(`<p>${value}</p>`))
    }
}

// render
const container = document.querySelector('#app')
const render = (model, container) => {
    const html = model.map(block => Block(block.type, block.value)).join('')
     container.insertAdjacentHTML('beforeend', html)
}

// init
render(model, container)