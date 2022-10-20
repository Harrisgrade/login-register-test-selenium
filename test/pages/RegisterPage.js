const SUBMIT_BTN = {css: '#submitBtn'}
const MSG = {xpath: '//small'}
const NAME = {css: '#user'}
const USERNAME = {css: '#username'}
const EMAIL = {css: '#email'}
const PASSWORD = {css: '#password'}
const PASSWORD_CONFIRM = {css: '#password2'}

const INPUT_BOARDER = {xpath: '//input'}

class RegisterPage {
  constructor(driver) {
    this.driver = driver
  }

  async load() {
    await this.driver.get('http://localhost:3000/register.html')
  }
  async inputBoarder() {

  }
  async invalidCredentials() {
    await this.driver.findElement(NAME).sendKeys('Ash J. Williams');
    await this.driver.findElement(USERNAME).sendKeys('the chosen one');
    await this.driver.findElement(EMAIL).sendKeys('Klaatu@Barada.cough');
    await this.driver.findElement(PASSWORD).sendKeys('S-Mart');
    await this.driver.findElement(PASSWORD_CONFIRM).sendKeys('S-Mart');
    await this.driver.findElement(SUBMIT_BTN).click({force: true});
  }
  async validCredentials() {
    await this.driver.findElement(NAME).sendKeys('Ash J. Williams');
    await this.driver.findElement(USERNAME).sendKeys('the chosen one');
    await this.driver.findElement(EMAIL).sendKeys('Klaatu@Barada.cough');
    await this.driver.findElement(PASSWORD).sendKeys('S-Mart');
    await this.driver.findElement(PASSWORD_CONFIRM).sendKeys('S-Mart');
    await this.driver.findElement(SUBMIT_BTN).click({force: true});
  }
  
  async getSubmitBtn() {
    await this.driver.findElement(SUBMIT_BTN).click({force: true});

  }
  async getMsg() {
    return await driver.findElements(MSG)
   
      
  }
  async successMsg(){

  }
}

module.exports = RegisterPage