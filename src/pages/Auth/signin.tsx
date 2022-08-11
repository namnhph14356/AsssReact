import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { signin } from '../../api/auth';

type FormTypes = {
	name: string,
	email: string,
	password: string,
	phone: number
}

const fromSchema = yup.object().shape({
	email: yup.string().required("Không được để trống").email("It not Email"),
	password: yup
		.string()
		.required("Không được để trống")
		.min(6, "Phải lớn hơn 6 kí tự"),

});
const validation = { resolver: yupResolver(fromSchema) };
const SigninPage: React.FC = () => {

	const { register, handleSubmit, formState } = useForm<FormTypes>(validation);
	const { errors } = formState;
	const navigate = useNavigate()

	const onSubmit: SubmitHandler<FormTypes> = async (user: any) => {
		try {
			const { data } = await signin(user)
			if (data == "Cannot find user") {
				message.error("Email không tồn tại")
			} else if (data == "Incorrect password") {
				message.error("Mật khẩu không chính xác")
			} else {
				message.success("Đăng nhập thành công !");
				localStorage.setItem("user", JSON.stringify(data))
				navigate("/")

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
                        <Label htmlFor="email">Email</Label><br />
                        <Input type="email" {...register("email", { required: true, minLength: 3 })} />
                        <Error>{errors.email?.message} </Error>
                    </div>
                    
                    <div>
                        <Label htmlFor="password">Password</Label><br />
                        <Input type="password" {...register("password", { required: true, minLength: 5 })} />
                        <Error>{errors.password?.message} </Error>
                    </div>
                    <Btn>Đăng nhập</Btn>
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
export default SigninPage;