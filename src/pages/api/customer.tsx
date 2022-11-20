import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let method = req.method

  switch (method) {
    case (method = 'GET'):
      res.status(200).json([{ name: 'Hello get method' }])
      break
    case (method = 'POST'):
      res.status(200).json([{ name: 'Hello post method' }])
      break

    case (method = 'PATCH'):
      res.status(200).json([{ name: 'Hello patch method' }])
      break

    default:
      res.status(400)
      break
  }
}

/*

Get method = take id number return the customer details 

Post - take body - destructor - add to db 

Patch - get body - update the field in db


*/
