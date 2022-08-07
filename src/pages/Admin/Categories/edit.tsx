import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductId } from '../../../api/product';
import UploadImage from '../../../components/product/UploadImage';
import { useQuery } from 'react-query';
import { editCate, getCateId, listCate } from '../../../api/category';


const EditCategories = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()

    const { id } = useParams();
    const [form] = Form.useForm();



    useEffect((() => {
        if (id) {
            const getCate = async (id: any) => {
                const { data } = await getCateId(id);
                console.log(data.image);
                form.setFieldsValue(data)
                // onreset(payload)

            }
            getCate(id);
        }
    }), [])

    const onFinish = async (values: any) => {

        await editCate({ ...values, id })
        // console.log(data);
        message.success("Cập nhật thành công");
        navigate("/admin/categories")

    };
    // console.log(uploadedImage);

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Sửa danh mục
                </Typography.Title>
            </Breadcrumb>
            <Row gutter={16}>
                <Col span={14}>
                    <Typography.Title level={5}>Thông tin danh mục</Typography.Title>
                    <Form
                        form={form}
                        // name="product"
                        initialValues={{}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                        labelCol={{ span: 24 }}
                    >
                        <Form.Item
                            name="name"
                            labelCol={{ span: 24 }}
                            label="Tên sản phẩm"
                            rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
                        >
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Cập nhật danh mục
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`

export default EditCategories