interface User{
    id: number | string;
    name: string;
    email: string
}

interface ResponseUser{
    message?: string
}

const Users =[
    {id:1,name:"Rafael"},
    {id:3,name:"Mariana"},
    {id:2,name:"Marcos"},
    {id:3,name:"Juliana"},
]

export default defineEventHandler(async(event): Promise<Object> => {
    // Read body...
    //const body = await readBody<User>(event)
    event.node.res.statusCode=200
    return Users[0]
})