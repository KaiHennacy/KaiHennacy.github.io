const Components = require('./utils/Components')

const Themes = require('./utils/Themes')

const components = new Components()

const themes = new Themes()

const fixedHeader = document.querySelector('.fixed-header')

fixedHeader.appendChild(components.createNavBar())

const themesGrid = document.querySelector('.themes')

themesGrid.appendChild(themes.buttonGrid())

const gridCreator = document.querySelector('.gridmaker')

gridCreator.appendChild(components.newGridButton())

// let navList = document.querySelector('.nav_list')

// let menuButton = document.querySelector('.nav_button')

// function changesOnResize(){
//     let winWidth = window.innerWidth
//     console.log(winWidth)
//     if (winWidth > 670) {
//         if(!navList.classList.contains('visible')){
//             navList.classList.toggle('visible')
//         }
//         if(!menuButton.classList.contains('stayHidden')) {
//             menuButton.classList.toggle('stayHidden')
//         }
//     }
//     if (winWidth < 670) {
//         if(navList.classList.contains('visible')){
//              navList.classList.toggle('visible')
//         }
//         if(menuButton.classList.contains('stayHidden')) {
//                 menuButton.classList.toggle('stayHidden')
//         }
//     }
//         console.log(navList)
// }

// window.onresize = changesOnResize
// window.onload = changesOnResize
window.onload = themes.swapStyle('orange')