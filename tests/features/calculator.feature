Feature: Addition

    To know the sum of two number
    
    @test
    Scenario Outline: Add two numbers
        Given I have a service "add"
        And I have input "num1" as "<A>"
        And I have input "num2" as "<B>"
        When I submit the values
        Then The Expected result is "<C>"
        And Expected status code is 200
        Examples:
            | A  | B  | C  |
            | 1  | 2  | 3  |
            | 11 | 22 | 33 |