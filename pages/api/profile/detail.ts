import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

/*
This is specific handler for userDetail
Allows you to GET and POST
*/

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const userDetail = await client.userDetail.findUnique({
      where: {
        userId: req.session.user?.id,
      },
      include: {
        user: {
          select: {
            email: true,
            phone: true
          },
        },
      },
    });
    res.json({
      ok: true,
      userDetail,
    });
  }
  if (req.method === "POST") {
    const {
      body: {
        firstName,
        lastName,
        phone,
        phoneExtension,
        email,
        address,
        city,
        province,
        postCode,
      },
      session: { user },
    } = req;

    // const user = req.session;
    // const [name, price, description] = req.body

    const userDetail = await client.userDetail.create({
      data: {
        firstName,
        lastName,
        phone,
        phoneExtension,
        email,
        address,
        city,
        province,
        postCode,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.json({
      ok: true,
      userDetail,
    });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
