import { Card, List } from 'antd';
import React from 'react'
import styled from 'styled-components';

import { StarOutlined, StarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query'
import { currency } from '../helpers/money';
import { getAll } from '../api/product';
type Props = {}

const ListProduct = (props: Props) => {
    

    const { isLoading, data, error } = useQuery<any>(['Product'], getAll)
    const loadData = data?.data

    return (
        <div  >
            <Title>ĐIỆN THOẠI NỔI BẬT NHẤT</Title>
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

                dataSource={loadData}
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

export default ListProduct