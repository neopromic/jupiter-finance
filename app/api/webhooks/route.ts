import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

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

      return NextResponse.json({
        message: "User metadata updated successfully",
      });
    }

    return NextResponse.json(
      { error: "Unhandled event type" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Erro ao processar webhook Clerk:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
