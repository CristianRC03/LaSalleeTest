describe('International Dental Program', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it(' TC0020 Hace clic en el enlace IDP y muestra el texto del banner', () => {
    cy.get('a[href="oferta/idp.php"]').click();
    cy.url().should('include', 'oferta/idp.php');
    cy.get('#banner .wrapper')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});