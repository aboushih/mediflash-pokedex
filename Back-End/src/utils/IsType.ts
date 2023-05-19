import {
  Type,
  type TypeHelpOptions,
  type TypeOptions,
} from 'class-transformer';
import {
  IsDefined,
  IsObject,
  ValidateNested,
  type ValidationOptions,
} from 'class-validator';
import 'reflect-metadata';

/**
 * Custom decorator that validate that the property validates against a specific class
 *
 * ValidateNested from class-validator has two problems:
 * - it doesn't seem to enforce the existence of the object (We add @IsDefined)
 * - we need to specify type via the Type decorator from class-transformer
 * - it allows arrays, set, maps
 *
 * The following decorator combines all this into a single function
 */
export const IsType = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  typeFunction?: (type?: TypeHelpOptions) => Function,
  validationOptions?: ValidationOptions,
  typeOptions?: TypeOptions,
  // eslint-disable-next-line @typescript-eslint/ban-types
): ((object: Object, propertyName: string) => void) => {
  const isDefinedFn = IsDefined({
    ...validationOptions,
    message: '$property must be defined',
  });
  const isObjectFn = IsObject(validationOptions);
  const validateNestedFn = ValidateNested(validationOptions);
  const typeFn = Type(typeFunction, typeOptions);

  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, propertyName: string) => {
    typeFn(object, propertyName);
    validateNestedFn(object, propertyName);
    isObjectFn(object, propertyName);
    isDefinedFn(object, propertyName);
  };
};
