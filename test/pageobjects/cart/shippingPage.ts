class ShippingPage {
    get shippingText() { return $('//h1') }
    get selectingCheckBox() { return $('#cgv') }
    get ProceedToCheckOutButton() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
    async ProceedtoCart() {
        await this.ProceedToCheckOutButton.click()
    }
    async clickCheckBox() {
        await this.selectingCheckBox.click()
    }
}
export default new ShippingPage()