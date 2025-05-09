describe('Debe mostrar todos los contacto de Lomas del Campestre del directorio', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina()
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena)
        })
    })

  it('TC0026: Buscar contacto', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_directorio = cy.get('li[style*="mnu_directorio.png"] a');
      li_directorio
          .invoke('removeAttr', 'target')
          .click();

        cy.wait(1000);

        cy.get('#frmDirectorio').within(() => {
            var selectCampus = cy.get('#selCampus');
            selectCampus.select('Lomas del Campestre').should('have.value', '1');
            
            var selectEscuelaDirectorio = cy.get('#selEscDir');
            selectEscuelaDirectorio.select('Todas').should('have.value', '0');

            var selectNombre = cy.get('input[name="txtNombre"]');

            var btnBuscar = cy.get('button[name="Buscar"]');

            btnBuscar.click();
        });
  });
})