describe('Debe entrar al apartado de deportes al sar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0031: Ir al apartado de deportes', () => {
        cy.wait(1000);
        var a_deportes = cy.get('a[href="deportes.php"]');
        a_deportes.click(); 
    });
})