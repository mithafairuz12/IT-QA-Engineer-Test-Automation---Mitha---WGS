import SauceDemoPage from '../page objects/pages/SauceDemoPage'

const sauceDemoPage = new SauceDemoPage


fixture `Open Sauce Demo website`
    .page `https://www.saucedemo.com/`

//get value
//simpan ke variable

test('Login to Sauce Demo using standard_user',async t=>{
    sauceDemoPage.loginSauceDemo("standard_user", "secret_sauce")
})

test('Checkout product Sauce Labs Backpack',async t=>{
    sauceDemoPage.loginSauceDemo("standard_user", "secret_sauce")
    //get harga produk
    sauceDemoPage.addToCart()
    sauceDemoPage.checkoutProduct()
    sauceDemoPage.recipientData("Lee", "Kim", "213444")
    await t
    //end
    .expect(sauceDemoPage.checkoutComplete.visible).ok()
    .expect(sauceDemoPage.cartBadge.visible).notOk()
})