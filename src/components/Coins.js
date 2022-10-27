import React, { useState } from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";
import { Link } from "react-router-dom";

import Coin from "../Routes/Coin";
const Coins = (props) => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="cointainer">
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>

        {props.coins
          .filter((coins) => {
            if (searchItem == "") {
              return coins;
            } else if (
              coins.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return coins;
            }
          })
          .map((coins) => {
            return (
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <CoinItem coins={coins} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Coins;
