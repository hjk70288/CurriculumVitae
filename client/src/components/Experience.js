import React from "react";
import "../assets/css/layout.css";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Experience() {
  return (
    <div className="full_page">
      <div className="container">
        <div {...useScrollFadeIn("left", 1, 0)}>
          <div className="title">Work Experience</div>
          <div className="experience_source">
            <u>세븐미어캣</u>
          </div>
          <div className="experience">
            <div className="experience_item">
              <div>
                <b>
                  Front-End&
                  <br />
                  Back-End
                </b>
              </div>
            </div>
            <div className="experience_item">
              <div>
                <b>주차장 관리자 페이지 개발</b>
              </div>
              <ul>
                <li>주차장 관리소장들이 사용하는 주차장을 관리할 수 있는 관리자 페이지 개발</li>
                <li>실시간으로 주차장의 상태를 확인할 수 있는 CCTV 기능 제공</li>
                <li>웹 페이지에서 차단기의 상태를 실시간으로 변경할 수 있는 기능 제공</li>
                <li>주차장 입출차 내역 및 주차장에 등록된 차량 목록 엑셀 다운로드 기능 제공</li>
                <li>아파트 투표 생성, 주차 할인권 적용, 앱 회원 관리 등 다양한 관리자 기능 제공</li>
              </ul>
            </div>
          </div>
        </div>
        <div {...useScrollFadeIn("left", 1, 0)} className="experience">
          <div className="experience_item">
            <div>
              <b>
                Front-End&
                <br />
                Back-End
              </b>
            </div>
          </div>
          <div {...useScrollFadeIn("left", 1, 0)} className="experience_item">
            <div>
              <b>주차장 관리자 페이지 모바일 페이지 개발</b>
            </div>
            <ul>
              <li>주차장 관리자의 모바일 버전 개발</li>
              <li>
                주차장 관리자 URL로 접속 시 해당 기기를 판단하여
                <br />
                해당 기기에 적합한 URL로 Redirect
              </li>
            </ul>
          </div>
        </div>
        <div {...useScrollFadeIn("left", 1, 0)} className="experience">
          <div className="experience_item">
            <div>
              <b>
                Front-End&
                <br />
                Back-End
              </b>
            </div>
          </div>
          <div className="experience_item">
            <div>
              <b>중앙 관리자 페이지 개발</b>
            </div>
            <ul>
              <li>
                주차장, 차량, 앱 사용자, 커머스 등 세븐미어캣의 모든 요소들을
                <br />
                총괄하고 분석하는 관리자 페이지 개발
              </li>
              <li>HighChart를 사용하여 다양한 종류의 차트를 지닌 대시보드 제공</li>
              <li>Redux를 통한 전역 상태관리 및 Authentication</li>
              <li>커머스 상품 등록, 상품 옵션 기능, 상품 결제 취소 등 커머스 관리를 위한 기능 제공</li>
              <li>커머스 관리의 편의를 위한 주문서 수집 자동화 스케줄러를 통한 주문관리 자동화 기능 개발</li>
            </ul>
          </div>
        </div>
        <div {...useScrollFadeIn("left", 1, 0)} className="experience">
          <div className="experience_item">
            <div>
              <b>
                Front-End&
                <br />
                Back-End
              </b>
            </div>
          </div>
          <div className="experience_item">
            <div>
              <b>회사 홈페이지 개발</b>
            </div>
            <ul>
              <li>(주)세븐미어캣의 공식 회사 홈페이지 개발</li>
            </ul>
          </div>
        </div>
        <div {...useScrollFadeIn("left", 1, 0)} className="experience">
          <div className="experience_item">
            <div>
              <b>Server Develop</b>
            </div>
          </div>
          <div className="experience_item">
            <div>
              <b>세븐미어캣 API 서버 개발</b>
            </div>
            <ul>
              <li>부트페이를 통한 PG결제 및 결제 취소 API 개발</li>
              <ul>
                <li>주차장 정산기 QR결제 API 개발</li>
                <li>공동구매 결제, 취소 API 개발</li>
              </ul>
              <li>주차장 발권기, 정산기 용지 부족시 카카오 알림톡 전송 API 개발</li>
              <li>세븐미어캣 앱 Firebase(FCM) 푸시 알람 전송 API 개발</li>
            </ul>
          </div>
        </div>
        <div {...useScrollFadeIn("left", 1, 0)}>
          <div className="line"></div>
          <div className="experience_source">
            <u>졸업작품</u>
          </div>
          <div className="experience">
            <div className="experience_item">
              <div>
                <b>Server Develop</b>
              </div>
            </div>
            <div className="experience_item">
              <div>
                <b>시각 장애인을 위한 학습 보조 점자 시스템 개발</b>
              </div>
              <ul>
                <li>사용자로부터 이미지를 전송받아 OCR을 통해 텍스트를 추출하는 서버 개발</li>
                <li>서버는 AWS의 EC2(Ubuntu 18.04) 인스턴스를 사용</li>
                <li>OpenCV를 통한 이미지 전처리</li>
                <li>OCR은 Google Cloud의 Vision API를 통해 구현</li>
                <li>맞춤법 검사를 통한 텍스트 후처리</li>
              </ul>
            </div>
          </div>
        </div>
        <div {...useScrollFadeIn("left", 1, 0)}>
          <div className="line"></div>
          <div className="experience_source">
            <u>개인 프로젝트</u>
          </div>
          <div className="experience">
            <div className="experience_item">
              <div>
                <b>
                  Front-End&
                  <br />
                  Back-End
                </b>
              </div>
            </div>
            <div className="experience_item">
              <div>
                <b>온라인 전시회 VARIOUS</b>
              </div>
              <ul>
                <li>동생이 그린 작품을 온라인으로 전시하는 프로젝트</li>
                <li>메인 페이지와 작품 별 상세 페이지로 구성</li>
                <li>React를 사용하여 개발</li>
                <li>서버는 AWS의 EC2(Ubuntu 18.04) 인스턴스, 웹서버는 Nginx를 사용</li>
                <li>서버비 이슈로 인해 현재는 Github Pages 사용</li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://hjk70288.github.io/Various">
                    <b>보러가기</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
