Feature: Addition

    To know the sum of two number

    Scenario Outline: Add two numbers
        Given I have input A as <A>
        And I have input B as <B>
        When I submit the values
        Then The result is <C>
        Examples:
            | A  | B  | C  |
            | 1  | 2  | 3  |
            | 11 | 22 | 33 |