import React from "react";
import "./Detail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';;

function Detail(){
    return(   
<div className="Detail_container">
                    <div className="Detail_wrapper">
                        <h1 className="Detail_logo">WeBucks</h1>
                        <div className="Detail_nav">
                            <ul className="coffee">COFFEE</ul>
                            <ul className="menu">MENU</ul>
                            <ul className="store">STORE</ul>
                            <ul className="what">WHAT'S NEW</ul>   
                        </div>
                    </div> 
                    
                    <h1 className="Detail_big_name">콜드 브루</h1>
                    
                    <div className="Detail_top_menu">
                        <ul>홈&gt;MENU&gt;음료&gt;에스프레소&gt;캐릭터 라떼</ul>
                    </div>
                
            <div className="Detail_full">
                    <div className="Detail_box2">
                        <img src="https://images.pexels.com/photos/1436172/pexels-photo-1436172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="캐릭터 라떼"/> 
                    </div>
                    <div className="Detail_box1">
                        <div className="Detail_menu_box1">
                            <h2>캐릭터 라떼</h2>
                            <h5>Character latte</h5>
                            <FontAwesomeIcon icon={regularHeart} className="top_heart" />
                        </div>

                        <div className="Detail_menu_box2">
                        <p>이름하야 캐릭터 라떼. 오직 위벅스 최고의 바리스타들이 만드는 스페셜 티. 먹기에 너무나도 귀여운 캐릭터 크림과 함께, 최고급 아라비카 원두 본연의 맛을 느낄 수 있습니다.</p>  
                        </div>

                        <div className="nutrition_mainbox">
                            <h3 className="title">제품 영양 정보</h3>
                            <h3 className="volume">Tall(톨) / 355ml(12 fl oz)</h3>
                        </div>         

                        <div className="nutrition_detailbox">
                            <div className="nutrition1">
                                <ul className="l1">1회 제공량(kcal)</ul> 
                                <ul className="l2">포화지방(g)</ul>
                                <ul className="l3">단백질(g)</ul>
                            </div>
                            <div className="nutrition2">
                                <ul className="n1">345</ul> 
                                <ul className="n2">22</ul>
                                <ul className="n3">12</ul>
                            </div>
                            <div className="nutrition3">
                                <ul className="l1">나트륨(mg)</ul> 
                                <ul className="l2">당류(g)</ul>
                                <ul className="l3">카페인(mg)</ul>
                            </div>
                            <div className="nutrition4">
                                <ul className="nt1">150</ul> 
                                <ul className="nt2">35</ul>
                                <ul className="nt3">75</ul>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div class="alergy">
                            <p class="aler">알레르기 유발 요인: 우유, 귀여움</p>
                        </div>
                        <div className="Detail_main_reviewbox">
                            <h2>리뷰</h2>
                        </div>
                        <div className="Detail_reple">
                            <div>
                            <h3>ilove_coffee</h3> <span>너무 귀엽다. 진짜~ 맛도 굿 굿</span>    
                            </div>
                            <div>
                            <h3>cha077</h3> <span>위벅스에서만 먹는 특별 시즌 한정 캐릭터 라떼 꼭 드십셔~</span>
                            </div>
                            <div>
                            <h3>cfmaster</h3> <span>지금까지 이런 귀여움과 맛은 없었다. 이것은 커피인가? 작품인가?</span>
                            </div>
                        </div>
                        <div className="riple_input">
                            <input  type="text" placeholder="리뷰를 입력해주세요." />
                        </div>

                    </div>
            </div>

        <div className="footer">
                <div class="menu1">
                    <ul>COMPANY
                        <li>한눈에 보기</li>
                        <li>위벅스 사명</li>
                        <li>위벅스 소개</li>
                        <li>국내 뉴스룸</li>
                        <li>세계의 위벅스</li>
                        <li>글로벌 뉴스룸</li>
                    </ul>    
                </div>

                <div class="menu2">
                    <ul>
                        CORPORATE SALES
                        <li>단체 및 기업 구매 안내</li>
                    </ul>
                </div>
                
                <div class="menu3">
                    <ul>PARTNERSHIP
                        <li>신규 입점 제의</li>
                        <li>협력 고객사 등록 신청</li>
                    </ul>
                </div>
                
                <div class="menu4">
                    <ul className="online">ONLINE COMMUNITY
                        <li>페이스북</li>
                        <li>트위터</li>
                        <li>유튜브</li>
                        <li>블로그</li>
                        <li>인스타그램</li>
                    </ul>
                </div>
                
                <div class="menu5">
                    <ul className="recruit">RECRUIT
                        <li>채용 소개</li>
                        <li>채용 지원하기</li>
                    </ul>
                </div>
                <div class="menu6">
                    <ul className="webucks">WEBUCKS</ul>
                </div>
    
    </div>
</div>
)
}

export default Detail;