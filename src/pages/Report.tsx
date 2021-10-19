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

  console.log("reportData: ", reportData);
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
            reportData.map((data, index) => console.log(data, index))}
        </ul>
      </div>
    </>
  );
}

export default Report;
