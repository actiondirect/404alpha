import React from "react";
import GNB3 from "../GNB3";
import View32 from "../View32";
import Group1201 from "../Group1201";
import Border from "../Border";
import Group1202 from "../Group1202";
import Group1203 from "../Group1203";
import Group1204 from "../Group1204";
import Group1207 from "../Group1207";
import Group1208 from "../Group1208";
import styled from "styled-components";
import {
  SfprodisplayRegularNormalBlack13px,
  SfprodisplayBoldTrueV20px,
  ApplesdgothicneoBoldTrueV20px,
  ApplesdgothicneoRegularNormalBlack1,
  SfprodisplayBoldWhite20px,
  ApplesdgothicneoRegularNormalWhite1,
  ApplesdgothicneoRegularNormalBlack11,
  ApplesdgothicneoRegularNormalGunsmo,
  SfprodisplayRegularNormalBlack12px,
  SfprodisplayRegularNormalBlack14px,
  ApplesdgothicneoRegularNormalMounta,
  ApplesdgothicneoBoldBlack20px,
  ApplesdgothicneoBoldWhite20px,
} from "../../styledMixins";
import "./Page.css";

function Page(props) {
  const {
    text1,
    sdGothicNeoBold481,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    sdGothicNeoBold482,
    sdGothicNeoBold483,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    sdGothicNeoBold484,
    sdGothicNeoBold485,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    spanText42,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    spanText48,
    spanText49,
    spanText50,
    spanText51,
    spanText52,
    spanText53,
    spanText54,
    spanText55,
    spanText56,
    spanText57,
    spanText58,
    spanText59,
    spanText60,
    sdGothicNeoBold486,
    sdGothicNeoBold487,
    spanText61,
    spanText62,
    spanText63,
    spanText64,
    spanText65,
    spanText66,
    spanText67,
    spanText68,
    spanText69,
    spanText70,
    spanText71,
    spanText72,
    spanText73,
    spanText74,
    spanText75,
    spanText76,
    spanText77,
    spanText78,
    spanText79,
    spanText80,
    spanText81,
    spanText82,
    spanText83,
    spanText84,
    spanText85,
    spanText86,
    spanText87,
    spanText88,
    spanText89,
    spanText90,
    spanText91,
    spanText92,
    spanText93,
    spanText94,
    spanText95,
    spanText96,
    spanText97,
    spanText98,
    sdGothicNeoBold488,
    sdGothicNeoBold489,
    spanText99,
    spanText100,
    spanText101,
    spanText102,
    spanText103,
    spanText104,
    spanText105,
    spanText106,
    spanText107,
    spanText108,
    spanText109,
    spanText110,
    spanText111,
    spanText112,
    spanText113,
    spanText114,
    spanText115,
    spanText116,
    spanText117,
    spanText118,
    spanText119,
    spanText120,
    spanText121,
    spanText122,
    spanText123,
    spanText124,
    spanText125,
    spanText126,
    spanText127,
    spanText128,
    spanText129,
    spanText130,
    spanText131,
    spanText132,
    spanText133,
    spanText134,
    sdGothicNeoBold4810,
    sdGothicNeoBold4811,
    spanText135,
    spanText136,
    spanText137,
    spanText138,
    sdGothicNeoBold4812,
    sdGothicNeoBold4813,
    spanText139,
    spanText140,
    spanText141,
    spanText142,
    spanText143,
    spanText144,
    spanText145,
    spanText146,
    spanText147,
    spanText148,
    spanText149,
    spanText150,
    spanText151,
    spanText152,
    spanText153,
    spanText154,
    spanText155,
    spanText156,
    spanText157,
    spanText158,
    spanText159,
    spanText160,
    spanText161,
    spanText162,
    spanText163,
    spanText164,
    spanText165,
    spanText166,
    spanText167,
    spanText168,
    spanText169,
    spanText170,
    spanText171,
    spanText172,
    spanText173,
    spanText174,
    sdGothicNeoBold4814,
    sdGothicNeoBold4815,
    spanText175,
    spanText176,
    spanText177,
    spanText178,
    spanText179,
    spanText180,
    spanText181,
    spanText182,
    spanText183,
    spanText184,
    spanText185,
    spanText186,
    spanText187,
    spanText188,
    spanText189,
    spanText190,
    spanText191,
    spanText192,
    spanText193,
    spanText194,
    spanText195,
    spanText196,
    spanText197,
    spanText198,
    spanText199,
    spanText200,
    spanText201,
    spanText202,
    spanText203,
    spanText204,
    spanText205,
    spanText206,
    spanText207,
    spanText208,
    spanText209,
    spanText210,
    spanText211,
    spanText212,
    sdGothicNeoBold4816,
    sdGothicNeoBold4817,
    spanText213,
    spanText214,
    spanText215,
    spanText216,
    spanText217,
    spanText218,
    spanText219,
    spanText220,
    spanText221,
    spanText222,
    spanText223,
    spanText224,
    spanText225,
    spanText226,
    spanText227,
    spanText228,
    gNB3Props,
    group12011Props,
    group12012Props,
    border1Props,
    group12041Props,
    group12042Props,
    border2Props,
    group12071Props,
    group12072Props,
    border3Props,
    group12013Props,
    group12014Props,
    border4Props,
    group12043Props,
    group12044Props,
    border5Props,
    group12073Props,
    group12074Props,
    border6Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page screen">
        <GNB3 logoProbeProps={gNB3Props.logoProbeProps} />
        <Text1>{text1}</Text1>
        <SDGothicNeoBold48>{sdGothicNeoBold481}</SDGothicNeoBold48>
        <GroupContainer>
          <GroupContainer1>
            <Group1216>
              <OverlapGroup6>
                <View32 />
                <Image src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----1@2x.svg" />
                <View32 />
              </OverlapGroup6>
              <SdGothicNeoboldContainer>
                <SDGothicNeoBold481>
                  <Span0>{spanText1}</Span0>
                  <Span1>{spanText2}</Span1>
                  <Span2>{spanText3}</Span2>
                  <Span1>{spanText4}</Span1>
                  <Span0>{spanText5}</Span0>
                </SDGothicNeoBold481>
                <SDGothicNeoBold481>
                  <Span0>{spanText6}</Span0>
                  <Span1>{spanText7}</Span1>
                  <Span2>{spanText8}</Span2>
                  <Span1>{spanText9}</Span1>
                  <Span0>{spanText10}</Span0>
                </SDGothicNeoBold481>
              </SdGothicNeoboldContainer>
              <SdGothicNeoboldContainer1>
                <SDGothicNeoBold482>
                  <Span02>{spanText11}</Span02>
                  <Span12>{spanText12}</Span12>
                  <Span22>{spanText13}</Span22>
                  <Span02>{spanText14}</Span02>
                  <Span12>{spanText15}</Span12>
                </SDGothicNeoBold482>
                <SDGothicNeoBold482>
                  <Span02>{spanText16}</Span02>
                  <Span12>{spanText17}</Span12>
                  <Span22>{spanText18}</Span22>
                  <Span02>{spanText19}</Span02>
                  <Span12>{spanText20}</Span12>
                </SDGothicNeoBold482>
              </SdGothicNeoboldContainer1>
              <GroupContainer2>
                <Group1201
                  chip1Props={group12011Props.chip1Props}
                  chip2Props={group12011Props.chip2Props}
                  chip3Props={group12011Props.chip3Props}
                  chip4Props={group12011Props.chip4Props}
                />
                <Group1201
                  chip1Props={group12012Props.chip1Props}
                  chip2Props={group12012Props.chip2Props}
                  chip3Props={group12012Props.chip3Props}
                  chip4Props={group12012Props.chip4Props}
                />
              </GroupContainer2>
              <BorderContainer>
                <Border />
                <Border />
              </BorderContainer>
              <OverlapGroupContainer>
                <SdGothicNeoboldContainer2>
                  <SDGothicNeoBold483>{sdGothicNeoBold482}</SDGothicNeoBold483>
                  <SDGothicNeoBold483>{sdGothicNeoBold483}</SDGothicNeoBold483>
                </SdGothicNeoboldContainer2>
                <SdGothicNeoboldContainer3>
                  <SDGothicNeoBold484>
                    <Span04>{spanText21}</Span04>
                    <Span14>{spanText22}</Span14>
                  </SDGothicNeoBold484>
                  <SDGothicNeoBold484>
                    <Span04>{spanText23}</Span04>
                    <Span14>{spanText24}</Span14>
                  </SDGothicNeoBold484>
                </SdGothicNeoboldContainer3>
                <GroupContainer3>
                  <Group1202 />
                  <Group1202 />
                </GroupContainer3>
              </OverlapGroupContainer>
              <OverlapGroupContainer1>
                <SdGothicNeoboldContainer4>
                  <SDGothicNeoBold483>{sdGothicNeoBold484}</SDGothicNeoBold483>
                  <SDGothicNeoBold483>{sdGothicNeoBold485}</SDGothicNeoBold483>
                </SdGothicNeoboldContainer4>
                <SdGothicNeoboldContainer5>
                  <SDGothicNeoBold484>
                    <Span04>{spanText25}</Span04>
                    <Span14>{spanText26}</Span14>
                  </SDGothicNeoBold484>
                  <SDGothicNeoBold484>
                    <Span04>{spanText27}</Span04>
                    <Span14>{spanText28}</Span14>
                  </SDGothicNeoBold484>
                </SdGothicNeoboldContainer5>
                <GroupContainer4>
                  <Group1203 />
                  <Group1203 />
                </GroupContainer4>
              </OverlapGroupContainer1>
              <OverlapGroup9>
                <SDGothicNeoBold485>
                  <Span08>{spanText29}</Span08>
                  <Span04>{spanText30}</Span04>
                  <Span14>{spanText31}</Span14>
                  <Span08>{spanText32}</Span08>
                  <Span04>{spanText33}</Span04>
                  <Span08>{spanText34}</Span08>
                </SDGothicNeoBold485>
                <Border className={border1Props.className} />
                <SDGothicNeoBold485>
                  <Span08>{spanText35}</Span08>
                  <Span04>{spanText36}</Span04>
                  <Span14>{spanText37}</Span14>
                  <Span08>{spanText38}</Span08>
                  <Span04>{spanText39}</Span04>
                  <Span08>{spanText40}</Span08>
                </SDGothicNeoBold485>
              </OverlapGroup9>
            </Group1216>
            <Group1217>
              <OverlapGroup25>
                <View32 />
                <Image src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----5@2x.svg" />
                <View32 />
              </OverlapGroup25>
              <SdGothicNeoboldContainer>
                <SDGothicNeoBold481>
                  <Span0>{spanText41}</Span0>
                  <Span1>{spanText42}</Span1>
                  <Span2>{spanText43}</Span2>
                  <Span1>{spanText44}</Span1>
                  <Span0>{spanText45}</Span0>
                </SDGothicNeoBold481>
                <SDGothicNeoBold481>
                  <Span0>{spanText46}</Span0>
                  <Span1>{spanText47}</Span1>
                  <Span2>{spanText48}</Span2>
                  <Span1>{spanText49}</Span1>
                  <Span0>{spanText50}</Span0>
                </SDGothicNeoBold481>
              </SdGothicNeoboldContainer>
              <SdGothicNeoboldContainer6>
                <SDGothicNeoBold482>
                  <Span02>{spanText51}</Span02>
                  <Span12>{spanText52}</Span12>
                  <Span22>{spanText53}</Span22>
                  <Span02>{spanText54}</Span02>
                  <Span12>{spanText55}</Span12>
                </SDGothicNeoBold482>
                <SDGothicNeoBold482>
                  <Span02>{spanText56}</Span02>
                  <Span12>{spanText57}</Span12>
                  <Span22>{spanText58}</Span22>
                  <Span02>{spanText59}</Span02>
                  <Span12>{spanText60}</Span12>
                </SDGothicNeoBold482>
              </SdGothicNeoboldContainer6>
              <GroupContainer5>
                <Group1204 chip1Props={group12041Props.chip1Props} chip2Props={group12041Props.chip2Props} />
                <Group1204 chip1Props={group12042Props.chip1Props} chip2Props={group12042Props.chip2Props} />
              </GroupContainer5>
              <BorderContainer1>
                <Border />
                <Border />
              </BorderContainer1>
              <OverlapGroupContainer2>
                <SdGothicNeoboldContainer4>
                  <SDGothicNeoBold483>{sdGothicNeoBold486}</SDGothicNeoBold483>
                  <SDGothicNeoBold483>{sdGothicNeoBold487}</SDGothicNeoBold483>
                </SdGothicNeoboldContainer4>
                <SdGothicNeoboldContainer5>
                  <SDGothicNeoBold484>
                    <Span04>{spanText61}</Span04>
                    <Span14>{spanText62}</Span14>
                  </SDGothicNeoBold484>
                  <SDGothicNeoBold484>
                    <Span04>{spanText63}</Span04>
                    <Span14>{spanText64}</Span14>
                  </SDGothicNeoBold484>
                </SdGothicNeoboldContainer5>
                <GroupContainer4>
                  <Group1203 />
                  <Group1203 />
                </GroupContainer4>
              </OverlapGroupContainer2>
              <OverlapGroup22>
                <SDGothicNeoBold485>
                  <Span08>{spanText65}</Span08>
                  <Span04>{spanText66}</Span04>
                  <Span14>{spanText67}</Span14>
                  <Span08>{spanText68}</Span08>
                  <Span04>{spanText69}</Span04>
                  <Span08>{spanText70}</Span08>
                </SDGothicNeoBold485>
                <Border className={border2Props.className} />
                <SDGothicNeoBold485>
                  <Span08>{spanText71}</Span08>
                  <Span04>{spanText72}</Span04>
                  <Span14>{spanText73}</Span14>
                  <Span08>{spanText74}</Span08>
                  <Span04>{spanText75}</Span04>
                  <Span08>{spanText76}</Span08>
                </SDGothicNeoBold485>
              </OverlapGroup22>
            </Group1217>
          </GroupContainer1>
          <Group1218>
            <OverlapGroup17>
              <View32 />
              <Image src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----3@2x.svg" />
              <View32 />
            </OverlapGroup17>
            <SdGothicNeoboldContainer>
              <SDGothicNeoBold481>
                <Span0>{spanText77}</Span0>
                <Span1>{spanText78}</Span1>
                <Span2>{spanText79}</Span2>
                <Span1>{spanText80}</Span1>
                <Span0>{spanText81}</Span0>
              </SDGothicNeoBold481>
              <SDGothicNeoBold481>
                <Span0>{spanText82}</Span0>
                <Span1>{spanText83}</Span1>
                <Span2>{spanText84}</Span2>
                <Span1>{spanText85}</Span1>
                <Span0>{spanText86}</Span0>
              </SDGothicNeoBold481>
            </SdGothicNeoboldContainer>
            <SdGothicNeoboldContainer7>
              <SDGothicNeoBold482>
                <Span22>{spanText87}</Span22>
                <Span02>{spanText88}</Span02>
                <Span12>{spanText89}</Span12>
                <Span22>{spanText90}</Span22>
                <Span02>{spanText91}</Span02>
                <Span12>{spanText92}</Span12>
              </SDGothicNeoBold482>
              <SDGothicNeoBold482>
                <Span22>{spanText93}</Span22>
                <Span02>{spanText94}</Span02>
                <Span12>{spanText95}</Span12>
                <Span22>{spanText96}</Span22>
                <Span02>{spanText97}</Span02>
                <Span12>{spanText98}</Span12>
              </SDGothicNeoBold482>
            </SdGothicNeoboldContainer7>
            <GroupContainer6>
              <Group1207 chipProps={group12071Props.chipProps} />
              <Group1207 chipProps={group12072Props.chipProps} />
            </GroupContainer6>
            <BorderContainer1>
              <Border />
              <Border />
            </BorderContainer1>
            <OverlapGroupContainer3>
              <SdGothicNeoboldContainer2>
                <SDGothicNeoBold483>{sdGothicNeoBold488}</SDGothicNeoBold483>
                <SDGothicNeoBold483>{sdGothicNeoBold489}</SDGothicNeoBold483>
              </SdGothicNeoboldContainer2>
              <SdGothicNeoboldContainer3>
                <SDGothicNeoBold484>
                  <Span04>{spanText99}</Span04>
                  <Span14>{spanText100}</Span14>
                </SDGothicNeoBold484>
                <SDGothicNeoBold484>
                  <Span04>{spanText101}</Span04>
                  <Span14>{spanText102}</Span14>
                </SDGothicNeoBold484>
              </SdGothicNeoboldContainer3>
              <GroupContainer7>
                <Group1208 />
                <Group1208 />
              </GroupContainer7>
            </OverlapGroupContainer3>
            <OverlapGroup22>
              <SDGothicNeoBold485>
                <Span08>{spanText103}</Span08>
                <Span04>{spanText104}</Span04>
                <Span14>{spanText105}</Span14>
                <Span08>{spanText106}</Span08>
                <Span04>{spanText107}</Span04>
                <Span08>{spanText108}</Span08>
              </SDGothicNeoBold485>
              <Border className={border3Props.className} />
              <SDGothicNeoBold485>
                <Span08>{spanText109}</Span08>
                <Span04>{spanText110}</Span04>
                <Span14>{spanText111}</Span14>
                <Span08>{spanText112}</Span08>
                <Span04>{spanText113}</Span04>
                <Span08>{spanText114}</Span08>
              </SDGothicNeoBold485>
            </OverlapGroup22>
          </Group1218>
        </GroupContainer>
        <GroupContainer8>
          <GroupContainer1>
            <Group1216>
              <OverlapGroup33>
                <View32 />
                <Image src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----7@2x.svg" />
                <View32 />
              </OverlapGroup33>
              <SdGothicNeoboldContainer>
                <SDGothicNeoBold481>
                  <Span0>{spanText115}</Span0>
                  <Span1>{spanText116}</Span1>
                  <Span2>{spanText117}</Span2>
                  <Span1>{spanText118}</Span1>
                  <Span0>{spanText119}</Span0>
                </SDGothicNeoBold481>
                <SDGothicNeoBold481>
                  <Span0>{spanText120}</Span0>
                  <Span1>{spanText121}</Span1>
                  <Span2>{spanText122}</Span2>
                  <Span1>{spanText123}</Span1>
                  <Span0>{spanText124}</Span0>
                </SDGothicNeoBold481>
              </SdGothicNeoboldContainer>
              <SdGothicNeoboldContainer1>
                <SDGothicNeoBold482>
                  <Span02>{spanText125}</Span02>
                  <Span12>{spanText126}</Span12>
                  <Span22>{spanText127}</Span22>
                  <Span02>{spanText128}</Span02>
                  <Span12>{spanText129}</Span12>
                </SDGothicNeoBold482>
                <SDGothicNeoBold482>
                  <Span02>{spanText130}</Span02>
                  <Span12>{spanText131}</Span12>
                  <Span22>{spanText132}</Span22>
                  <Span02>{spanText133}</Span02>
                  <Span12>{spanText134}</Span12>
                </SDGothicNeoBold482>
              </SdGothicNeoboldContainer1>
              <GroupContainer2>
                <Group1201
                  chip1Props={group12013Props.chip1Props}
                  chip2Props={group12013Props.chip2Props}
                  chip3Props={group12013Props.chip3Props}
                  chip4Props={group12013Props.chip4Props}
                />
                <Group1201
                  chip1Props={group12014Props.chip1Props}
                  chip2Props={group12014Props.chip2Props}
                  chip3Props={group12014Props.chip3Props}
                  chip4Props={group12014Props.chip4Props}
                />
              </GroupContainer2>
              <BorderContainer>
                <Border />
                <Border />
              </BorderContainer>
              <OverlapGroupContainer>
                <SdGothicNeoboldContainer2>
                  <SDGothicNeoBold483>{sdGothicNeoBold4810}</SDGothicNeoBold483>
                  <SDGothicNeoBold483>{sdGothicNeoBold4811}</SDGothicNeoBold483>
                </SdGothicNeoboldContainer2>
                <SdGothicNeoboldContainer3>
                  <SDGothicNeoBold484>
                    <Span04>{spanText135}</Span04>
                    <Span14>{spanText136}</Span14>
                  </SDGothicNeoBold484>
                  <SDGothicNeoBold484>
                    <Span04>{spanText137}</Span04>
                    <Span14>{spanText138}</Span14>
                  </SDGothicNeoBold484>
                </SdGothicNeoboldContainer3>
                <GroupContainer3>
                  <Group1202 />
                  <Group1202 />
                </GroupContainer3>
              </OverlapGroupContainer>
              <OverlapGroupContainer1>
                <SdGothicNeoboldContainer4>
                  <SDGothicNeoBold483>{sdGothicNeoBold4812}</SDGothicNeoBold483>
                  <SDGothicNeoBold483>{sdGothicNeoBold4813}</SDGothicNeoBold483>
                </SdGothicNeoboldContainer4>
                <SdGothicNeoboldContainer5>
                  <SDGothicNeoBold484>
                    <Span04>{spanText139}</Span04>
                    <Span14>{spanText140}</Span14>
                  </SDGothicNeoBold484>
                  <SDGothicNeoBold484>
                    <Span04>{spanText141}</Span04>
                    <Span14>{spanText142}</Span14>
                  </SDGothicNeoBold484>
                </SdGothicNeoboldContainer5>
                <GroupContainer4>
                  <Group1203 />
                  <Group1203 />
                </GroupContainer4>
              </OverlapGroupContainer1>
              <OverlapGroup9>
                <SDGothicNeoBold485>
                  <Span08>{spanText143}</Span08>
                  <Span04>{spanText144}</Span04>
                  <Span14>{spanText145}</Span14>
                  <Span08>{spanText146}</Span08>
                  <Span04>{spanText147}</Span04>
                  <Span08>{spanText148}</Span08>
                </SDGothicNeoBold485>
                <Border className={border4Props.className} />
                <SDGothicNeoBold485>
                  <Span08>{spanText149}</Span08>
                  <Span04>{spanText150}</Span04>
                  <Span14>{spanText151}</Span14>
                  <Span08>{spanText152}</Span08>
                  <Span04>{spanText153}</Span04>
                  <Span08>{spanText154}</Span08>
                </SDGothicNeoBold485>
              </OverlapGroup9>
            </Group1216>
            <Group1217>
              <OverlapGroup54>
                <View32 />
                <Image src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----11@2x.svg" />
                <View32 />
              </OverlapGroup54>
              <SdGothicNeoboldContainer>
                <SDGothicNeoBold481>
                  <Span0>{spanText155}</Span0>
                  <Span1>{spanText156}</Span1>
                  <Span2>{spanText157}</Span2>
                  <Span1>{spanText158}</Span1>
                  <Span0>{spanText159}</Span0>
                </SDGothicNeoBold481>
                <SDGothicNeoBold481>
                  <Span0>{spanText160}</Span0>
                  <Span1>{spanText161}</Span1>
                  <Span2>{spanText162}</Span2>
                  <Span1>{spanText163}</Span1>
                  <Span0>{spanText164}</Span0>
                </SDGothicNeoBold481>
              </SdGothicNeoboldContainer>
              <SdGothicNeoboldContainer6>
                <SDGothicNeoBold482>
                  <Span02>{spanText165}</Span02>
                  <Span12>{spanText166}</Span12>
                  <Span22>{spanText167}</Span22>
                  <Span02>{spanText168}</Span02>
                  <Span12>{spanText169}</Span12>
                </SDGothicNeoBold482>
                <SDGothicNeoBold482>
                  <Span02>{spanText170}</Span02>
                  <Span12>{spanText171}</Span12>
                  <Span22>{spanText172}</Span22>
                  <Span02>{spanText173}</Span02>
                  <Span12>{spanText174}</Span12>
                </SDGothicNeoBold482>
              </SdGothicNeoboldContainer6>
              <GroupContainer5>
                <Group1204 chip1Props={group12043Props.chip1Props} chip2Props={group12043Props.chip2Props} />
                <Group1204 chip1Props={group12044Props.chip1Props} chip2Props={group12044Props.chip2Props} />
              </GroupContainer5>
              <BorderContainer1>
                <Border />
                <Border />
              </BorderContainer1>
              <OverlapGroupContainer2>
                <SdGothicNeoboldContainer4>
                  <SDGothicNeoBold483>{sdGothicNeoBold4814}</SDGothicNeoBold483>
                  <SDGothicNeoBold483>{sdGothicNeoBold4815}</SDGothicNeoBold483>
                </SdGothicNeoboldContainer4>
                <SdGothicNeoboldContainer5>
                  <SDGothicNeoBold484>
                    <Span04>{spanText175}</Span04>
                    <Span14>{spanText176}</Span14>
                  </SDGothicNeoBold484>
                  <SDGothicNeoBold484>
                    <Span04>{spanText177}</Span04>
                    <Span14>{spanText178}</Span14>
                  </SDGothicNeoBold484>
                </SdGothicNeoboldContainer5>
                <GroupContainer4>
                  <Group1203 />
                  <Group1203 />
                </GroupContainer4>
              </OverlapGroupContainer2>
              <OverlapGroup22>
                <SDGothicNeoBold485>
                  <Span08>{spanText179}</Span08>
                  <Span04>{spanText180}</Span04>
                  <Span14>{spanText181}</Span14>
                  <Span08>{spanText182}</Span08>
                  <Span04>{spanText183}</Span04>
                  <Span08>{spanText184}</Span08>
                </SDGothicNeoBold485>
                <Border className={border5Props.className} />
                <SDGothicNeoBold485>
                  <Span08>{spanText185}</Span08>
                  <Span04>{spanText186}</Span04>
                  <Span14>{spanText187}</Span14>
                  <Span08>{spanText188}</Span08>
                  <Span04>{spanText189}</Span04>
                  <Span08>{spanText190}</Span08>
                </SDGothicNeoBold485>
              </OverlapGroup22>
            </Group1217>
          </GroupContainer1>
          <Group1218>
            <OverlapGroup44>
              <View32 />
              <Image src="https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----9@2x.svg" />
              <View32 />
            </OverlapGroup44>
            <SdGothicNeoboldContainer>
              <SDGothicNeoBold481>
                <Span0>{spanText191}</Span0>
                <Span1>{spanText192}</Span1>
                <Span2>{spanText193}</Span2>
                <Span1>{spanText194}</Span1>
                <Span0>{spanText195}</Span0>
              </SDGothicNeoBold481>
              <SDGothicNeoBold481>
                <Span0>{spanText196}</Span0>
                <Span1>{spanText197}</Span1>
                <Span2>{spanText198}</Span2>
                <Span1>{spanText199}</Span1>
                <Span0>{spanText200}</Span0>
              </SDGothicNeoBold481>
            </SdGothicNeoboldContainer>
            <SdGothicNeoboldContainer7>
              <SDGothicNeoBold482>
                <Span22>{spanText201}</Span22>
                <Span02>{spanText202}</Span02>
                <Span12>{spanText203}</Span12>
                <Span22>{spanText204}</Span22>
                <Span02>{spanText205}</Span02>
                <Span12>{spanText206}</Span12>
              </SDGothicNeoBold482>
              <SDGothicNeoBold482>
                <Span22>{spanText207}</Span22>
                <Span02>{spanText208}</Span02>
                <Span12>{spanText209}</Span12>
                <Span22>{spanText210}</Span22>
                <Span02>{spanText211}</Span02>
                <Span12>{spanText212}</Span12>
              </SDGothicNeoBold482>
            </SdGothicNeoboldContainer7>
            <GroupContainer6>
              <Group1207 chipProps={group12073Props.chipProps} />
              <Group1207 chipProps={group12074Props.chipProps} />
            </GroupContainer6>
            <BorderContainer1>
              <Border />
              <Border />
            </BorderContainer1>
            <OverlapGroupContainer3>
              <SdGothicNeoboldContainer2>
                <SDGothicNeoBold483>{sdGothicNeoBold4816}</SDGothicNeoBold483>
                <SDGothicNeoBold483>{sdGothicNeoBold4817}</SDGothicNeoBold483>
              </SdGothicNeoboldContainer2>
              <SdGothicNeoboldContainer3>
                <SDGothicNeoBold484>
                  <Span04>{spanText213}</Span04>
                  <Span14>{spanText214}</Span14>
                </SDGothicNeoBold484>
                <SDGothicNeoBold484>
                  <Span04>{spanText215}</Span04>
                  <Span14>{spanText216}</Span14>
                </SDGothicNeoBold484>
              </SdGothicNeoboldContainer3>
              <GroupContainer7>
                <Group1208 />
                <Group1208 />
              </GroupContainer7>
            </OverlapGroupContainer3>
            <OverlapGroup22>
              <SDGothicNeoBold485>
                <Span08>{spanText217}</Span08>
                <Span04>{spanText218}</Span04>
                <Span14>{spanText219}</Span14>
                <Span08>{spanText220}</Span08>
                <Span04>{spanText221}</Span04>
                <Span08>{spanText222}</Span08>
              </SDGothicNeoBold485>
              <Border className={border6Props.className} />
              <SDGothicNeoBold485>
                <Span08>{spanText223}</Span08>
                <Span04>{spanText224}</Span04>
                <Span14>{spanText225}</Span14>
                <Span08>{spanText226}</Span08>
                <Span04>{spanText227}</Span04>
                <Span08>{spanText228}</Span08>
              </SDGothicNeoBold485>
            </OverlapGroup22>
          </Group1218>
        </GroupContainer8>
      </div>
    </div>
  );
}

const Text1 = styled.h1`
  min-height: 48px;
  margin-top: 59px;
  margin-left: 360px;
  font-family: var(--font-family-apple_sd_gothic_neo-bold);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-xxxl);
  letter-spacing: -1px;
  line-height: 48px;
  white-space: nowrap;
`;

const SDGothicNeoBold48 = styled.p`
  ${ApplesdgothicneoRegularNormalGunsmo}
  min-height: 20px;
  margin-top: 10px;
  margin-left: 360px;
  letter-spacing: -0.2px;
  line-height: 20px;
  white-space: nowrap;
`;

const GroupContainer = styled.div`
  align-self: center;
  margin-top: 61px;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 1220px;
`;

const GroupContainer1 = styled.div`
  width: 812px;
  height: 593px;
  position: relative;
`;

const Group1216 = styled.div`
  position: absolute;
  width: 412px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 593px;
`;

const OverlapGroup6 = styled.div`
  width: 384px;
  height: 348px;
  position: relative;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/---@2x.svg);
  background-size: 100% 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 384px;
  height: 348px;
  top: 0;
  left: 0;
`;

const SdGothicNeoboldContainer = styled.div`
  ${SfprodisplayRegularNormalBlack13px}
  width: 359px;
  height: 20px;
  position: relative;
  margin-top: 10px;
`;

const SDGothicNeoBold481 = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Span0 = styled.span`
  ${SfprodisplayRegularNormalBlack13px}
  letter-spacing: 0;
`;

const Span1 = styled.span`
  ${SfprodisplayRegularNormalBlack14px}
  letter-spacing: 0;
`;

const Span22 = styled.span`
  ${SfprodisplayBoldTrueV20px}
  letter-spacing: 0;
`;

const Span04 = styled.span`
  ${SfprodisplayRegularNormalBlack12px}
  letter-spacing: 0;
`;

const Span2 = styled.span`
  ${ApplesdgothicneoRegularNormalBlack11}
  letter-spacing: -0.20px;
`;

const Span14 = styled.span`
  ${ApplesdgothicneoRegularNormalBlack1}
  letter-spacing: -0.20px;
`;

const Span08 = styled.span`
  ${ApplesdgothicneoRegularNormalMounta}
  letter-spacing: -0.20px;
`;

const SdGothicNeoboldContainer1 = styled.div`
  ${ApplesdgothicneoBoldWhite20px}
  width: 279px;
  height: 30px;
  position: relative;
  margin-top: 8px;
`;

const SDGothicNeoBold482 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Span02 = styled.span`
  ${ApplesdgothicneoBoldTrueV20px}
  letter-spacing: -1.00px;
`;

const Span12 = styled.span`
  ${ApplesdgothicneoBoldBlack20px}
  letter-spacing: -1.00px;
`;

const GroupContainer2 = styled.div`
  width: 327px;
  height: 48px;
  position: relative;
  margin-top: 12px;
`;

const BorderContainer = styled.div`
  width: 384px;
  height: 1px;
  position: relative;
  margin-top: 12px;
`;

const OverlapGroupContainer = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 345px;
`;

const SdGothicNeoboldContainer2 = styled.div`
  ${ApplesdgothicneoRegularNormalBlack1}
  width: 44px;
  height: 18px;
  position: relative;
`;

const SDGothicNeoBold483 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: -0.2px;
  line-height: 18px;
  white-space: nowrap;
`;

const SdGothicNeoboldContainer3 = styled.div`
  ${SfprodisplayRegularNormalBlack12px}
  width: 56px;
  height: 18px;
  position: relative;
  margin-left: 16px;
`;

const SDGothicNeoBold484 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: right;
  line-height: 18px;
  white-space: nowrap;
`;

const GroupContainer3 = styled.div`
  width: 217px;
  height: 18px;
  position: relative;
  margin-left: 12px;
`;

const OverlapGroupContainer1 = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 278px;
`;

const SdGothicNeoboldContainer4 = styled.div`
  ${ApplesdgothicneoRegularNormalBlack1}
  width: 31px;
  height: 18px;
  position: relative;
`;

const SdGothicNeoboldContainer5 = styled.div`
  ${SfprodisplayRegularNormalBlack12px}
  width: 56px;
  height: 18px;
  position: relative;
  margin-left: 30px;
`;

const GroupContainer4 = styled.div`
  width: 149px;
  height: 18px;
  position: relative;
  margin-left: 12px;
`;

const OverlapGroup9 = styled.div`
  ${ApplesdgothicneoRegularNormalWhite1}
  width: 384px;
  height: 34px;
  position: relative;
  margin-top: 12px;
  background-color: var(--alabaster);
`;

const SDGothicNeoBold485 = styled.p`
  position: absolute;
  top: 8px;
  left: 10px;
  line-height: 18px;
  white-space: nowrap;
`;

const Group1217 = styled.div`
  position: absolute;
  width: 404px;
  top: 0;
  left: 408px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 593px;
`;

const OverlapGroup25 = styled.div`
  width: 384px;
  height: 348px;
  position: relative;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----4@2x.svg);
  background-size: 100% 100%;
`;

const SdGothicNeoboldContainer6 = styled.div`
  ${ApplesdgothicneoBoldWhite20px}
  width: 316px;
  height: 30px;
  position: relative;
  margin-top: 8px;
`;

const GroupContainer5 = styled.div`
  width: 295px;
  height: 20px;
  position: relative;
  margin-top: 12px;
`;

const BorderContainer1 = styled.div`
  width: 384px;
  height: 1px;
  position: relative;
  margin-top: 40px;
`;

const OverlapGroupContainer2 = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 278px;
`;

const OverlapGroup22 = styled.div`
  ${ApplesdgothicneoRegularNormalWhite1}
  width: 384px;
  height: 34px;
  position: relative;
  margin-top: 40px;
  background-color: var(--alabaster);
`;

const Group1218 = styled.div`
  width: 404px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 593px;
`;

const OverlapGroup17 = styled.div`
  width: 384px;
  height: 348px;
  position: relative;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----2@2x.svg);
  background-size: 100% 100%;
`;

const SdGothicNeoboldContainer7 = styled.div`
  ${SfprodisplayBoldWhite20px}
  width: 299px;
  height: 30px;
  position: relative;
  margin-top: 8px;
`;

const GroupContainer6 = styled.div`
  width: 145px;
  height: 20px;
  position: relative;
  margin-top: 12px;
`;

const OverlapGroupContainer3 = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 214px;
`;

const GroupContainer7 = styled.div`
  width: 86px;
  height: 18px;
  position: relative;
  margin-left: 12px;
`;

const GroupContainer8 = styled.div`
  align-self: center;
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 1220px;
`;

const OverlapGroup33 = styled.div`
  width: 384px;
  height: 348px;
  position: relative;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----6@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup54 = styled.div`
  width: 384px;
  height: 348px;
  position: relative;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----10@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup44 = styled.div`
  width: 384px;
  height: 348px;
  position: relative;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/632bbe51c6e7698e68ac9946/releases/632c19d28c7143bb88c222f4/img/----8@2x.svg);
  background-size: 100% 100%;
`;

export default Page;
