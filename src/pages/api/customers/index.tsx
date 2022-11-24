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
    const { firstName, lastName, account, address, annualSalary, age } =
      req.body
    if (account == 'Simple deposit') {
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
          annualSalary: annualSalary,
          age: age,
          cards: {
            create: {
              cardNumber: 123456789,
            },
          },
        },
      })
      res.json(result)
    } else if (account == 'Long term deposit') {
      let result = await prisma.customer.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          address: address,
          longtermDeposits: {
            create: {
              balance: 0,
            },
          },
          annualSalary: annualSalary,
          age: age,
          cards: {
            create: {
              cardNumber: 123456789,
            },
          },
        },
      })
      res.json(result)
    } else if (account == 'Withdraw deposits') {
      let result = await prisma.customer.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          address: address,
          withdrawDeposits: {
            create: {
              balance: 0,
            },
          },
          annualSalary: annualSalary,
          age: age,
          cards: {
            create: {
              cardNumber: 123456789,
            },
          },
        },
      })
      res.json(result)
    }

    // do logic here for wihc accoutn type then do the inter result again but with the specifc account created
  }
}

/*

Get method = take id number return the customer details 

Post - take body - destructor - add to db 

Patch - get body - update the field in db


*/
