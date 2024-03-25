/**
 * A library of validation functions.
 * @packageDocumentation
 */
/**
 * Verifies if a value is a boolean.
 * @param value - The value to verify.
 */
export declare const isBoolean: (value: unknown) => value is boolean;
/**
 * Verifies if a value is a finite number.
 * @param value - The value to verify.
 */
export declare const isNumber: (value: unknown) => value is number;
/**
 * Verifies if a value is a finite integer.
 * @param value - The value to verify.
 */
export declare const isInteger: (value: unknown) => value is number;
/**
 * Verifies if a value is an array.
 * @param value - The value to verify.
 */
export declare const isArray: (value: unknown) => value is any[];
/**
 * Verifies if a value is an object.
 * @param value - The value to verify.
 */
export declare const isObject: (value: unknown) => value is object;
/**
 * Verifies if a value is a non empty string.
 * @param value - The value to verify.
 */
export declare const isString: (value: unknown) => value is string;
/**
 * Verifies if a value is an email string.
 * @param value - The value to verify.
 */
export declare const isEmail: (value: unknown) => value is string;
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
export declare const isPassword: (value: unknown) => value is string;
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
export declare const isSchema: <T extends object>(obj: T, schema: Schema) => {
    valid: boolean;
    errors?: undefined;
} | {
    valid: boolean;
    errors: string[];
};
