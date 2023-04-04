// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    app: {
        head: {
            charset: 'utf-8',
            title: 'kanbanList-admin',
            link: [
                {
                    href: 'https://unpkg.com/@picocss/pico@1.*/css/pico.min.css',
                    rel: 'stylesheet',
                },
            ],
            htmlAttrs: {
                lang: 'ko',
            },
        },
    },
});
