// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone Number
test('phone number is valid', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('phone number is valid', () => {
    expect(functions.isPhoneNumber("456-7890")).toBe(true);
});
test('phone number is not valid', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});
test('phone number is not valid', () => {
    expect(functions.isPhoneNumber("4567890")).toBe(false);
});

// Email
test('email is valid', () => {
    expect(functions.isEmail("me@gmail.com")).toBe(true);
});
test('email is valid', () => {
    expect(functions.isEmail("123m@yandex.ru")).toBe(true);
});
test('email is not valid', () => {
    expect(functions.isEmail("me.com")).toBe(false);
});
test('email is not valid', () => {
    expect(functions.isEmail("123@icloud")).toBe(false);
});

// Password
test('password is valid', () => {
    expect(functions.isStrongPassword("my_password")).toBe(true);
});
test('password is valid', () => {
    expect(functions.isStrongPassword("password098")).toBe(true);
});
test('password is not valid', () => {
    expect(functions.isStrongPassword("222")).toBe(false);
});
test('password is not valid', () => {
    expect(functions.isStrongPassword("me")).toBe(false);
});

// Date
test('date is valid', () => {
    expect(functions.isDate("2/2/2023")).toBe(true);
});
test('date is valid', () => {
    expect(functions.isDate("11/19/2023")).toBe(true);
});
test('date is not valid', () => {
    expect(functions.isDate("2/23")).toBe(false);
});
test('date is not valid', () => {
    expect(functions.isDate("11/19/23")).toBe(false);
});

// Hex codes
test('hex is valid', () => {
    expect(functions.isHexColor("#ABCDEF")).toBe(true);
});
test('hex is valid', () => {
    expect(functions.isHexColor("#ABC")).toBe(true);
});
test('hex is not valid', () => {
    expect(functions.isHexColor("A")).toBe(false);
});
test('hex is not valid', () => {
    expect(functions.isHexColor("#ABCDEFG")).toBe(false);
});