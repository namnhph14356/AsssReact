import React from 'react'
import Banner from '../../components/banner'
import ListProduct from '../../components/ListProduct'
import Sidebar from '../../components/sidebar'

const HomePage = () => {
  return (
    <div>
      <section style={{ width: "1200px", margin: "10px auto", display: "flex", }}>
        <Sidebar />
        <Banner />
      </section>
      <section style={{ width: "90%", margin: "30px auto" }}>
        <ListProduct />
      </section>
    </div>
  )
}

export default HomePage