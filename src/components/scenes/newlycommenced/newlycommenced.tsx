import React from 'react'
import Card from '../../shared/card'
import Newlycommencedgroup from './newlycommencedgroup'
import useFetch from '../../hooks/useFetch';

export default function Newlycommenced() {
  const { response, loading, onRefresh: CompletedGroupDetails } = useFetch({ url: `/User/GetAllChitPlans/${false}?userId=${4}`, Options: { method: "GET", initialRender: true } });
  return (
   <>
   <Card noPadding title="Upcoming Chits Details"
      >
        <Newlycommencedgroup data={response} loading={loading}/>
       </Card></> 
 )
}