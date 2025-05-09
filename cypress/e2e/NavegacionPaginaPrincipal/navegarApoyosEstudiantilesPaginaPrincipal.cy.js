describe('Navegar a APOYOS estudiantiles', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it(' TC0010 Hace clic en APOYOS estudiantiles y muestra el span de BECAS', () => {
    cy.contains('ul li a', 'APOYOS')
        .should('have.attr', 'href', 'apoyos/becas.php')
        .click();
    cy.url().should('include', 'apoyos/becas.php');
    cy.get('#interior_menu span')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});