
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
   domain="dev-0kpjrl1vlnoxp0g3.us.auth0.com"
   clientId="Cdt7Z8eXFKaHwnPrB6kAE4PommkyermK"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}
   >
   <App />
   </Auth0Provider>
   </CartProvider>
 </BrowserRouter>
  

);

