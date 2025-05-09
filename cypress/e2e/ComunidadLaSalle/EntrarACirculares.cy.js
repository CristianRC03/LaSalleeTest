describe('Debe entrar al apartado de circulares al sar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0032: Ir al apartado de circulares', () => {
        cy.wait(1000);
        var a_circulares = cy.get('a[href="circulares.php"]');
        a_circulares.click(); 
    });
})