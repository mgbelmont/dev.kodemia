import React, { useState } from "react";

export default function Exercises() {
  const [stateCreditCard, setStateCreditCard] = useState("");
  const [stateName, setName] = useState("");
  const [stateDate, setDate] = useState("");
  const [stateCVC, setCVC] = useState("");

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-info rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <form>
              <div className="form-group col-6">
                <label className="text-white">{stateCreditCard}</label>
              </div>
              <div className="form-group col-6">
                <label className="text-white">{stateName}</label>
              </div>
              <div className="form-group col-6">
                <label className="text-white">{stateDate}</label>
                &nbsp;
                <label className="text-white">{stateCVC}</label>
              </div>
              <div className="form-group col-12">
                <label
                  className="text-white"
                  htmlFor="creditCardNumber"
                ></label>
                <input
                  type="number"
                  className="form-control"
                  id="creditCardNumber"
                  aria-describedby="emailHelp"
                  placeholder="Card Number"
                  value={stateCreditCard}
                  onChange={({ target: { value } }) => {
                    setStateCreditCard(value);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="Name"></label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  value={stateName}
                  onChange={({ target: { value } }) => {
                    setName(value);
                  }}
                />
              </div>
              <div className="form-group col-6">
                <label className="text-white" htmlFor="Date"></label>
                <input
                  type="text"
                  className="form-control"
                  id="Date"
                  aria-describedby="emailHelp"
                  placeholder="Date"
                  value={stateDate}
                  onChange={({ target: { value } }) => {
                    setDate(value);
                  }}
                />

                <label className="text-white" htmlFor="cvc"></label>
                <input
                  type="number"
                  className="form-control"
                  id="cvc"
                  aria-describedby="emailHelp"
                  placeholder="CVC"
                  value={stateCVC}
                  onChange={({ target: { value } }) => {
                    setCVC(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
export default function Exercises() {
  const [USD, setUSD] = useState(null);
  const [MXN, setMXN] = useState(null);

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <form>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="USDInput">
                  USD
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="USDInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter USD"
                  value={Number(USD)}
                  onChange={(event) => {
                    setUSD(event.target.value);
                    setMXN((event.target.value * 19.84).toFixed(2));
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="MXNInput">
                  MXN
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="MXNInput"
                  placeholder="Enter MXN"
                  value={Number(MXN)}
                  onChange={({ target: { value } }) => {
                    setUSD((value / 19.84).toFixed(2));
                    setMXN(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}*/
