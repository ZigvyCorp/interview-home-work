export function serializeDate(originalDate) {
  return JSON.stringify(originalDate);
}

export function deserializeDate(serializedDate) {
  return new Date(serializedDate.replaceAll('"', ''));
}

export function serializeMap(originalMap) {
  return JSON.stringify(Array.from(originalMap.entries()));
}

export function deserializeMap(serializedMap) {
  // JSON.stringify(new Map()) = {} ~ object = fail
  if (serializedMap === JSON.stringify(new Map())) return new Map();
  return new Map(JSON.parse(serializedMap));
}
