# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)  
Option 1  

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.  
No. To test this message feature, you need to test how 2 or more components of your app work (ie might have to test the send message and recieve message(and their interactions with each other), and any other methods that might be involved in sending a message). Thus, according to the Lab 8 right up pro's and con's of unit testing, unit testing may not properly test the message method.  

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters  
Yes. The reason why unit testing would work best for this feature is because there are probably not many moving parts in this method, and can be easily isolated from the rest of the app, thus can be easily singled out and tested on.  

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?  
The tests will run normally but will there is not a browser UI  

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?  
```
beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
    await page.click('header > img');
    await page.waitForTimeout(500);
});
```

