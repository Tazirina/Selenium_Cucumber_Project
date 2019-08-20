package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {

	WebDriver driver;
			
	@Given("^Open Chrome and Start Application$")
	public void Open_Chrome_and_Start_Application() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Tazirina.Awwal\\Documents\\PNT\\SELENIUM\\Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://www.facebook.com");
		
	}

	@When("^I Enter a Valid \"([^\"]*)\" and Valid \"([^\"]*)\"$")
	public void I_Enter_a_Valid_Username_and_Valid_Password(String uname, String pass) throws Throwable {
	    
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("pass")).sendKeys(pass);
		Thread.sleep(6000);
	}

	@Then("^User should be able to Login Successfully$")
	public void User_should_be_able_to_Login_Successfully() throws Throwable {
	    
		driver.findElement(By.id("loginbutton")).click();
		Thread.sleep(6000);	
		driver.quit();
	}
		
}
