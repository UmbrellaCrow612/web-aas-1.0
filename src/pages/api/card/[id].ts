import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let customerId = req.query.id

  if (req.method == 'POST') {
    let newCard = await prisma.customer.update({
      where: {
        id: String(customerId),
      },
      data: {
        cards: {
          create: {
            cardNumber: Number(Math.random().toString().slice(2, 11)),
          },
        },
      },
    })
    res.status(200).json(newCard)
  }
}
