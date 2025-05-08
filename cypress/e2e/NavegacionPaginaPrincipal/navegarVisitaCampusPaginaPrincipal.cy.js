describe('Navegar a VISITA nuestros campus', () => {
  beforeEach(() => {
    cy.visitarLaSallePagina();
  });
  it('Hace clic en VISITA nuestros campus y muestra el título', () => {
    cy.contains('ul li a', 'VISITA')
      .should('have.attr', 'href', 'visita.php')
      .click();
    cy.url().should('include', 'visita.php');
    cy.get('#vis_title')
      .invoke('text')
      .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
      });
  });
});