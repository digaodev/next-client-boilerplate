import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ message: 'hello from api' })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
