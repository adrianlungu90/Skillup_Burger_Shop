import React from "react";
import { Country, State } from "country-state-city";
import { useState } from "react";
import Popup from "reactjs-popup";
import NavigationBar from "../layout/Header";

const Shipping = () => {
  const [countryCode, setCountryCode] = useState("");

  const handleCountryChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <section className="shipping">
      <NavigationBar />
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>House Nr.</label>
            <input type="text" placeholder="Enter House Nr." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            {/* COUNTRY DROPDOWN*/}
            <label>Country</label>
            <select onChange={handleCountryChange}>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => {
                  return (
                    <option value={i.isoCode} key={i.isocode}>
                      {i.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(countryCode).map((i) => {
                  return (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div>
            <label>Postal Code</label>
            <input type="number" placeholder="Enter Postal Code" />
          </div>
          <div>
            <label>Phone Nr.</label>
            <input type="number" placeholder="Enter Phone Nr." />
          </div>

          <Popup
            trigger={<button type="button">Confirm Order</button>}
            position="right center"
          >
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
