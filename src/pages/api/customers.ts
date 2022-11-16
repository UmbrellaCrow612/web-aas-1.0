import prisma from '../../lib/prisma'

// Optional fields in body: content
export default async function handle(req:any, res:any) {
  const result = await prisma.customers.findMany()
   res.status(200).json(result)
}
