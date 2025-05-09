describe('Debe entrar al apartado de cultura al sar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0029: Ir al apartado de cultura', () => {
        cy.wait(1000);
        var a_cultura = cy.get('a[href="cultura.php"]');
        a_cultura.click(); 
    });
})