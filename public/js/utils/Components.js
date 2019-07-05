class Components {
    createElement(elementType) {
        if(!elementType) {
            throw new Error('Must pass valid HTML Element')
        }

        const createdElement = document.createElement(elementType)
        return createdElement
    }

    createNavBar() {
        const navElement = this.createElement('nav')
        const ulElement = this.createElement('ul')
        const buttonElement = this.createElement('button')
        let liElements

        const sections = ['home', 'about', 'projects', 'theme']

        liElements = sections.map((section) => {
            const liElement = document.createElement('li')
            const btnElement = document.createElement('button')

            btnElement.textContent = section.charAt(0).toUpperCase() + section.slice(1)

            // aElement.setAttribute('href', `#${section}`)

            btnElement.addEventListener('click', () => {
                this.toggleHidden(section) 
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

        buttonElement.classList.add('navigation__button')
        buttonElement.textContent = 'MENU'

        buttonElement.addEventListener('click', () => {
            ulElement.classList.toggle('hidden')
        })

        navElement.appendChild(buttonElement)
        navElement.appendChild(ulElement)

        return navElement
    }

    toggleHidden(section){
        let pageSection = document.querySelector(`.${section}`)
        console.log(pageSection)
        pageSection.classList.toggle('hidden')
        return pageSection
    }
}

module.exports = Components