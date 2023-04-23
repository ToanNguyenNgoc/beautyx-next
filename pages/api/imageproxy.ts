
export default async function handler(
    req: any,
    res: any
) {
    const url = decodeURIComponent(req.query.url);
    const result: any = await fetch(url);
    const body = await result.body;
    body.pipe(res);
}