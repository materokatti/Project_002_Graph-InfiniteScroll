import React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {TestPageContainer, TestTitle} from "../styles/GlobalStyle";

const Report: React.FC = () => {
  const [reportData, setReportData] = useState<any[]>([]);
  const [coordinateInfo, setCoordinateInfo] = useState<any[]>([]);

  const leftCalculator = (
    reportData: Array<any>,
    index: number,
    start: number
  ) => {
    const sizePerDate = 500 / reportData.length;
    return start + sizePerDate * (index + 1) - sizePerDate / 2;
  };

  const topCalculator = (cycle: number, start: number) => {
    return 100 - cycle + 30;
  };

  useEffect(() => {
    async function fetchReportData() {
      const res = await fetch(
        "https://motionz-kr.github.io/playground/apis/report.json"
      );
      const data = await res.json();
      setReportData(data.data);
      data.data.map((eachData: any, index: number) =>
        setCoordinateInfo((prev) => [
          ...prev,
          {
            id: index,
            left: leftCalculator(data.data, index, 15),
            top: topCalculator(eachData.cycle, 30),
          },
        ])
      );
    }
    fetchReportData();
  }, []);

  console.log(reportData);
  console.log("coordinateInfo: ", coordinateInfo);

  return (
    <TestPageContainer>
      <TestTitle>User Report</TestTitle>
      <GraphContainer>
        <FlexContainer>
          <Bullet></Bullet>
          <LegendInfo>활동주기</LegendInfo>
          <BarExample></BarExample>
          <LegendInfo>활동기간, 시작일</LegendInfo>
        </FlexContainer>
        <LineGraphBox>
          <div>
            <svg height='160' width='556'>
              {reportData.map((data, index) => (
                <>
                  {index !== reportData.length - 1 ? (
                    <line
                      x1={coordinateInfo[index]?.left}
                      y1={coordinateInfo[index]?.top}
                      x2={coordinateInfo[index + 1]?.left}
                      y2={coordinateInfo[index + 1]?.top}
                      stroke='#222'
                      stroke-width='2'
                    ></line>
                  ) : null}
                  <circle
                    cx={coordinateInfo[index]?.left}
                    cy={coordinateInfo[index]?.top}
                    r='4.5'
                    fill='#222'
                  ></circle>
                </>
              ))}
            </svg>
            {reportData &&
              reportData.map((data, index) => (
                <LineInfoBox
                  top={coordinateInfo[index]?.top}
                  left={coordinateInfo[index]?.left}
                >
                  <CycleInfo key={index} cycle={data.cycle}>
                    {data.cycle}일
                  </CycleInfo>
                </LineInfoBox>
              ))}
          </div>
        </LineGraphBox>
        <GridContainer column={reportData.length}>
          {reportData.map((data, index) => (
            <BarContainer>
              <span>{data.period}일</span>
              <Bar></Bar>
              <span>
                {data.startDate.slice(5, 7)}/{data.startDate.slice(8)}
              </span>
            </BarContainer>
          ))}
        </GridContainer>
      </GraphContainer>
    </TestPageContainer>
  );
};

const GraphContainer = styled.div`
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dir || "row"};
  justify-content: flex-end;
  align-items: center;
`;

const Bullet = styled.div`
  background-color: rgb(34, 34, 34);
  width: 7px;
  height: 7px;
  border-radius: 14px;
  margin-right: 6px;
`;

const LegendInfo = styled.span`
  font-size: 10px;
  font-weight: 300;
  color: rgb(96, 96, 96);
  padding: 10px 20px 10px 0px;
`;

const BarExample = styled.div`
  background-color: rgb(34, 34, 34);
  width: 22px;
  height: 7px;
  border-radius: 14px;
  margin-right: 6px;
  margin-left: 18px;
`;

const LineGraphBox = styled.div`
  position: relative;
  margin: 40px 0;
`;

const LineInfoBox = styled("div")<{top: number; left: number}>`
  position: absolute;
  top: ${(props) => `${props.top + 10}px`};
  left: ${(props) => `${props.left}px`};
`;

const CycleInfo = styled("span")<{cycle: number}>`
  color: ${(props) =>
    props.cycle >= 100 ? "rgb(255, 117, 102)" : "rgb(112, 112, 112)"};
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 10px;
`;

const Bar = styled.div`
  width: 30px;
  height: 79px;
  border-radius: 10px;
  background-color: rgb(51, 51, 51);
`;

const GridContainer = styled("div")<{column: number}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  margin: 20px 0;
  padding: 0 40px 0 20px;
`;

export default Report;
