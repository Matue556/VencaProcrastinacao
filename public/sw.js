importScripts("https://cdn.brevo.com/js/sdk-loader.js");
Brevo.push([
    "init",
    {
        client_key: (location.search.match(/[?&]key=([^&]*)/) || [])[1],
    },
]);
Movendo sw.js para a pasta public
