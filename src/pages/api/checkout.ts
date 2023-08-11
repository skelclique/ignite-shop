import { stripe } from '@/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { priceId } = request.body

  if (request.method !== 'POST') {
    return response.status(405).send({ error: 'Method not allowed.' })
  }

  if (!priceId) {
    return response.status(400).send({ error: 'Price not found.' })
  }

  const sucessUrl = `${process.env.NEXT_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [...priceId],
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
