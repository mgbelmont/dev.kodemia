import React, { useState, useEffect } from "react";

const rick = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
];

export default function Exercises() {
  const [data, setData] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  }, []);

  const build = (
    {
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
      url,
      created,
    },

    index
  ) => {
    return (
      <React.Fragment key={index}>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{status}</li>
            <li className="list-group-item">{species}</li>
            <li className="list-group-item">{gender}</li>
          </ul>
        </div>
      </React.Fragment>
    );
  };
  const getNextPage = () => {
    fetch(next)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  const getPrevPage = () => {
    fetch(prev)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setPrev(json.info.prev);
        setNext(json.info.next);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center d-flex p-2">
        <div className="col">{data.map(build)}</div>
      </div>
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap p-5">
          <button
            disabled={prev === null ? true : false}
            type="button"
            className="btn btn-dark btn-lg mx-3"
            onClick={getPrevPage}
          >
            Prev
          </button>
          <button
            disabled={next === null ? true : false}
            type="button"
            className="btn btn-dark btn-lg mx-3"
            onClick={getNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/*
const petsData = {
  dogs: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
};

export default function Exercises() {
  const buildLIPets = ({ name, age }, index) => (
    <li key={index} className="list-group-item">
      Name: {name}, age: {age}
    </li>
  );

  const petsArray = Object.entries(petsData).map(([type, pets], index) => (
    <React.Fragment key={index}>
      <div className="card-header">{type}</div>
      <ul className="list-group list-group-flush">{pets.map(buildLIPets)}</ul>
    </React.Fragment>
  ));

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            {petsArray}
          </div>
        </div>
      </div>
    </div>
  );
}*/

/*
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
}*/
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
