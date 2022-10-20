const TERMS_BOX = {css: '#terms'}
const SIGNIN_BTN = {css: '#signInBtn'}
const GETERROR_MSG = {css: 'small' }
const USERNAME = {css: '#user'}
const PASSWORD = {css: '#password'}

class LoginPage {
  constructor(driver) {
    this.driver = driver
  }

  async load() {
    await this.driver.get('http://localhost:3000/')
  }
  async invalidCredentials() {
    await this.driver.findElement(USERNAME).sendKeys('users');
    await this.driver.findElement(PASSWORD).sendKeys('1234');
    await this.driver.findElement(TERMS_BOX).click({force: true});
    await this.driver.findElement(SIGNIN_BTN).click({force: true});
  }
  async validCredentials() {
    await this.driver.findElement(USERNAME).sendKeys('user');
    await this.driver.findElement(PASSWORD).sendKeys('123');
    await this.driver.findElement(TERMS_BOX).click({force: true});
    await this.driver.findElement(SIGNIN_BTN).click({force: true});
  }
  async getTermsBox() {
    return await this.driver.findElement(TERMS_BOX).click({force: true});
  }
  async getSignInBtn() {
    return await driver.findElement(SIGNIN_BTN).click({force: true});
  }
  async getErrorMsg() {
    return await driver.findElement(GETERROR_MSG).getText();
  }
}

module.exports = LoginPage
