import {loadModel} from './model'
import {render, addListeners} from './classes/utils.js'

// init
window.addEventListener('DOMContentLoaded', (event) => {
    loadModel().then(() => {
        render()
        addListeners()
    })

  })

