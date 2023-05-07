import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import axios from 'axios'
import { useRouter } from "next/router";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AddPost() {
  const [name, setName] = useState('')
  const [serialNumber, setSerialNumber] = useState('')
  const [description, setDescription] = useState('')
  const [comments, setComments] = useState('')
  const [failStatus, setStatus] = useState('Completed')
  const [route, setRoute] = useState()
  
  
  const router = useRouter()


  const handleSubmit = async (e) => {
      e.preventDefault();
      const { data } = await axios.post('/api/posts', {
        name,serialNumber,description,comments,failStatus
      })
      router.push('/')
    }

  return (
    <div className="isolate bg-gray-900 min-h-screen py-24 px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold  text-white sm:text-4xl">New Bug</h2>
        <p className="mt-2 text-lg leading-8 text-white">
          Write bug description, the fix if there is and the status.
        </p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              Author
            </label>
            <div className="mt-2.5">
              <input
                value={name}
                onChange={e=>setName(e.target.value)}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Serial Number
            </label>
            <div className="mt-2.5">
              <input
                value={serialNumber}
                onChange={e=>setSerialNumber(e.target.value)}
                type="text"
                name="Serial Number"
                id="Serial Number"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Faliure Description" className="block text-sm font-semibold leading-6 text-white">
              Faliure Description
            </label>
            <div className="mt-2.5">
              <input
                value={description}
                onChange={e=>setDescription(e.target.value)}
                type="text"
                name="Faliure Description"
                id="Faliure Description"
                rows={2}
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Comments" className="block text-sm font-semibold leading-6 text-white">
              Comments
            </label>
            <div className="mt-2.5">
              <textarea
                value={comments}
                onChange={e=>setComments(e.target.value)}
                name="Comments"
                id="Comments"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
                  <div className="sm:col-span-2">
                      <label htmlFor="failStatus" className="block text-sm font-medium leading-6 text-white">
                          Status
                      </label>
                      <select
                          value={failStatus}
                          onChange={e=>setStatus(e.target.value)}
                          id="failStatus"
                          name="failStatus"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                          <option>Completed</option>
                          <option>Not Completed</option>
                          <option>Pending</option>
                      </select>
                  </div>
         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}