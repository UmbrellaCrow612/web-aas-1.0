// POST /api/post
// Required fields in body: title
import prisma from '../../lib/prisma'

import { NextApiRequest, NextApiResponse } from 'next'

// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { FirstName, LastName, Address, AnnualSalary, Age, Account } = req.body
  // Manually add the accounts and id

  const result = await prisma.customers.create({
    data: {
      FirstName: FirstName,
      LastName: LastName,
      Address: Address,
      AnnualSalary: AnnualSalary,
      Age: Age,
      Account: Account,
    },
  })

  res.json(result)
  //   res.json(result)
}
