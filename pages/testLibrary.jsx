import { prisma } from "../server/prisma"
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import AppBar from "../components/AppBar"
import { useState } from 'react'
import ReactPaginate from 'react-paginate';



export default function Library({ comp }) {

    

    const [newComp, setNewComp] = useState(comp.slice(0,80))
    const [searchedVal, setSearchedVal] = useState("");
    const [pageNumber, setPageNumber] = useState(0)
    

    
const itemsPerPage = 20
const pagesVisited = pageNumber * itemsPerPage

const displayComponents = newComp.slice(pagesVisited, pagesVisited + itemsPerPage)
.filter((components) =>
// note that I've incorporated the searchedVal length check here
components.name 
  .toString()
  .toLowerCase()
  .includes(searchedVal.toString().toLowerCase()) 
  ||
  components.serialNumber 
  .toString()
  .toLowerCase()
  .includes(searchedVal.toString().toLowerCase()) 
  ||
  components.project 
  .toString()
  .toLowerCase()
  .includes(searchedVal.toString().toLowerCase()) 
)

.map((components) => { 
    
    return (
    
      
                          
        <tbody key={components} class="text-gray-600 text-sm font-light">
              
                                    <tr key={components.id} class="border-b border-gray-200 hover:bg-gray-100">
                                        <td class="py-3 px-6 text-left whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="mr-2">

                                                </div>
                                                <span class="font-medium">{components.project}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-left">
                                            <div class="flex items-center">
                                                <div class="mr-2">

                                                </div>
                                                <span class="font-medium">{components.number}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">{components.name}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">{components.serialNumber}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">{components.description}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex items-center justify-center">
                                                <span class="font-medium">{components.board}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div class="flex item-center justify-center">

                                                <div onClick={() => updateComponent(components.id)} class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </div>
                                                <div onClick={() => deleteComponent(components.id)} class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    
                               </tbody>
                                  

)


});
   
   

    const router = useRouter()



    async function deleteComponent(id) {
        try {
            fetch(`http://localhost:3000/api/components/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: 'DELETE'
            }).then(() => {
                router.reload(window.location.pathname)
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function updateComponent(id) {
        router.push(`http://localhost:3000/c/${id}`)
    }

    async function newComponent() {
        router.push(`http://localhost:3000/addcomponent`)
    }


    const pageCount = Math.ceil(newComp .length / itemsPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected)
      };

    return (
        <Layout>
            <AppBar />
            <>
        <div class="overflow-x-auto">
          <div class="w-full md:w-auto min-h-screen bg-gray-900 flex items-center justify-center">
            <div class="w-full lg:w-5/6 md:w-2/3 text-3xl">
                    <h2 className="my-10 text-left text-3xl font-bold tracking-tight text-white">
                        Component Library
                    </h2>
                    <a onClick={() => newComponent()}
                        href="/addcomponent"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add New Record
                    </a>
                    <div className="mt-8 relative md:w-1/3">
                        <input onChange={(e) => setSearchedVal(e.target.value)} type="search"
                            className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                            placeholder="Search..." />
                        <div class="absolute top-0 left-0 inline-flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                    </div>

                    <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto text-sm">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-left">Project</th>
                                    <th class="py-3 px-6 text-left">Location</th>
                                    <th class="py-3 px-6 text-center">Part Name</th>
                                    <th class="py-3 px-6 text-center">Part #</th>
                                    <th class="py-3 px-6 text-center">Description</th>
                                    <th class="py-3 px-6 text-center">Board</th>
                                    <th class="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                           
                            
                                {displayComponents}
                               
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />

            
                           

                        </table>
                    </div>
                   </div>
                </div>
            </div>
            </>
        </Layout>

    )
}

export async function getServerSideProps() {
    // will always run on the server
    // newest first
    const comp = await prisma.components.findMany({

        orderBy: {
            createdAt: "desc",
        },
    })

    return {
        props: {
            comp: JSON.parse(JSON.stringify(comp)),
        },
    }
}
