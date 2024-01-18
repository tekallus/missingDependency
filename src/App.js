import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr([1]);
  }, []);
  return <div className="App"></div>;
}
//Bu durum, useEffect içindeki bağımlılıkların güncellenmesiyle ilgilidir.
//useEffect içinde bir bağımlılığı güncellediğinizde, bu, useEffect'in tekrar çalışmasına ve dolayısıyla setArr'in çağrılmasına neden olur.
//Ancak, setArr çağrısı, state'i güncellediği için bileşenin yeniden render edilmesine yol açar.
// Bu durumda, tekrar render işlemi useEffect'i tetikler ve döngü başlar.
//useEffect(() => {
// setArr(arr); // Burada arr'yi güncellediğimizde, useEffect sürekli tekrar çalışır ve sonsuz döngüye neden olur
//}, [arr]);
//useEffect'in yalnızca bir kez çalışmasını istiyorsak, boş bir bağımlılık dizisi kullanmaliyiz.
