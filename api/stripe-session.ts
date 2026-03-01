import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { session_id } = req.query;

  const sessionId = Array.isArray(session_id) ? session_id[0] : session_id;

  if (!sessionId) {
    return res.status(400).json({ error: "Missing session_id" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['total_details.breakdown.discounts']
    });

    return res.status(200).json({
      amount: session.amount_total,
      currency: session.currency,
      discount: session.total_details?.amount_discount || 0,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Stripe fetch failed" });
  }
}