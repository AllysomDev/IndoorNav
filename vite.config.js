import basicSsl from "@vitejs/plugin-basic-ssl";

export default {
    base: "/ARIndoorNavigation-House/",
    publicDir: "static/",
    server: {
        host: true,
    },
    plugins: [basicSsl()],
};
