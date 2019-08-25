$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyApplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Tazirina Awwal"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: Two attempts of Login and one new user Signup"
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    }
  ],
  "line": 20,
  "name": "Test Facebook Smoke Scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "## First Login Attempt"
    }
  ],
  "line": 23,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Open Chrome and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I Enter a Valid \"pntautomation@pnt.com\" and Valid \"12345\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should be able to Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Chrome_and_Start_Application()"
});
formatter.result({
  "duration": 10466346667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pntautomation@pnt.com",
      "offset": 17
    },
    {
      "val": "12345",
      "offset": 51
    }
  ],
  "location": "SmokeTest.I_Enter_a_Valid_Username_and_Valid_Password(String,String)"
});
formatter.result({
  "duration": 3307288445,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.User_should_be_able_to_Login_Successfully()"
});
formatter.result({
  "duration": 5522096444,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "## Second Login Attempt"
    }
  ],
  "line": 29,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Open Chrome and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Enter a Valid \"pnt@test-qa.com\" and Valid \"Facebook$\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should be able to Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Chrome_and_Start_Application()"
});
formatter.result({
  "duration": 11073363111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pnt@test-qa.com",
      "offset": 17
    },
    {
      "val": "Facebook$",
      "offset": 45
    }
  ],
  "location": "SmokeTest.I_Enter_a_Valid_Username_and_Valid_Password(String,String)"
});
formatter.result({
  "duration": 3244292445,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.User_should_be_able_to_Login_Successfully()"
});
formatter.result({
  "duration": 12542614667,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 34,
      "value": "## New User SignUp"
    }
  ],
  "line": 35,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Open Chrome and Start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I Enter a Valid \"Pnt\" and Valid \"Student\" and Valid \"pnt@test-qa.com\" and Valid \"Facebook$\" and Valid \"Sep\" and Valid \"10\" and Valid \"20\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User should be able to Signup Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_Chrome_and_Start_Application()"
});
formatter.result({
  "duration": 7635957778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pnt",
      "offset": 17
    },
    {
      "val": "Student",
      "offset": 33
    },
    {
      "val": "pnt@test-qa.com",
      "offset": 53
    },
    {
      "val": "Facebook$",
      "offset": 81
    },
    {
      "val": "Sep",
      "offset": 103
    },
    {
      "val": "10",
      "offset": 119
    },
    {
      "val": "20",
      "offset": 134
    }
  ],
  "location": "SmokeTest.I_Enter_a_Valid_Firstname_and_Valid_Lastname_and_Valid_Mobile_and_Valid_Newpwd_and_Valid_Month_and_Valid_Day_and_Valid_Year(String,String,String,String,String,String,int)"
});
formatter.result({
  "duration": 1294085778,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#u_0_8\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027LAPTOP-5D49A3S5\u0027, ip: \u0027192.168.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\TAZIRI~1.AWW\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:51593}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 899fecec597b3c6da3d1377d6f7e861c\n*** Element info: {Using\u003did, value\u003du_0_8}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.SmokeTest.I_Enter_a_Valid_Firstname_and_Valid_Lastname_and_Valid_Mobile_and_Valid_Newpwd_and_Valid_Month_and_Valid_Day_and_Valid_Year(SmokeTest.java:63)\r\n\tat ✽.When I Enter a Valid \"Pnt\" and Valid \"Student\" and Valid \"pnt@test-qa.com\" and Valid \"Facebook$\" and Valid \"Sep\" and Valid \"10\" and Valid \"20\"(MyApplication.feature:37)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SmokeTest.User_should_be_able_to_Signup_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});