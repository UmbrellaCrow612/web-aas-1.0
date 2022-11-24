import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let customerId = req.query.id

  const { newFirstName, newLastName, newSalary, newAge, newAddress } = req.body

  if (req.method == 'GET') {
    let cus = await prisma.customer.findFirst({
      where: { id: String(customerId) },
      include: {
        cards: true,
      },
    })
    res.json(cus)
  } else if (req.method == 'PUT') {
    let customer = await prisma.customer.update({
      where: { id: String(customerId) },
      data: {
        firstName: newFirstName,
        lastName: newLastName,
        annualSalary: newSalary,
        address: newAddress,
        age: newAge,
      },
    })
    res.status(200).json(customer)
  }
  // have a get
  // have a patch
}
