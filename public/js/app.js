const Components = require('./utils/Components')

const components = new Components()

const fixedHeader = document.querySelector('.fixed-header')

fixedHeader.appendChild(components.createNavBar())

const mainContainer = document.querySelector('.container')

mainContainer.appendChild(components.newGridButton())