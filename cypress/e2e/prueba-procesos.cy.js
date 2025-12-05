describe("Centro de Eventos - Pruebas E2E reales", () => {
  
    // 1. La pagina principal carga correctamente
    it("Carga la página principal y muestra el título", () => {
      cy.visit("/");
      cy.contains("Centro de eventos").should("be.visible");
    });
  
    // 2. Muestra las cards de eventos
    it("Muestra al menos un evento", () => {
      cy.visit("/");
      cy.contains("Ver detalles").should("exist");
    });
  
    // 3. Permite abrir los detalles de un evento
    it("Permite abrir los detalles del evento", () => {
      cy.visit("/");
  
      cy.contains("Ver detalles").first().click();
  
      cy.contains("Detalle del evento").should("be.visible");
      cy.contains("Centro de eventos").should("be.visible");
    });
  
    // 4. Permite volver al home desde los detalles
    it("Permite volver al home", () => {
      cy.visit("/");
  
      cy.contains("Ver detalles").first().click();
  
      cy.contains("Centro de eventos").click();
  
      cy.contains("Centro de eventos").should("be.visible");
      cy.contains("Ver detalles").should("exist");
    });
  
  });
  