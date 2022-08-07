import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, message, Modal, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { getAll } from '../../../api/product';
import { addCate, listCate, removeCate } from '../../../api/category';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    name: string;
    
}

const ListCategory = () => {
    const [category, setCategory] = useState([])
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [dataTable, setDataTable] = useState([])
    const [visible, setVisible] = useState(false);

    // const [isLoading, setIsLoading] = useState(false)
    const queryClient = new QueryClient();    

    // fetchData()
    useEffect(() => {
        const listcategory = async () => {
            const { data } = await listCate();

            setDataTable(data)
        }
        listcategory();

    }, [])
    console.log(dataTable);


    const { isLoading, data, error } = useQuery<any>(['Categories'], listCate)
    console.log(data);
    const onRemoveProduct = (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });


        removeCate(id);
        setConfirmLoading(false);
        message.success({ content: 'Xóa Thành Công!', duration: 2 });
        return setDataTable(dataTable?.filter(item => item.id != id))

    }
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        console.log('Success:', values);
        const data = await addCate(values)
        message.success("Tạo mới thành công");
        navigate("/admin/categories")

    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onUpdate = (record: any) => {

    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Các loại danh mục',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: "Hành Động", key: "action", render: (text, record: any) => (
                <Space align="center" size="middle">
                    <Button style={{ background: "#198754", color: "#fff" }} >
                        <Link to={`/admin/categories/edit/${record.id}`} >
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

    return (
        <>

            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                {/* <Link to="/admin/categories/add"> */}
                <Button type="dashed" shape="circle" onClick={() => setVisible(true)} icon={<PlusOutlined />} />
                <Modal
                    title="Thêm danh mục"
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    footer={[
                        <>
                            <Button form="myForm" key="onCancel" onClick={() => setVisible(false)} style={{ background: "#ff8080", color: "#fff" }}>
                                Hủy
                            </Button>
                            <Button form="myForm" key="submit" htmlType="submit" style={{ background: "#4d4dff", color: "#fff" }}>
                                Thêm
                            </Button>
                        </>

                    ]}
                    width={1000}
                >
                    <Form
                        id='myForm'
                        initialValues={{}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                        labelCol={{ span: 24 }}
                    >
                        <Form.Item
                            name="name"
                            labelCol={{ span: 24 }}
                            label="Tên Danh Mục"
                            rules={[{ required: true, message: 'Tên danh mục không được trống' }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Form>
                </Modal>
                {/* </Link> */}
            </Breadcrumb>
            <Table loading={isLoading} columns={columns} dataSource={dataTable} />

        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default ListCategory