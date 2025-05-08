describe('Debe abrir el reglamento', () => {
  beforeEach(() => {
      cy.visitarLaSallePagina()
      cy.wait(1000);
      cy.fixture('user').then((user) => {
          cy.iniciarSesion(user.matricula, user.contrasena);
      })
  })

  it('Ir al reglamento', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_calificaciones = cy.get('li[style*="mnu_reglamentos.png"] a');
      li_calificaciones
          .invoke('removeAttr', 'target')
          .click();
  })
})