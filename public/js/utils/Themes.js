class Themes {

    //Rather than use default createElement, this catch erronious creation of elements
    createElement(elementType) {
        if(!elementType) {
            throw new Error('Must pass valid HTML Element')
        }

        const createdElement = document.createElement(elementType)
        return createdElement
    }

    //Store color hrefs
    
    
    swapStyle(sheet) {
        const colors = document.getElementsByClassName('color')
        console.log(colors)
        for(var i = 0; i < colors.length; i++){
            let colorHref = '' + colors.item(i).getAttribute('href')
            console.log(colorHref)
            console.log(sheet)
            if(colorHref.indexOf(sheet) > -1){
                let styleToInsert = document.createElement('link')
                styleToInsert.setAttribute('class', 'active-theme')
                styleToInsert.setAttribute('class', 'active-theme')
                styleToInsert.setAttribute('id', 'pagestyle')
                styleToInsert.setAttribute('href', `${colors.item(i).getAttribute('href')}`)
                styleToInsert.setAttribute('rel', 'stylesheet')
                styleToInsert.setAttribute('type', 'text/css')

                const colorInsert = document.querySelector('.color-insert')

                colorInsert.innerHTML = ''

                colorInsert.appendChild(styleToInsert)
            }
        }
        // document.getElementById('colors').setAttribute('href', ``);
    return 
    }

    themeButtons(){
        let buttonDivs
        const clrBtnNames = ['classic', 'blue', 'dark', 'bubblegum']

        buttonDivs = clrBtnNames.map((clrBtnName) => {
            const btnDiv = document.createElement('div')
            const clrBtn = document.createElement('button')

            btnDiv.classList.add('grid-inner')

            btnDiv.setAttribute('style', `background-color: var(--${clrBtnName});`)

            clrBtn.classList.add('theme-button')

            clrBtn.textContent = clrBtnName.charAt(0).toUpperCase() + clrBtnName.slice(1)
            
            clrBtn.addEventListener('click', () => {
                this.swapStyle(`${clrBtnName}`)
            })
            btnDiv.appendChild(clrBtn)
            return btnDiv
        })
        return buttonDivs
    }

    buttonGrid(){
        const outerDiv = document.createElement('div') 
        
        outerDiv.classList.add('grid-outer')

        const themeBtns = this.themeButtons()

        for(var i = 0; i < themeBtns.length; i++){
            const themeBtn = themeBtns[i]

            outerDiv.appendChild(themeBtn)
        }

        return outerDiv
    }
}

module.exports = Themes