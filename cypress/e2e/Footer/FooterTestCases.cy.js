describe('Test_1 Dirigirse al footer de la pagina', () => {
    beforeEach(() => {
        cy.visit('https://www.lasallebajio.edu.mx');
        cy.scrollTo('bottom');
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('TC0035 : Muestra "conócenos" en Deportes', () => {
        cy.contains('Campestre - León, Gto.').click();
        cy.contains('Deportes').click();
        cy.contains('conócenos').should('exist');
    });

    it('TC0036: Muestra "mejora continua" en Acreditaciones y membresias', () => {
        cy.contains('Campestre - León, Gto.').click();
        cy.contains('Acreditaciones y Membresías').click();
        cy.contains('mejora continua').should('exist');
    });

    it('TC0037: Muestra "introducción" en Becas', () => {
        cy.contains('Campestre - León, Gto.').click();
        cy.contains('Becas').click();
        cy.contains('introducción').should('exist');
    });

    it('TC0038: Muestra imagen del campus en Mapas de los campus', () => {
        cy.contains('Mapas de los campus').click();
        cy.contains('CAMPESTRE').click();
        cy.get('#drag')
            .should('be.visible')
            .and('have.css', 'background-image')
            .and('include', 'map_campestre_1.jpg');
    });

    it('TC0039: Muestra "directorio" en Directorio', () => {
        cy.contains('Directorio').click();
        cy.contains('directorio').should('exist');
    });


      it('TC0040: Muestra "AVISO DE PRIVACIDAD" en Aviso de Privacidad', () => {
        cy.contains('Campestre - León, Gto.').click();
        cy.contains('Aviso de Privacidad').click();
        cy.contains('AVISO DE PRIVACIDAD').should('exist');
    });
    it('TC0041: Muestra "Actuaría" en Actuaría', () => {
        cy.contains('Licenciaturas').click();
        cy.contains('a.a1', 'Actuaría').click();
        cy.contains('Actuaría').should('exist');
    });
    it('TC0042: Muestra "certificación en asesor de imagen personal" en certificación en asesor de imagen personal', () => {
        cy.contains('Diplomados, Cursos y Talleres').click();
        cy.contains('Certificación en asesor de imagen personal').click();
        cy.contains('Certificación en asesor de imagen personal').should('exist');
    });
    it('TC0043: Muestra "Endodoncia" en Endodoncia', () => {
        cy.contains('Especialidades').click();
        cy.contains('Endodoncia').click();
        cy.contains('Endodoncia').should('exist');
    });
    it('TC0044: Muestra "Derecho" en Derecho', () => {
        cy.contains('Doctorados').click();
        cy.contains('Derecho').click();
        cy.contains('Derecho').should('exist');
    });
    it('TC0045: Muestra "Introduction" en international dental program', () => {
        cy.contains('International Dental Program').click();
        cy.contains('Introduction').should('exist');
    });
    it('TC0046: Muestra "antecedentes " en Historia de la universidad', () => {
        cy.contains('Historia de la Universidad').click();
        cy.contains('antecedentes ').should('exist');
    });
    it('TC0047: Muestra "misión" en filosofía institucional', () => {
        cy.contains('Filosofía Institucional').click();
        cy.contains('Misión').should('exist');
    });
    it('TC0048: Muestra "líneas estratégicas 2024-2030" en planeación estratégica', () => {
        cy.contains('Planeación Estratégica').click();
        cy.contains('líneas estratégicas 2024-2030').should('exist');
    });
    it('TC0049: Muestra "formación integral" en formación integral', () => {
        cy.contains('Formación Integral').click();
        cy.contains('formación Integral ').should('exist');
    });
    it('TC0050: Muestra "mejora continua" en acreditaciones y Membresias', () => {
        cy.contains('Acreditaciones y Membresías').click();
        cy.contains('mejora continua').should('exist');
    });
    it('TC0051: Muestra "El legado Lasallista es una filosifa educativa" en Lasallistas en México y el mundo', () => {
        cy.contains('Lasallistas en México y el Mundo').click();
        cy.contains('El Legado Lasallista es una filosofía educativa ').should('exist');
    });
    it('TC0052: Muestra "La Universidad La Salle Bajío es una institución comprometida con la educación, inspirada en los valores de la herencia Lasallista" en Becas', () => {
        cy.contains('Becas').click();
        cy.contains('La Universidad La Salle Bajío es una institución comprometida con la educación, inspirada en los valores de la herencia Lasallista').should('exist');
    });
    it('TC0053: Muestra "El presente d ela tradicion. Arte popular guanajuatense " en Mi museo Universitario', () => {
        cy.contains('Mi Museo Universitario').click();
        cy.contains('El presente de la tradición. Arte popular guanajuatense').should('exist');
    });
})