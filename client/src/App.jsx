import Aos from "aos"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
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
import { useSelector } from "react-redux";
import Deliveries from "./pages/admin/Deliveries";
import RegisterDelivery from "./pages/admin/RegisterDelivery";



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
          <Route element={<ProtectedRoute />}>
            <Route path="/profile/me" element={<Profile />} />
            <Route path="/mycart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/:id" element={<Order />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/delivery" element={<Deliveries />} />
            <Route path="/reg-delivery" element={<RegisterDelivery />} />
          </Route>


          {/* Routes Not Found  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter >

    </>
  )
}

export const ProtectedRoute = () => {
  const { currentUser } = useSelector((state) => state?.auth)

  if (currentUser?.role === "customer") {
    return <Outlet />
  }
  <Navigate to="/sign_up_in" />
}

export const ProtectedAdminRoute = () => {
  const { currentUser } = useSelector((state) => state?.auth)

  if (currentUser?.role === "admin") {
    return <Outlet />
  }
  <Navigate to="/sign_up_in" />
}

export default App
