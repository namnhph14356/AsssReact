import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Select, Space, Popconfirm, message, Form } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
const { Paragraph } = Typography
import type { ColumnsType } from 'antd/es/table';
import { getAll, Money, removeProduct } from "../../../api/product";
import { useQuery } from 'react-query'
import { listCate } from "../../../api/category";



interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}


const ProductAdminPage = () => {
    const [dataTable, setDataTable] = useState([])
    const [category, setCategory] = useState([])
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [form] = Form.useForm();

    // fetchData()
    useEffect(() => {
        const listcategory = async () => {
            const { data } = await listCate();
            console.log(data);

            setCategory(data)
        }
        listcategory();
        const getproduct = async () => {
            const { data } = await getAll();
            console.log(data);
            
            setDataTable(data)
        }
        getproduct()
    }, [])

    const { isLoading, data, error } = useQuery(['Products'], getAll)
    console.log(data);
    const onRemoveProduct = (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });

        setTimeout(() => {
            
            removeProduct(id);
            setConfirmLoading(false);
            message.success({ content: 'Xóa Thành Công!', duration: 2 });
            setDataTable(dataTable?.filter(item => item.id != id))
        }, 500)

    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a><p style={{maxWidth: '30ch',display: 'inline-block',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{text}</p></a>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: text => <img src={text} alt=""  width={100}/>,


        },
        {
            title: 'Đặc điểm',
            dataIndex: 'feature',
            key: 'feature',
            render: text => <a><p style={{maxWidth: '15ch',display: 'inline-block',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{text}</p></a>,


        },
        {
            title: 'Loại hàng',
            dataIndex: 'categories',
            key: 'categories',
            filters: category.map((item: any) => { return { text: item.name, value: item.id } }),
            onFilter: (value, record: any) => {
                console.log(record.categories);
                console.log(value); 

                return record.categories == value
            }
        },
        {
            title: 'Giá khuyến mãi',
            dataIndex: 'saleOffPrice',
            key: 'saleOffPrice',
            render: text => <p>{Money(text)}</p>
        },
        {
            title: 'Giá gốc',
            dataIndex: 'originalPrice',
            key: 'originalPrice',
            render: text => <p>{Money(text)}</p>
        },
        {
            title: "Hành Động", key: "action", render: (text, record: any) => (
                <Space align="center" size="middle">
                    <Button style={{ background: "#198754", color: "#fff" }} >
                        <Link to={`/admin/product/edit/${record.id}`} >
                            <span className="text-white">Sửa</span>
                        </Link>

                    </Button>

                    <Popconfirm
                        placement="topRight"
                        title="Bạn Có Muốn Xóa?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => { onRemoveProduct(record.id) }}
                        okButtonProps={{ loading: confirmLoading }}
                    //   onCancel={handleCancel}
                    >
                        <Button type="primary" danger >
                            Xóa
                        </Button>
                    </Popconfirm>

                </Space>
            ),
        }
    ];
    const { Option } = Select;

    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>

                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            {/* <Cate>
                <Typography.Title level={4} style={{ margin: 0 }}>
                    Bộ lọc:
                </Typography.Title>
                <Sect>
                <Typography.Title level={5} style={{ margin: 0 }}>
                    Danh mục sản phẩm
                </Typography.Title>
                    <Select defaultValue="Danh mục" style={{ width: 300 }} onChange={handleChange}>
                        <Option value="phone">Điện thoại</Option>
                        <Option value="laptop">Laptop</Option>
                        <Option value="tablet">Máy tính bảng</Option>
                    </Select>
                </Sect>
            </Cate> */}
            <Table loading={isLoading} columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Cate = styled.div`
    display: flex;
    padding: 20px 0;
`
const Sect = styled.div`
    display: grid;
    margin: 0 20px
    
`

export default ProductAdminPage