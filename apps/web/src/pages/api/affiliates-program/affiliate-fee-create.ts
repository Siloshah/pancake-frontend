import type { NextApiRequest, NextApiResponse } from 'next'
import { getCookie } from 'cookies-next'
import { AFFILIATE_SID } from 'pages/api/affiliates-program/affiliate-login'

const affiliateLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.AFFILIATE_PROGRAM_API_URL && req.method === 'POST') {
    return res.status(400).json({ message: 'API URL Empty' })
  }

  const cookie = getCookie(AFFILIATE_SID, { req, res })
  const requestUrl = `${process.env.AFFILIATE_PROGRAM_API_URL}/fee/create`
  const response = await fetch(requestUrl, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookie?.toString() ?? '',
    },
    method: 'POST',
    body: req.body,
  })

  if (!response.ok) {
    return res.status(400).json({ message: 'An error occurred please try again' })
  }

  const result = await response.json()

  return res.status(200).json(result)
}

export default affiliateLogin
