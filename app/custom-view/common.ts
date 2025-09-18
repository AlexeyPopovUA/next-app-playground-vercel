export const DEFAULT_SORTING_FIELD = "name"
export const SORTING_ASC = "asc"
export const SORTING_DESC = "desc"
export const DEFAULT_SORTING_ORDER = SORTING_ASC

export const SORTING_ORDERS = [SORTING_DESC, SORTING_ASC] as const

export type SortingOrder = typeof SORTING_ORDERS[number]
