
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|page)">
          <Page {...pageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const logoProbeData = {
    children: "Probe",
};

const gNB3Data = {
    logoProbeProps: logoProbeData,
};

const chip1Data = {
    children: "와우 멤버십",
};

const chip2Data = {
    children: "우리카드",
    className: "chip-1",
};

const chip3Data = {
    children: "와우 전용 쿠폰",
};

const chip4Data = {
    children: "쿠팡 캐시",
    className: "chip-3",
};

const group12011Data = {
    chip1Props: chip1Data,
    chip2Props: chip2Data,
    chip3Props: chip3Data,
    chip4Props: chip4Data,
};

const chip5Data = {
    children: "와우 멤버십",
};

const chip6Data = {
    children: "우리카드",
    className: "chip-4",
};

const chip7Data = {
    children: "와우 전용 쿠폰",
};

const chip8Data = {
    children: "쿠팡 캐시",
    className: "chip-5",
};

const group12012Data = {
    chip1Props: chip5Data,
    chip2Props: chip6Data,
    chip3Props: chip7Data,
    chip4Props: chip8Data,
};

const border3Data = {
    className: "rectangle-1508",
};

const chip9Data = {
    children: "와우 멤버십",
};

const chip10Data = {
    children: "우리카드",
    className: "chip-6",
};

const group12041Data = {
    chip1Props: chip9Data,
    chip2Props: chip10Data,
};

const chip11Data = {
    children: "와우 멤버십",
};

const chip12Data = {
    children: "우리카드",
    className: "chip-7",
};

const group12042Data = {
    chip1Props: chip11Data,
    chip2Props: chip12Data,
};

const border6Data = {
    className: "rectangle-1510",
};

const chip13Data = {
    children: "와우 멤버십",
};

const group12071Data = {
    chipProps: chip13Data,
};

const chip14Data = {
    children: "와우 멤버십",
};

const group12072Data = {
    chipProps: chip14Data,
};

const border9Data = {
    className: "rectangle-1509",
};

const chip15Data = {
    children: "와우 멤버십",
};

const chip16Data = {
    children: "우리카드",
    className: "chip-8",
};

const chip17Data = {
    children: "와우 전용 쿠폰",
};

const chip18Data = {
    children: "쿠팡 캐시",
    className: "chip-9",
};

const group12013Data = {
    chip1Props: chip15Data,
    chip2Props: chip16Data,
    chip3Props: chip17Data,
    chip4Props: chip18Data,
};

const chip19Data = {
    children: "와우 멤버십",
};

const chip20Data = {
    children: "우리카드",
    className: "chip-10",
};

const chip21Data = {
    children: "와우 전용 쿠폰",
};

const chip22Data = {
    children: "쿠팡 캐시",
    className: "chip-11",
};

const group12014Data = {
    chip1Props: chip19Data,
    chip2Props: chip20Data,
    chip3Props: chip21Data,
    chip4Props: chip22Data,
};

const border12Data = {
    className: "rectangle-1508-1",
};

const chip23Data = {
    children: "와우 멤버십",
};

const chip24Data = {
    children: "우리카드",
    className: "chip-12",
};

const group12043Data = {
    chip1Props: chip23Data,
    chip2Props: chip24Data,
};

const chip25Data = {
    children: "와우 멤버십",
};

const chip26Data = {
    children: "우리카드",
    className: "chip-13",
};

const group12044Data = {
    chip1Props: chip25Data,
    chip2Props: chip26Data,
};

const border15Data = {
    className: "rectangle-1510-1",
};

const chip27Data = {
    children: "와우 멤버십",
};

const group12073Data = {
    chipProps: chip27Data,
};

const chip28Data = {
    children: "와우 멤버십",
};

const group12074Data = {
    chipProps: chip28Data,
};

const border18Data = {
    className: "rectangle-1509-1",
};

const pageData = {
    text1: "나만 몰랐던 최저가 상품 모음",
    sdGothicNeoBold481: "오늘 기준 한국에서 제일 저렴한 상품들만 모아서 한 번에 보여드릴게요.",
    spanText1: "Apple 2021",
    spanText2: " ",
    spanText3: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText4: " ",
    spanText5: "MLWK3KH/A",
    spanText6: "Apple 2021",
    spanText7: " ",
    spanText8: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText9: " ",
    spanText10: "MLWK3KH/A",
    spanText11: "쿠팡",
    spanText12: "에서 ",
    spanText13: "239,000",
    spanText14: "원",
    spanText15: "에 팔고 있어요!",
    spanText16: "쿠팡",
    spanText17: "에서 ",
    spanText18: "239,000",
    spanText19: "원",
    spanText20: "에 팔고 있어요!",
    sdGothicNeoBold482: "오늘의 집",
    sdGothicNeoBold483: "오늘의 집",
    spanText21: "244,000",
    spanText22: "원",
    spanText23: "244,000",
    spanText24: "원",
    sdGothicNeoBold484: "롯데온",
    sdGothicNeoBold485: "롯데온",
    spanText25: "244,000",
    spanText26: "원",
    spanText27: "244,000",
    spanText28: "원",
    spanText29: "네이버 최저가",
    spanText30: " 329,000",
    spanText31: "원",
    spanText32: "보다",
    spanText33: " 100,000원 ",
    spanText34: "저렴한 가격",
    spanText35: "네이버 최저가",
    spanText36: " 329,000",
    spanText37: "원",
    spanText38: "보다",
    spanText39: " 100,000원 ",
    spanText40: "저렴한 가격",
    spanText41: "Apple 2021",
    spanText42: " ",
    spanText43: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText44: " ",
    spanText45: "MLWK3KH/A",
    spanText46: "Apple 2021",
    spanText47: " ",
    spanText48: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText49: " ",
    spanText50: "MLWK3KH/A",
    spanText51: "오늘의 집",
    spanText52: "에서 ",
    spanText53: "239,000",
    spanText54: "원",
    spanText55: "에 팔고 있어요!",
    spanText56: "오늘의 집",
    spanText57: "에서 ",
    spanText58: "239,000",
    spanText59: "원",
    spanText60: "에 팔고 있어요!",
    sdGothicNeoBold486: "롯데온",
    sdGothicNeoBold487: "롯데온",
    spanText61: "244,000",
    spanText62: "원",
    spanText63: "244,000",
    spanText64: "원",
    spanText65: "네이버 최저가",
    spanText66: " 329,000",
    spanText67: "원",
    spanText68: "보다",
    spanText69: " 100,000원 ",
    spanText70: "저렴한 가격",
    spanText71: "네이버 최저가",
    spanText72: " 329,000",
    spanText73: "원",
    spanText74: "보다",
    spanText75: " 100,000원 ",
    spanText76: "저렴한 가격",
    spanText77: "Apple 2021",
    spanText78: " ",
    spanText79: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText80: " ",
    spanText81: "MLWK3KH/A",
    spanText82: "Apple 2021",
    spanText83: " ",
    spanText84: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText85: " ",
    spanText86: "MLWK3KH/A",
    spanText87: "11",
    spanText88: "번가",
    spanText89: "에서 ",
    spanText90: "239,000",
    spanText91: "원",
    spanText92: "에 팔고 있어요!",
    spanText93: "11",
    spanText94: "번가",
    spanText95: "에서 ",
    spanText96: "239,000",
    spanText97: "원",
    spanText98: "에 팔고 있어요!",
    sdGothicNeoBold488: "오늘의 집",
    sdGothicNeoBold489: "오늘의 집",
    spanText99: "244,000",
    spanText100: "원",
    spanText101: "244,000",
    spanText102: "원",
    spanText103: "네이버 최저가",
    spanText104: " 329,000",
    spanText105: "원",
    spanText106: "보다",
    spanText107: " 100,000원 ",
    spanText108: "저렴한 가격",
    spanText109: "네이버 최저가",
    spanText110: " 329,000",
    spanText111: "원",
    spanText112: "보다",
    spanText113: " 100,000원 ",
    spanText114: "저렴한 가격",
    spanText115: "Apple 2021",
    spanText116: " ",
    spanText117: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText118: " ",
    spanText119: "MLWK3KH/A",
    spanText120: "Apple 2021",
    spanText121: " ",
    spanText122: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText123: " ",
    spanText124: "MLWK3KH/A",
    spanText125: "쿠팡",
    spanText126: "에서 ",
    spanText127: "239,000",
    spanText128: "원",
    spanText129: "에 팔고 있어요!",
    spanText130: "쿠팡",
    spanText131: "에서 ",
    spanText132: "239,000",
    spanText133: "원",
    spanText134: "에 팔고 있어요!",
    sdGothicNeoBold4810: "오늘의 집",
    sdGothicNeoBold4811: "오늘의 집",
    spanText135: "244,000",
    spanText136: "원",
    spanText137: "244,000",
    spanText138: "원",
    sdGothicNeoBold4812: "롯데온",
    sdGothicNeoBold4813: "롯데온",
    spanText139: "244,000",
    spanText140: "원",
    spanText141: "244,000",
    spanText142: "원",
    spanText143: "네이버 최저가",
    spanText144: " 329,000",
    spanText145: "원",
    spanText146: "보다",
    spanText147: " 100,000원 ",
    spanText148: "저렴한 가격",
    spanText149: "네이버 최저가",
    spanText150: " 329,000",
    spanText151: "원",
    spanText152: "보다",
    spanText153: " 100,000원 ",
    spanText154: "저렴한 가격",
    spanText155: "Apple 2021",
    spanText156: " ",
    spanText157: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText158: " ",
    spanText159: "MLWK3KH/A",
    spanText160: "Apple 2021",
    spanText161: " ",
    spanText162: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText163: " ",
    spanText164: "MLWK3KH/A",
    spanText165: "오늘의 집",
    spanText166: "에서 ",
    spanText167: "239,000",
    spanText168: "원",
    spanText169: "에 팔고 있어요!",
    spanText170: "오늘의 집",
    spanText171: "에서 ",
    spanText172: "239,000",
    spanText173: "원",
    spanText174: "에 팔고 있어요!",
    sdGothicNeoBold4814: "롯데온",
    sdGothicNeoBold4815: "롯데온",
    spanText175: "244,000",
    spanText176: "원",
    spanText177: "244,000",
    spanText178: "원",
    spanText179: "네이버 최저가",
    spanText180: " 329,000",
    spanText181: "원",
    spanText182: "보다",
    spanText183: " 100,000원 ",
    spanText184: "저렴한 가격",
    spanText185: "네이버 최저가",
    spanText186: " 329,000",
    spanText187: "원",
    spanText188: "보다",
    spanText189: " 100,000원 ",
    spanText190: "저렴한 가격",
    spanText191: "Apple 2021",
    spanText192: " ",
    spanText193: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText194: " ",
    spanText195: "MLWK3KH/A",
    spanText196: "Apple 2021",
    spanText197: " ",
    spanText198: "에어팟 프로 블루투스 이어폰 맥세이프 호환,",
    spanText199: " ",
    spanText200: "MLWK3KH/A",
    spanText201: "11",
    spanText202: "번가",
    spanText203: "에서 ",
    spanText204: "239,000",
    spanText205: "원",
    spanText206: "에 팔고 있어요!",
    spanText207: "11",
    spanText208: "번가",
    spanText209: "에서 ",
    spanText210: "239,000",
    spanText211: "원",
    spanText212: "에 팔고 있어요!",
    sdGothicNeoBold4816: "오늘의 집",
    sdGothicNeoBold4817: "오늘의 집",
    spanText213: "244,000",
    spanText214: "원",
    spanText215: "244,000",
    spanText216: "원",
    spanText217: "네이버 최저가",
    spanText218: " 329,000",
    spanText219: "원",
    spanText220: "보다",
    spanText221: " 100,000원 ",
    spanText222: "저렴한 가격",
    spanText223: "네이버 최저가",
    spanText224: " 329,000",
    spanText225: "원",
    spanText226: "보다",
    spanText227: " 100,000원 ",
    spanText228: "저렴한 가격",
    gNB3Props: gNB3Data,
    group12011Props: group12011Data,
    group12012Props: group12012Data,
    border1Props: border3Data,
    group12041Props: group12041Data,
    group12042Props: group12042Data,
    border2Props: border6Data,
    group12071Props: group12071Data,
    group12072Props: group12072Data,
    border3Props: border9Data,
    group12013Props: group12013Data,
    group12014Props: group12014Data,
    border4Props: border12Data,
    group12043Props: group12043Data,
    group12044Props: group12044Data,
    border5Props: border15Data,
    group12073Props: group12073Data,
    group12074Props: group12074Data,
    border6Props: border18Data,
};

