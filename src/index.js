import {loadModel} from './model'
import {render, addListeners} from './classes/utils.js'

// init
window.addEventListener('DOMContentLoaded', (event) => {
    localStorage.setItem('gameStatus', 'not-started')
    loadModel().then(() => {
        render()
        addListeners()
    })

  })

