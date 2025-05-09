describe('Debe iniciar sesión al colocar los datos correctamente', () => {
  it('TC0002', () => {
    cy.visitarLaSallePagina()
    cy.fixture('user').then((user) => {
      cy.iniciarSesion(user.matricula, user.contrasena);
    })
  })
})