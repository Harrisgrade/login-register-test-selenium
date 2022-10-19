const { assert, expect } = require('chai');
const { Builder, By, } = require('selenium-webdriver');
const registerPage = require('./pages/RegisterPage');

describe('register page', () => {
	let register;
	beforeEach(async () => {
		driver = await new Builder().forBrowser('firefox').build();
		register = new registerPage(driver);
		await register.load();
	});
  afterEach(async () => {
    await driver.quit()
  });
	it('displays error msg when inputs are empty', async () => {
		await register.getSubmitBtn();
		await register.getMsg().then(async(text) => {
			let txt = await text[0].getText();
			expect(txt).to.equal('Name cannot be blank');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[1].getText();
			expect(txt).to.equal('Username cannot be blank');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[2].getText();
			expect(txt).to.equal('Email cannot be blank');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[3].getText();
			expect(txt).to.equal('Password cannot be blank');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[4].getText();
			expect(txt).to.equal('Password Confirm cannot be blank');
		});
		
	});
	it('form validation', async () => {
		await register.validCredentials();

		await register.getMsg().then(async(text) => {
			let txt = await text[0].getText();
			expect(txt).to.equal('Success');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[1].getText();
			expect(txt).to.equal('Success');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[2].getText();
			expect(txt).to.equal('Valid Email');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[3].getText();
			expect(txt).to.equal('Valid Password');
		});
		await register.getMsg().then(async(text) => {
			let txt = await text[4].getText();
			expect(txt).to.equal('Passwords Match');
		});
		
});
});