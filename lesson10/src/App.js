import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import About from './Home/About'
import Products from './Home/Products'
import Invoice from './Home/Invoice'
import Cart from './Home/Cart'
import Profile from './Home/Profile'


const ProductDetail = () => {
  const params = useParams();
  return (
    <div>
      <div>Product {params.productId}</div>
      {console.log(params.productId)}
    </div>
  )
}

const InvoiceDetail = () => {
  const params = useParams();
  return (
    <div>Invoice {params.invoiceId}</div>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth' >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path="/" >
          <Route path='products' element={<Products />} >
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path='invoices' element={< Invoice />} >
            <Route path=":invoiceId" element={<InvoiceDetail />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<Profile />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
      <footer>123456789</footer>
    </div>
  )
}

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSortChange = (event) => {
    setSearchParams({ sort: event.target.value })
  }

  return (
    <select value={searchParams.get("sort")} onChange={handleSortChange}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  )
}

export default App;

