describe('Nuestras maestrías', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it(' TC0018 Clic en maestrías y muestra Administración de Negocios en Entornos Virtuales', () => {
    cy.get('#link3 a').click();
    cy.get('a[href="maestrias.php"]').click();
    cy.url().should('include','maestrias.php');
    cy.contains('a.a5','Administración de Negocios en Entornos Virtuales')
        .invoke('text')
        .then(texto => {
        cy.log(texto.trim());
        console.log(texto.trim());
        });
    });
});