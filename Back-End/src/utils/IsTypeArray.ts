import type { TypeHelpOptions, TypeOptions } from 'class-transformer';
import { IsArray, type ValidationOptions } from 'class-validator';
import 'reflect-metadata';
import { IsType } from './IsType';

/**
 * Custom decorator that validate that the property is an array,
 * is defined, and each item validates against a specific class
 */
export const IsTypeArray = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  typeFunction?: (type?: TypeHelpOptions) => Function,
  validationOptions?: ValidationOptions,
  typeOptions?: TypeOptions,
  // eslint-disable-next-line @typescript-eslint/ban-types
): ((object: Object, propertyName: string) => void) => {
  const isTypeFn = IsType(
    typeFunction,
    { ...validationOptions, each: true },
    typeOptions,
  );
  const isArrayFn = IsArray(validationOptions);

  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, propertyName: string) => {
    isTypeFn(object, propertyName);
    isArrayFn(object, propertyName);
  };
};
