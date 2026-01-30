/**
 * Plugin that creates a global Api client with base configuration.
 * Provides a centralized $api instance with:
 * - Base URL
 * - Global request/response interceptors
 * - Automatic 401 error handling
 */
export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: useRuntimeConfig().public.baseApiURL,
        onRequest() {
            // TODO
        },
        onResponse() {
            // TODO
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                await nuxtApp.runWithContext(() => navigateTo('/login'))
            }

            return Promise.reject(response)
        },
    })

    return {
        provide: {
            api
        }
    }
})