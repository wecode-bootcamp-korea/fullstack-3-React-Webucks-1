import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div className="nav">
        <h3>WeBucks</h3>
        <ul>
          <li>
            <Link to="/Detail-junhyeok">Detail</Link>
          </li>
          <li>
            <Link to="/List-junhyeok">MENU</Link>
          </li>
          <li>STORE</li>
          <li>
            <Link to="/login-junhyeok">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

function BottomBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-section">
        <p>COMPANY</p>
        <ul>
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>CORPORATE SALES</p>
        <ul>
          <li>단체 및 기업 구매 안내</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>PARTNERSHIP</p>
        <ul>
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>ONLINE COMMUNITY</p>
        <ul>
          <li>페이스북</li>
          <li>트위터</li>
          <li>유뷰트</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>RECRUIT</p>
        <ul>
          <li>채용소개</li>
          <li>채용 지원하기</li>
        </ul>
      </div>
      <div className="bottom-bar-section">
        <p>WEBUCKS</p>
      </div>
    </div>
  );
}

export { Nav, BottomBar };
