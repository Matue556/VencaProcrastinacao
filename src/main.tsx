
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(reg) {
      console.log('Service Worker registrado com sucesso!', reg.scope);
    })
    .catch(function(err) {
      console.log('Erro ao registrar o Service Worker:', err);
    });
}
const brevoScript = document.createElement('script');
brevoScript.src = 'https://cdn.brevo.com/js/sdk-loader.js';
brevoScript.async = true;
document.head.appendChild(brevoScript);

brevoScript.onload = () => {
  // Inicializa quando o script carregar
  (window as any).Brevo?.push?.([
    "init",
    {
      client_key: new URLSearchParams(window.location.search).get("kee") || "",
    },
  ]);
};
