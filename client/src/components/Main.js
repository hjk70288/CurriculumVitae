import React, { useState } from 'react';
import '../assets/css/layout.css';
import profile from '../assets/image/profile.jpg';
import Fade from 'react-reveal/Fade';
import ReactPageScroller from "react-page-scroller";

function Main(){

    const [current_page, setCurrentPage] = useState();

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return(
        <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={current_page}
        >
            <div className='full_page'>
                <div className='container'>
                    <Fade left duration={1200}>
                        <h3>개발자 김용민 입니다.</h3>                        
                        <div className='contact'>
                            <img className='profile' src={profile} alt=''></img>
                            <div className='content'>
                                <div className='title'>contact</div>
                                <p>Email. <b>hjk70288@gmail.com</b></p>
                                <p>Phone. <b>010-3703-0728</b></p>
                                <p>GitHub. <b><a href='https://github.com/hjk70288'>https://github.com/hjk70288</a></b></p>
                            </div>
                        </div>
                        <div className='line'></div>
                    </Fade>
                    <Fade right duration={1200}>
                        <div className='title'>Introduce</div>
                        <div className='introduce'>
                            <div className='content'>
                                올해 2월부터 현재까지 (주)세븐미어캣에서 웹 서비스를 기획/개발/배포/운영하고 있습니다.<br/>
                                Node + React를 바탕으로 주차장을 관리하고 통계를 분석하는 서비스를 개발했습니다.                                
                            </div>
                            <div className='content'>
                                새로운 것에 대해 익히고 경험하는 것을 두려워하지 않습니다.<br/>
                                현재 회사에 들어온 이후로 대부분 처음 접한 기술들을 소화했고 성공적으로 서비스를 제공했습니다.
                            </div>
                            <div className='content'>
                                반복적이고 비효율적인 과정을 개선하는 것을 좋아합니다.<br/>
                                동료의 업무 처리 효과를 향상시키기 위해 백오피스를 개발한 경험이 있습니다.                                
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className='full_page'>
                <div className='container'>
                    <Fade right duration={1100}>
                        <div className='title'>Work Experience</div>
                        <div className='experience'>
                            <div className='experience_item'>
                                <div><b>팀 프로젝트</b></div>
                                2020.04-<br/>
                                2020.04
                            </div>
                            <div className='experience_item'>
                                <div><b>정왕동 맛집 추천 사이트 개발</b></div>
                                <ul>
                                    <li>JSP를 사용하여 개발</li>
                                    <li>로그인, 로그아웃, 회원가입, 회원탈퇴등의 기본적인 기능들과 CRUD 기능을 탑재하고 있는 게시판, 페이징 및 검색 기능등을 개발</li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={1200}>
                        <div className='experience'>
                            <div className='experience_item'>
                                <div><b>졸업작품</b></div>
                                2020.06-<br/>
                                2021.08
                            </div>
                            <div className='experience_item'>
                                <div><b>시각 장애인을 위한 학습 보조 점자 시스템 개발</b></div>
                                <ul>
                                    <li>사용자로부터 이미지를 전송받아 OCR을 통해 텍스트를 추출하는 서버 개발</li>
                                    <li>서버는 AWS의 EC2(Ubuntu 18.04) 인스턴스로 개발</li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                    <Fade right duration={1300}>
                        <div className='experience'>
                            <div className='experience_item'>
                                <div><b>프로젝트</b></div>
                                2021.02-<br/>
                                현재<br/>
                                (주)세븐미어캣
                            </div>
                            <div className='experience_item'>
                                <div><b>주차장 관리자 페이지 개발</b></div>
                                <ul>
                                <li>주차장 관리소장들이 사용하는 주차장을 관리할 수 있는 관리자 페이지 개발</li>
                                    <li>Web Back-End(Maria DB, Node.js)</li>
                                    <li>Web Front-End(CSS3, EJS, Javascript(ES6), JQuery)</li>
                                </ul>
                                <div className='line_space'></div>
                                <div><b>중앙 관리자 페이지 개발</b></div>
                                <ul>
                                    <li>주차장, 차량, 앱 사용자, 결제 등 세븐미어캣의 모든 통계를 분석하고 관리하는 관리자 페이지 개발</li>
                                    <li>Web Back-End(Maria DB, Node.js)</li>
                                    <li>Web Front-End(CSS Module, Javascript(ES6), React.js)</li>
                                </ul>
                                <div className='line_space'></div>
                                <div><b>회사 홈페이지 개발</b></div>
                                <ul>
                                    <li>(주)세븐미어캣 공식 회사 홈페이지 개발</li>
                                    <li>Web Back-End(Node.js, Maria DB)</li>
                                    <li>Web Front-End(CSS Module, Javascript(ES6), React.js)</li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>


            <div className='full_page'>
                <div className='container'>
                    <Fade right duration={1500}>
                        <div className='title'>License and Certificate</div>
                        <div className='license'>
                            <div><b>자격증</b></div>
                            <ul>
                                <li>정보처리기사(2021.08.20)</li>
                            </ul>
                            <div><b>교내 수상 경력</b></div>
                            <ul>
                                <li>2019 KPU 소프트웨어 경진대회 장려상 수상(2019.10)</li>
                                <li>2020 KPU 소프트웨어 경진대회 장려상 수상(2020.10)</li>
                            </ul>
                        </div>
                        <div className='line'></div>
                    </Fade>
                    <Fade left duration={1600}>
                        <div className='title'>Skill</div>
                        <div>
                            <ul>
                                <li><b>Front-End:</b> HTML5/CSS3, Javascript(ES6), JSP, JQuery, React.js</li>
                                <li><b>Back-End:</b> AWS(EC2, S3), Node.js</li>
                                <li><b>Database:</b> Maria DB(Mysql)</li>
                                <li><b>Environment:</b> AWS, Linux, macOS, UNIX, Windows</li>
                                <li><b>Configuration Management:</b> Git(GitHub, GitLab)</li>
                            </ul>
                        </div>
                        <div className='line'></div>
                    </Fade>
                    <Fade right duration={1700}>
                        <div className='title'>Education</div>
                        <div className='education'>
                            2018.02-2021.02 한국산업기술대학교 컴퓨터공학과
                        </div>
                    </Fade>
                </div>
            </div>
        </ReactPageScroller>
    )
}

export default Main;