describe('04 – Carrusel: “Adquiere tu ficha aquí” y validación de h2', () => {
beforeEach(() => {
    cy.visitarLaSallePagina();
});

it('Recorre el carrusel, hace click en “ADQUIERE TU FICHA AQUÍ”, y muestra el h2 en consola', () => {
    const maxClicks = 10;
    let clicks = 0;

    function buscarYClick() {
    cy.get('body').then($body => {
        const $btn = $body
        .find('.slide_text .btn')
        .filter((i, el) => el.innerText.trim() === 'ADQUIERE TU FICHA AQUÍ');

        if ($btn.length && $btn.is(':visible')) {

        cy.wrap($btn).click();

        cy.get('h2')
            .contains('CONOCE NUESTRO PROCESO DE ADMISIÓN')
            .should('be.visible')
            .invoke('text')
            .then(texto => {
            cy.log('Texto H2:', texto.trim());
            console.log('Texto H2:', texto.trim());
            });

        } else if (clicks < maxClicks) {

        clicks++;
        cy.get('a.flex-next').click();
        buscarYClick();
        } else {
        throw new Error(
            `No se encontró el botón “ADQUIERE TU FICHA AQUÍ” tras ${maxClicks} clics.`
        );
        }
    });
    }

    buscarYClick();
});
});
