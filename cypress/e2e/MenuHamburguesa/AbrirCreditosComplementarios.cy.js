describe('Debe abrir los créditos complementarios', () => {
  beforeEach(() => {
      cy.visitarLaSallePagina();
      cy.fixture('user').then((user) => {
          cy.iniciarSesion(user.matricula, user.contrasena);
      })
  })

  it('TC0022: Ir a créditos complementarios', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_creditos = cy.get('li[style*="mnu_creditos.png"] a');
      li_creditos
          .invoke('removeAttr', 'target')
          .click();
  })
})