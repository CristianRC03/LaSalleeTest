describe('Debe entrar al apartado de solidaridad al sar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0030: Ir al apartado de solidaridad', () => {
        cy.wait(1000);
        var a_solidaridad = cy.get('a[href="solidaridad.php"]');
        a_solidaridad.click(); 
    });
})