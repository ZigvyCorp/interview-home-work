export const buildParametersUrl = (params) => {
  const cleanParams = cleanObject(params);
  const filteredParams = Object.entries(
    JSON.parse(JSON.stringify(cleanParams))
  );
  return filteredParams.map((param) => param.join("=")).join("&");
};

export function cleanObject(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // Check for null, undefined, empty object, or empty array
      if (
        value === null ||
        value === undefined ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (Array.isArray(value) && value.length === 0)
      ) {
        delete obj[key];
      } else if (typeof value === "object") {
        // Recursively clean nested objects
        cleanObject(value);

        // Remove empty nested objects after cleaning
        if (Object.keys(value).length === 0) {
          delete obj[key];
        }
      }
    }
  }

  return obj;
}
