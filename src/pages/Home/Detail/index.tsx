import { List, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'
import { getAll, getProducCate, getProductId } from '../../../api/product'
import { currency } from '../../../helpers/money'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { getProductIdCateDetail } from '../../../features/Product'
import { StarOutlined, StarTwoTone } from '@ant-design/icons';


const DetailProduct = () => {
  const [productId, setProductId] = useState<any>({})
  const [product, setProduct] = useState<any>([])
  const { id } = useParams();
  const dispatch = useDispatch();
  const productCate = useSelector((item: any) => item.product.value)
  const spCungLoai = productCate.filter((item: { id: any }) => item.id != productId.id)

  const { addItem } = useCart();


  useEffect(() => {
    const getProductById = async (id: any) => {
      const { data } = await getProductId(id);
      dispatch(getProductIdCateDetail(Number(data.categoriesId)))
      setProductId(data)

    }
    getProductById(id);

  }, [id])
  const [dataTable, setDataTable] = useState<any>([])

  useEffect(() => {
    const getproduct = async (id: any) => {
      const { data } = await getProductId(id);
      console.log(data);

      setDataTable({
        categories: data.categories.name,
        categoriesId: data.categoriesId,
        description: data.description,
        feature: data.feature,
        id: data.id,
        image: data.image,
        name: data.name,
        originalPrice: data.originalPrice,
        saleOffPrice: data.saleOffPrice

      })
    }
    getproduct(id)
  }, [id])
  console.log(dataTable);

  const addToCart = (product: any) => {
    const add = addItem(
      {
        id: productId.id,
        name: productId.name,
        price: productId.saleOffPrice,
        image: productId.image,
        originalPrice: productId.originalPrice,
        feature: productId.feature,
        description: productId.description,
        categories: productId.categoriesId
      }
    )

    message.success("Đã thêm 1 sản phẩm vào giỏ hàng")

  }


  return (
    <div>
      <div style={{ borderBottom: "1px solid #ddd", boxShadow: "0px 0px 5px gray " }}>
        <div style={{ width: "80%", margin: " auto" }}>
          <nav >
            <ul style={{ padding: "10px 0", margin: "auto" }}>
              <Li><Link2 to={"/"}>Trang chủ</Link2></Li>
              <Li><Link2 to={`/categories/${dataTable.categoriesId}`}>{dataTable.categories}</Link2></Li>
              <Li><Link2 to={""}>{dataTable.name}</Link2></Li>
            </ul>
          </nav>
        </div>

      </div>
      <div style={{ width: "80%", margin: " auto" }}>
        <Title >{dataTable?.name}</Title>
        <div >
          <Product>
            <a href=""><img src={dataTable.image} alt="" width={350} /></a>
            <div>
              <p ><span style={{ color: "red", fontSize: "24px", fontWeight: "600" }}>{currency(Number(dataTable?.saleOffPrice))} đ </span><span style={{ color: "gray", paddingLeft: "10px",textDecoration:'line-through' }}>{currency(Number(dataTable?.originalPrice))} đ</span></p>
              <p> Mô tả ngắn: {dataTable?.feature}</p>
              {/* <form action=""> */}
              {/* <input type="number" min={0} defaultValue={"1"} placeholder='Số sản phẩm' /> */}
              <p style={{ margin: "50px auto" }}>
                <Link to={'/cart'}><Btn onClick={() => addToCart(productId)}>Mua ngay</Btn></Link>
                <Buton onClick={() => addToCart(productId)}><ShoppingCartOutlined /></Buton>
                <p style={{ display: 'inline-block' }}>Thêm vào <br /> giỏ hàng</p>
              </p>
              <div>
              </div>
              {/* </form> */}
            </div>
          </Product>
        </div>
        <div>
          <div>
            <Title >Sản phẩm cùng loại</Title>

            <List
              grid={{
                gutter: 12,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 5,
                xxl: 3,
              }}

              dataSource={spCungLoai}
              renderItem={(item: any) => (
                <List.Item>

                  <div>
                    <div style={{ textAlign: "center" }}>
                      <Link to={`/detail/${item.id}`} ><img src={item.image} alt="" width={140} /></Link>
                    </div>
                    <Link to={`/detail/${item.id}`} className="name" style={{ marginTop: "10px", color: "black" }}>{item.name}</Link>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <p style={{ color: "red" }}>{currency(item.saleOffPrice)} ₫</p>
                      <p style={{ color: "gray", fontSize: "13px", textDecoration:'line-through' }}>{currency(item.originalPrice)} ₫</p>
                    </div>
                    <Desc >
                      {/* <p >{item.description}</p> */}
                      <div>{item.feature}</div>
                    </Desc>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div className="star">
                        <StarTwoTone twoToneColor="black" />
                        <StarTwoTone twoToneColor="black" />
                        <StarOutlined />
                        <StarOutlined />
                        <StarOutlined />
                      </div>
                      <div>
                        <p>9999 đánh giá</p>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>

      <div style={{ width: "80%", margin: " auto" }}>
        <Feature>
          <h3 style={{ color: "red", textAlign: "center" }}>ĐẶC ĐIỂM  NỔI BẬT</h3>
          <p>{productId.feature}</p>
        </Feature>
        <div dangerouslySetInnerHTML={{ __html: `${productId.description}` }}>
        </div>
      </div>

    </div>
  )
}

const Li = styled.li`
    display: inline-block;
    margin: auto ;
    margin-right: 20px; 
    color: gray;
`
const Link2 = styled(Link)`
    color: gray;
    font-size: 12px;
`
const Title = styled.h2`
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
`
const Product = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr ;
    gap: 30px;
    margin: 30px 0;
`
const Btn = styled.button`
    background-color: red;
    transition:all .2s linear;
    color: #fff;
    padding: 15px 90px;
    border: 0;
    border-radius: 10px;
    :hover{
        /* border: 1px solid green; */
        background-color: #A52A2A;
        cursor: pointer;
        transition:all .1s linear;

    }
`
const Buton = styled.button`
  font-size: 30px;
  border solid 1px red;
  border-radius: 5px;
  background-color: white;
  margin: 0 10px;
  color: red;
  cursor: pointer;
  padding: 0 10px
  `
const Desc = styled.div`
    border: 1px solid #F3F4F6;
    border-radius:5px;
     background:#F3F4F6;
     padding:5px ;
`
const Feature = styled.div`
    margin: 30px 0;
    padding:10px 20px;
    background-color: #F2F2F2;
    border: 1px solid #F2F2F2;
    border-radius: 6px;
`

export default DetailProduct