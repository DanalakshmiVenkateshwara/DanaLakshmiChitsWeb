import React from 'react'
import Card from '../../shared/card'
import Newlycommencedgroup from './newlycommencedgroup'
import useFetch from '../../hooks/useFetch';
import { useStore } from '../../store';

export default function Newlycommenced() {
  const {State,Store} = useStore();
  const { response, loading, onRefresh: CompletedGroupDetails } = useFetch({ url: `/User/GetAllChitPlans/${false}?userId=${State.user.id}`, Options: { method: "GET", initialRender: true } });
  return (
   <>
   <Card noPadding title="Upcoming Chits Details"
      >
        <Newlycommencedgroup data={response} loading={loading}/>
       </Card></> 
 )
}