import React, { useEffect, useState } from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete as AutuCompleteAnt, Input } from 'antd';
import styled from 'styled-components';
import { getAll } from '../../api/product';


const options = [
    { value: "Iphone" },
    { value: "Oppo" },
    { value: "Samsung" },
    { value: "Xiaomi" },
];
interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    image: string
}


const AutoComplete = () => {
    const [product, setProduct] = useState<DataType[]>([])
    const [list, setList] = useState<DataType[]>([])

    useEffect(() => {
        const getProduct = async () => {
            const data = await getAll()
            setProduct(data.data)
        }
        getProduct()
    }, [])
    console.log(product);

    return (
        <div>


            <AutuCompleteAnt
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={product}
                style={{ width: 500 }}
            >
                <WrapperInput size="large" placeholder="large size" prefix={<SearchOutlined />} />
            </AutuCompleteAnt>
            {/* <WrapperInput size="large" placeholder="large size" onChange={(e) => searchProduct(e.target.value)} prefix={<SearchOutlined />} /> */}
            {/* {list && list.map((item, index) => {
                <div>
                    {item.name}
                </div>
            })} */}



        </div>
    )
}
const WrapperInput = styled(Input)`
    border: none;
    border-radius: 10px;
    width: 400px;
`

export default AutoComplete