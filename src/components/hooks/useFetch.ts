import axios from "axios";
import React, { useEffect, useState } from "react";
import useNoninitialEffect from "./useNoninitialEffect";

interface Iprops {
  url: string;
  Options: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    data?: any;
    initialRender?: boolean;
  };
}
export default function useFetch(props: Iprops) {
  const {
    url,
    Options: { method, data, initialRender },
  } = props;
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [Refresh, setRefresh] = useState([]);
  const baseUrl = window.gbl_React_App_Service_URL;

  const fetch = () => {
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
  };

  const onRefresh=()=>{
    setRefresh([]);
  }

  //initial Render
  useEffect(() => {
    if (initialRender && !undefined) 
    fetch();
  }, [Refresh]);

  //do not initial Render
  useNoninitialEffect(() => {
    if (!initialRender  && !undefined) 
    fetch();
  }, [Refresh]);

  return {
    response,
    loading,
    onRefresh
  };
}
