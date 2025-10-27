import React from 'react'
import TrademarkOfficeActionHero from '../../../components/Trademarkofficeactionhero';
import TrademarkOfficeActionOverview from '../../../components/TrademarkOfficeActionOverview';
import TrademarkOfficeActionSteps from '../../../components/TrademarkOfficeActionSteps';
import TrademarkOfficeActionPlans from '../../../components/TrademarkOfficeActionPlans';

const page = () => {
  return (
    <div>
      <TrademarkOfficeActionHero />
      <TrademarkOfficeActionOverview />
      <TrademarkOfficeActionSteps />
      <TrademarkOfficeActionPlans />
    </div>
  )
}

export default page

