class SignUpPage {
    get pageHeading() { return $("//*[@id='account-creation_form']/div[1]/h3") }
    get radioButton() { return $("#id_gender1"); }
    get firstnameText() { return $("//label[@for='customer_firstname']"); }
    get firstName() { return $("//input[@id='customer_firstname']") }
    get lastnameText() { return $("//label[@for='customer_lastname']"); }
    get lastName() { return $("//input[@id='customer_lastname']") }
    get passwordText() { return $("//label[@for='passwd']"); }
    get password() { return $("//input[@id='passwd']") }
    get dateOfBirthText() { return $('//div[@class="form-group"]/label'); }
    get dobDay() { return $('//select[@id="days"]') }
    get dobMonth() { return $('#months') }
    get dobYear() { return $('//select[@id="years"]') }
    get yourAddressText() { return $('//h3[text()="Your address"]'); }
    get addressFirstNameText() { return $('//label[@for="firstname"]'); }
    get addressFirstName() { return $('//input[@id="firstname"]') }
    get addressLastnameText() { return $('//label[@for="lastname"]'); }
    get addressLastName() { return $('//input[@id="lastname"]') }
    get addressText() { return $('//label[@for="address1"]') }
    get address1() { return $('#address1') }
    get cityText() { return $('//label[@for="city"]'); }
    get city() { return $('//input[@name="city"]') }
    get stateText() { return $('//label[@for="id_state"]'); }
    get state() { return $('#id_state') }
    get zipPostalCodeText() { return $('//label[@for="postcode"]') }
    get zipCode() { return $('#postcode') }
    get countryText() { return $('//label[@for="id_country"]') }
    get country() { return $('#id_country') }
    get mobileNumberText() { return $('//label[@for="phone_mobile"]'); }
    get mobilePhone() { return $('#phone_mobile') }
    get aliasAddressText() { return $('//label[@for="alias"]'); }
    get aliasAddress() { return $('#alias') }
    get registerButton() { return $('#submitAccount') }
    async clickRadio() {
        await this.radioButton.click();
    }
    async setFirstAndLastName(name: { firstname: string, lastname: string }) {
        await this.firstName.setValue(name.firstname)
        await this.lastName.setValue(name.lastname)
    }
    async enteringPassword(userpw: string) {
        await this.password.setValue(userpw)
    }
    async selectDateOfBirth(dob: { day: number, month: number, year: number }) {
        await this.dobDay.selectByIndex(dob.day)
        await this.dobMonth.selectByAttribute('value', dob.month)
        await this.dobYear.selectByIndex(dob.year)
    }
    async addressInfo(address: { address1: string, city: string, state: number, pincode: number, country: string }) {
        await this.address1.setValue(address.address1);
        await this.city.setValue(address.city);
        await this.state.selectByAttribute('value', address.state);
        await this.zipCode.setValue(address.pincode);
        await this.country.selectByVisibleText(address.country);
    }
    async setMobileNumber(mobileNumber: number) {
        await this.mobilePhone.setValue(mobileNumber)
    }
    async setAliasAddress(myaddress: string) {
        await this.aliasAddress.setValue(myaddress)
    }
    async clickRegister() {
        await this.registerButton.click()
    }
}
export default new SignUpPage()