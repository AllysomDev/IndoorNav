import basicSsl from "@vitejs/plugin-basic-ssl";

export default {
    base: "/ARIndoorNavigation-Threejs_house/",
    publicDir: "static/",
    server: {
        host: true,
    },
    plugins: [basicSsl()],
};
