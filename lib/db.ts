import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

const prisma: PrismaClient = (global as any).prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  (global as any).prismaGlobal = prisma;
}

export default prisma;

