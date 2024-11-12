import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
    compatibilityDate: '2024-11-12',
    runtimeConfig: {
        GH_TOKEN: process.env.GH_TOKEN,
    },
    routeRules: {
        "/**": {
            cache: process.env.NODE_ENV === "production" ? { maxAge: 60 } : undefined,
            cors: true,
        },
        // Backward compatibility for changelogen
        "/user/find/**": { proxy: "/users/find/**" },
    },
    storage: {
        "/cache/gh": {
            driver: "cloudflare-kv-binding",
            binding: "UNGH_CACHE",
        },
    },
    devStorage: {
        "/cache/gh": {
            driver: "fs",
            base: "./.cache/gh",
        },
    },
});