#Author: Tazirina Awwal
#Keywords Summary :
#Feature: Two attempts of Login and one new user Signup
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)


Feature: Test Facebook Smoke Scenario
  
  ## First Login Attempt
  	Scenario: Test login with valid credentials
    Given Open Chrome and Start Application
    When I Enter a Valid "pntautomation@pnt.com" and Valid "12345"
    Then User should be able to Login Successfully
   
  ## Second Login Attempt 
		Scenario: Test login with valid credentials
    Given Open Chrome and Start Application
    When I Enter a Valid "pnt@test-qa.com" and Valid "Facebook$"
    Then User should be able to Login Successfully
    
  ## New User SignUp
    Scenario: Test login with valid credentials
    Given Open Chrome and Start Application
    When I Enter a Valid "Pnt" and Valid "Student" and Valid "pnt@test-qa.com" and Valid "Facebook$" and Valid "Sep" and Valid "10" and Valid "20"
    Then User should be able to Signup Successfully
  