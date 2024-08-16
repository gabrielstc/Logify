import { getAppSettings } from "../modules/appSettings"

export async function logify(payload: object, ctx: Context) {
    const settings = await getAppSettings(ctx)
    console.log(settings)

    const response = ctx.clients.slack.sendMessageToSlack(payload, settings.slackPath)


    return response
}