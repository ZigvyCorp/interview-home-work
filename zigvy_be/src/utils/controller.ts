export function removeEmpty(obj: { [key: string]: any }) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => {
      if (v !== null || v !== undefined) {
        return v;
      }
    })
  );
}
