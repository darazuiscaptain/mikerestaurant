import Aos from "aos"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sign_up_in from "./pages/Sign_up_in";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { useSelector } from "react-redux";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import Orders from "./pages/admin/Orders";
import Customers from "./pages/admin/Customers";
import OrderDetails from "./pages/admin/OrderDetails";
import Products from "./pages/admin/Products";



function App() {
  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign_up_in" element={<Sign_up_in />} />

          {/* Protected Customers Routes */}
          <Route path="/profile/me" element={<protectedRoute><Profile /></protectedRoute>} />
          <Route path="/cart" element={<protectedRoute><Cart /></protectedRoute>} />
          <Route path="/order" element={<protectedRoute><Order /></protectedRoute>} />


          {/* Protected Admin Routes */}
          <Route path="/dashboard" element={<protectedAdminRoute><Dashboard /> </protectedAdminRoute>} />
          <Route path="/products" element={<protectedAdminRoute><Products /> </protectedAdminRoute>} />
          <Route path="/add-product" element={<protectedAdminRoute><AddProduct /> </protectedAdminRoute>} />
          <Route path="/edit-product/:id" element={<protectedAdminRoute><EditProduct /> </protectedAdminRoute>} />
          <Route path="/orders" element={<protectedAdminRoute><Orders /> </protectedAdminRoute>} />
          <Route path="/order/:id" element={<protectedAdminRoute><OrderDetails /> </protectedAdminRoute>} />
          <Route path="/customers" element={<protectedAdminRoute><Customers /> </protectedAdminRoute>} />


          {/* Routes Not Found  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </>
  )
}

export const protectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user)

  if (currentUser?.role === "customer") {
    return (
      { children }
    )
  }
  else return null
}

export const protectedAdminRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user)

  if (currentUser?.role === "admin") {
    return (
      { children }
    )
  } else return null
}

export default App
