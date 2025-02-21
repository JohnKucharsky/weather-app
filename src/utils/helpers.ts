export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K | K[],
): Omit<T, K> => {
  const result = { ...obj }

  if (!Array.isArray(keys)) {
    delete result[keys]
    return result
  }

  for (const key of keys) {
    delete result[key]
  }

  return result
}

export const filterMap = <T, U>(
  array: T[],
  filterBoolean: (item: T, index: number) => boolean,
  mapCallback: (item: T, index: number) => U,
): U[] => {
  return array.reduce<U[]>((acc, item, idx) => {
    if (filterBoolean(item, idx)) {
      acc.push(mapCallback(item, idx))
    }
    return acc
  }, [])
}

export const getQueryString = (params: Record<string, string>): string => {
  const entries = Object.entries(params)

  const query = filterMap(
    entries,
    ([_, value]) => value !== undefined && value !== null,
    ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
  ).join('&')

  return query && `?${query}`
}
