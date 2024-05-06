// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Test isPhoneNumber function
test('isPhoneNumber should return true for valid phone number', () => {
  expect(isPhoneNumber('111-222-3333')).toBe(true);
});
test('isPhoneNumber should return true for valid phone number', () => {
  expect(isPhoneNumber('187-189-7980')).toBe(true);
});

test('isPhoneNumber should return false for invalid phone number', () => {
  expect(isPhoneNumber('0000')).toBe(false);
});
test('isPhoneNumber should return false for invalid phone number', () => {
  expect(isPhoneNumber('124-235')).toBe(false);
});

// Test isEmail function
test('isEmail should return true for valid email', () => {
  expect(isEmail('siw031@ucsd.edu')).toBe(true);
});
test('isEmail should return true for valid email', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('isEmail should return false for invalid email', () => {
  expect(isEmail('1234@test')).toBe(false);
});
test('isEmail should return false for invalid email', () => {
  expect(isEmail('ucsducsd')).toBe(false);
});

// Test isStrongPassword function
test('isStrongPassword should return true for strong password', () => {
  expect(isStrongPassword('password12345')).toBe(true);
});
test('isStrongPassword should return true for strong password', () => {
  expect(isStrongPassword('ucsd_12345')).toBe(true);
});

test('isStrongPassword should return false for weak password', () => {
  expect(isStrongPassword('ppp')).toBe(false);
});
test('isStrongPassword should return false for weak password', () => {
  expect(isStrongPassword('1password')).toBe(false);
});

// Test isDate function
test('isDate should return true for valid date', () => {
  expect(isDate('05/05/2024')).toBe(true);
});
test('isDate should return true for valid date', () => {
  expect(isDate('12/01/2023')).toBe(true);
});

test('isDate should return false for invalid date', () => {
  expect(isDate('2023/01/01')).toBe(false);
});
test('isDate should return false for invalid date', () => {
  expect(isDate('20240505')).toBe(false);
});

// Test isHexColor function
test('isHexColor should return true for valid hex color', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});
test('isHexColor should return true for valid hex color', () => {
  expect(isHexColor('#f00')).toBe(true);
});

test('isHexColor should return false for invalid hex color', () => {
  expect(isHexColor('#0000')).toBe(false);
});
test('isHexColor should return false for invalid hex color', () => {
  expect(isHexColor('#abcefdh')).toBe(false);
});
