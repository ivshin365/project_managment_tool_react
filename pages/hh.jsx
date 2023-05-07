import { prisma } from "../server/prisma"
import formatTimeAgo from "../utils/formatTimeAgo"
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import AppBar from "../components/AppBar"
import Link from "next/link"





export default function Hh({ posts }){

  const router = useRouter()



  async function deletePost(id) {
    try {
     fetch(`http://localhost:3000/api/posts/${id}`, {
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

  async function updatePost(id) {
    router.push(`http://localhost:3000/p/${id}`)
  }

  async function newPost() {
    router.push(`https://project-managment-tool.vercel.app/addpost`)
  }

  return (
   <Layout>
    <AppBar/>
<div className='flex items-center justify-center min-h-fit  bg-gray-900'>
	<div className='col-span-12'>
    <h2 className="my-10 text-left text-3xl font-bold tracking-tight text-white">
              HH2 
            </h2>
  <Link          onClick={() => newPost()}
              href="/addpost"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Post New
            </Link>
		<div className='overflow-auto lg:overflow-visible'>
			<table className='table text-gray-400 border-separate space-y-6 text-sm'>
				<thead className='bg-gray-800 text-gray-500'>
					<tr>
						<th className='p-3'>Name</th>
						<th className='p-3 text-left'>Created</th>
						<th className='p-3 text-left'>Serial #</th>
						<th className='p-3 text-left'>Description</th>
						<th className='p-3 text-left'>Commets</th>
            <th className='p-3 text-left'>Status</th>
            <th className='p-3 text-left'>Action</th>
					</tr>
				</thead>
				<tbody>
        {posts.map(post => (
					<tr key={post.id} className='bg-gray-800'>
						<td  className="p-3">
							<div className="flex align-items-center">
								{post.name}
							</div>
						</td>
            <td  className="p-3">
							
              {formatTimeAgo(post.createdAt)}
							
						</td>
            <td  className="p-3">
							
								{post.serialNumber}
							
						</td>
            <td  className="p-3">
							
								{post.description}
							
						</td>
            <td  className="p-3">
							
								{post.comments}
							
						</td>
            <td  className="p-3">
						
              <span className={(post.failStatus === 'Completed' && "bg-green-400 text-gray-50 rounded-md px-2")
                || (post.failStatus === 'Not Completed' && "bg-red-400 text-gray-50 rounded-md px-2")
                ||  "bg-yellow-400 text-gray-50  rounded-md px-2"
                }>{post.failStatus}</span>
						
						</td>
            <td  className="p-3">
							<a onClick={() => updatePost(post.id)} href="#" className='text-gray-400 hover:text-gray-100 mx-2'>
								<i className='material-icons-outlined text-base'>edit</i>
							</a>
							<a  onClick={() => deletePost(post.id)} href="#" className='text-gray-400 hover:text-gray-100 ml-2'>
								<i className='material-icons-round text-base'>delete_outline</i>
							</a>
						</td>
					</tr>
          ))}
				</tbody>
			</table>
		</div>
	</div>
</div>

</Layout>
    
  )
}

export async function getServerSideProps() {
  // will always run on the server
  // newest first
  const posts = await prisma.post.findMany({
    where: {
      project: 'HH',
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  }
}