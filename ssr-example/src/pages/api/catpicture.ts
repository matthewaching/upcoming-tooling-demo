// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    catUrl?: string;
    errorMessage?: string;
};

const catImageMap = {
    b: 'https://i.redd.it/trvw9nduhx261.jpg',
    c: '',
    f: '',
    h: '',
    l: '',
    m: '',
    p: '',
    r: '',
    s: '',
    t: '',
    gy: '',
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        const catLetter = JSON.parse(req.body).letterInput;

        if (catLetter) {
            const imageUrl = catImageMap[catLetter as keyof typeof catImageMap];

            if (imageUrl) {
                res.status(200).json({ catUrl: imageUrl });
            } else {
                res.status(404).json({ errorMessage: 'Invalid letter.' });
            }
        } else {
            res.status(400).json({ errorMessage: 'No letter detected.' });
        }
    } else {
        res.status(400).json({ errorMessage: 'Cat image request must be sent as a POST.' });
    }
}
