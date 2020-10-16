describe("Lambda Eats App", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const homeBtn = () => cy.get('#home-button');
    const pizzaBtn = () => cy.get('#pizza-button');
    const size = () => cy.get('select[name=size]')
    const redSauce = () => cy.get('input[value=red]')
    const marSauce = () => cy.get('input[value=marinara]')
    const whiteSauce = () => cy.get('input[value=white]')
    const submitBtn = () => cy.get('.submit')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const special = () => cy.get('#special')

    describe('Ordering', () => {
        it('can navigate to Pizza', () => {
        
            pizzaBtn()
                .should('exist')
                .click()
        })
        it('can fill out the form', () => {
            pizzaBtn().click();
            size().select('12inch')
            redSauce().click();
            submitBtn().should('not.be.disabled')
            pepperoni().click()
            special().type('extra parmasan please!')
            submitBtn().click()
        })
    })
})