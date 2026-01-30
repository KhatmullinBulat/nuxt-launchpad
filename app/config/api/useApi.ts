import type { UseFetchOptions } from "#app";

/**
 * Wrapper around useFetch.
 * @template T - The expected response data type
 * @param url - The api endpoint
 * @param options - Additional useFetch options
 * @returns AsyncData object with data, pending, error, and refresh states
 * @example
 * ```ts
 * const { data, pending, error } = useApi<User>('/users')
 * ```
 */
export function useApi<T>(
    url: string | (() => string),
    options?: UseFetchOptions<T>,
) {
    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$api as typeof $fetch
    })
}

export type UseApiReturnType<T> = ReturnType<typeof useApi<T>>