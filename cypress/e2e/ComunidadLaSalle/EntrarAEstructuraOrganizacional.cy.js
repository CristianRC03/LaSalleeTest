describe('Debe entrar al apartado de estructura organizacional y al dar click al mosaico', () => {
    beforeEach(() => {
        cy.visitarLaSallePagina();
        cy.fixture('user').then((user) => {
        cy.iniciarSesion(user.matricula, user.contrasena);
        });
    });
    
    it('TC0034: Ir al apartado de estructura organizacional', () => {
        cy.wait(1000);
        var a_estructura = cy.get('a[href="../somos/estructura.php"]');
        a_estructura.click();
    });
});