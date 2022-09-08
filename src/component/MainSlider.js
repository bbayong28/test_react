
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "01 슬라이드 제목", des: "01 슬라이드 내용입니다.", link: "/1" },
    { slideid: 2, content: "02 슬라이드 제목", des: "02 슬라이드 내용입니다.", link: "/2" },
    { slideid: 3, content: "03 슬라이드 제목", des: "03 슬라이드 내용입니다.", link: "/3" },
]



const MainSlider = () => {
    const [num, setNum] = useState();
    const slideRef = useRef();
    //https://cocoon1787.tistory.com/796 참고!!!!!!
    //함수를 그릴때 마다 다시 실행한다.
    //useEffect(() => {})
    // 처음에 마운트됐을 때 한번만 실행한다 {}:콜백함수 []:의존성배열  -> 얘를 쳐줘야 한번만 실행한다.
    useEffect(() => {
        setNum(0)
    }, []);
    const slideSet = {
        dots: true,
        afterChange: index => setNum(index),
    }
    return (
        <section className='MainVisual'>
            <Slider {...slideSet} ref={slideRef} className='main_slider'>
                {
                    SLIDE.map(
                        (slide, idx) =>
                            <figure className={`itm0${slide.slideid} ${idx === num ? 'on' : ''}`} key={slide.slideid}>
                                <div className='inner'>
                                    <h2>{slide.content}</h2>
                                    <p>{slide.des}</p>
                                    <a href={slide.link}>more</a>
                                </div>
                            </figure>
                    )
                }
            </Slider>
            <div className='num'>0{num + 1} / <span>0{SLIDE.length}</span></div>
            <div className="slide_handler">
                <button onClick={() => slideRef.current.slickPrev()}>prev</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </div>
            <ul className="slide_dots">
                {
                    SLIDE.map((dots, idx) => <li className={idx === num ? 'on' : ''}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideid}>{dots.content}</li>)
                }
            </ul>

        </section>
    )
}

export default MainSlider;