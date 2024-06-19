describe("login for HSBC", () => {
    it("should visit HSBC and verify logo", () => {
        cy.visit("https://www.hsbc.co.in/");
        // verify logo
        cy.xpath("/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/div/h1/img");
        // try to click on login button
        cy.xpath("/html/body/div[2]/div/header/div[4]/div/div[1]/div/div/div/div/div/nav/ul/li[5]/div/a[1]").click();
        // there is no login button on this page in cypress, so this test fails
    })
})