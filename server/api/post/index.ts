import { post, } from "@prisma/client";

interface Post{
    id: number;
    title: string;
    content: string;
    published: boolean;
    author: string;
    authorId: number;
}

export default defineEventHandler(async(event): Promise<string> => {
    return "ok";
});
