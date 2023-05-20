// ///<reference types ="Cypress"/>
// describe("automate automationteststore.com page",() => {
//   it ("Should be able to submit a successfull submishion via contact us form",() =>{
//  //cypress code
//  cy.visit("https://automationteststore.com")
//  cy.get('#customer_menu_top > li > a').click()
//  cy.get('#accountFrm > fieldset > .btn').click();
//  cy.get('#AccountFrm_firstname').type("asa11311");
//  cy.get('#AccountFrm_lastname').type("mina11312");
//  cy.get('#AccountFrm_email').type ("asmintes@mail.ru");
//  cy.get('#AccountFrm_telephone').type("24852561");
//  cy.get('#AccountFrm_fax').type ("25145961");
//  cy.get('#AccountFrm_company').type("test min");
//  cy.get('#AccountFrm_address_1').type("test1");
//  cy.get('#AccountFrm_address_2').type("test11");
//  cy.get('#AccountFrm_city').type("Yerevan");
//  cy.get('#AccountFrm_postcode').type("21212")
//  cy.get('#AccountFrm_country_id').select('Armenia')
// cy.get('#AccountFrm_zone_id').select('Yerevan')
//  cy.get('#AccountFrm_loginname').type("Asyamin1111");
//  cy.get('#AccountFrm_password').type("mitest12test")
//  cy.get('#AccountFrm_confirm').type("mitest12test")
//  cy.get('#AccountFrm_newsletter0').click()
//  cy.get('#AccountFrm_agree').click()
//  cy.get('.col-md-2 > .btn').click()
//  cy.get('#maincontainer > .container-fluid').should('exist')
// });
// })

// //test case2
// describe("automate automationteststore.com page",() => {
//   it ("product list will shown ",() =>{
//     cy.visit("https://automationteststore.com/")
//     cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
//     cy.url().should('eq', 'https://automationteststore.com/index.php?rt=product/category&path=68')
//     cy.get('ul.thumbnails > :nth-child(1) > :nth-child(1) > img').click()
//     cy.get('.maintext').should('exist')
//     cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click() 
//     cy.url().should('eq', 'https://automationteststore.com/index.php?rt=product/product&product_id=116')
//     cy.get('#option344747').click()
//     cy.get('#option345').select('red')
//     cy.get('.cart').click()
//     cy.get('.product-list').should('exist')
//   })
// })


// // //test case 3
// describe("automate automationteststore.com page",() => {
//   it ("Should be able to submit a successfull submishion via contact us form",() =>{
//     cy.visit("https://automationteststore.com/")
//     cy.get("[class*='topcart'] span[class*='label']").then(
//       ($num1) => {
//     cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
//     const totalCountBefore = parseInt($num1.text());
//     cy.get('.dropdown-toggle > .label').should("have.text", totalCountBefore + 1)                 
//   })
// })
// })
 //test case 4
 describe(" automate https://webdriveruniversity.com/ page",() => {
it ("must successfully enter the contact us section",() => {
  cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
  cy.get('.section_header').should("exist");
  cy.get('[name="first_name"]').type("test1");
  cy.get('[name="last_name"]').type("test2");
  cy.get('[name="email"]').type("as@mail.ru");
  cy.get('textarea.feedback-input').type("test for QA Asya");
  cy.get('[type="submit"]').click()
  cy.get('h1').should('have.text','Thank You for your Message!')
})
 })



