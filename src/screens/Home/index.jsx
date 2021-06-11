import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import SideLeft from "../../components/SideLeft";
import SideRight from "../../components/SideRight";
import Posts from "../../components/Posts";
import Counter from "../../components/Counter";
import AppLoading from "../../components/AppLoading";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <SideLeft />
          <main className="col-8">
            <Posts
              data={Object.entries(data).length ? Object.entries(data) : []}
            />
          </main>
          <SideRight />
        </div>
      </div>
      <AppLoading />
    </React.Fragment>
  );
}
