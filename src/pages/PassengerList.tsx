import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {TestPageContainer, TestTitle} from "../styles/GlobalStyle";

const PassengerList: React.FC = () => {
  const [passengersData, setPassengersData] = useState<any>();
  const [endOfScreen, SetEndOfScreen] = useState<number>(1000);
  const [page, setPage] = useState<number>(1);
  const [prevHeight, setPrevHeight] = useState<number | null>(null);

  window.addEventListener("scroll", () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    let clientHeight = document.documentElement.clientHeight;
    SetEndOfScreen(scrollHeight - (scrollTop + clientHeight));
  });

  useEffect(() => {
    async function fetchPassengerData() {
      const res = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=0&size=${page * 10}`
      );
      const data = await res.json();

      setPassengersData(data.data);
    }
    fetchPassengerData();
  }, [page]);

  if (
    endOfScreen === 0 &&
    prevHeight !== document.documentElement.scrollHeight
  ) {
    setPage((prev) => prev + 1);
    setPrevHeight(document.documentElement.scrollHeight);
  }

  return (
    <TestPageContainer onClick={() => setPage((prev) => prev + 1)}>
      <TestTitle>Passenger List</TestTitle>
      {passengersData?.map((passenger: any, index: number) => (
        <PassengerContainer key={passenger._id}>
          <NameBox>
            <PassengerName>{passenger.name}</PassengerName>
            <TripsNumber>{passenger.trips}trips</TripsNumber>
          </NameBox>
          <FlightInfoBox>
            <FlightImg
              src={passenger.airline[0].logo}
              alt={passenger.airline[0].name}
            />
            <FlightDesc>{passenger.airline[0].slogan}</FlightDesc>
          </FlightInfoBox>
          <PassengerNumber>{passenger._id}</PassengerNumber>
        </PassengerContainer>
      ))}
    </TestPageContainer>
  );
};

const PassengerContainer = styled.div`
  border-top: 1px solid rgb(241, 243, 249);
  padding: 20px 0;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PassengerName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;

const TripsNumber = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgb(0, 0, 0);
`;

const FlightInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: rgb(242, 242, 242);
`;

const FlightImg = styled.img`
  width: 80px;
`;

const FlightDesc = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 300;
`;

const PassengerNumber = styled.p`
  text-align: right;
  margin-top: 20px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(211, 211, 211);
  text-align: right;
`;

export default PassengerList;
