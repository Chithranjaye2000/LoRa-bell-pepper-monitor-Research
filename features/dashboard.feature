
Feature: Bell Pepper Monitor Login

  Scenario: Open the monitoring application
    Given the user opens the monitoring application
    Then the application page should be visible

  Scenario: Login with valid details
    Given the user opens the monitoring application
    When the user enters valid email and password
    And the user clicks the login button
    Then the user should be redirected to the dashboard

  Scenario: Login with invalid email format
    Given the user opens the monitoring application
    When the user enters an invalid email format
    And the user clicks the login button
    Then the browser should prevent form submission

  Scenario: Empty Login Form Validation
    Given the user opens the monitoring application
    When the user leaves email and password empty
    And the user clicks the login button
    Then the browser should prevent form submission
    And both login fields should be required

  Scenario: Password Field Masking
    Given the user opens the monitoring application
    Then the password field should be masked

  Scenario: Login Button Verification
    Given the user opens the monitoring application
    Then the login button should be visible and enabled

  