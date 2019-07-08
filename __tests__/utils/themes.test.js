// I need to ask for help with this, I couldn't get tests to run no matter what I tried at home



const Themes = require('../../public/js/utils/Themes')

let Themes

beforeEach(() => {
    themes = new Themes()
})

test('should create div element', () => {
    expect(themes.createElement('div') instanceof HTMLDivElement).toBeTruthy()
})

test.('throws error if no parameter given', () =>{
    expect(() =>{
        themes.createElement()
    }).toThrow('Must pass valid HTML Element')
})

describe('buttonGrid', () => {
    test('should create HTMLDivElement', () => {
        expect(themes.buttonGrid() instanceof HTMLDivElement).toBeTruthy()
    })

    test('should contain another div', () => {
        expect(themes.buttonGrid().querySelector('div') instanceof HTMLDivElement).toBeTruthy()
    })
})