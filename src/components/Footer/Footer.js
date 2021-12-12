import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul className="footer-nav-list">
          <li className="footer-nav-heading">
            <Link to="{#}">COMPANY</Link>
            <ul>
              <li>
                <Link to="{#}">한눈에 보기</Link>
              </li>
              <li>
                <Link to="{#}">스타벅스 사명</Link>
              </li>
              <li>
                <Link to="{#}">스타벅스 소개</Link>
              </li>
              <li>
                <Link to="{#}">국내 뉴스룸</Link>
              </li>
              <li>
                <Link to="{#}">세계의 스타벅스</Link>
              </li>
              <li>
                <Link to="{#}">글로벌 뉴스룸</Link>
              </li>
            </ul>
          </li>
          <li className="footer-nav-heading">
            <Link to="{#}">CORPORATE SALES</Link>
            <ul>
              <li>
                <Link to="{#}">단체 및 기업 구매 안내</Link>
              </li>
            </ul>
          </li>
          <li className="footer-nav-heading">
            <Link to="{#}">PARTNERSHIP</Link>
            <ul>
              <li>
                <Link to="{#}">신규 입점 제의</Link>
              </li>
              <li>
                <Link to="{#}">협력 고객사 등록 신청</Link>
              </li>
            </ul>
          </li>
          <li className="footer-nav-heading">
            <Link to="{#}">ONLINE COMMUNITY</Link>
            <ul>
              <li>
                <Link to="{#}">페이스북</Link>
              </li>
              <li>
                <Link to="{#}">트위터</Link>
              </li>
              <li>
                <Link to="{#}">유튜브</Link>
              </li>
              <li>
                <Link to="{#}">블로그</Link>
              </li>
              <li>
                <Link to="{#}">인스타그램</Link>
              </li>
            </ul>
          </li>
          <li className="footer-nav-heading">
            <Link to="{#}">RECRUIT</Link>
            <ul>
              <li>
                <Link to="{#}">채용 소개</Link>
              </li>
              <li>
                <Link to="{#}">채용 지원하기</Link>
              </li>
            </ul>
          </li>
          <li className="footer-nav-heading">
            <Link to="{#}">WEBUCKS</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
