describe("NottiGames Web UI Automation", function() {
	
	it("Admin Login Sucessfull", function() {
	

		browser.get("http://d3i3o4yq4960nz.cloudfront.net/#/auth/login");
		var email =element(by.id("input-email"));
		email.sendKeys("ashish.bhatt@taazaa.com");
		var passwd = element(by.id("input-password"));
		passwd.sendKeys("ashish");
		var button= element(by.buttonText("Sign In"));
		button.click();
		expect(browser.getTitle()).toEqual('NottiGames-Admin');
//		console.log("Test Passed")
	})
	
})