import { useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";
import { prisma } from "../../server/prisma"
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout'


export default function updateComponents(props) {


    const [name, setName] = useState(props.components.name)
    const [serialNumber, setSerialNumber] = useState(props.components.serialNumber)
    const [description, setDescription] = useState(props.components.description)
    const [number, setNumber] = useState(props.components.number)
    const [board, setBoard] = useState(props.components.board)
    const [project, setProject] = useState(props.components.project)
    const [id, setId] = useState(props.components.id)
  
  
  const router = useRouter()
  

  const updateComponent = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/componentUpdate/${id}`, {
      name,serialNumber,description,number,board,project,id
    })
    router.push('/library')
  }

  return (
    <Layout>
    <div className="isolate bg-gray-900 min-h-screen py-24 px-6 sm:py-32 lg:px-8">
 
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold  text-white sm:text-4xl">Update Component</h2>
        <p className="mt-2 text-lg leading-8 text-white">
        Update the component record. make the propter changes and hit the update button.
        </p>
      </div>
      <form onSubmit={updateComponent} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              Part Name
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
                Project
              </label>
              <select
                value={project}
                onChange={e => setProject(e.target.value)}
                id="project"
                name="project"
                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>PNR1000</option>
                <option>HH</option>
                <option>MANPACK</option>
                <option>VIC-IP</option>
                <option>AIRBORNE</option>
                <option>WBN</option>
                <option>SOLAN</option>
              </select>
            </div>
          <div className="sm:col-span-2">
            <label htmlFor="Faliure Description" className="block text-sm font-semibold leading-6 text-white">
              Description
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
            <label htmlFor="Faliure Description" className="block text-sm font-semibold leading-6 text-white">
            Part #
            </label>
            <div className="mt-2.5">
              <input
                value={serialNumber}
                onChange={e=>setSerialNumber(e.target.value)}
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
            <label htmlFor="Faliure Description" className="block text-sm font-semibold leading-6 text-white">
            Location
            </label>
            <div className="mt-2.5">
              <input
                value={number}
                onChange={e=>setNumber(e.target.value)}
                type="text"
                name="Faliure Description"
                id="Faliure Description"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Faliure Description" className="block text-sm font-semibold leading-6 text-white">
            Board
            </label>
            <div className="mt-2.5">
              <input
                value={board}
                onChange={e=>setBoard(e.target.value)}
                type="text"
                name="Faliure Description"
                id="Faliure Description"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
    </Layout>
  )
}


export async function getServerSideProps({query, args} ) {
    const id  = +query.id;
    // will always run on the server
    // newest first
    const components = await prisma.components.findUnique({
      where: {
        id: id,
        
      },
    })
  
    return {
      props: {
        components: JSON.parse(JSON.stringify(components)),
        
      },
    }
  }