const getAppId = (): string => {
    return process.env.VTEX_APP_ID ?? ''
}

export const getAppSettings = async (ctx: Context) => {
    const apps = ctx.clients.apps
    const app: string = getAppId()
    let settings = await apps.getAppSettings(app)
    //https://hooks.slack.com/services/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
    const defaultSettings = {
        slackPath: '',
        discordPath: '',
    }

    if (!settings.slackPath && !settings.discordPath) {
        settings = defaultSettings
    }
    return settings
}
