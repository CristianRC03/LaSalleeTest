describe('Búsqueda rápida en La Salle Bajío erronea', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });

    it(' TC0006 Escribe “somos”, envía la búsqueda y muestra el total de resultados en consola', () => {

    cy.get('#search')
        .click()
        .type('qwerty{enter}');

    cy.get('#total').should('be.visible');

    cy.get('#total')
        .invoke('text')
        .then((texto) => {
        console.log('Texto #total:', texto.trim());
        cy.log('Texto #total: ' + texto.trim());
        });
    });
});