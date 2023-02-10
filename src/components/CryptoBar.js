import { useEffect, useRef } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import '../style/scss/cryptoBar.scss';

const CryptoBar = () => {
    const firstBar = useRef();
    const secondBar = useRef();
    const coinDatas = [
        {img: 'https://static.coincap.io/assets/icons/btc@2x.png', coinName: 'Bitcoin', coinPrice: 20841.918671693, coinState: 'up', apy: 10.9},
        {img: 'https://static.coincap.io/assets/icons/eth@2x.png', coinName: 'Ethereum', coinPrice: 1548.513719001, coinState: 'up', apy: 9.85},
        {img: 'https://static.coincap.io/assets/icons/bnb@2x.png', coinName: 'BNB', coinPrice: 307.6335071844, coinState: 'up', apy: 6.37},
        {img: 'https://static.coincap.io/assets/icons/matic@2x.png', coinName: 'Polygon', coinPrice: 0.97573990234618, coinState: 'up', apy: 6.59},
        {img: 'https://static.coincap.io/assets/icons/busd@2x.png', coinName: 'BUSD', coinPrice: 1.0002327411872, coinState: 'up', apy: 0.03},
        {img: 'https://static.coincap.io/assets/icons/usdt@2x.png', coinName: 'Tether', coinPrice: 1.0001256935539, coinState: 'up', apy: 0.02},
    ];
    useEffect(() => {
        
    });

    return (
        <div id="HomeSection">
            <div className='crypto-bar'>
                <div className='flow-bar' ref={firstBar}>
                    {
                        coinDatas.map((coinData, index) => {
                            return (
                                <div key={index} style={{width: "300px", display: 'inline-block'}}>
                                    <CryptoBarItem data={coinData} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flow-bar' ref={secondBar}>
                    {
                        coinDatas.map((coinData, index) => {
                            return (
                                <div key={index} style={{width: "300px", display: 'inline-block'}}>
                                    <CryptoBarItem data={coinData} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flow-bar'>
                    {
                        coinDatas.map((coinData, index) => {
                            return (
                                <div key={index} style={{width: "300px", display: 'inline-block'}}>
                                    <CryptoBarItem data={coinData} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const CryptoBarItem = (props) => {
    const { data } = props;
    return (
        <div className='d-flex align-items-center gap-3'>
            <Form.Text className='d-flex gap-2 align-items-center text-middle'>
                <img src={data.img} width="16" height="16" alt="" />{data.coinName}</Form.Text>
            <Form.Text className='text-middle'>${data.coinPrice}</Form.Text>
            <Form.Text className='text-light d-flex gap-2'><Form.Text className='text-red'>\"</Form.Text>{data.apy}%</Form.Text>
        </div>
    )
}
export default CryptoBar;