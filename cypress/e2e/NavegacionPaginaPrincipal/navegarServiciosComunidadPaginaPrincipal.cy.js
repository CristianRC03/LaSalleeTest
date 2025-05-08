describe('05 – Navegar a SERVICIOS a la comunidad', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it('Hace clic en SERVICIOS a la comunidad, verifica y muestra el span de Centros Comunitarios', () => {
    cy.contains('ul li a', 'SERVICIOS')
        .should('have.attr', 'href', 'servicios/comunitarios.php')
        .click();
    cy.url().should('include', 'servicios/comunitarios.php');
    cy.get('#interior_menu span')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});