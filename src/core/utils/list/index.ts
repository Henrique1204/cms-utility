export const itemExistsInList = <T extends Record<string, any>>(
  items: T[],
  newItem: T,
  keys: (keyof T)[] = ['id']
): boolean => {
  return items.some((item) => keys.every((key) => item[key] === newItem[key]));
};
