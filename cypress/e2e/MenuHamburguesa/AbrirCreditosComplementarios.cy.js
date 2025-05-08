describe('Debe abrir los créditos complementarios', () => {
  beforeEach(() => {
      cy.visitarLaSallePagina()
      cy.wait(1000);
      cy.fixture('user').then((user) => {
          cy.iniciarSesion(user.matricula, user.contrasena);
      })
  })

  it('Ir a créditos complementarios', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_calificaciones = cy.get('li[style*="mnu_creditos.png"] a');
      li_calificaciones
          .invoke('removeAttr', 'target')
          .click();
  })
})