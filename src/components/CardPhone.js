import React, { useState } from 'react';
import { Card, Col, Divider, Row } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

export default function CardPhone() {
   // const [inputPhone, setInputPhone] = useState("");
   const [result, setResult] = useState("");

   // const handleInput = (e) => {
   //    setInputPhone(e.target.value)
   // };
   
   const handleClick = (inputPhone) => {
      let arr = "";
      for (const i of inputPhone) {
         if (arr.length === 3 || arr.length === 7) {
            arr += "-";
         }
         arr += i;
      }
      setResult(arr);
   }

   return (
      <>
         <Row justify="center">
            <Col>
               <Search
                  placeholder="Please input phone number"
                  allowClear
                  enterButton="Result"
                  size="large"
                  // onChange={handleInput}
                  onSearch={handleClick}
               />
            </Col>
         </Row>

         <Row justify="center">
            <Col>
               <Card title={result} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
               </Card>
            </Col>
         </Row>
         <Divider />


      </>
   )
}
