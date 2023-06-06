import React,{useState,useEffect} from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../redux/Slices/StepSlice';
function DownLoadPage() {
    const theme = useSelector((state) => state.step.theme);
    const dispatch = useDispatch();
    const[flag,setFlag]=useState(false);
    const[allowNext,setAllowNext]=useState(false);
    useEffect(()=>{
        if(theme!==""){
            setAllowNext(true);
        }
        else
            setAllowNext(false);
        // eslint-disable-next-line
    },[flag])
    let themeColor = ["#4200FF", '#3190EE', '#61B6BB', '#C84141', '#000000']
    return (
        <>
            <Row>
                <Col span={20} offset={2} className='d-flex flex-wrap justify-content-around' >d
                    {
                        themeColor.map((value, index) => {
                            return (
                                <div className='resumeTheme' style={theme === value ? { border: "5px solid #2cd701" } : null} onClick={() => {
                                    dispatch(updateTheme({ data: value }))
                                    setFlag(!flag);
                                }}></div>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }}>
                </Col>
                <Col span={16} offset={4}>
                    <button className="primary-btn" style={{ width: "100%" }} disabled={!allowNext} onClick={()=>{
                        window.scroll("0px","0px");
                    }}>Download Resume</button>
                </Col>
            </Row>
        </>
    )
}
export default DownLoadPage;