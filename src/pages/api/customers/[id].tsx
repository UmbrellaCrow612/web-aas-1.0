import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let customerId = req.query.id

  if (req.method == 'GET') {
    let cus = await prisma.customer.findFirst({
      where: { id: String(customerId) },
    })
    res.json(cus)
  }
  // have a get
  // have a patch
}
