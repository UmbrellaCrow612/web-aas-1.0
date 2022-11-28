import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    let customers = await prisma.customer.findMany()
    return res.status(200).json(customers)
  } else if (req.method == 'POST') {
    // Take stuff out
    const { firstName, lastName, address, annualSalary, age } =
      req.body
    let result = await prisma.customer.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        simpleDeposits: {
          create: {
            balance: 0,
          },
        },
        longtermDeposits: {
          create: {
            balance: 0,
          },
        },
        withdrawDeposits: {
          create: {
            balance: 0,
          },
        },
        annualSalary: annualSalary,
        age: age,
        cards: {
          create: {
            cardNumber: Number(Math.random().toString().slice(2,11)),
          },
        },
      },
    })
    res.json(result)
  }
}

/*




*/
