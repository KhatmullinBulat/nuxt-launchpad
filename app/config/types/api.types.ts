import type { UseFetchOptions } from '#app'
import type { UseApiReturnType } from '../api/useApi'

/**
 * Base interface for ApiFactory.
 * Each method corresponds to a standard CRUD operation.
 * @template T - Type of list items (used in getAll, getMore)
 * @template K - Type of query parameters (filters, pagination)
 * @template U - Type of create/update payload
 * @template I - Type of detail item (used in getOne)
 * @see {@link useApiFactory}
 */
export interface BaseApiTyped<T, K, U, I> {
  endpoint: string

  getOne: (config: {
    id: number | string
    options?: UseFetchOptions<I>
  }) => UseApiReturnType<I>

  getAll: (config: {
    params?: Ref<K> | K & PaginatedParams
    options?: UseFetchOptions<PaginatedData<T>>
    additional_endpoint?: string
  }) => UseApiReturnType<PaginatedData<T>>

  getMore: (
    params?: K & PaginatedParams,
    additional_endpoint?: string,
  ) => Promise<PaginatedData<T>>

  create: (
    data: U,
  ) => Promise<I>

  update: (
    id: number | string,
    data: Partial<U>,
  ) => Promise<I>

  remove: (
    id: number | string,
  ) => Promise<unknown>
}

// Pagination query parameters interface
export interface PaginatedParams {
  page?: number
  per_page?: number | 'all'
}

/**
 * Standard paginated response structure.
 * @template T - Type of individual items in the results array
 */
export interface PaginatedData<T> {
  count: number
  next: string | null
  prev: string | null
  has_next?: boolean
  has_prev?: boolean
  results: T[]
}
