import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class SlackClient extends ExternalClient {
    // Adicionando o modificador de acesso `public` ao construtor
    public constructor(context: IOContext, options?: InstanceOptions) {
        super('https://hooks.slack.com/services', context, options)
    }

    public async sendMessageToSlack(payload: object, path: string): Promise<void> {
        console.log(path)
        return await this.http.post('/T07H8703KSN/B07HX29JSG0/YUiPtf38qzSSQYmKhasjZ8DD', payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
