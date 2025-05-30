
import { createRoot } from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Context/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <CartProvider>
 <Auth0Provider
    domain="dev-3a3jih75x0t5i6tv.us.auth0.com"   
    clientId="9p9VgDqaFNnJMC0j5kq5hdJU0rBRhrGh"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <App />
   </Auth0Provider>
   </CartProvider>
 </BrowserRouter>
  

);

