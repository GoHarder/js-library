/**
 * A library of validation functions.
 * @packageDocumentation
 */

/**
 * Verifies if a value is a boolean.
 * @param value - The value to verify.
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

/**
 * Verifies if a value is a finite number.
 * @param value - The value to verify.
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number' && !isNaN(value) && isFinite(value);

/**
 * Verifies if a value is a finite integer.
 * @param value - The value to verify.
 */
export const isInteger = (value: unknown): value is number => isNumber(value) && parseInt(`${value}`) === Number(value);

/**
 * Verifies if a value is an array.
 * @param value - The value to verify.
 */
export const isArray = (value: unknown): value is any[] => typeof value === 'object' && Array.isArray(value);

/**
 * Verifies if a value is an object.
 * @param value - The value to verify.
 */
export const isObject = (value: unknown): value is object => typeof value === 'object' && !Array.isArray(value);

/**
 * Verifies if a value is a non empty string.
 * @param value - The value to verify.
 */
export const isString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;

/**
 * Verifies if a value is an email string.
 * @param value - The value to verify.
 */
export const isEmail = (value: unknown): value is string => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!isString(value)) return false;
  return regex.test(value);
};

/**
 * Verifies if a value is a valid password string.
 *
 * Password requirements:
 * - special character ~!\@#$%^&*()_+-=
 * - number
 * - capital letter
 * - lowercase letter
 * - the string is between 8 and 15 characters long
 *
 * @param value - The value to verify.
 */
export const isPassword = (value: unknown): value is string => {
  const regex = /^(?=.*[~!@#$%^&*()_\+\-\=])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,15}$/;
  if (!isString(value)) return false;
  return regex.test(value);
};

/**
 * The schema object used for the `isSchema` function.
 */
export interface Schema {
  [key: string]: (value: unknown) => boolean;
}

/**
 * Verifies if an object matches a schema.
 * @param obj - The object to validate.
 * @param schema - The schema used to validate.
 */
export const isSchema = <T extends object>(obj: T, schema: Schema) => {
  const errors: string[] = [];

  for (const key in obj) {
    const test = schema[key](obj[key]);
    if (!test) errors.push(key);
  }

  return errors.length === 0 ? { valid: true } : { valid: false, errors };
};
