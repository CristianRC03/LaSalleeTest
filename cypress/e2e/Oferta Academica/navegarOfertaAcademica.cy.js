describe('Navegar Oferta Academica', () => {
beforeEach(() => {
    cy.visitarLaSallePagina();
});
it(' TC0014 Muestra el span de NUESTRAS licenciaturas', () => {
    cy.get('#link3 a').should('have.attr','href','oferta/').click();
    cy.url().should('include','oferta/');
    cy.get('a[href="licenciaturas.php"] .tile_title span')
    .invoke('text')
    .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
    });
});
});
