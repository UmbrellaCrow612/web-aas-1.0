import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let customerId = req.query.id
  const { overDraftPercentage } = req.body

  if (req.method == 'PUT') {
    let newOverdraft = await prisma.customer.update({
      where: {
        id: String(customerId),
      },
      data: {
        overdraftPercentage: Number(overDraftPercentage),
      },
    })
    res.status(200).json(newOverdraft)
  }
}
