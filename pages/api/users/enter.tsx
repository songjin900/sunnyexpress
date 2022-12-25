import client from "@libs/client/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { phone, email } = req.body;
    const payload = phone ? { phone: +phone } : { email };

    const token = await client.token.create({
        data: {
            payload: "12345",
            user: {
                connectOrCreate: {
                    where: {
                        ...payload
                    },
                    create: {
                        name: "Anonymous",
                        ...payload
                    },
                }
            }
        }
    })

    return res.status(200).end()
}

export default withHandler("POST", handler)