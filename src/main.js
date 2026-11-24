import { Home } from './pages/home.js'
import { Admin } from './pages/admin.js'

 
const routes = {
  '/': Home,
  '/admin': Admin,

}

 function router() {
  const path = location.hash.slice(1) || '/'
  const page = routes[path] || Home
  document.querySelector('#app').innerHTML = page()
 }

 window.addEventListener('hashchange', router)
 render()