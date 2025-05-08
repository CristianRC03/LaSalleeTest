describe('Certificaciones en asesor de imagen', () => {
    beforeEach(() => {
      cy.visitarLaSallePagina();
    });
    it('Clic en diplomados y muestra la primera certificación', () => {
      cy.get('#link3 a').click();
      cy.get('a[href="ec.php"]').click();
      cy.url().should('include','ec.php');
      cy.contains('a.a7', 'Certificación en asesor de imagen personal')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
  });