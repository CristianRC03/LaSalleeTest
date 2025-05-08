describe('Noticias: Noticia FLAC 2025', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it('Hace clic en NOTICIAS, muestra la noticia y clica en el enlace', () => {
    cy.contains('#noticias a', 'NOTICIAS').click();
    cy.contains('a.noticia', 'La Salle Bajío lleva espectáculos que harán historia en el FLAC 2025')
        .then($a => {
        const texto = $a.text().trim();
        cy.log(texto);
        console.log(texto);
        cy.wrap($a).click();
        });
    });
});
