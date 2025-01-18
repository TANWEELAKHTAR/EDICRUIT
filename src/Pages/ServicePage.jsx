import React from 'react'
import ServiceHero from '../components/ServiceComponents/ServiceHero'
import ITServicesGrid from '../components/ServiceComponents/ITServicesGrid'
import IBMAS400Services from '../components/ServiceComponents/IBMAS400Services'
import IBMModernization from '../components/ServiceComponents/IBMModernization'
import HRSolutionBanner from '../components/ServiceComponents/HRSolutionBanner'
import Cta from '../components/Cta'

const ServicePage = () => {
  return (
    <>
    <ServiceHero/>
    <ITServicesGrid/>
    <IBMAS400Services/>
    <IBMModernization/>
    <HRSolutionBanner/>
    <Cta/>
    </>
  )
}

export default ServicePage