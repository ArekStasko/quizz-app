import React from "react";
import data from "../data/data";
import dataAssets from "../data/dataAssets";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.div`
  background-image: url(${({ item }) => dataAssets[0].mainAssets[item]});
  background-repeat: no-repeat;
  background-size: contain;
  width: 45px;
  height: 45px;
`;

console.log(data);

const MainPage = () => {
  return (
    <div className="page">
      <div className="page__wrapper">
        <div className="page__quiz-logo"></div>

        <div className="page__quiz-header">
          <p>10 PYTAŃ&#47;{data.categories.length} KATEGORII</p>
        </div>

        <div className="categories">
          {data.categories.map((item) => {
            const param = "/quiz/" + item;

            return (
              <Link key={item} to={param} className="categories__wrapper">
                <Icon item={item}></Icon>
                <div>
                  <div className="categories__wrapper--line"></div>
                  <p>{item}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
