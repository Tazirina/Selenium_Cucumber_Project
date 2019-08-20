#Author: Tazirina Awwal
#Keywords Summary :
#Feature: List of scenarios.
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
#Sample Feature Definition Template

Feature: Test Facebook Smoke Scenario
  
  	Scenario: Test login with valid credentials
    Given Open Chrome and Start Application
    When I Enter a Valid "taz@avwonders.com" and Valid "taz2019"
    Then User should be able to Login Successfully
   
		Scenario: Test login with valid credentials
    Given Open Chrome and Start Application
    When I Enter a Valid "taz2@avwonders.com" and Valid "taz22019"
    Then User should be able to Login Successfully
  