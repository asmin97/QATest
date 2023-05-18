///<reference types ="Cypress"/>
describe("automate automationteststore.com page",() => {
    it ("Should be able to submit a successfull submishion via contact us form",() =>{
   //cypress code
   cy.visit("https://automationteststore.com")
   cy.get('#customer_menu_top > li > a').click()
   cy.get('#accountFrm > fieldset > .btn').click();
   cy.get('#AccountFrm_firstname').type("as11311");
   cy.get('#AccountFrm_lastname').type("min11312");
   cy.get('#AccountFrm_email').type ("asminte@mail.ru");
   cy.get('#AccountFrm_telephone').type("11254852561");
   cy.get('#AccountFrm_fax').type ("25145961");
   cy.get('#AccountFrm_company').type("test min");
   cy.get('#AccountFrm_address_1').type("test1");
   cy.get('#AccountFrm_address_2').type("test11");
   cy.get('#AccountFrm_city').type("Yerevan");
   cy.get('#AccountFrm_postcode').type("21212")
   cy.get('#AccountFrm_country_id').select('Armenia')
  cy.get('#AccountFrm_zone_id').select('Yerevan')
   cy.get('#AccountFrm_loginname').type("Asyam1111");
   cy.get('#AccountFrm_password').type("mitest12341test")
   cy.get('#AccountFrm_confirm').type("mitest12341test")
   cy.get('#AccountFrm_newsletter0').click()
   cy.get('#AccountFrm_agree').click()
   cy.get('.col-md-2 > .btn').click()
   cy.get('#maincontainer > .container-fluid').should('exist')
  });
  })
  
  //test case2
  describe("automate automationteststore.com page",() => {
    it ("product list will shown ",() =>{
      cy.visit("https://automationteststore.com/")
      cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
      cy.url().should('eq', 'https://automationteststore.com/index.php?rt=product/category&path=68')
      cy.get('ul.thumbnails > :nth-child(1) > :nth-child(1) > img').click()
      cy.get('.maintext').should('exist')
      cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click() 
      cy.url().should('eq', 'https://automationteststore.com/index.php?rt=product/product&product_id=116')
      cy.get('#option344747').click()
      cy.get('#option345').select('red')
      cy.get('.cart').click()
      cy.get('.product-list').should('exist')
    })
  })
  // //test case 3
  // describe("automate automationteststore.com page",() => {
  //   it ("it will change the currency",() =>{
  //     cy.visit("https://automationteststore.com/")
  //     cy.get('.block_6 > .nav > .dropdown > .dropdown-toggle > .caret').select('$ US DOLLAR')
      
  //   })
  // })
  
  // //test case 4
  describe("automate automationteststore.com page",() => {
    it ("Should be able to submit a successfull submishion via contact us form",() =>{
      cy.visit("https://automationteststore.com/")
      cy.get("[class*='topcart'] span[class*='label']").then(
        ($num1) => {
      cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
      const totalCountBefore = parseInt($num1.text());
      cy.get('.dropdown-toggle > .label').should("have.text", totalCountBefore + 1)                 
    })
  })
  })
  
  //test case 5
  
  //test case 
  // describe("automate https://webdriveruniversity.com/ page",()=>{
  // it ("Should be able to submit a successfull submishion via contact us form",() =>{
  //   cy.visit("https://webdriveruniversity.com/")
  //   cy.get('#udemy-promo-thumbnail').should("exist")
  //   cy.get('#to-do-list > .thumbnail > .section-title > h1').click()
  //   cy.get("fa fa-plus" ).should("exist")
  //   "fa fa-plus" 
  // })
  // })
  