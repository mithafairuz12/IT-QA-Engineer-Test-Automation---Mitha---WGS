Feature: script automation for SiCepat Interview

  Background:
    * url 'https://jsonplaceholder.typicode.com'

  Scenario: get response status 200
    Given path 'posts'
    When method get
    Then status 200

  Scenario: get match response
    Given path 'posts' 
    When method get
    Then status 200

    * def first = response

    Given path 'posts', first.userId
    When method get
    Then status 200
    And match each response == { userId: "#notnull", id: "#number", title: "#string", body: "#string" }