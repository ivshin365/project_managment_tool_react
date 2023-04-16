
import { prisma } from "../../../server/prisma"




export default async function handler(req, res){
	const noteId = req.query.id

	if(req.method === 'DELETE') {
		const note = await prisma.components.delete({
			where: {id: Number(noteId)}
		})
		res.json(note)
	} else {
		console.log("Note could not be created");
	}
}