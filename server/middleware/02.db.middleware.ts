import { PrismaClient, } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var db: PrismaClient;
}

export default defineEventHandler(() => {
  if(!global.db) global.db = new PrismaClient();
});