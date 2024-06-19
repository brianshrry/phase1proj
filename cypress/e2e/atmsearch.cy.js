describe("ATM search for HSBC", () => {
    it("should search for ATMs", () => {
        cy.visit("https://www.hsbc.co.in/");
        // get link in footer to atm landing page
        cy.xpath("/html/body/footer/div[1]/div/div/nav/ul/li[2]/a").click();
        // verify url of branch & atm landing
        cy.url().should("include", "/ways-to-bank/branches/");
        // verify header of branch & atm landing
        cy.xpath("//h1[@class='A-TYP38L-RW-ALL text-container text ']").contains("Branches & ATMs")
        // click on button for branch & atm search page
        cy.xpath("/html/body/main/div[2]/div/div[1]/div/div/div[1]/div[1]/div/div/div/div[2]/div/div/a/span[1]").click();
        // type india in search box
        cy.get("#searchInput").type("india", { timeout: 5000 });
        // click on india in dropdown
        cy.get('#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc').click();
        // this fails because the dropdown element doesn't appear in cypress
    })
})