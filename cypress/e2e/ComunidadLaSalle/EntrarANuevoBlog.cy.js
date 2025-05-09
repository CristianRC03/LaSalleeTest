describe('Debe entrar al apartado de conoce nuestro nuevo blog al sar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0033: Ir al apartado de solidaridad', () => {
        cy.wait(1000);
        var a_nuevo_blog = cy.get('a[href="https://blog.lasallebajio.edu.mx"]');
        a_nuevo_blog.click();
    });
});