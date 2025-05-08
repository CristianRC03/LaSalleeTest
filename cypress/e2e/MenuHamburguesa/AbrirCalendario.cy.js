describe('Debe abrir el calendario', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina()
        cy.wait(1000);
        cy.fixture('user').then((user) => {
            cy.iniciarSesion(user.matricula, user.contrasena);
        })
    })

    it('Ir al calendario', () => {
        cy.wait(1000);
        var button_menu = cy.get('label[id="btnMenu"]');
        button_menu.click();
        cy.wait(500);

        var li_calificaciones = cy.get('li[style*="mnu_cal.png"] a');
        li_calificaciones
            .invoke('removeAttr', 'target')
            .click();        
    })
});