import React from "react";
import {useEffect, useState} from "react";

function Report() {
  const [reportData, setReportData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchReportData() {
      const res = await fetch(
        "https://motionz-kr.github.io/playground/apis/report.json"
      );
      const data = await res.json();
      setReportData(data.data);
    }
    fetchReportData();
  }, []);
  console.log(reportData);
  return (
    <>
      <h2>User Report</h2>
      <div>
        <ul>
          <li>활동 주기</li>
          <li>활동 기간, 시작일</li>
        </ul>
        <ul>
          {reportData &&
            reportData.map((data, index) => <li key={index}>{data.cycle}</li>)}
        </ul>
        {reportData &&
          reportData.map((data, index) => (
            <div key={index}>
              <p>{data.period}일</p>
              <div />
              <p>{data.startDate.slice(5)}</p>
            </div>
          ))}
        <svg height='210' width='400'>
          <path
            d='M150 0 L75 200 Z'
            stroke='red'
            stroke-width='3'
            fill='none'
          />
        </svg>
      </div>
    </>
  );
}

export default Report;
