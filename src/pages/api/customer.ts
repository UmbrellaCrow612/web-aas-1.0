import { RequestHandler } from 'next/dist/server/next'
import { NextResponse } from 'next/server'

// Optional fields in body: content
export default async function handle(req: RequestHandler, res: NextResponse) {
  // Here handle fetch
  // handle a patch
  //   res.status(200).json(result)
}
