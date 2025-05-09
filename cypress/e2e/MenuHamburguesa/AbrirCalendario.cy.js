describe('Debe abrir el calendario', () => {
    beforeEach(() => {;
        cy.visitarLaSallePagina()
        cy.fixture('user').then((user) => {
            cy.iniciarSesion(user.matricula, user.contrasena);
        })
    })

    it('TC0021 : Ir al calendario', () => {
        cy.wait(1000);
        var button_menu = cy.get('label[id="btnMenu"]');
        button_menu.click();
        cy.wait(500);

        var li_calendario = cy.get('li[style*="mnu_cal.png"] a');
        li_calendario
            .invoke('removeAttr', 'target')
            .click();        
    })
});