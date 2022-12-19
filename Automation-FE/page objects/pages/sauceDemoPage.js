import {Selector, t} from 'testcafe'

class SauceDemoPage{
    constructor(){

        //Login Page
        this.standardUser = Selector("div").withText('standard_user')
        this.password = Selector("div").withText('secret_sauce')
        this.usernameField = Selector("input").withAttribute('data-test', 'username')
        this.passwordField = Selector("input").withAttribute('data-test', 'password')
        this.loginButton = Selector("input").withAttribute('data-test', 'login-button')
        //Products Page
        this.peekIcon = Selector(".peek")
        this.itemPrice = Selector(".inventory_item_price")
        this.addBackpackToCartButton = Selector("button").withAttribute('data-test', 'add-to-cart-sauce-labs-backpack')
        this.cartIcon = Selector(".shopping_cart_link")
        this.cartBadge = Selector(".shopping_cart_badge")
        //Cart Page
        this.cartLlist = Selector(".cart_list")
        this.cartItem = Selector(".cart_item")
        this.checkoutButton = Selector("button").withAttribute('data-test', 'checkout')
        //Checkout Information Page
        this.checkoutInfo = Selector(".checkout_info")
        this.firstNameField = Selector("input").withAttribute('data-test', 'firstName')
        this.lastNameField = Selector("input").withAttribute('data-test', 'lastName')
        this.postalCodeField = Selector("input").withAttribute('data-test', 'postalCode')
        this.continueButton = Selector("input").withAttribute('data-test', 'continue')
        //Summary Page
        this.checkoutSummary = Selector("#checkout_summary_container")
        this.finishButton = Selector("button").withAttribute('data-test', 'finish')      
        //Checkout Complete Page
        this.checkoutComplete = Selector("#checkout_complete_container")    
    }

    async loginSauceDemo(username, password){
        await t
        .click(this.usernameField)
        .typeText(this.usernameField,username,{ paste: true, replace: true })
        .click(this.passwordField)
        .typeText(this.passwordField,password,{ paste: true, replace: true })
        .click(this.loginButton)
        .expect(this.peekIcon.visible).ok()
    }

    async addToCart(){
        await t
        .click(this.addBackpackToCartButton)
        .expect(this.cartBadge.visible).ok()
        .click(this.cartIcon)
        .expect(this.cartLlist.visible).ok()
        .expect(this.cartItem.find('div').find('a').find('div').innerText).eql('Sauce Labs Backpack')
    }

    async checkoutProduct(){
        await t
        .click(this.checkoutButton)
        .expect(this.checkoutInfo.visible).ok()
    }

    async recipientData(firstName, lastName, postalCode){
        await t
        .typeText(this.firstNameField,firstName,{ paste: true, replace: true })
        .typeText(this.lastNameField,lastName,{ paste: true, replace: true })
        .typeText(this.postalCodeField,postalCode,{ paste: true, replace: true })
        .scrollIntoView(this.continueButton)
        .click(this.continueButton)
        .expect(this.checkoutSummary.visible).ok()
        .click(this.finishButton)
    }
}

export default SauceDemoPage