"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';


const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    if (search) {
      router.push(`/list?search=${search}`)
    
  }
}
  return (
    <form className='flex justify-between items-center gap-4 bg-gray-100 p-2 rounded-md flex-1'>
      <input name ='search' type="text" placeholder="Search" className='flex-1 bg-transparent outline-none'/>
      <button className='cursor-pointer'>
<Image src='/search.png' alt='' width={16} height={16} />

</button>
    </form>
  )

}

export default SearchBar