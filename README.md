**Calculator**

	This is the automation repository for calculator application. This tests are for validating the calculator feature 

**Tests**

***How do I run all of the smoke tests?***
	
	After cloning or downloading the source repository, cd into the automated-tests-calculator directory and do the following:
		* npm install
		* npm i selenium-standalone
		* npm i faker
		* npm i chromedriver
		* npm install -g codeceptjs
		
	The above commands will install all the dependancies needed to run the tests
		
		
	`***initiate test run***`
		To initiate a test run you have to first start selenium standalone in a seperate terminal by using this comand:
			* selenium-standalone start
			
		Navigate back to the terminal window with your project root and run the following commands:
		
			* codeceptjs init (this command will initiate codeseptjs. There will be some prompts when you run this command for the first time, just click Enter) 
			* codeceptjs run (this command will run all the tests)
			
			
***How to run individual tests***

	The test scenarios have annotations that can help a user run a specific scrnario from a test folder
		Example:
			As a tester I only want to run only one scenario in calc_test, add a tag in scenario and use that to run the test. I would write the following command:
				- codeceptjs run --grep @ (this command will only run the test with  annotation @)
	
							
	To run tests on debugg mode run the following command:
				- codeceptjs run regression --verbose		
				
    



