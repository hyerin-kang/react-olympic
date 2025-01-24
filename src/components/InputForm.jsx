// import React from "react";
import { useState } from "react";
import "./../css/inputform.css";
import "./../css/medalform.css";
import MedalForm from "./MedalForm";
const InputForm = () => {
  const [country, setCountry] = useState("");
  //country 값 set상태변경을 해주는 함수
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const [medalList, setMedalList] = useState([
    // { id: 1, country: "나라", gold: 1, silver: 1, bronze: 1 },
  ]);

  const countryName = medalList.map((item) => item.country);
  const newMedal = {
    id: crypto.randomUUID(),
    country: country,
    gold: gold,
    silver: silver,
    bronze: bronze,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출");
    if (country === "") {
      alert("국가명을 입력하세요");
      return;
    } else if (gold == null) {
      alert("금메달 개수를 입력하세요");
      return;
    } else if (silver == null) {
      alert("은메달 개수를 입력하세요");
      return;
    } else if (bronze == null) {
      alert("동메달 개수를 입력하세요");
      return;
    }

    // console.log(countryName, "국가명 뽑아내기");
    if (countryName.includes(country)) {
      alert("해당국가 기록이 이미 존재합니다.");
      return;
    }
    // console.log(newMedal);
    setMedalList([newMedal, ...medalList]);
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
    // const sorted = setMedalLists.sort(function (a, b) {
    //   return b.gold - a.gold;
    // });
    // // console.log(sorted.a, "a");
    // console.log(sorted, "정렬");
    // setMedalLists(sorted);
    //금메달 수를 기준으로 내림차순 정렬하여 상위 국가부터 표시되도록 합니다. 원래의 배열을 sort! 해줘야겠죠.
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

  //업데이트
  const handleUpdate = () => {
    // console.log("업데이트");
    //일단 국가에서 받은 value값을 받아온다.
    //리스트에 있으면 해당리스트를 바꾸어준다,,>?
    // console.log(country, ": 업데이트할때 국가명");
    // if(medalLists.)
    //medalLists에 있는 국가명이 있는지 확인하고 있으면 바꿔주고 없으면 해당국가가 없다고 알랏창

    if (countryName.includes(country)) {
      const countryIndex = medalList.findIndex(
        (item) => item.country == country
      );
      const copyMedalLists = [...medalList];
      copyMedalLists[countryIndex].gold =
        gold || copyMedalLists[countryIndex].gold;
      copyMedalLists[countryIndex].silver =
        silver || copyMedalLists[countryIndex].silver;
      copyMedalLists[countryIndex].bronze =
        bronze || copyMedalLists[countryIndex].bronze;
      setMedalList(copyMedalLists);
      //값이 없으면 안넣어줄거임 nullish
    } else {
      alert("해당 국가가 등록되지 않았습니다.");
    }
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
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
            value={country}
            onChange={handleCountry}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="goldMedal">금메달</label>
          <input
            type="number"
            id="goldMedal"
            onChange={handleGold}
            value={gold}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="silverMedal">은메달</label>
          <input
            type="number"
            id="silverMedal"
            onChange={handleSliver}
            value={silver}
          />
        </div>
        <div className="inputBox">
          <label htmlFor="bronzeMedal">동메달</label>
          <input
            type="number"
            id="bronzeMedal"
            onChange={handleBronze}
            value={bronze}
          />
        </div>
        <button type="submit">국가 추가</button>
        <button type="button" onClick={handleUpdate}>
          업데이트
        </button>
      </form>
      <MedalForm setMedalList={setMedalList} medalList={medalList}></MedalForm>
    </div>
  );
};

export default InputForm;
