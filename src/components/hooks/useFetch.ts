import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const baseUrl = window.gbl_React_App_Service_URL;

  useEffect(() => {
    setLoading(true);
    axios({
      method: method,
      url: baseUrl + "api" + url,
      data: data,
    })
      .then(function (response) {
        setResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return {
    response,
    loading,
  };
}
