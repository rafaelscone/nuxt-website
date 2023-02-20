interface Msg{
    message?: string
}

export default defineEventHandler(async(event): Promise<Msg> => {
    event.node.res.statusCode=200
    return {
        message: "ok"
    }
})