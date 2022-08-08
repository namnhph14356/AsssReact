import React, { useEffect, useState } from 'react';
import { UserOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { AutoComplete as AutuCompleteAnt, Input, Result } from 'antd';
import styled from 'styled-components';
import { getAll } from '../../api/product';
import { Link } from 'react-router-dom';
import { currency } from '../../helpers/money';

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    image: string
}


const AutoComplete = () => {
    const [product, setProduct] = useState<any>([])
    const [keyword, setKeyword] = useState("");
    const [ketqua, setKetqua] = useState([]);



    useEffect(() => {
        const getProduct = async () => {
            const data = await getAll()
            setProduct(data.data)
        }
        getProduct()
    }, [])
    const search = (e: any) => {
        setKeyword(e.target.value)

        const results = product.filter((item: any) => {
            return e.target.value !== "" && item.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
        setKetqua(results);

    }
    return (
        <div>


            {/* <AutuCompleteAnt
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={product}
                style={{ width: 500 }}
            >
                <WrapperInput size="large" placeholder="large size" prefix={<SearchOutlined />} />
            </AutuCompleteAnt> */}
            <Input
                size="large"
                placeholder=" Search here..."
                style={{ borderRadius: "10px" }}
                value={keyword}
                onChange={search}
                prefix={<SearchOutlined />}
            />
            <div>
                <div className="user-list">
                    <SearchDetail
                        style={
                            ketqua.length == 0
                                ? { display: "none" }
                                : { display: "block" }
                        }
                    >
                        {ketqua.length > 0 && (
                            <div>
                                {ketqua.slice(0, 10).map((value: any, key) => {
                                    return (
                                        <Link to={'./detail/' + value.id} key={key + 1} style={{ color: "black" }}  >
                                            <List >
                                                <div>
                                                    <img src={value.image} width="70" alt="" style={{ maxWidth: "100%" }} />
                                                </div>
                                                <div>
                                                    <p>{value.name} </p>
                                                    <div >
                                                        <span style={{ color: "red", marginRight:'10px' }}>{currency(value.saleOffPrice)} ₫</span>
                                                        <span style={{ color: "gray", fontSize: "13px", textDecoration:'line-through' }}>{currency(value.originalPrice)} ₫</span>
                                                    </div>
                                                </div>
                                            </List>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </SearchDetail>
                </div>
            </div>



        </div>
    )
}
const SearchDetail = styled.div`
    width: 420px;
    position: absolute;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 5px black;
    z-index: 1;
`
const List = styled.div`
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #F2F2F2;
    :hover{
        background-color: #F2F2F2;
        border-radius: 5px;
    }
`

export default AutoComplete