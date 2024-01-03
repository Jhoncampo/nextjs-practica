import TitlePage from '@/components/pageComponents/TitlePage'
import React from 'react'
import { POST } from '../page'
import Link from 'next/link'

export async function generateMetadata ({params}) {
  const post = POST.find((post) => post.slug === params.slug)
  return {
    title: post.title,
    description:  post.title + " - description"
  }
}



const Slug = ({params}) => {
  const post = POST.find((post) => post.slug === params.slug)
  return (
    <>
    <TitlePage title={post.title}/>
    <p className='text-center mb-5'>{post.content}</p>
    <div className="text-center">
      <Link className='bg-indigo-600 px-6 py-2 text-white rounded hover:text-lg ease-linear' href="/blog" >Volver</Link>
    </div>
    </>
  )
}

export default Slug