export function assertType(value: any, expectedType: string): void {
  const actualType = typeof value;
  if (actualType !== expectedType) {
    throw new TypeError(`Expected type '${expectedType}', but received '${actualType}'.`);
  }
}