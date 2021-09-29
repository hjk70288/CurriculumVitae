import React, { useState } from 'react';
import '../assets/css/layout.css';
import Fade from 'react-reveal/Fade';
import ReactPageScroller from "react-page-scroller";

function Main(){

    const [current_page, setCurrentPage] = useState(null);

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
                            <img className='profile' src='https://avatars.githubusercontent.com/u/56548968?v=4' alt=''></img>
                            <div className='content'>
                                <div className='title'>contact</div>
                                <p>Email. <b>hjk70288@gmail.com</b></p>
                                <p>Phone. <b>010-3703-0728</b></p>
                                <p>GitHub. <b>https://github.com/hjk70288</b></p>
                            </div>
                        </div>
                        <div className='line'></div>
                    </Fade>
                    <Fade right duration={1200}>
                        <div className='title'>Introduce</div>
                        <div className='introduce'>
                            <div className='content'>
                                현재 (주)세븐미어캣에서 웹 서비스를 기획/개발/배포/운영하고 있습니다.
                            </div>
                            <div className='content'>
                                내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 
                            </div>
                            <div className='content'>
                                내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 내용 채우기 
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className='full_page'>
                <div className='container'>
                    <Fade right duration={1500}>
                        <div className='title'>Work Experience</div>
                        <div className='experience'>
                            <div className='experience_item'>
                                <div>프로젝트</div>
                                2020.02-<br/>
                                2020.06
                            </div>
                            <div className='experience_item'>
                                <div><b>정왕동 맛집 추천 사이트 개발</b></div>
                                <ul>
                                    <li>웹 프로그래밍 수강 중 팀프로젝트 과제로 개발</li>
                                    <li>JSP를 사용하여 개발</li>
                                    <li>로그인, 로그아웃, 회원가입, 회원탈퇴등의 기본적인 기능들과 CRUD 기능을 탑재하고 있는 게시판, 페이징 및 검색 기능등을 개발</li>
                                </ul>
                            </div>
                        </div>

                        <div className='experience'>
                            <div className='experience_item'>
                                <div>졸업작품</div>
                                2020.02-<br/>
                                2020.06
                            </div>
                            <div className='experience_item'>
                                <div><b>시각 장애인을 위한 학습 보조 점자 시스템 개발</b></div>
                                <ul>
                                    <li>사용자로부터 이미지를 전송받아 OCR을 통해 텍스트를 추출하는 서버 개발</li>
                                    <li>AWS의 EC2로 서버 호스팅</li>
                                </ul>
                            </div>
                        </div>

                        <div className='experience'>
                            <div className='experience_item'>
                                <div>프로젝트</div>
                                2020.02-<br/>
                                2020.06<br/>
                                (주)세븐미어캣
                            </div>
                            <div className='experience_item'>
                                <div><b>주차장 관리자 페이지 개발</b></div>
                                <ul>
                                    <li>Web backend(Node.js, Maria DB)</li>
                                    <li>Web frontend(EJS, CSS3, JS ES6, JQuery)</li>
                                </ul>
                                <div className='line_space'></div>
                                <div><b>중앙 관리자 페이지 개발</b></div>
                                <ul>
                                    <li>Web backend(Node.js, Maria DB)</li>
                                    <li>Web frontend(EJS, CSS3, JS ES6, JQuery)</li>
                                </ul>
                                <div className='line_space'></div>
                                <div><b>회사 홈페이지 개발</b></div>
                                <ul>
                                    <li>Web backend(Node.js, Maria DB)</li>
                                    <li>Web frontend(EJS, CSS3, JS ES6, JQuery)</li>
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
                                <li>2019 KPU 소프트웨어 경진대회 장려상 수상</li>
                                <li>2020 KPU 소프트웨어 경진대회 장려상 수상</li>
                            </ul>
                        </div>
                        <div className='line'></div>
                    </Fade>
                    <Fade left duration={1600}>
                        <div className='title'>Skill</div>
                        <div>
                            <ul>
                                <li>Front-End: Javascript(ES6), JSP, JQuery, React.js, HTML5/CSS3</li>
                                <li>Back-End: Node.js, AWS(EC2, S3)</li>
                                <li>Database: Maria DB(Mysql)</li>
                                <li>Environment: AWS, Linux, macOS, UNIX, Windows</li>
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