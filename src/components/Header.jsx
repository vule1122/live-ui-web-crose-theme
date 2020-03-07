<<<<<<< HEAD
import React, {useEffect, useState, useRef, useCallback} from 'react';
// import './style.css';
import axios from 'axios';

const Header = (prop) => {
    const [getTemp, setTemp] = useState(0);
    const [getTime, setTime] = useState("00:00 AM");
    //Element references
    const navbarToggler = useRef(null);
    const navbarMenu = useRef(null);
    const navbar = useRef(null);
    // const stickyWrapper = useRef(null);
    const navbarClose = useRef(null);
    const navbarItem = useRef(null);
    const navbarTime = useRef(null);
    const navbarTemp = useRef(null);
    const temperature = useRef(null);
    const time = useRef(null);
    const massSchedule = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const facebook = useRef(null);
    const twitter = useRef(null);
    const youtube = useRef(null);
    const mainMenu = useRef(null);
    //Init the current temperature
    useEffect(() => {
        if(sessionStorage.getItem('temp'))
            setTemp(sessionStorage.getItem('temp'));
        else {    
            navigator.geolocation.watchPosition((pos) => {
                axios({
                    url:"https://api.openweathermap.org/data/2.5/weather",
                    method: 'get',
                    params: {
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude,
                        appid: 'a1f8ea13ceb084b2fc8527fa54ffa3c3',
                        units:'imperial'
                    },
                }).then(result => {
                    const temp = Math.round(result.data.main.temp);
                    sessionStorage.setItem('temp', temp);
                    setTemp(temp);
                });
            })
        }
    }, []);

    //Get current time
    const setTimeCallback = useCallback(() => {
        if(window.innerWidth < 1450) {
            setTime(new Date().toLocaleTimeString('en-US', {hc:'h12', hour:'numeric', minute:'numeric'}));
            time.current.classList.remove('fa-lg');
            temperature.current.classList.remove('fa-lg');
        }
        else {
            setTime(new Date().toLocaleDateString('en-US', {hc:'h12', hour:'numeric', minute:'numeric', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'}));
            time.current.classList.add('fa-lg');
            temperature.current.classList.add('fa-lg');
        }
    }, []);

    //Modify styling when the window size is changing
    const resizeCallback = useCallback(() => {
        setTimeCallback();
        if(window.innerWidth < 1450) {
            massSchedule.current.classList.remove('fa-lg');
            email.current.classList.remove('fa-lg');
            phone.current.classList.remove('fa-lg');
            navbar.current.classList.remove("breakpoint-off");
            navbar.current.classList.add("breakpoint-on");
            facebook.current.classList.remove('fa-lg');
            twitter.current.classList.remove('fa-lg');
            youtube.current.classList.remove('fa-lg');
        } else {
            massSchedule.current.classList.add('fa-lg');
            email.current.classList.add('fa-lg');
            phone.current.classList.add('fa-lg');
            navbar.current.classList.remove("breakpoint-on");
            navbar.current.classList.add("breakpoint-off");
            facebook.current.classList.add('fa-lg');
            twitter.current.classList.add('fa-lg');
            youtube.current.classList.add('fa-lg');
        }
    }, [setTimeCallback]);
    //Modify styling when the window is scrolled
    const scrollCallback = useCallback(() => {
        const sticky = mainMenu.current.offsetTop;
        if (window.pageYOffset > sticky) {
        //   stickyWrapper.current.classList.add("is-sticky");
          mainMenu.current.classList.add("is-sticky");
        } else {
        //   stickyWrapper.current.classList.remove("is-sticky");
          mainMenu.current.classList.remove("is-sticky");
          setTimeCallback();
      }
    }, [setTimeCallback]);

    const activateSidebar = () => {
        if(window.innerWidth < 1450) {
            navbarToggler.current.classList.add("active")
            navbarMenu.current.classList.add("menu-on");
        } else {
            navbarToggler.current.classList.remove("active");
            navbarMenu.current.classList.remove("menu-on");
        }
    }

    const closeSidebar = () => {
        if(window.innerWidth < 1450)
            navbarToggler.current.classList.remove("active");
            navbarMenu.current.classList.remove("menu-on");
    }

    const toggleSubMenu = (index, e) => {
        e.stopPropagation()
        if(window.innerWidth < 1450) {
            for(let i = 0; i < navbarItem.current.children.length; i++) {
                if(i === index && !navbarItem.current.children[i].classList.contains("active")) {
                    navbarItem.current.children[i].classList.add("active");
                    navbarItem.current.children[i].children[1].setAttribute("style", "display:block; font-size:10px");
                }
                else {
                    navbarItem.current.children[i].classList.remove("active");    
                    if(navbarItem.current.children[i].children[1] !== undefined)
                        navbarItem.current.children[i].children[1].removeAttribute("style");
                }
            }
        }
    }

    //Add event handler after the element is rendered
    useEffect(() => {
        //Call all the callbacks to setup initial value after the element is mounted
        setTimeCallback();
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        window.addEventListener("scroll", scrollCallback);
        //Unhook the event handlers when the element is unmounted
        return () => {
            window.removeEventListener("scroll", scrollCallback);
            window.removeEventListener("resize", resizeCallback);
        };
      }, [setTimeCallback, resizeCallback, scrollCallback]);
    
    //JSX represent the header element
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import axios from 'axios';
const Header = (prop) => {
    // const [getTemp, setTemp] = useState(() => navigator.geolocation.getCurrentPosition(async(pos) => {
	// 	const res = await axios({
	// 		url:"https://api.openweathermap.org/data/2.5/weather",
	// 		method: 'get',
	// 		params: {
	// 			lat: pos.coords.latitude,
	// 			lon: pos.coords.longitude,
    //             appid: 'a1f8ea13ceb084b2fc8527fa54ffa3c3',
    //             units:'imperial'
	// 		},
    //     });
    //     return res.data.main.temp;
    // }));
>>>>>>> develop
    return (
        // <!-- ##### Header Area Start ##### -->
        <header className= "header-area">
        
            {/* <!-- ***** Top Header Area ***** --> */}
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                                {/* <!-- Top Header Meta --> */}
                                <div className="top-header-meta d-flex flex-wrap">
                                    <p><a href="/" className="open" data-toggle="tooltip" data-placement="bottom" title= {prop.time}><i className="fa fa-clock-o" aria-hidden="true"></i> <span>Time: {prop.time}</span> </a>Temperature: 30 F</p>
                                    <div className="top-social-info">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Top Header Meta --> */}
                                <div className="top-header-meta">
                                    <a href="mailto:info@cttdvn.org" className="email-address"><i className="fa fa-envelope" aria-hidden="true"></i> <span>info@cttdvn.org</span></a>
                                    <a href="#" className="phone"><i className="fa fa-phone" aria-hidden="true"></i> <span>770-921-0077</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <div style={{height: "90px"}}>
                <div className="crose-main-menu" ref={mainMenu}>
                    <div className="classy-nav-container breakpoint-off" ref={navbar}>
                        <div className="container">
                            <nav className="classy-navbar justify-content-between" id="croseNav">
                                <a href="/" className="nav-brand"><img src="img/core-img/gxlogo.png" alt=""/></a>
                                <div className="classy-navbar-toggler" onClick={activateSidebar}>
                                    <span className="navbarToggler" ref={navbarToggler}><span></span><span></span><span></span></span>
=======
            {/* <!-- ***** Top Header Area ***** -->  */}
        
            {/* <!-- ***** Navbar Area ***** --> */}
            <div className="crose-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        {/* <!-- Menu --> */}
                        <nav className="classy-navbar justify-content-between" id="croseNav">
        
                            {/* <!-- Nav brand --> */}
                            <a href="/" className="nav-brand"><img src="img/core-img/gxlogo.png" alt=""/></a>
        
                            {/* <!-- Navbar Toggler --> */}
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>
        
                            {/* <!-- Menu --> */}
                            <div className="classy-menu">
        
                                {/* <!-- close btn --> */}
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
>>>>>>> develop
                                </div>
        
                                {/* <!-- Nav Start --> */}
                                <div className="classynav">
                                        <ul>
                                            {/* <!--li><a href="index.html">TRANG CHÙ</a></li--> */}
                                            <li><a href="/">GIÁO XỨ</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Trang Chủ</a></li>
<<<<<<< HEAD
                                                    <li><a href="/about">Sứ Mệnh Giáo Xứ</a></li>
                                                    <li><a href="history.html">Lịch Sử Giáo Xứ</a></li>
                                                    <li><a href="https://drive.google.com/file/d/15MIqXgWDNfav8VOyCwepnhgZnvay7Eai/preview">Lịch Phụng Vụ</a></li>
                                                    <li><a href="clergy-list">Linh Mục/Tu Sĩ</a></li>
                                                    <li><a href="directors">Qúy Chức</a></li>
=======
                                                    <li><a href="SuMenhGX.html">Sứ Mệnh Giáo Xứ</a></li>
                                                    <li><a href="LichSuGX.html">Lịch Sử Giáo Xứ</a></li>
                                                    <li><a href="LichPhungVu.html">Lịch Phụng Vụ</a></li>
                                                    <li><a href="LinhMuTuSi.html">Linh Mục/Tu Sĩ</a></li>
                                                    <li><a href="QuyChuc.html">Qúy Chứ</a></li>
>>>>>>> develop
                                                </ul>
                                            </li>
                                            <li><a href="#">TIN TỨC/SỰ KIỆN</a>
                                                <ul className="dropdown">
                                                    <li><a href="TinTucCG.html">Tin Tức Công Giáo</a></li>
                                                    <li><a href="SinhHoatGX.html">Sinh Hoạt Giáo Xứ</a></li>
                                                    <li><a href="Lich.html">Lịch 2019</a></li>
                                                    <li><a href="HCMT.html">Hội Chợ Mùa Thu</a></li>
                                                    <li><a href="TNTT.html">TNTT Tôma Thiện</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="BanNganh">BAN NGÀNH</a>
                                                <ul className="dropdown">
                                                    <li><a href="SoDoToChu.html">Sơ Đồ Tổ Chức</a></li>
                                                    <li><a href="KCS.html">Khối Cơ Sở</a></li>
                                                    <li><a href="KDS.html">Khối Đời Sống</a></li>
                                                    <li><a href="KGD.html">Khối Giáo Dục</a></li>
                                                    <li><a href="KHC.html">Khối Hành Chánh</a></li>
                                                    <li><a href="KPT.html">Khối Phụng Tự</a></li>                                            
                                                    <li><a href="KTG.html">Khối Truyền Giáo</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="ThuVien">Thư Viện</a>
                                                <ul className="dropdown">
                                                    <li><a href="ThongTinMV.html">Thông Tin Mục Vụ</a></li>
                                                    <li><a href="CacBaiViet.html">Các Bài Viết</a></li>
                                                    <li><a href="CacBaiGiang.html">Các Bài Giảng</a></li>
                                                    <li><a href="ThuVienHinhAnh.html">Thư Viện Hình Ảnh</a></li>
                                                    <li><a href="DonTu.html">Đơn Từ</a></li>
                                                    <li><a href="PrayerRequest.html">Prayer Request</a></li>
                                                </ul>
                                            </li>                                                                     
                                            <li><a href="Contact">Contact</a></li>
                                        </ul>
        
                                    {/* <!-- Search Button --> */}
                                    <div id="header-search"><i className="fa fa-search" aria-hidden="true"></i></div>
        
                                    {/* <!-- Donate Button --> */}
                                    <a href="#" className="btn crose-btn header-btn">DÂNG HIẾN</a>
        
                                </div>
                                {/* <!-- Nav End --> */}
                            </div>
                        </nav>
                    </div>
                </div>
        
                {/* <!-- ***** Search Form Area ***** --> */}
                <div className="search-form-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="searchForm">
                                    <form action="#" method="post">
                                        <input type="search" name="search" id="search" placeholder="Enter keywords &amp; hit enter..."/>
                                        <button type="submit" className="d-none"></button>
                                    </form>
                                    <div className="close-icon" id="searchCloseIcon"><i className="fa fa-close" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
=======
            {/* <!-- ***** Navbar Area ***** --> */}
>>>>>>> develop
        </header>
        // <!-- ##### Header Area End ##### -->
    );
};

export default Header;