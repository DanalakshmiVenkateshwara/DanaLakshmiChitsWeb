import React from 'react'
import Grid from '../../shared/grid'
import GridColumn from '../../shared/grid/GridColumn'
import CustomRow from './CustomRow'

export default function Newlycommencedgroup(props:any) {
  return (
   <>
   <Grid data={props.data} as={CustomRow} loading={props.loading}>
        <GridColumn title="Group Name" targetField="groupName" />
        <GridColumn title="Amount" targetField="amount" />
        <GridColumn title="Duration" targetField="duration" />
        <GridColumn title="No.of Members" targetField="noOfMembers" />
        <GridColumn title="Installment Amount" targetField="installmentAmount" />
        <GridColumn title="Start Date" targetField="startDate" />
      </Grid>
   </>
  )
}