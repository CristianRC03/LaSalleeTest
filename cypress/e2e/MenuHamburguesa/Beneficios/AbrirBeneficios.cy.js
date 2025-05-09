describe('Debe abrir los beneficios', () => {
  beforeEach(() => {
      cy.visitarLaSallePagina();
      cy.fixture('user').then((user) => {
          cy.iniciarSesion(user.matricula, user.contrasena);
      })
  })

  it('TC0027: Ir a beneficios', () => {
      cy.wait(1000);
      var button_menu = cy.get('label[id="btnMenu"]');
      button_menu.click();
      cy.wait(500);

      var li_beneficios = cy.get('li[style*="mnu_beneficios.png"] a');
      li_beneficios
          .invoke('removeAttr', 'target')
          .click();
  })
})