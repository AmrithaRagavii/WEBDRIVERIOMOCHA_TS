class WomenSectionPage {
    get womenText() { return $('.sf-with-ul') }
    get hoverOnProduct() { return $('//img[@alt="Faded Short Sleeve T-shirts"]') }
    get addToCartButton() { return $('//a[@data-id-product="1"]') }
    get validatingAddToCartText() { return $('//h2') }
    get clickOnProceedToCartButton() { return $('//a[@title="Proceed to checkout"]') }
    async selectingProduct() {
        await this.hoverOnProduct.scrollIntoView()
        await this.addToCartButton.click()
    }
    async proceedtoCheckOut() {
        await this.clickOnProceedToCartButton.click()
    }
}
export default new WomenSectionPage()