describe('Debe iniciar sesión al colocar los datos correctamente', () => {
    it('TC0004 ', () => {
      cy.visitarLaSallePagina()
      cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, "ContraseñaIncorrecta");
      })
    })
  })