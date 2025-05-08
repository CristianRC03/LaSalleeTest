describe('Noticias: Buscar noticias', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it('Hace clic en NOTICIAS y muestra texto buscar noticias', () => {
    cy.contains('#noticias a', 'NOTICIAS').click();
    cy.get('#frmNot span')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});