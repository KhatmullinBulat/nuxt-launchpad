import type { BaseApiTyped, PaginatedData } from '../types/api.types'
import { useApi } from './useApi'

/**
 * Factory function to create a CRUD Api service.
 * Generates a standardized methods:
 * - Fetching single items (getOne)
 * - Fetching paginated lists (getAll, getMore)
 * - Creating, updating, and deleting resources (create, update, remove)
 * @template T - Type of a single list item
 * @template K - Type of query parameters
 * @template U - Type of create/update payload
 * @template I - Type of detail view response
 * @param endpoint - Base Api endpoint
 * @example
 * ```ts
 * const ticketsApi = useApiFactory<TicketItem, TicketFilters, CreateTicketForm, TicketDetail>('/api/tickets')
 * ```
 */
export function useApiFactory<T, K extends Record<string, any>, U extends Record<string, any>, I = void>(
  endpoint: string,
): BaseApiTyped<T, K, U, I> {
  const { $api } = useNuxtApp()

  const api: BaseApiTyped<T, K, U, I> = {
    endpoint,

    getOne(config) {
      return useApi<I>(`${endpoint}/${config.id}/`, config.options)
    },

    getAll(config) {
      return useApi<PaginatedData<T>>(`${endpoint}/${config.additional_endpoint ? config.additional_endpoint : ''}`, {
        query: config.params,
        ...config.options,
      })
    },

    getMore(params?: K, additional_endpoint: string = '') {
      return $api(`${endpoint}/${additional_endpoint}/`, {
        query: params,
      })
    },

    create(data) {
      return $api(`${endpoint}/`, {
        method: 'POST',
        body: data,
      })
    },

    update(id, data) {
      return $api(`${endpoint}/${id}/`, {
        method: 'PATCH',
        body: data,
      })
    },

    remove(id) {
      return $api(`${endpoint}/${id}/`, {
        method: 'DELETE',
      })
    },
  }

  return api
}
