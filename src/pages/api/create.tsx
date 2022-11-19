// POST /api/post
// Required fields in body: title
import prisma from '../../lib/prisma'

import { NextApiRequest, NextApiResponse } from 'next'

// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { firstName, lastName, address, annualSalary, age } = req.body
  // Manually add the accounts and id

  /*
  
  
  IDEA - Pass the account option as a string from the front end 
  and then check it here and add the stuff
  
  
  
  */

  // const result = await prisma.customers.create({
  //   data: {
  //     FirstName: firstName,
  //     LastName: lastName,
   
  //   },
  // })

  // res.json(result)
  //   res.json(result)
}
