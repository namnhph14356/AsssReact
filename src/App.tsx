import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SigninPage from './pages/Auth/signin'
import UserLayout from './components/layout/user'
import HomePage from './pages/Home/home'
import AdminLayout from './components/layout/admin'
import ProductAdminPage from './pages/Admin/Product/product'
import AddProductPage from './pages/Admin/Product/add'
import EditProduct from './pages/Admin/Product/edit'
import ListCategory from './pages/Admin/Categories/list'
import DetailProduct from './pages/Home/Detail'
import { CartProvider } from 'react-use-cart'
import CartPage from './pages/Home/Cart'
import EditCategories from './pages/Admin/Categories/edit'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Auth */}
        <Route path='/signin' element={<SigninPage/>}/>
        {/* User layout */}
        <Route path='/' element={<CartProvider><UserLayout/></CartProvider>}>
          <Route index element={<HomePage/>}/>
          <Route path='/detail/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<CartPage />} />

        </Route>
        {/* Admin layout */}
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<ProductAdminPage/>}/>
          <Route path='product' element={<ProductAdminPage />} />
          <Route path='product/add' element={<AddProductPage/>}/>
          <Route path='product/edit/:id' element={<EditProduct/>}/>
          <Route path='categories' element={<ListCategory />}/>
          <Route path='categories/edit/:id' element={<EditCategories/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
