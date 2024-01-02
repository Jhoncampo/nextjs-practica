import TitlePage from '@/components/pageComponents/TitlePage'
import React from 'react'

const Slug = ({params}) => {
    console.log(params)
  return (
    <>
    <TitlePage title="Slug"/>
    <p className='text-center'>{params.slug}</p>
    </>
  )
}

export default Slug