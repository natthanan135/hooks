import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrict] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(800);
  const [product3, setProduct3] = useState(300);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตระกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตระกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="image_16.jpeg" alt="case" width="20%" />
        <br />
        เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrict(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตระกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrict(totalPrice - product1);
          }
        }}
      >
        นำออกจากตระกร้า
      </button>
      <div>
        <img src="ลงเว็ป-05.jpg" alt="case" width="20%" />
        <br />
        หมวก ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrict(totalPrice + product2);
        }}
      >
        เพิ่มเข้าตระกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrict(totalPrice - product2);
          }
        }}
      >
        นำออกจากตระกร้า
      </button>
      <div>
        <img
          src="สตอรี่ • Instagram - Google Chrome 9_3_2566 20_37_53.jpg"
          alt="case"
          width="20%"
        />
        <br />
        กระหรี่ ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrict(totalPrice + product3);
        }}
      >
        เพิ่มเข้าตระกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrict(totalPrice - product3);
          }
        }}
      >
        นำออกจากตระกร้า
      </button>
    </div>
  );
}

export default App;
