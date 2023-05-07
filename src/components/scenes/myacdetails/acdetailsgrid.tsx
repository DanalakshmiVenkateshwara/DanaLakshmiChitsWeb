import react from 'react';
import Grid from '../../shared/grid';
import GridColumn from '../../shared/grid/GridColumn';
import CustomROw from './customrow';

export default function AcDetailsGrid(props:any){
    return(
        <>
            <Grid data={props.data} as={CustomROw} loading={props.loading} >
                <GridColumn title="Date" targetField="paymentDate" />
                <GridColumn title="Amount" targetField="totalAmount" />
                <GridColumn title="month Of Installment" targetField="paymentMonth" />
            </Grid>
        </>
    )
}