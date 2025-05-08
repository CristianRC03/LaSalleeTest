describe('Debe abrir el directorio', () => {
  beforeEach(() => {
      cy.visitarLaSallePagina()
      cy.wait(1000);
      cy.fixture('user').then((user) => {
          cy.iniciarSesion(user.matricula, user.contrasena);
      })
  })

  it('Ir al directorio', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_calificaciones = cy.get('li[style*="mnu_directorio.png"] a');
      li_calificaciones
          .invoke('removeAttr', 'target')
          .click();
  })
})