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
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
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
          <Route path="/profile/me" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>} />


          {/* Protected Admin Routes */}
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/products" element={<Products /> } />
          <Route path="/add-product" element={<AddProduct /> } />
          <Route path="/orders" element={<Orders /> } />
          <Route path="/order/:id" element={<OrderDetails /> } />
          <Route path="/customers" element={<Customers /> } />


          {/* Routes Not Found  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>

    </>
  )
}

export const ProtectedRoute = ({ children }) => {
  // const { currentUser } = useSelector((state) => state?.user)

  // if (currentUser?.role === "customer") {
  //   return (
  //     { children }
  //   )
  // }
  // else return
}

export const ProtectedAdminRoute = ({ children }) => {
  // const { currentUser } = useSelector((state) => state?.user)

  // if (currentUser?.role === "admin") {
  //   return (
  //     { children }
  //   )
  // } else return
}

export default App
