export const metadata = {
  title: "Shop",
  description: "Shop - Generated by create next app",
};

import TitlePage from '@/components/pageComponents/TitlePage'
import React from 'react'

const Id = ({params}) => {
    console.log(params)
  return (
    <>
    <TitlePage title="Id"/>
    <p>{params.id}</p>
    </>
  )
}

export default Id