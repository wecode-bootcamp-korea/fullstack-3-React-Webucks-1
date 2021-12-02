import React from "react";
import "./List.scss"
import { Link } from "react-router-dom";

function List(){
    return(
    <div className="List_container">
                <div className="List_wrapper"> 
                    <h1 className="List_logo">WeBucks</h1>
                    <div className="List_nav">
                        <ul className="coffee">COFFEE</ul>
                        <ul className="menu">MENU</ul>
                        <ul className="store">STORE</ul>
                        <ul className="what">WHAT'S NEW</ul>      
                    </div>           
                </div> 
            
                <div className="List_wrapper2">
                    <ul className="List_cold">콜드 브루 커피</ul>
                    <ul><img className="List_coffee_icon" src="https://image.flaticon.com/223/png/512/924/924514.png?size=1200x630f" alt="coffee"/></ul>
                    <ul className="List_decaf1">디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</ul>
                </div>
            

                <div className="List_coffee_image">
                        <div className="image">
                            <li><img src="https://cdn.pixabay.com/photo/2017/09/03/15/45/iced-coffee-2710815_1280.jpg" alt="바닐라 커피"/></li>  
                            <h3>콜드 브루</h3>
                        </div>
                        
                        <div className="image">
                            <img src="https://images.pexels.com/photos/302900/pexels-photo-302900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="모카라떼"/>
                            <h3>모카 라떼</h3>
                        </div>


                        <div className="image">
                            <img  src="https://images.pexels.com/photos/1254655/pexels-photo-1254655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="클래식커피"/>
                            <h3>클래식 라떼</h3>
                        </div>

                        <div className="image">
                            <img  src="https://images.pexels.com/photos/3556686/pexels-photo-3556686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="연유라떼"/>
                            <h3>연유 라떼</h3> 
                        </div>

                        <div className="image">
                            <Link to='/Detail'><img src="https://images.pexels.com/photos/1436172/pexels-photo-1436172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="바닐라 커피"/></Link> 
                            <h3>캐릭터 라떼</h3>
                        </div>


                        <div  className="image">
                            <img src="https://images.pexels.com/photos/10267948/pexels-photo-10267948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="바닐라2"/>
                            <h3>녹차 라떼</h3>
                        </div>  
                        

                        <div className="image">
                            <img src="https://images.pexels.com/photos/10267951/pexels-photo-10267951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="바닐라 커피"/>
                            <h3>소이 라떼</h3>
                        </div>
                        

                        <div className="image">
                            <img src="https://images.pexels.com/photos/10267953/pexels-photo-10267953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="바닐라2"/>    
                            <h3>시나몬 라떼</h3>
                        </div>

                        <div className="image">
                            <img src="https://images.pexels.com/photos/1233528/pexels-photo-1233528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="에스프레소"/>  
                            <h3>에스프레소</h3>
                        </div>

                        <div className="image">
                            <img  src="https://images.pexels.com/photos/5946982/pexels-photo-5946982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="초코"/>
                            <h3>초코 콜드 브루</h3>
                        </div> 
                </div>
                
                

                <div className="List_wrapper2">
                    <ul className="List_cold">브루드 커피</ul>
                    <ul><img className="List_coffee_icon" src="https://image.flaticon.com/223/png/512/924/924514.png?size=1200x630f" alt="coffee_icon2"/></ul>
                    <ul className="List_decaf1">디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</ul>
                </div>

                {/* <main className="List_coffee_image">







                </main> */}

                {/* <section className="coffee-menu">
                    <div className="box-container">
                        <div className="image">
                            <img src="https://images.pexels.com/photos/4110874/pexels-photo-4110874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="스페셜 브루"/>   
                        </div>
                        <h3>스페셜 브루</h3>
                    </div>

                    <div className="box-container">
                        <div className="image">
                            <img src="https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="크림 라떼"/>
                        </div> 
                        <h3>크림 라떼</h3>
                    </div>
                </section>        */}

                <div className="List_coffee_image">
                        <div className="image">
                            <img src="https://images.pexels.com/photos/4110874/pexels-photo-4110874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="스페셜 브루"/>   
                            <h3>스페셜 브루</h3>
                        </div>
                            
                        <div className="image">
                            <img src="https://images.pexels.com/photos/1006297/pexels-photo-1006297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="크림 라떼"/>
                            <h3>크림 라떼</h3>
                        </div> 
                </div>       
    </div>
    )
}

export default List;