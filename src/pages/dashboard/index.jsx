import React, { useEffect, useState } from "react";
import { Container } from "../../styles/Dashboard";
import Header from "../../components/header/index";
import Card from "../../components/card/index";
import Search from "../../components/search/index";
import api from "../../service/api";
import { login } from "../../service/login";


function Dashboard() {
  //Estados
  const [data, setData] = useState("");
  const [request, setRequest] = useState();

  const onSubmit = async () => {
    try {
      const res = await api.get(request);
      setData(res.data);
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container>
      <Header login={login} />
      <Search
        handleOnChange={(e) => setRequest(e.target.value)}
        handleSubmit={onSubmit}
      />

      {data.length !== 0 ? <Card data={data} /> : null}
    </Container>
  );
}

export default Dashboard;
