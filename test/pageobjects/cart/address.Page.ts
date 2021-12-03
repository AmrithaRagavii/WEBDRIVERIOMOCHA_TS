class Address {
    get addressText() { return $('.page-heading') }
    get CheckoutButton() { return $('//button[@class="button btn btn-default button-medium"]') }
    async checkingout() {
        await this.CheckoutButton.click()
    }
}
export default new Address()