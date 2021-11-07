import React, { useState } from 'react';
import '../assets/css/layout.css';
import profile from '../assets/image/profile.jpg';
import github_icon from '../assets/image/contact/github.svg';
import phone_icon from '../assets/image/contact/phone.svg';
import email_icon from '../assets/image/contact/email.svg';
import html_icon from '../assets/image/skill/html.png';
import css_icon from '../assets/image/skill/css.png';
import sass_icon from '../assets/image/skill/sass.png';
import js_icon from '../assets/image/skill/js.png';
import react_icon from '../assets/image/skill/react.png';
import jquery_icon from '../assets/image/skill/jquery.png';
import aws_icon from '../assets/image/skill/aws.png';
import nodejs_icon from '../assets/image/skill/nodejs.png';
import maria_db_icon from '../assets/image/skill/maria_db.png';
import git_icon from '../assets/image/skill/git.png';
import top_button_icon from '../assets/image/top_button.png';
import Fade from 'react-reveal/Fade';
import ReactPageScroller from "react-page-scroller";

function Main(){

    const [current_page, setCurrentPage] = useState();

    const handlePageChange = (page) => {
		let selected_index = 0;
		page = page === 2 ? 1 : page;
		const menu_list = document.getElementsByClassName('menu');
		for(let menu_index = 0; menu_index < menu_list.length; menu_index++){
			menu_list[menu_index].classList.remove('selected');
			if(page === menu_list[menu_index].getAttribute('index')*1){
				selected_index = menu_index;
			}
		}
		menu_list[selected_index].classList.add('selected');

		setCurrentPage(page);
    };

    return(
		<>
			<div className='header'>
				<div className='header_title'>
					KYM
				</div>
				<div className='menu_wraper'>
					<div className='menu selected' index={0} onClick={() => setCurrentPage(0)}>Contact & Introduce</div>
					<div className='menu' index={1} onClick={() => setCurrentPage(1)}>Work Experience</div>
					<div className='menu' index={3} onClick={() => setCurrentPage(3)}>Tech Skills</div>
					<div className='menu' index={4} onClick={() => setCurrentPage(4)}>License and Certificate & Education</div>
				</div>
			</div>
			<ReactPageScroller
				pageOnChange={handlePageChange}
				customPageNumber={current_page}
			>
				<div className='full_page'>
					<div className='container'>
						<Fade left duration={1200}>
							<h3 className='me'>개발자 김용민 입니다.</h3>
							<div className='contact'>
								<div className='profile_wrap'>
									<img className='profile' src={profile} alt=''></img>
								</div>
								<div className='content'>
									<div className='title'>Contact</div>
									<p><img src={email_icon} alt=''/> <b>kimyongmin1228@gmail.com</b></p>
									<p><img src={phone_icon} alt=''/> <b>010-3703-0728</b></p>
									<p><img src={github_icon} alt=''/> <b><a href='https://github.com/hjk70288'>https://github.com/hjk70288</a></b></p>
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
									동료의 업무 처리 효과를 향상시키기 위해 백오피스의 기능을 자동화시킨 경험이 있습니다.
								</div>
							</div>
						</Fade>
					</div>
				</div>

				<div className='full_page'>
					<div className='container'>
						<Fade right duration={1100}>
							<div className='title'>Work Experience</div>
							<div className='experience_source'><u>세븐미어캣</u></div>
							<div className='experience'>
								<div className='experience_item'>
									<div><b>Front-End&<br/>Back-End</b></div>
								</div>
								<div className='experience_item'>
									<div><b>주차장 관리자 페이지 개발</b></div>
									<ul>
										<li>주차장 관리소장들이 사용하는 주차장을 관리할 수 있는 관리자 페이지 개발</li>
										<li>실시간으로 주차장의 상태를 확인할 수 있는 CCTV 기능 제공</li>
										<li>웹 페이지에서 차단기의 상태를 실시간으로 변경할 수 있는 기능 제공</li>
										<li>주차장 입출차 내역 및 주차장에 등록된 차량 목록 엑셀 다운로드 기능 제공</li>
										<li>아파트 투표 생성, 주차 할인권 적용, 앱 회원 관리 등 다양한 관리자 기능 제공</li>
									</ul>
								</div>
							</div>
							<div className='experience'>
								<div className='experience_item'>
									<div><b>Front-End&<br/>Back-End</b></div>
								</div>
								<div className='experience_item'>
									<div><b>주차장 관리자 페이지 모바일 페이지 개발</b></div> 
									<ul>
										<li>주차장 관리자의 모바일 버전 개발</li>
										<li>주차장 관리자 URL로 접속 시 해당 기기를 판단하여<br/>해당 기기에 적합한 URL로 Redirect</li>
									</ul>
								</div>
							</div>
							<div className='experience'>
								<div className='experience_item'>
									<div><b>Front-End&<br/>Back-End</b></div>
								</div>
								<div className='experience_item'>
									<div><b>중앙 관리자 페이지 개발</b></div>
									<ul>
										<li>주차장, 차량, 앱 사용자, 커머스 등 세븐미어캣의 모든 요소들을<br/>총괄하고 분석하는 관리자 페이지 개발</li>
										<li>HighChart를 사용하여 다양한 종류의 차트를 지닌 대시보드 제공</li>
										<li>Redux를 통한 전역 상태관리 및 Authentication</li>
										<li>커머스 관리의 편의를 위한 주문서 수집 자동화 스케줄러를 통한 주문관리 자동화 기능 개발</li>
									</ul>
								</div>
							</div>
						</Fade>
					</div>
				</div>

				<div className='full_page'>
					<div className='container'>
						<Fade right duration={1100}>
							<div className='experience'>
								<div className='experience_item'>
									<div><b>Front-End&<br/>Back-End</b></div>
								</div>
								<div className='experience_item'>
									<div><b>회사 홈페이지 개발</b></div>
									<ul>
										<li>(주)세븐미어캣의 공식 회사 홈페이지 개발</li>
										<li>등록되어있는 전체 차량 정보를 Progress Bar로 표현</li>
										<li>
											<a target='_blank' rel="noopener noreferrer" href='http://7meerkat.com'>
												<b>홈페이지로 이동</b>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='experience'>
								<div className='experience_item'>
									<div><b>Server Develop</b></div>
								</div>
								<div className='experience_item'>
									<div><b>세븐미어캣 API 서버 개발</b></div>
									<ul>
										<li>부트페이를 통한 결제 및 결제 취소 API 개발</li>
										<ul>
											<li>주차장 정산기 QR결제 API 개발</li>
											<li>공동구매 결제, 취소 API 개발</li>
										</ul>
										<li>주차장 발권기, 정산기 용지 부족시 카카오 알림톡 전송 API 개발</li>
										<li>세븐미어캣 앱 Firebase(FCM) 푸시 알람 전송 API 개발</li>
									</ul>
								</div>
							</div>
						</Fade>
						<div className='line'></div>
						<Fade right duration={1200}>
							<div className='experience_source'><u>졸업작품</u></div>
							<div className='experience'>
								<div className='experience_item'>
									<div><b>Server Develop</b></div>
								</div>
								<div className='experience_item'>
									<div><b>시각 장애인을 위한 학습 보조 점자 시스템 개발</b></div>
									<ul>
										<li>사용자로부터 이미지를 전송받아 OCR을 통해 텍스트를 추출하는 서버 개발</li>
										<li>서버는 AWS의 EC2(Ubuntu 18.04) 인스턴스로 개발</li>
										<li>OpenCV를 통한 이미지 전처리</li>
										<li>OCR은 Google Cloud의 Vision API를 통해 구현</li>
										<li>맞춤법 검사를 통한 텍스트 후처리</li>
									</ul>
								</div>
							</div>
						</Fade>
					</div>
				</div>

				<div className='full_page'>
					<div className='container'>
						<Fade left duration={1100}>
							<div className='title'>Tech Skills</div>
							<div className='skill_container'>
								<div className='skill_item'>
									<div>Front-End</div>
									<div className='skills'>
										<img src={html_icon} alt=''></img>
										<img src={css_icon} alt=''></img>
										<img src={sass_icon} alt=''></img>
										<img src={js_icon} alt=''></img>
										<img src={jquery_icon} alt=''></img>
										<img src={react_icon} alt=''></img>
									</div>
								</div>
								<div className='skill_item'>
									<div>Back-End</div>
									<div className='skills'>
										<img src={aws_icon} alt=''></img>
										<img src={nodejs_icon} alt=''></img>
									</div>
								</div>
								<div className='skill_item'>
									<div>Database</div>
									<div className='skills'>
										<img src={maria_db_icon} alt=''></img>
									</div>
								</div>
								<div className='skill_item'>
									<div>Configuration Management</div>
									<div className='skills'>
										<img src={git_icon} alt=''></img>
									</div>
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
						{/* <Fade left duration={1600}>
							<div className='title'>Skill</div>
							<div>
								<ul>
									<li><b>Front-End:</b> HTML5/CSS3, Javascript(ES6), JQuery, React.js</li>
									<li><b>Back-End:</b> AWS(EC2, S3), Node.js</li>
									<li><b>Database:</b> Maria DB(Mysql)</li>
									<li><b>Environment:</b> AWS, Linux, macOS, UNIX, Windows</li>
									<li><b>Configuration Management:</b> Git(GitHub, GitLab)</li>
								</ul>
							</div>
							<div className='line'></div>
						</Fade> */}
						<Fade right duration={1700}>
							<div className='title'>Education</div>
							<div className='education'>
								2018.02-2022.02 한국산업기술대학교 컴퓨터공학과
							</div>
							<img 
								className='to_top'
								src={top_button_icon}
								alt=''
								onClick={() => setCurrentPage(0)}
							/>
						</Fade>
					</div>
				</div>
			</ReactPageScroller>
		</>
    )
}

export default Main;