describe('Debe entrar al apartado de bolsa de trabajo y al dar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0035: Ir al apartado de bolsa de trabajo', () => {
        cy.wait(1000);
        var a_estructura = cy.get('a[href="../servicios/vinculacion.php#panel-4"]');
        a_estructura.click();
    });
});
// <a href="../servicios/vinculacion.php#panel-4">Bolsa de Trabajo</a>