import type { NextApiRequest, NextApiResponse } from "next";
import { clerkClient } from "@clerk/nextjs/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;

    // Verificar o evento do webhook
    if (payload.type === "user.created") {
      const userId = payload.data.id;

      // Atualizar os metadata do usuário
      await (
        await clerkClient()
      ).users.updateUser(userId, {
        publicMetadata: {
          stripeCustomerId: null, // Adicione isso quando integrar o Stripe
          subscriptionStatus: "free", // Defina o plano inicial como "free"
        },
      });

      return res
        .status(200)
        .json({ message: "User metadata updated successfully" });
    }

    res.status(400).json({ error: "Unhandled event type" });
  } catch (error) {
    console.error("Erro ao processar webhook Clerk:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
