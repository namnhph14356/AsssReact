import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { signup } from '../../api/auth';


type FormTypes = {
    name: string,
    email: string,
    password: string,
    phone: number,
    role: number,
}
const fromSchema = yup.object().shape({
    phone: yup
        .string()
        .required("Không được để trống")
        .min(10, "Ít nhất 10 ký tự"),
    name: yup
        .string()
        .required("Không được để trống")
        .min(3, "Ít nhất 3 ký tự"),
    email: yup.string().required("Không được để trống").email("Đây không phải định dạng email").min(8,"Ít nhất 8 ký tự"),
    password: yup
        .string()
        .required("Không được để trống")
        .min(5, "Ít nhất 5 ký tự"),

});
const validation = { resolver: yupResolver(fromSchema) };

const SignupPage: React.FC = () => {
    const { register, handleSubmit, formState } = useForm<FormTypes>(validation);
    const { errors } = formState;
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormTypes> = async (user: any) => {
        try {
            console.log(user);
            const { data } = await signup(user)
            if (data == "Email already exists") {
                message.error("Username is exist")
            } else {
                message.success("Đăng kí tài khoản mới thành công !")
                navigate("/signin")
            }
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <div>
                        <Label htmlFor="name">Họ và tên</Label><br />
                        <Input type="text" {...register("name", { required: true, minLength: 3 })} />
                        <Error>{errors.name?.message} </Error>
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label><br />
                        <Input type="email" {...register("email", { required: true, minLength: 3 })} />
                        <Error>{errors.email?.message} </Error>
                    </div>
                    <div>
                        <Label htmlFor="phone">Số điện thoại</Label><br />
                        <Input type="number" {...register("phone", { required: true, minLength: 10})} />
                        <Error> {errors.phone?.message}</Error>
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label><br />
                        <Input type="password" {...register("password", { required: true, minLength: 5 })} />
                        <Error>{errors.password?.message} </Error>
                    </div>
                    <Input type="role" style={{ display: "none" }} value={1} {...register("role", { required: true, minLength: 6 })} />
                    <Btn>Đăng kí</Btn>
                </Col>

                <Col2 >

                    <Logo>
                        <img src={logo} alt="" style={{ maxWidth: "100%" }} width={150} />
                    </Logo>


                </Col2>
                <FaceBook>
                    <p style={{ fontSize: '20px' }}>Hoặc đăng nhập bằng</p>
                    <div >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" width={'30px'} style={{ margin: '0 20px' }} alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" width={'30px'} alt="" />
                    </div>
                </FaceBook> 
            </Form>

        </Container>
    );
};
const Container = styled.div`
    background-color: #D9D9D9;
    padding: 100px;
    min-height: 721px;
`
const FaceBook = styled.div`
    padding: 30px;
    text-align: center
`

const Form = styled.form`
    width: 800px;
    height: auto;
    margin: auto ;
    background-color: #fff;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 0px;
`

const Col = styled.div`
   padding:30px 30px;
`
const Col2 = styled.div`
    background-color: #F8F8F8;
    position: relative;
    
`
const Logo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
   
    /* top: 50; */
    transform: translate(-50%, -50%);
/* text-align: center; */
`
const Label = styled.label`
    /* font-weight: 600; */
    font-size: 16px;
`
const Input = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
   
`
const Btn = styled.button`
    width: 100%;
    background-color: #FF424E;
    color: #fff;
    padding: 5px;
    border: 1px solid #FF424E;
    margin-top: 20px;
`
const Error = styled.div`
    color: red;
    margin-bottom: 10px;
	`
export default SignupPage;