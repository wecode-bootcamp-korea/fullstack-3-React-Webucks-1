import { MinusSquareFilled } from '@ant-design/icons';
import React, { useState } from 'react';

const Reply = () => {
    const [names, setNames] = useState([
        {id:1, text: 'coffee1'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2); // 새로운 항목을 추가할 때 사용할 id
    // ----------- id와 댓글 내용 추가 스테이트 설정 완료------------------------




    const onChange = e => 
    {  if(e.key === 'Enter'){
            // setInputText(e.target.value);
            const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정
            author: "minsu",
            text: e.target.value
        })
        setNextId(nextId+1);  // nextId값에 1을 더해준다
        setNames(nextNames); // names값을 업데이트
        e.target.value="";    // input값을 비움  
        console.log(names);
            }}
    
    //     const onClick = () => {
    // const nextNames = names.concat({
    //         id: nextId, // nextId 값을 id로 설정
    //         text: next)
    //     setNextId(nextId+1);  // nextId값에 1을 더해준다
    //     setNames(nextNames); // names값을 업데이트
    //     setInputText(''); // input값을 비움
    // }   
    // const onEnter = (e) =>{
    //     if(e.key === 'Enter'){
    //         const nextNames = names.concat({
    //         id: nextId, // nextId 값을 id로 설정
    //         text: inputText})
    //     setNextId(nextId+1);  // nextId값에 1을 더해준다
    //     setNames(nextNames); // names값을 업데이트
    //     setInputText(''); // input값을 비움  
    //     console.log(nextNames);
    // }}
    
    const nameList = names.map((names,index) => <li key = {names.id}><span>{names.author}</span>{names.text}</li>);
    //-------------id 먼저 댓글 추가 로직 구현-------------------------

    return (
             <>
                 {nameList}
                 <input onKeyPress={onChange} placeholder="댓글을 입력하세요"/>
                 <button>추가</button>
             </>
         )
    
    }

export default Reply