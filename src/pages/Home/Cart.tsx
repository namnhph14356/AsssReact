import React from 'react'
import { useSelector } from 'react-redux'
import { useCart } from 'react-use-cart'
import styled from 'styled-components';
// import store from '../redux/store';
import { CloseOutlined, PlusSquareFilled, MinusSquareFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { currency } from '../../helpers/money';
import { Link } from 'react-router-dom';
const CartPage = () => {
  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
  console.log(items);

  const minus = (item: any) => {
    if (item.quantity == 1) {
      Modal.confirm({
        title: "Bạn có chắc muốn xóa sản phẩm này không ?",
        onOk: () => {
          updateItemQuantity(item.id, Number(item.quantity) - 1)
        },


      })
    } else {
      updateItemQuantity(item.id, Number(item.quantity) - 1)

    }
  }
  const deleteCart = (item: any) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa sản phẩm này không ?",
      onOk: () => {
        removeItem(item)
      },
      onCancel: () => {
        return false
      }

    })
  }
  return (
    <div>
      <Cart >
        <h2>Giỏ hàng</h2>

        {items?.map((item, index) => (
          <Row className="row" key={index + 1}>
            <div className="col" style={{ margin: "auto" }}>
              <a href=""><Image src={item.image} alt="" /></a>
            </div>
            <div className="col" style={{ position: "relative" }}>
              <NameProduct>{item.name}</NameProduct>
              <p><span style={{ color: "red", fontSize: "18px" }}>{currency(item.price)} ₫</span> <span style={{ color: "gray", paddingLeft: "10px",textDecoration:'line-through' }}>{currency(item.originalPrice)} ₫</span></p>
              <SoLuong>
                <p style={{ margin: "auto 0" }}>Chọn số lượng:</p>
                <div style={{ margin: "auto 0", display: "flex" }}>

                  <div style={{ margin: "auto" }}>
                    <PlusSquareFilled onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 1)} style={{ color: "red", fontSize: "26px", cursor: "pointer" }} />
                  </div>

                  <div>
                    <input type="text" value={item.quantity} style={{ width: "40px", textAlign: "center", borderRadius: "5px", margin: "0 5px" }} />
                  </div>

                  <div style={{ margin: "auto" }}>
                    <MinusSquareFilled onClick={() => minus(item)} style={{ color: "red", fontSize: "26px", cursor: "pointer" }} />
                  </div>
                </div>
              </SoLuong>
              <KhuyenMai>
                <p>{item.feature}</p>
              </KhuyenMai>
              <h3>Tổng tiền sản phẩm: <span style={{ color: 'red' }}>{currency(item.itemTotal)}</span></h3>
              <Delete ><button style={{ border: 'none', backgroundColor: 'white', cursor: 'pointer' }} onClick={() => deleteCart(item.id)}><CloseOutlined /></button></Delete>
            </div>

          </Row>
        ))}
        <div>
          <TongTien>
            <p>Tổng tiền tạm tính:</p>
            <p style={{ color: "red" }}>{currency(cartTotal)} ₫</p>
          </TongTien>
          <div>
            <Link to={'/checkout'}><DatHang>Tiến hành đặt hàng</DatHang></Link>
          </div>
          <div>
            <Link to='/'> <ThemSanPhamKhac>Chọn thêm sản phẩm khác</ThemSanPhamKhac></Link>
          </div>
        </div>


      </Cart>
    </div>
  )
}
const Cart = styled.div`
  width: 50%;
  margin: auto;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
  
`
const Delete = styled.span`
  position: absolute;
  top: 0;
  right: 5px;
  margin: auto;
  font-size: 22px;
  font-weight: 600;
  transition: all ease-in-out 0.2s;
  color: black;
  :hover{
    cursor: pointer;
    
  }

`
const Image = styled.img`
  width: 200px;
  margin: auto;
  text-align: center;
  max-width: 100%;

`
const KhuyenMai = styled.div`
  background-color: #F6F6F6;
  padding: 8px;
  border: 1px solid #F6F6F6;
  border-radius: 5px;
`
const NameProduct = styled.p`
  font-size: 20px;
  font-weight: 600;
  /* line-height: 10px; */
  padding: 0;
  margin: 0;

`
const SoLuong = styled.div`
   display: flex;
  gap: 30px;
  font-weight: 600;
  margin:10px auto;
`


const TongTien = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`
const DatHang = styled.button`
  width: 100%;
  background-color: red;
  color:#fff;
  padding: 10px 5px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
`
const ThemSanPhamKhac = styled.button`
  width: 100%;
  color:red;
  padding: 10px 5px;
  border: 1px solid red;
  border-radius: 4px;
  transition: all ease-in-out 0.2s;
  text-transform: uppercase;
  cursor: pointer;
  /* :hover{
    transition: all ease-in-out 0.2s;
    background-color: red;
    color:#fff;
  } */
`
export default CartPage