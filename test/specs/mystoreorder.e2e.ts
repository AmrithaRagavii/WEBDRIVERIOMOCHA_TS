import { internet } from "faker";
import addressPage from "../pageobjects/cart/address.Page";
import orderConfirmationPage from "../pageobjects/cart/orderConfirmation.Page";
import paymentPage from "../pageobjects/cart/payment.Page";
import shippingPage from "../pageobjects/cart/shippingPage";
import shoppingCartPage from "../pageobjects/cart/shoppingCart.Page";
import womenSection from "../pageobjects/menu/womenSection";
import myAccountPage from "../pageobjects/myAccount.Page";
import signInPage from "../pageobjects/signIn.Page";
import signUpPage from "../pageobjects/signup/signUp.Page";
import signUp from "../testdata/signUp.json";

describe('My Store Purchase', () => {
    it("This is the Home Page of MyStore", async () => {
        await signInPage.homePageLink()
    });
    it("I Click on Sign in", async () => {
        await signInPage.signIn()
    });
    it("I should see the Text as{ CREATE AN ACCOUNT }", async() => {
        await expect(signInPage.createAccountText).toHaveText("CREATE AN ACCOUNT");
    });
    it("I enter email address it should create account", async () => {
        await signInPage.enteringEmailAddress.setValue(internet.email())
        await signInPage.createAccount()
    });
    it("I should navigate and see the heading as{YOUR PERSONAL INFORMATION}", async () => {
        await expect(signUpPage.pageHeading).toHaveText("YOUR PERSONAL INFORMATION");
    });
    it("I enter the data in all fields as", async () => {
        await signUpPage.clickRadio();
        await signUpPage.setFirstAndLastName(signUp.name);
        await signUpPage.enteringPassword("randomData.internet.password(8)");
        await signUpPage.selectDateOfBirth(signUp.dob);
        await signUpPage.addressInfo(signUp.address);
        await signUpPage.setMobileNumber(signUp.mobileNumber)
        await signUpPage.setAliasAddress(signUp.aliasAddress)
    });
    it("I click on the Register Button", async () => {
        await signUpPage.clickRegister()
    });
    it("I should be navigated to another page and can see the text as{MY ACCOUNT}", async () => {
        await expect(myAccountPage.myAccountText).toHaveText("MY ACCOUNT");
    });
    it("I Click Women button", async () => {
        await myAccountPage.womenSectionButton()
    });
    it("I Click that product to add that into Cart", async () => {
        await womenSection.selectingProduct()
    });
    it("I should see the message{Product successfully added to your shopping cart}", async () => {
        await expect(womenSection.validatingAddToCartText).toHaveText("Product successfully added to your shopping cart")
    });
    it("I will click on proceed to Checkout", async () => {
        await womenSection.proceedtoCheckOut()
    });
    it("I should navigate to the page called{SHOPPING-CART SUMMARY}", async () => {
        await expect(shoppingCartPage.shoppingCartHeader).toHaveTextContaining("SHOPPING-CART SUMMARY")
    });
    it("I click to the Proceed for Checkout", async () => {
        await shoppingCartPage.proceedtoCheck()
    });
    it("I should navigate and validate the address page{ADDRESSES}", async () => {
        await expect(addressPage.addressText).toHaveText("ADDRESSES")
    });
    it("I click and proceed to Checkout", async () => {
        await addressPage.checkingout()
    });
    it("I navigate to next page and validate shipping details{SHIPPING}", async () => {
        await expect(shippingPage.shippingText).toHaveText("SHIPPING");
    });
    it("I check the terms and proceed to Checkout button", async () => {
        await shippingPage.clickCheckBox()
        await shippingPage.ProceedtoCart()
    });
    it("I should validate payments page{PLEASE CHOOSE YOUR PAYMENT METHOD}", async () => {
        await expect(paymentPage.paymentMethodText).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD");
    });
    it("I Choose payment type and click Confirm Order", async () => {
        await paymentPage.paymentOptions();
        await paymentPage.confirmOrder();
    });
    it("I navigate and see the Header as{ORDER CONFIRMATION}", async () => {
        await expect(orderConfirmationPage.orderConfirmationHeader).toHaveText("ORDER CONFIRMATION");
    });

});