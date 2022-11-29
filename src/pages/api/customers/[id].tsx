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
        transactions: true,
      },
    })
    res.json(cus)
  } else if (req.method == 'PUT') {
    if (newSalary >= 30000) {
      let customer = await prisma.customer.update({
        where: { id: String(customerId) },
        data: {
          firstName: newFirstName,
          lastName: newLastName,
          annualSalary: newSalary,
          address: newAddress,
          isSpecialCustomer: true,
          age: newAge,
        },
      })
      res.status(200).json(customer)
    } else {
      let customer = await prisma.customer.update({
        where: { id: String(customerId) },
        data: {
          firstName: newFirstName,
          lastName: newLastName,
          annualSalary: newSalary,
          address: newAddress,
          isSpecialCustomer: false,
          age: newAge,
        },
      })
      res.status(200).json(customer)
    }
  }
}
