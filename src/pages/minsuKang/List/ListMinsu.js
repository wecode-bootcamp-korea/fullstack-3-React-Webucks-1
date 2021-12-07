import React, {useEffect, useState} from "react";
import "./List.scss"
import TopNav from "../component/TopNav";
import CoffeCard from "../CoffeeCard/CoffeeCard";

function List(){
    const [coffeeList, setCoffeeList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/data/minsuKang/listData.json", {
        method: 'GET' ,
        })
        .then((res)=> res.json())
        .then((data)=> {
        setCoffeeList(data);
        });
    }, [])
    return(
    <div className="List_container">
                <div>
                    <TopNav/>
                </div>
                
                <div className="List_wrapper2">
                    <ul className="List_cold">콜드 브루 커피</ul>
                    <ul><img className="List_coffee_icon" src="https://image.flaticon.com/223/png/512/924/924514.png?size=1200x630f" alt="coffee"/></ul>
                    <ul className="List_decaf1">디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</ul>
                </div>
            
                <div className="List_coffee_image">
                    {coffeeList[0] && coffeeList[0].map((coffee, index)=> {
                    return(
                        <CoffeCard
                            src={coffee.imgSrc}
                            content={coffee.content}
                            key={index}
                            />
                    );
                    })}
                </div>

                <div className="List_wrapper2">
                    <ul className="List_cold">브루드 커피</ul>
                    <ul><img className="List_coffee_icon" src="https://image.flaticon.com/223/png/512/924/924514.png?size=1200x630f" alt="coffee_icon2"/></ul>
                    <ul className="List_decaf1">디카페인 에스프레소 샷 추가 가능(일부 음료 제외)</ul>
                </div>
                
                <div className="List_coffee_image">
                    {coffeeList[1] && coffeeList[1].map((coffee, index)=> {
                    return(
                        <CoffeCard
                            src={coffee.imgSrc}
                            content={coffee.content}
                            key={index}
                            />
                    );
                    })}
                </div>
    </div>
    )
}

export default List;