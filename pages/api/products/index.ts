import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import Id from "./[id]";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const products = await client.product.findMany({
      include: {
        _count: {
          select: {
            Fav: true,
          },
        },
        Categories: {
          select: {
            name: true,
            productId: true,
          },
        },
      },
    });

    res.json({
      ok: true,
      products,
    });
  }
  if (req.method === "POST") {
    const {
      body: { name, price, description, category },
      session: { user },
    } = req;

    const product = await client.product.create({
      data: {
        name,
        price: +price,
        description,
        image: "temp",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    const productCategory = category.map(async (ctg: string) => {
      await client.category.create({
        data: {
          name: ctg,
          product: {
            connect: {
              id: Number(product.id)
            }
          }
        },
      });
    });

    res.json({
      ok: true,
      product
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
