describe('Debe abrir el reglamento', () => {
  beforeEach(() => {
      cy.visitarLaSallePagina();
      cy.fixture('user').then((user) => {
          cy.iniciarSesion(user.matricula, user.contrasena);
      })
  })

  it('TC0024: Ir al reglamento', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_reglamento = cy.get('li[style*="mnu_reglamentos.png"] a');
      li_reglamento
          .invoke('removeAttr', 'target')
          .click();
  })
})