import { prisma } from "../../server/prisma"



export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      const {name, serialNumber, description,comments, failStatus, project} = req.body
      const post = await prisma.post.create({
        data: {
          name,
          serialNumber,
          description,
          comments,
          failStatus,
          project
        },
      })
      res.status(201).json(post)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}