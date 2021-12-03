class PaymentPage {
    get paymentMethodText() { return $('.page-heading') }
    get clickOnPaymentOptionButton() { return $('.bankwire') }
    get clickOnConfirmOderButton() { return $('//span[text()="I confirm my order"]') }
    async paymentOptions() {
        await this.clickOnPaymentOptionButton.click()
    }
    async confirmOrder() {
        await this.clickOnConfirmOderButton.click()
    }
}
export default new PaymentPage()