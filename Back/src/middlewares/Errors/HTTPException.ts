import HttpStatusCode from "./httpStatusCode"

export class HTTPException {
    readonly status: string
    constructor(
        readonly statusCode: HttpStatusCode,
        readonly message?: string | String[]
    ) {
        this.status = HttpStatusCode[statusCode]
    }
}