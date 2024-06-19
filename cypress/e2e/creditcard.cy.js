describe("credit card flow for HSBC", () => {
    it("should verify credit card flow", () => {
        cy.visit("https://www.hsbc.co.in/");
        // hover and click on banking dropdown menu option
        cy.xpath("/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/nav/ul/li[1]").click();
        // click on credit cards link
        cy.xpath("/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/nav/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/a/h2").click();
        // verify header text
        cy.xpath("/html/body/main/div[1]/div/div/div/div/div/div/div/h1").contains("Credit cards");
        // the next instructions in the assignment are to validate the apply now button,
        // but there is no such button on the page, even in a normal browser, unlike with cypress
        // where in another test case, the login button existed in normal browsers, but not on cypress 
    })
})