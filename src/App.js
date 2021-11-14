// ? This file is optimised for version 1.0

// ? External Scripts:

import { integrateTabIndex } from "./libraries/reusable";
integrateTabIndex();

// ? Service Worker Registration:

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

function App() {
  return '';
}

export default App;
