export const isAllFieldEntered = (
  ...fields: (string | undefined)[]
): boolean => {
  return fields.every((field) => field && field?.trim()?.length > 1);
};
