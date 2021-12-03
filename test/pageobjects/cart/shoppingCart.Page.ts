class ShoppingCartSummary {
    get shoppingCartHeader() { return $('#cart_title') }
    get clickingOnProductProceedToCheckOutButton() { return $('//a[@class="button btn btn-default standard-checkout button-medium"]') }
    async proceedtoCheck() {
        await this.clickingOnProductProceedToCheckOutButton.click()
    }
}
export default new ShoppingCartSummary()