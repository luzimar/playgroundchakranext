// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface IUser {
    name: string;
    age: number;
}

export default (req: NextApiRequest, res: NextApiResponse<IUser>) => {
    res.status(200).json({
        name: "Luzimar Oliveira",
        age: 24
    });
};
