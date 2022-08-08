import { Button, Form, Input, Layout, message, Select, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { listbyIdorder, updateOrder } from '../../../api/order';
import { Money } from '../../../api/product';
import { OrderType } from '../../../type/order';
const { Option } = Select;


const EditOrder = () => {
    const { register, handleSubmit, formState, reset } = useForm<OrderType[]>();
    // const [form] = Form.useForm();
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [item, setItem] = useState<OrderType[]>([]);


    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate()

    console.log(item.userOrder);
    
    useEffect(() => {
        const getOrder = async (id: any) => {
            const { data } = await listbyIdorder(id);
            reset(data)
            setOrders(data.listOrder)
            console.log(data.listOrder);

        }
        getOrder(id);
    }, [])
    useEffect((() => {
        if (id) {
            const getCate = async (id: any) => {
                const { data } = await listbyIdorder(id);
                form.setFieldsValue(data.userOrder)
                // onreset(payload)
                setItem(data)

            }
            getCate(id);
        }
    }), [])

    const onSubmit: SubmitHandler<OrderType> = async data => {
        try {
            await updateOrder({
                userOrder: item.userOrder,
                listOrder: item.listOrder,
                cartTotal: item.cartTotal,
                status: data.status,
                id: id,
            });
            message.success({ content: 'Cập nhật thành công', duration: 2 });

            setTimeout(() => navigate("/admin/order"), 1000)
        } catch (error: any) {
            console.log(error)
        }
    }
    const columns = [
        { title: 'STT', dataIndex: 'stt', key: 'stt' },
        { title: 'Hình ảnh', dataIndex: 'image', key: 'image', render: text => <img src={text} alt="" width={100} /> },
        { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name' },
        { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Tổng giá', dataIndex: 'itemTotal', key: 'itemTotal', render: text => <p>{Money(text)}</p> },



    ];
    const data = orders?.map((order, index) => {
        return {
            stt: index + 1,
            image: order.image,
            name: order.name,
            quantity: order.quantity,
            itemTotal: order.itemTotal,
        }
    })
    return (
        <div>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <div style={{ minHeight: 500, padding: 24 }}>
                        <Title>Chi tiết đơn hàng</Title>
                        <Table columns={columns} dataSource={data} />

                        <Form
                            form={form}
                            initialValues={{}}
                            onFinish={onSubmit}
                            autoComplete="on"
                            labelCol={{ span: 24 }}>
                            <Form.Item
                                name="name"
                                labelCol={{ span: 24 }}
                                label="Họ và tên"

                                rules={[{ required: true, message: 'Họ và tên không được trống' }, { min: 3, message: 'Ít nhất 3 ký tự' }]}
                            >
                                <Input disabled size="large" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                labelCol={{ span: 24 }}
                                label="Email"
                                rules={[{ required: true, message: 'Email không được trống' }]}
                            >
                                <Input disabled size="large" />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                labelCol={{ span: 24 }}
                                label="Số điện thoại"
                                rules={[{ required: true, message: 'Số điện thoại không được trống' }]}
                            >
                                <Input disabled size="large" />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                labelCol={{ span: 24 }}
                                label="Địa chỉ"
                                rules={[{ required: true, message: 'Địa chỉ phẩm không được trống' }]}
                            >
                                <Input disabled size="large" />
                            </Form.Item>
                            <Form.Item name="status" label="Tình trạng đơn hàng" rules={[{ required: true, message: 'Không được để trống' }]}>
                                <Select >
                                    <Option value="0">Chưa xác nhận</Option>
                                    <Option value="1">Đã xác nhận</Option>
                                    <Option value="2">Đã hủy</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Cập nhật
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default EditOrder