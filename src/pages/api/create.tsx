// POST /api/post
// Required fields in body: title
import prisma from '../../lib/prisma'

import { NextApiRequest, NextApiResponse } from 'next'

// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, address, annualSalary, age, Account } = req.body
  // Manually add the accounts and id

  const result = await prisma.customers.create({
    data: {
      FirstName: firstName,
      LastName: lastName,
      Address: address,
      AnnualSalary: annualSalary,
      Age: age,
      Account: {
        // create: {
         
        // },
      },
    },
  })

  res.json(result)
  //   res.json(result)
}
