import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import GridCell from '../../shared/grid/GridCell'

export default function CustomRow(props: any) {
  const { data, rowProps } = props

  const convertDateTimeToDate = (date: string) => {
    
    if (date == "0001-01-01T00:00:00")
      return ""
    else {
      let newDate = date ? date.split('T')[0] : "";
      return newDate;
     }
  }

  return (
    <>
      <GridCell title="Group Name" targetField='groupName'><>{data?.groupName}</></GridCell>
      <GridCell title='Amount' targetField='amount'><>{data?.amount}</></GridCell>
      <GridCell title='Duration' targetField="duration">{data?.duration}</GridCell>
      <GridCell title='No of Members' targetField="noOfMembers">{data?.noOfMembers}</GridCell>
      <GridCell title='Installment Amount' targetField="installmentAmount">{data?.installmentAmount}</GridCell>
      <GridCell title='Start Date' targetField="startDate" ><>{convertDateTimeToDate(data?.startDate)}</></GridCell>
    </>
  )
}