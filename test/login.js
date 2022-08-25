const { assert, expect } = require('chai');
const { Browser } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { waitForUrl } = require('selenium-webdriver/http/util');
const loginPage = require('../test/elements/LoginPage');

describe('login page', () => {
	let login;
	beforeEach(async () => {
		driver = await new Builder().forBrowser('firefox').build();
		login = new loginPage(driver);
		await login.load();
	});
  afterEach(async () => {
    await driver.quit()
  } )
	it('displays error msg when inputs are empty', async () => {
		await login.getTermsBox();
		await login.getSignInBtn();
		await driver.sleep(3000);
		await login.getErrorMsg().then((text) => {
			expect(text).to.equal('Invalid Username/Password Combination');
		});
	});
	it('displays error msg with invalid credentials', async () => {
		await login.invalidCredentials();
		await login.getErrorMsg().then((text) => {
			expect(text).to.equal('Invalid Username/Password Combination');
		});
	});
	it('valid credentials navigates to homepage', async () => {
		await login.validCredentials();
		await await driver
			.findElement(By.css('h2:nth-child(1)'))
			.getText()
			.then((text) => {
				expect(text).to.equal('Homepage');
			});
	});
});
