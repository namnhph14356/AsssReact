import React from 'react'
import { Breadcrumb, Col, Layout, Menu, Row } from 'antd';
const { Header, Content, Footer } = Layout;
import { HomeOutlined, CarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components'


export const Listnav = () => {
  return (
    <div style={{ color: "white", margin: "auto 0" }}>
      <Row >
        <Col span={6}>
          <Row style={{ lineHeight: "1.5", display: "block" }}>
            <Col >Gọi mua hàng</Col>
            <Col>18002097</Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row style={{ lineHeight: "1.5" }}>
            <Col span={8} style={{ margin: "auto 0", fontSize: "30px" }}><svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 0.741104C8.15359 0.754172 5.90802 1.69656 4.25504 3.36189C2.60206 5.02722 1.67641 7.27974 1.6808 9.62615C1.6808 16.5843 9.66829 23.7731 9.99767 24.0695C10.13 24.1916 10.3034 24.2594 10.4835 24.2594C10.6636 24.2594 10.837 24.1916 10.9693 24.0695C11.3152 23.7731 19.3027 16.5843 19.3027 9.62615C19.3071 7.28258 18.3837 5.03253 16.7343 3.36767C15.0848 1.70281 12.8435 0.758508 10.5 0.741104V0.741104Z" stroke="white" stroke-width="1.48221" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.5 13.4634C9.72799 13.4634 8.97336 13.2345 8.33148 12.8056C7.68961 12.3768 7.18934 11.7672 6.89391 11.054C6.59849 10.3407 6.5212 9.55595 6.6718 8.79881C6.82241 8.04167 7.19415 7.34619 7.74001 6.80032C8.28588 6.25446 8.98136 5.88272 9.7385 5.73211C10.4956 5.58151 11.2804 5.6588 11.9936 5.95422C12.7069 6.24965 13.3164 6.74992 13.7453 7.3918C14.1742 8.03367 14.4031 8.7883 14.4031 9.56028C14.401 10.5948 13.989 11.5863 13.2575 12.3178C12.526 13.0493 11.5345 13.4613 10.5 13.4634V13.4634Z" stroke="white" stroke-width="1.48221" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Col>
            <Col span={14}>Cửa hàng <br /> gần bạn</Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row style={{ lineHeight: "1.5" }}>
            <Col span={8} style={{ margin: "auto 0", fontSize: "30px" }}><svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.10223 23.2294C8.63843 23.2294 9.88377 21.9824 9.88377 20.4441C9.88377 18.9058 8.63843 17.6588 7.10223 17.6588C5.56602 17.6588 4.32068 18.9058 4.32068 20.4441C4.32068 21.9824 5.56602 23.2294 7.10223 23.2294Z" stroke="white" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.9848 23.2294C24.521 23.2294 25.7663 21.9824 25.7663 20.4441C25.7663 18.9058 24.521 17.6588 22.9848 17.6588C21.4486 17.6588 20.2032 18.9058 20.2032 20.4441C20.2032 21.9824 21.4486 23.2294 22.9848 23.2294Z" stroke="white" stroke-width="1.66" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.5267 20.4255H30.356C30.7101 20.4255 31.0497 20.2847 31.3001 20.0339C31.5505 19.7832 31.6911 19.4432 31.6911 19.0886V13.518" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.1452 0.835587H13.7409C13.3868 0.835587 13.0472 0.976443 12.7968 1.22717C12.5464 1.47789 12.4058 1.81795 12.4058 2.17253V19.1072C12.4106 19.4585 12.5535 19.7938 12.8033 20.0405C13.0532 20.2873 13.39 20.4256 13.7409 20.4255H19.5729" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.52217 5.49632H6.25848C5.85235 5.49656 5.45262 5.5976 5.09503 5.7904C4.73744 5.98321 4.43316 6.26177 4.20941 6.60116L1.23315 11.1412C0.968496 11.5467 0.82976 12.0216 0.834466 12.506V18.5037C0.841775 19.0159 1.05014 19.5047 1.4145 19.8644C1.77886 20.224 2.26993 20.4256 2.78155 20.4255H3.47694" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M31.6911 3.22166V2.17253C31.6911 1.81795 31.5505 1.47789 31.3001 1.22717C31.0497 0.976443 30.7101 0.835587 30.356 0.835587H23.2538" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M40.1656 6.47118H30.1984" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M37.5509 10.2592H30.1984" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.0251 15.1613H35.2979" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Col>
            <Col span={14}>Tra cứu <br /> đơn hàng</Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row style={{ lineHeight: "1.5", }}>
            <Col span={8} style={{ margin: "auto 0", fontSize: "30px" }}><a href=''><svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.30994 7.51354V3.8138C7.30899 3.39575 7.39087 2.98165 7.55085 2.59542C7.71082 2.20919 7.94573 1.85847 8.242 1.56353C8.53827 1.26858 8.89003 1.03525 9.27698 0.877009C9.66392 0.718767 10.0784 0.638749 10.4964 0.641575V0.641575C11.3378 0.641575 12.1446 0.975791 12.7395 1.5707C13.3344 2.16561 13.6687 2.97247 13.6687 3.8138V7.51354" stroke="white" stroke-width="1.28315" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.9122 24.3584H4.08075C3.63137 24.3578 3.18696 24.2644 2.77534 24.084C2.36373 23.9037 1.99377 23.6404 1.68863 23.3105C1.3835 22.9806 1.14975 22.5912 1.00202 22.1668C0.854288 21.7424 0.795763 21.2921 0.830104 20.844L1.96355 6.25891C1.98506 6.00175 2.10263 5.76212 2.29286 5.58775C2.48309 5.41337 2.73201 5.31704 2.99007 5.31794H18.0029C18.2602 5.31718 18.5083 5.41375 18.6974 5.58827C18.8864 5.7628 19.0025 6.00237 19.0223 6.25891L20.1415 20.844C20.1768 21.2905 20.1196 21.7395 19.9736 22.1629C19.8275 22.5864 19.5957 22.9751 19.2927 23.3049C18.9896 23.6347 18.6218 23.8985 18.2123 24.0798C17.8027 24.261 17.3601 24.3559 16.9122 24.3584V24.3584Z" stroke="white" stroke-width="1.28315" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </a> </Col>
            <Col span={14}>Giỏ  <br /> hàng</Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Listnav
