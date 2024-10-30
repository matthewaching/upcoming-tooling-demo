// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    catUrl?: string;
    errorMessage?: string;
};

const catImageMap = {
    b: 'https://i.redd.it/trvw9nduhx261.jpg',
    c: 'https://preview.redd.it/y6llo83po8d01.jpg?auto=webp&s=a599dd20e053b793a8268276ea9cc5555d2a0ff0',
    f: 'https://react19-chat.s3.us-east-1.amazonaws.com/caroline.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJHMEUCIQC75KGlxD%2Fu%2FBAcaK5xwXtME7Qn7RNiLtZ2HTR7GHVg8gIgcle5LsqLEarODWTB0loSW4L%2FvSmjV6S%2BhLnsamUlqT4qywMIeRABGgw4MDQ5MDA4NDE4MTQiDLWkI%2FxWwk3Kub7mKyqoA4Ozlgdc5gjSuJxqB%2Bf46YY9ZMGBExqlBBUxuXdTs%2FmlZtMlAUreu9Nz6qdFt8qoEInV%2FyQA1lFBZjaNgKejH%2BePRHRfFp3%2FxFAVcsDkjZFZjYr0hha9G%2Bll132KYX%2FzX%2BbXzPkjjAa0yScE8OPviT2R3DU4DexaGKpF2v7riQZ1JKBgxmQCrn3qS1O%2ByMaIqWShPaOHeu31bbiZe4ZaiQbPHEU8%2Fo%2B%2Futzj%2Fnfj6JTxgm1le7yRY9RaOujHzLbr5f9IaKPnGdFCRVCBa5nzO1ukIKouBrLJoig0N9tEuom6AcR56bspmRtR7LErubffQ2O7XHVqaeQ9ivkam2dnTl3mbsyfyAp0FAAa3C4iDJr4aw43KvkWMo42zFoyS3ym5fqYeSkhvU%2FUJYU50AJcxCtdSRCazDN0VCgcO7u9MlTW2D0PGiC%2FmV9pXhmaLPgsyf0bDYy2msB6Qak1dY1bc%2B0bwyIfmrLQj%2B2MhNIQOxLVvYqkC5FS%2F1YPwk35OnfECxCMPiNY4DQryVcK4b1gXHo0Tcq7tK6qGsJtKNQVq2ycozPjzniMz6kwxriJuQY65AJ0dmL5E0tN%2F4WfDxz1IkH%2FjRy%2BFVg%2FLW5fUF45a5SS%2BJUcSoBmqlIm120MGkCA3rwEqEWabn0XlEVttxNIyC1V4QDgqaXmOBcRW7Fi7NORL6NTXOjTVajSjUDKgF%2B1EaW6f0%2F%2FJI800gPWN7pPhvVv5zNAXRJS4V0gI%2FoN40FDj2y%2FABIOFeJTNOOwyWaX%2BH5ytStw%2FGPGzq6uxDEMogMl9CO43U3xvBxmReD5sReLrM0%2F70UmLB10bbJMr1sE4FY2EmtpHtT0rBrElrCxiFYg799z8pkrBLGOEp4SiqkycpWth9U%2BdKkAz1iPiOK9m2ERKRkTYte5cYG8r1mzRe9G5tCmCLFm%2F4iT0CIAU7c8jXZ7Qnc8IpOWo%2FR3Dgi52Jn%2BvirAJNEGceH%2Fe83G2AAW0YApNivVpUQOOAA%2FVb8K9E1%2BoOOjCzP4bb52I4I6awld8wb3kNKaLCdrz8gwupKD7rLGKA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3WZ6UFFLFNOI6Z3Q%2F20241030%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241030T162131Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=add2931beb78222d48171d37834734834d03c93ecddeec0ad7b16b0ac1772d97',
    h: 'https://i.etsystatic.com/25991493/r/il/9b95e0/2712297494/il_794xN.2712297494_8cyj.jpg',
    l: 'https://i.redd.it/athc0a173a991.jpg',
    m: 'https://preview.redd.it/pnc4kps497531.jpg?width=1080&crop=smart&auto=webp&s=95edd1a89499ecaec7c2a685576d30c091f12c92',
    p: 'https://external-preview.redd.it/qNzOCZjyF0fgk5k7V4D5gm2cCl3pgVziVxWhJx8kYUk.png?width=640&crop=smart&format=pjpg&auto=webp&s=d0d013317e48a7d831af78729d43400671d50382',
    r: 'https://external-preview.redd.it/MjM3hXb4jiMJYn4YuEa0UR1gL-phE1qiu0Ht5lkdPJE.png?format=pjpg&auto=webp&s=215aca58aa1a5e9213c6d757901d83b2e94188a4',
    s: 'https://preview.redd.it/lounging-fat-cat-v0-bwwrhponf9ra1.jpg?auto=webp&s=cabf16f4c022398a96bb84da18d0ccac1dbea7f3',
    t: 'https://preview.redd.it/gatquryg44i11.jpg?width=1080&crop=smart&auto=webp&s=d603417e3bb9de3c2ccca21560ac680c6c3ae19a',
    gy: 'https://react19-chat.s3.us-east-1.amazonaws.com/gyat.jpg?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJHMEUCIQC75KGlxD%2Fu%2FBAcaK5xwXtME7Qn7RNiLtZ2HTR7GHVg8gIgcle5LsqLEarODWTB0loSW4L%2FvSmjV6S%2BhLnsamUlqT4qywMIeRABGgw4MDQ5MDA4NDE4MTQiDLWkI%2FxWwk3Kub7mKyqoA4Ozlgdc5gjSuJxqB%2Bf46YY9ZMGBExqlBBUxuXdTs%2FmlZtMlAUreu9Nz6qdFt8qoEInV%2FyQA1lFBZjaNgKejH%2BePRHRfFp3%2FxFAVcsDkjZFZjYr0hha9G%2Bll132KYX%2FzX%2BbXzPkjjAa0yScE8OPviT2R3DU4DexaGKpF2v7riQZ1JKBgxmQCrn3qS1O%2ByMaIqWShPaOHeu31bbiZe4ZaiQbPHEU8%2Fo%2B%2Futzj%2Fnfj6JTxgm1le7yRY9RaOujHzLbr5f9IaKPnGdFCRVCBa5nzO1ukIKouBrLJoig0N9tEuom6AcR56bspmRtR7LErubffQ2O7XHVqaeQ9ivkam2dnTl3mbsyfyAp0FAAa3C4iDJr4aw43KvkWMo42zFoyS3ym5fqYeSkhvU%2FUJYU50AJcxCtdSRCazDN0VCgcO7u9MlTW2D0PGiC%2FmV9pXhmaLPgsyf0bDYy2msB6Qak1dY1bc%2B0bwyIfmrLQj%2B2MhNIQOxLVvYqkC5FS%2F1YPwk35OnfECxCMPiNY4DQryVcK4b1gXHo0Tcq7tK6qGsJtKNQVq2ycozPjzniMz6kwxriJuQY65AJ0dmL5E0tN%2F4WfDxz1IkH%2FjRy%2BFVg%2FLW5fUF45a5SS%2BJUcSoBmqlIm120MGkCA3rwEqEWabn0XlEVttxNIyC1V4QDgqaXmOBcRW7Fi7NORL6NTXOjTVajSjUDKgF%2B1EaW6f0%2F%2FJI800gPWN7pPhvVv5zNAXRJS4V0gI%2FoN40FDj2y%2FABIOFeJTNOOwyWaX%2BH5ytStw%2FGPGzq6uxDEMogMl9CO43U3xvBxmReD5sReLrM0%2F70UmLB10bbJMr1sE4FY2EmtpHtT0rBrElrCxiFYg799z8pkrBLGOEp4SiqkycpWth9U%2BdKkAz1iPiOK9m2ERKRkTYte5cYG8r1mzRe9G5tCmCLFm%2F4iT0CIAU7c8jXZ7Qnc8IpOWo%2FR3Dgi52Jn%2BvirAJNEGceH%2Fe83G2AAW0YApNivVpUQOOAA%2FVb8K9E1%2BoOOjCzP4bb52I4I6awld8wb3kNKaLCdrz8gwupKD7rLGKA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3WZ6UFFLFNOI6Z3Q%2F20241030%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241030T162101Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=7463ab0a08a9ad4def6fb87917e9a900237b36752d0444a03d718d90d01aea7b',
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
