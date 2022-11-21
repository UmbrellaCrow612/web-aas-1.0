import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    let customers = await prisma.customer.findMany()
    return res.status(200).json(customers)
  } else if (req.method == 'POST') {
    const { firstName, lastName, account, address, annualSalary, age } =
      req.body

    let result = await prisma.customer.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        annualSalary: annualSalary,
        age: age,
      },
    })
    res.json(result)
  }
}

/*

Get method = take id number return the customer details 

Post - take body - destructor - add to db 

Patch - get body - update the field in db


*/
