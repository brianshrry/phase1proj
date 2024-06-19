describe("page title for HSBC", () => {
    it("should verify page title", () => {
        cy.visit("https://www.hsbc.co.in/");
        cy.xpath("/html/head/title").contains("HSBC India - Credit Cards, NRI Services, Saving and Deposit");
        // this was done separately from the login page scenario, because it was failing when included with that one
    })
})