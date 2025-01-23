// import React from "react";
import { useState } from "react";
import "./inputform.css";
import "./medalform.css";
const InputForm = () => {
  const [country, setCountry] = useState("");
  //country 값 set상태변경을 해주는 함수
  const [gold, setGold] = useState();
  const [silver, setSilver] = useState();
  const [bronze, setBronze] = useState();

  const [medalLists, setMedalLists] = useState([
    { country: "나라", gold: 1, silver: 1, bronze: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출");
    if (country === "") {
      alert("국가명을 입력하세요");
    } else if (gold == null) {
      alert("금메달 개수를 입력하세요");
    } else if (silver == null) {
      alert("은메달 개수를 입력하세요");
    } else if (bronze == null) {
      alert("동메달 개수를 입력하세요");
    }
    const newMedal = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    console.log(newMedal);
    setMedalLists([...medalLists, newMedal]);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleGold = (e) => {
    setGold(e.target.value);
  };
  const handleSliver = (e) => {
    setSilver(e.target.value);
  };
  const handleBronze = (e) => {
    setBronze(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label htmlFor="countryName">국가명</label>
          <input
            type="text"
            id="countryName"
            placeholder="국가입력"
            // value={country}
            onChange={handleCountry}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="goldMedal">금메달</label>
          <input type="number" id="goldMedal" onChange={handleGold} />
        </div>
        <div className="inputBox">
          <label htmlFor="silverMedal">은메달</label>
          <input type="number" id="silverMedal" onChange={handleSliver} />
        </div>
        <div className="inputBox">
          <label htmlFor="bronzeMedal">동메달</label>
          <input type="number" id="bronzeMedal" onChange={handleBronze} />
        </div>
        <button type="submit">국가 추가</button>
        <button type="button">업데이트</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </tr>
        </thead>
        <tbody>
          {medalLists.map(function (medalList, index) {
            console.log(medalList);
            return <MedalList key={index} medalList={medalList}></MedalList>;
          })}

          {/* 대체 구조를 어케 돌릴건지?? */}
        </tbody>
      </table>
    </div>
  );
};

export default InputForm;

const MedalList = ({ medalList }) => {
  // props - 구조분해 할당 했는데 왜오류???
  console.log(medalList, "테이블안에");
  const { country, gold, silver, bronze } = medalList;

  return (
    <tr>
      <td>{country} </td>
      <td>{gold}</td>
      <td>{silver}</td>
      <td>{bronze}</td>
    </tr>
  );
};
