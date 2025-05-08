describe('Nuestros doctorados', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it('Clic en doctorados y muestra Derecho', () => {
    cy.get('#link3 a').click();
    cy.get('a[href="doctorados.php"]').click();
    cy.url().should('include','doctorados.php');
    cy.contains('a.a5','Derecho')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});