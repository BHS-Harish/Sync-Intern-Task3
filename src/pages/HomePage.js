import React from 'react';
import {useNavigate} from 'react-router';
import { Row, Col } from 'antd';
import illustration from '../assets/homepage-illustration.jpg';
import logo from '../assets/logo512.png';
function HomePage() {
    const navigate=useNavigate();
    return (
        <div className='custom-container'>
            <Row>
                <Col span={24}>
                    <header className='d-flex justify-content-center align-items-center'>
                        <img src={logo} alt={"skillcert-logo"} className='logo'/>
                    </header>
                </Col>
            </Row>
            <Row style={{margin:"20px auto"}}>
                <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 2 }}>
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                        <img src={illustration} alt='homepage-illustration' style={{ width: "70%", height: "auto" }} />
                    </div>
                </Col>
                <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }}>
                <div className='w-100 h-100 d-flex justify-content-center align-items-center flex-column'>
                        <h1 className='text-center txt-primary mb-4 mt-3' style={{fontFamily: 'DM Serif Display'}}>Design a standout resume in minutes</h1>
                        <p className='fw-bold fs-6 mb-4 text-center'>Boost your chance to land that dream job</p>
                        <button className='primary-btn' onClick={()=>{
                            navigate('/builder');
                        }}>Build resume now</button>
                        <p className='mt-3 mb-3 fw-light'>No registration needed</p>
                    </div>
                </Col>
            </Row>
        </div>

    )
}
export default HomePage;