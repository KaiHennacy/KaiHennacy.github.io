class Components {
    
    //Rather than use default createElement, this catch erronious creation of elements
    createElement(elementType) {
        if(!elementType) {
            throw new Error('Must pass valid HTML Element')
        }

        const createdElement = document.createElement(elementType)
        return createdElement
    }

    newGridButton(){
        const newGridButton = this.createElement('button')

        newGridButton.classList.add('new-grid-button')
        newGridButton.textContent = 'Create Grid'
        
        newGridButton.addEventListener('click', () => {
            const mainContainer = document.querySelector('.gridmaker')
            mainContainer.appendChild(this.createGrid())
        })
        return newGridButton
    }

    createGrid(){
        const outerDiv = this.createElement('div')
        const buttonContainer = this.createElement('div')
        const cancelButton = this.createElement('button')
        const addRowButton = this.createElement('button')
        const addColumnButton = this.createElement('button')
        const newInnerDivButton = this.createElement('button')
        const resetDivAreas = this .createElement('button')

        outerDiv.classList.add('new')
        outerDiv.setAttribute('style', 'display: grid; grid-template: repeat(1, 1fr) / repeat(1, 1fr);')

        cancelButton.setAttribute('type', 'button')
        addRowButton.setAttribute('type', 'button')
        addColumnButton.setAttribute('type', 'button')
        newInnerDivButton.setAttribute('type', 'button')
        resetDivAreas.setAttribute('type', 'button')

        cancelButton.textContent = 'Cancel'
        addRowButton.textContent = 'Add Row'
        addColumnButton.textContent = 'Add Column'
        newInnerDivButton.textContent = 'New Panel'
        resetDivAreas.textContent = 'Reset Panel Layout'

        cancelButton.addEventListener('click', () => {
            const mainContainer = document.querySelector('.container')
            mainContainer.removeChild(mainContainer.lastChild)
        })

        addRowButton.addEventListener('click', () => {
            //getNum* only works with outerDiv, consider refactoring
            var numRows = this.getNumRows(outerDiv)
            var numColumns = this.getNumColumns(outerDiv)
            // console.log(numRows)
            outerDiv.setAttribute('style', `display: grid; grid-template: repeat(${numRows + 1}, 1fr) / repeat(${numColumns}, 1fr);`)
        })

        addColumnButton.addEventListener('click', () => {
            //getNum* only works with outerDiv, consider refactoring
            var numRows = this.getNumRows(outerDiv)
            var numColumns = this.getNumColumns(outerDiv)
            // console.log(numRows)
            outerDiv.setAttribute('style', `display: grid; grid-template: repeat(${numRows}, 1fr) / repeat(${numColumns + 1}, 1fr);`)
        })

        newInnerDivButton.addEventListener('click', () => {
            const newInnerDiv = this.createElement('div')
            const moveContainer = this.createElement('div')
            const contentForm = this.createElement('form')
            const headerInput = this.createElement('input')
            const bodyInput = this.createElement('input')
            const submitPanel = this.createElement('button')
            const displayMove = this.createElement('button')

            const moveUp = this.createElement('button')
            const moveDown = this.createElement('button')
            const moveLeft = this.createElement('button')
            const moveRight = this.createElement('button')

            const growUp = this.createElement('button')
            const growDown = this.createElement('button')
            const growLeft = this.createElement('button')
            const growRight = this.createElement('button')

            headerInput.setAttribute('type', 'text')
            bodyInput.setAttribute('type', 'text')

            submitPanel.setAttribute('type', 'button')

            displayMove.setAttribute('type', 'button')
            displayMove.textContent = 'Move Options'
            
            moveUp.setAttribute('type', 'button')
            moveDown.setAttribute('type', 'button')
            moveLeft.setAttribute('type', 'button')
            moveRight.setAttribute('type', 'button')

            growUp.setAttribute('type', 'button')
            growDown.setAttribute('type', 'button')
            growLeft.setAttribute('type', 'button')
            growRight.setAttribute('type', 'button')

            moveUp.textContent = 'Move Up'
            moveDown.textContent = 'Move Down'
            moveLeft.textContent = 'Move Left'
            moveRight.textContent = 'Move Right'

            growUp.textContent = 'Grow Up'
            growDown.textContent = 'Grow Down'
            growLeft.textContent = 'Grow Left'
            growRight.textContent = 'Grow Right'

            moveUp.classList.add('up-button')
            growUp.classList.add('up-button')

            moveDown.classList.add('down-button')
            growDown.classList.add('down-button')

            moveLeft.classList.add('left-button')
            growLeft.classList.add('left-button')

            moveRight.classList.add('right-button')
            growRight.classList.add('right-button')

            moveContainer.classList.toggle('hidden')

            submitPanel.textContent = 'Submit'

            displayMove.textContent = 'Move Panel'

            submitPanel.addEventListener('click', () => {
                const panelHeader = this.createElement('h3')
                const panelBody = this.createElement('p')
                
                panelHeader.textContent = headerInput.value
                panelBody.textContent = bodyInput.value

                contentForm.classList.toggle('hidden')

                newInnerDiv.appendChild(panelHeader)
                newInnerDiv.appendChild(panelBody)
            })

            displayMove.addEventListener('click', () => {
                moveContainer.classList.toggle('hidden')
            })

            moveUp.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart - 1}/${columnStart}/${rowEnd - 1}/${columnEnd};`)
            })
            moveDown.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart + 1}/${columnStart}/${rowEnd + 1}/${columnEnd};`)
            })
            moveLeft.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart}/${columnStart - 1}/${rowEnd}/${columnEnd - 1};`)
            })
            moveRight.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart}/${columnStart + 1}/${rowEnd}/${columnEnd + 1};`)
            })

            growUp.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart - 1}/${columnStart}/${rowEnd}/${columnEnd};`)
            })
            growDown.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart}/${columnStart}/${rowEnd + 1}/${columnEnd};`)
            })
            growLeft.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart}/${columnStart - 1}/${rowEnd}/${columnEnd};`)
            })
            growRight.addEventListener('click', () => {
                const rowStart = this.getRowStart(newInnerDiv)
                const columnStart = this.getColumnStart(newInnerDiv)
                const rowEnd = this.getRowEnd(newInnerDiv)
                const columnEnd = this.getColumnEnd(newInnerDiv)

                newInnerDiv.setAttribute('style', `grid-area: ${rowStart}/${columnStart}/${rowEnd}/${columnEnd + 1};`)
            })

            moveContainer.appendChild(moveUp)
            moveContainer.appendChild(moveDown)
            moveContainer.appendChild(moveLeft)
            moveContainer.appendChild(moveRight)

            moveContainer.appendChild(growUp)
            moveContainer.appendChild(growDown)
            moveContainer.appendChild(growLeft)
            moveContainer.appendChild(growRight)

            contentForm.appendChild(headerInput)
            contentForm.appendChild(bodyInput)
            contentForm.appendChild(submitPanel)

            
            newInnerDiv.appendChild(displayMove)
            
            newInnerDiv.appendChild(moveContainer)
            
            newInnerDiv.appendChild(contentForm)
            
            outerDiv.appendChild(newInnerDiv)
        })

        resetDivAreas.addEventListener('click', () => {
            const childDivs = outerDiv.childNodes
            var numColumns = this.getNumColumns(outerDiv)
            childDivs.forEach(function(childDiv, index){
                
                var rowStart = Math.floor(index / numColumns) + 1
                var columnStart = index - (rowStart - 1) * numColumns + 1
                childDiv.setAttribute('style', `grid-area: ${rowStart}/${columnStart}/${rowStart + 1}/${columnStart + 1};`)
            })
        })

        buttonContainer.appendChild(cancelButton)
        buttonContainer.appendChild(addRowButton)
        buttonContainer.appendChild(addColumnButton)
        buttonContainer.appendChild(newInnerDivButton)
        buttonContainer.appendChild(resetDivAreas)
        

        outerDiv.appendChild(buttonContainer)

        return outerDiv
    }

    createNavBar() {
        const navElement = this.createElement('nav')
        const ulElement = this.createElement('ul')
        const menuButton = this.createElement('button')
        let liElements

        // const homeButton = this.createElement('li')

        // homeButton.classList.add('nav_list-item')

        // homeButton.addEventListener('click', () => {

        // })

        const articles = ['home', 'about', 'projects', 'themes', 'gridmaker']
        // I would use const sections = ['foo', 'bar', '...', '...'], but I want to give each tab its own functionality"

        navElement.classList.add('nav')


        liElements = articles.map((article) => {
            const liElement = document.createElement('li')
            const btnElement = document.createElement('button')

            btnElement.textContent = article.charAt(0).toUpperCase() + article.slice(1)

            // aElement.setAttribute('href', `#${section}`)

            btnElement.addEventListener('click', () => {
                this.toggleHidden(article)
            })

            liElement.classList.add('nav_list-item')

            liElement.appendChild(btnElement)

            // ulElement.appendChild(liElement)

            return liElement;
        })

        console.log(liElements)

        ulElement.classList.add('nav_list')
        ulElement.classList.add('hidden')

        liElements.forEach((element) => {
            ulElement.appendChild(element);
        })
        //ulElement.innerHTML = liElements.join('')

        menuButton.classList.add('nav_button')
        menuButton.textContent = 'MENU'

        menuButton.addEventListener('click', () => {
            menuButton.textContent = 'MENU'
            ulElement.classList.toggle('hidden')
            if(!ulElement.classList.contains('hidden')){
                menuButton.textContent = 'MENU ^'
            }
        })


        
        window.addEventListener('click', (event) => {
            console.log(event)
            if(!event.target.matches('button')&&!ulElement.classList.contains('hidden')){
                ulElement.classList.toggle('hidden')
                menuButton.textContent = 'MENU'
            }
        })

        navElement.appendChild(menuButton)
        navElement.appendChild(ulElement)

        return navElement
    }

    toggleHidden(article){
        let articles = document.getElementsByTagName('ARTICLE')
        console.log(articles.length)
        for( var i = 0; i < articles.length; i++){
            if((!articles.item(i).classList.contains('hidden'))){
                articles.item(i).classList.toggle('hidden')
            }
            if(articles.item(i).classList.contains(`${article}`)){
                articles.item(i).classList.toggle('hidden')
            }
        }
        return articles
    }

    getNumRows(element){
        const styleStr = element.getAttribute('style')
        return parseInt(styleStr.slice(styleStr.indexOf(': repeat(') + 9, styleStr.indexOf(', 1fr) /')))
    }

    getNumColumns(element){
        const styleStr = element.getAttribute('style')
        return parseInt(styleStr.slice(styleStr.indexOf('/ repeat(') + 9, styleStr.indexOf(', 1fr);')))
    }
    
    getRowStart(element){
        const styleStr = element.getAttribute('style')
        return parseInt(styleStr.slice(styleStr.indexOf(': ') + 2, styleStr.indexOf('/')))
    }

    getColumnStart(element){
        const styleStr = element.getAttribute('style')
        let styleSubStr = styleStr.slice(styleStr.indexOf('/') + 1, styleStr.length)
        styleSubStr = styleSubStr.slice(0, styleSubStr.indexOf('/'))
        return parseInt(styleSubStr)
    }

    getRowEnd(element){
        const styleStr = element.getAttribute('style')
        let styleSubStr = styleStr.slice(styleStr.indexOf('/') + 1, styleStr.length)
        styleSubStr = styleSubStr.slice(styleSubStr.indexOf('/') + 1, styleSubStr.length)
        styleSubStr = styleSubStr.slice(0, styleSubStr.indexOf('/'))
        
        return parseInt(styleSubStr)
    }

    getColumnEnd(element){
        const styleStr = element.getAttribute('style')
        let styleSubStr = styleStr.slice(styleStr.indexOf('/') + 1, styleStr.length)
        styleSubStr = styleSubStr.slice(styleSubStr.indexOf('/') + 1, styleSubStr.length)
        styleSubStr = styleSubStr.slice(styleSubStr.indexOf('/') + 1, styleSubStr.length)
        styleSubStr = styleSubStr.slice(0, styleSubStr.length - 1)
        return parseInt(styleSubStr)
    }
}

module.exports = Components