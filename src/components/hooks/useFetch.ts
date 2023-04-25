import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(
  url?: string,
  data?: any,
  contentType?: string,
  header?: string
) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  //   const result = fetch("https://localhost:44303/api/User/GetAllChitPlans", {
  //     mode: "no-cors",
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }).then((response: any) => {
  //     response.data;
  //     console.log(response);
  //   });
  //   const result = axios
  //     .get("https://localhost:44303/api/User/GetAllChitPlans", {
  //       headers: { "Content-Type": "application/json" }, //, Authorization: `Bearer ${token}`
  //     })
  //     .then(function (response: any) {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       //   if (error?.response?.status === 401) {
  //       //   }
  //     });
  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://localhost:44303/api/User/GetAllChitPlans",
    }).then(function (response) {
      console.log(response.data);
      setResponse(response.data);
     setLoading(false);
    });
  }, []);

  return {
    response,
    loading
  };
}
