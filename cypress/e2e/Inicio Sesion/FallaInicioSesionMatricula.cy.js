describe('Debe iniciar sesión al colocar los datos correctamente', () => {
    it('passes', () => {
      cy.visitarLaSallePagina()
      cy.fixture('user').then((user) => {
        cy.iniciarSesion("0074842", user.contrasena);
      })
    })
  })