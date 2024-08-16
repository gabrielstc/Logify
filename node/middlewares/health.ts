import { logify } from "../utils/logify"

export async function health(ctx: Context, next: () => Promise<any>) {
    // const {
    //   clients: { oms: omsClient },
    // } = ctx
    const payload = { text: "Hello, World!" }
    logify(payload, ctx)

    ctx.status = 200
    ctx.set('Cache-Control', 'No-Cache')

    await next()
}