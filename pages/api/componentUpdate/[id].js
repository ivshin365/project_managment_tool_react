import { prisma } from "../../../server/prisma"



export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'POST':
      const {name, serialNumber, description,number, board, project, id} = req.body
      const noteId = req.query.id
      const component = await prisma.components.updateMany({
        where: {id: Number(noteId)},
        data: {
          name,
          serialNumber,
          description,
          number,
          board,
          project
        },
      })
      res.status(201).json(component)
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}