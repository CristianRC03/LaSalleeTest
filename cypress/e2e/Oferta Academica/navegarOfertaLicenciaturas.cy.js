describe('Primera oferta de licenciaturas', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it('Clic en licenciaturas y muestra Actuaría', () => {
    cy.get('#link3 a').click();
    cy.get('a[href="licenciaturas.php"]').click();
    cy.url().should('include','licenciaturas.php');
    cy.get('ul > li').first()
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});