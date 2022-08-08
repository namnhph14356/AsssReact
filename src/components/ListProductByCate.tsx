import { List, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { currency } from '../helpers/money'
import { StarOutlined, StarTwoTone, MailOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query'
import { getProducCate } from '../api/product'
import { getCateId, listCate } from '../api/category'



const ListProductByCate = () => {
    const [product, setProduct] = useState<any>([])
    const { id } = useParams();
    const [category, setCategory] = useState<any>([])
    const [cate, setCate] = useState<any>({})
    useEffect(() => {
        const getCate = async (id:any) => {
            const { data } = await getCateId(id)
            setCate(data)
        }
        getCate(id)
    },[])
    console.log(cate);
    
    useEffect(() => {
        const listcategory = async () => {
            const { data } = await listCate();

            setCategory(data)
        }
        listcategory();
        

    }, [])
    console.log(product);
    
    useEffect(() => {
        const getProductByCate = async (id: any) => {
            const { data } = await getProducCate(id);
            setProduct(data)
        }
        getProductByCate(id);
    }, [id])
    return (
        <div style={{ width: "80%", margin: "30px auto" }}>
            <Menu mode="horizontal" defaultSelectedKeys={[category.id]}>
                {category?.map((item: any, index: any) =>
                
                    <Link to={`/categories/${item.id}`}>
                        <Menu.Item key={item.id} icon={<MailOutlined />}>
                            {item.name}
                        </Menu.Item>
                    </Link>
                )}
            </Menu>

            <Title>Danh mục {cate.name}</Title>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}

                dataSource={product}
                renderItem={(item: any) => (
                    <List.Item>

                        <div>
                            <div style={{ textAlign: "center" }}>
                                <Link to={`/detail/${item.id}`} ><img src={item.image} alt="" width={140} /></Link>
                            </div>
                            <Link to={`/detail/${item.id}`} className="name" style={{ marginTop: "10px", color: "black" }}>{item.name}</Link>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p style={{ color: "red" }}>{currency(item.saleOffPrice)} ₫</p>
                                <p style={{ color: "gray", fontSize: "13px",textDecoration:'line-through' }}>{currency(item.originalPrice)} ₫</p>
                            </div>
                            <Desc >
                                {/* <p >{item.description}</p> */}
                                <div>{item.feature}</div>
                            </Desc>
                            <div style={{ display: "flex", gap: "5px" }}>
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
    )
}
const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
`
const Desc = styled.div`
    border: 1px solid #F3F4F6;
    border-radius:5px;
     background:#F3F4F6;
     padding:5px ;
`
export default ListProductByCate