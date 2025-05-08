describe('Nuestras especialidades', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it('Clic en especialidades y muestra Endodoncia', () => {
    cy.get('#link3 a').click();
    cy.get('a[href="especialidades.php"]').click();
    cy.url().should('include','especialidades.php');
    cy.contains('a.a3','Endodoncia')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});