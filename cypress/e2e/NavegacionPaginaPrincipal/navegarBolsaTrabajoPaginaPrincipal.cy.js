describe('08 – Navegar a BOLSA de trabajo', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
    });
    it(' TC0011 Hace clic en BOLSA de trabajo y muestra el texto del logo', () => {
    cy.contains('ul li a', 'BOLSA')
        .should('have.attr', 'href', 'https://bolsa.lasallebajio.edu.mx/registro_estudiante')
        .then(() => {
        cy.origin('https://bolsa.lasallebajio.edu.mx', () => {
            cy.visit('/registro_estudiante');
            cy.get('.m-login__logo a')
            .invoke('text')
            .then(texto => {
                cy.log(texto.trim());
                console.log(texto.trim());
            });
        });
        });
    });
});