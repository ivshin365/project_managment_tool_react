import { prisma } from "../../server/prisma"



export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      const {name, serialNumber, description,number, board, project} = req.body
      const components = await prisma.components.create({
        data: {
          name,
          serialNumber,
          description,
          number,
          board,
          project
        },
      })
      res.status(201).json(components)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}