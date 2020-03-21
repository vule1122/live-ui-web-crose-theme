import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Event = (prop) => {
    return (
        <section className="upcoming-events-area section-padding-0-100">
            {/* <!-- Upcoming Events Heading Area --> */}
            <div className="upcoming-events-heading bg-img bg-overlay bg-fixed" style={{backgroundImage: "url(http://cttdvnatl.net/gallery/img/bg-img/1.jpg)"}}>
                <div className="container">
                    <div className="row">
                        {/* <!-- Section Heading --> */}
                        <div className="col-12">
                            <div className="section-heading text-left white">
                                <h2>Thông Báo - Sự Kiện</h2>
                                <p>Hãy ghé thăm trang Sự kiện sắp tới của Giáo Xứ thường xuyên để nhận thông tin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Upcoming Events Slide --> */}
            <Carousel controls="false">
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="single-slide">
                                    {/* <!-- Single Upcoming Events Area --> */}
                                    <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                        {/* <!-- Thumbnail --> */}
                                        <div className="upcoming-events-thumbnail">
                                            <img src="http://cttdvnatl.net/gallery/img/index/upcoming-upcoming_events.jpg" alt=""/>
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                            <div className="events-text">
                                                <p><a href="activites.html#target21" style={{color:"#850000"}}>PHỤNG VỤ - Lễ Thánh Giuse,  Lễ Truyền Tin</a></p>
                                                <p><a href="activites.html#target20" style={{color:"#850000"}}>CHẶNG ĐÀNG THÁNH GIÁ MÙA CHAY 2020</a></p>
                                                <p><a href="activites.html#target19" style={{color:"#850000"}}>NGẮM NĂM DẤU THÁNH CGS và DÂNG HẠT MÙA CHAY 2020</a></p>
                                                <p><a href="activites.html#target18" style={{color:"#850000"}}>KHỐI GIÁO DỤC: Tĩnh Tâm Khối Giáo Dục, GHI DANH NĂM HỌC MỚI 2020-2021 </a></p>
                                                <p><a href="activites.html#target17" style={{color:"#850000"}}>CHÚC MỪNG THÀNH VIÊN MỚI </a></p>
                                                <p><a href="activites.html#target16" style={{color:"#850000"}}>HỘI CHỢ MÙA THU 2020 </a></p>
                                                <p><a href="activites.html#target15" style={{color:"#850000"}}>BAN BÁC ÁI XÃ HỘI - Chương trình “CHIA SẺ MÙA CHAY 2020” </a></p>
                                                <p><a href="activites.html#target14" style={{color:"#850000"}}>HỘI CAO NIÊN DIÊN HỒNG </a></p>
                                                <p><a href="activites.html#target13" style={{color:"#850000"}}>KHỐI GÂY QUỸ MENU </a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Event;