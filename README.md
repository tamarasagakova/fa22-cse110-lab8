# Lab 8 

Lab was done individually by Tamara Sagakova

1) **Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**
   - I would fit my automated tests within a Github action that runs whenever code is pushed to ensure that the tests run consistently and automatically.
2) **Would you use an end to end test to check if a function is returning the correct output?**
   - No, since E2E testing is a method that involves testing an application's workflow from beginning to end. A unit test would be more suitable.
3) **Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**
   - No, a unit test would only focus on functional verification of a *unit*, meaning that a unit test can only check functionality of only one feature (e.g. unit test can be used to check if a message can be sent to another user). In order to test the "message" feature of a messaging application, I would use E2E testing that would simulate user writing and sending a message, so the feature can be tested from beginning to end. 
4) **Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**
   - Yes, a unit test would be a good choice to test the "max message length' feature of a messaging application since here we want to test a functionality of a individual unit of a larger "message" feature that can be encapsulated easily. 
