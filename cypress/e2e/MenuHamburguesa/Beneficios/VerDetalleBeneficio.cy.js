describe('Debe Mostrar el detalle del beneficio', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0028: Ir al detalle del beneficio', () => {
        cy.wait(1000);
        var button_menu = cy.get('label[id="btnMenu"]');
        button_menu.click();
        cy.wait(500);
    
        var li_beneficios = cy.get('li[style*="mnu_beneficios.png"] a');
        li_beneficios
        .click();
    
        cy.wait(1000);
        var a_optica_roy = cy.get('a[href="#optica_roy"]');
        a_optica_roy.click();

        cy.wait(10000);
        var a_close = cy.get('a[title="Close"]');
        a_close.click();
    });
});