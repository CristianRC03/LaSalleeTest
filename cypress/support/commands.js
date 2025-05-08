Cypress.Commands.add('visitarLaSallePagina', () => {
    cy.visit('https://www.lasallebajio.edu.mx/')
})

Cypress.Commands.add('iniciarSesion', (matricula, contrasena) => {
    cy.wait(1000);
    var comunifdad_link = cy.get('div[id="login_link"]');
    comunifdad_link.click();
    cy.get('#frmLogin').within(() => {
        var input_matricula = cy.get('input[name="usuario"]');
        input_matricula.type(matricula);
        var input_contrasena = cy.get('input[name="pass"]');
        input_contrasena.type(contrasena);
        var button = cy.get('button[type="submit"]');
        button.click();
    });
})