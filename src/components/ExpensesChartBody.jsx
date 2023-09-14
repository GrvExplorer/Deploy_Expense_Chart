import { checkPropTypes } from 'prop-types'
import MyBalance from './mybalance/MyBalance'
import React from 'react'
import SpendingCharTotal from './spendings/SpendingCharTotal'


const ExpensesChartBody = ({data}) => {
  return (
    <div className='expensesChartBody'>
    <MyBalance />
    <SpendingCharTotal data={data} />
    </div>
  )
}
ExpensesChartBody.propTypes = {
  data: checkPropTypes.node
}

export default ExpensesChartBody

