describe('Debe abrir la Agenda de Eventos', () => {
  beforeEach(() => {
    cy.visitarLaSallePagina();
    cy.fixture('user').then((user) => {
      cy.iniciarSesion(user.matricula, user.contrasena);
    });
  });

  it('Ir a la agenda de eventos', () => {
    cy.wait(1000);
    var button_menu = cy.get('label[id="btnMenu"]');
    button_menu.click();
    cy.wait(500);

    var li_calificaciones = cy.get('li[style*="mnu_agenda.png"] a');
    li_calificaciones
      .invoke('removeAttr', 'target')
      .click();
  });
});