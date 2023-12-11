import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.deleteMany();
  await prisma.$transaction([
    prisma.user.create({
      data: { name: "test1", email: "test1@example.com" },
    }),
    prisma.user.create({
      data: { name: "test2", email: "test2@example.com" },
    }),
    prisma.user.create({
      data: { name: "test3", email: "test3@example.com" },
    }),
  ]);
  console.log(await prisma.user.findMany());

  await prisma.post.deleteMany();
  await prisma.post.createMany({
    data: [
      { title: "test1", content: "test1@example.com" },
      { title: "test2", content: "test2@example.com" },
      { title: "test3", content: "test3@example.com" },
    ],
  });
  console.log(await prisma.post.findMany());
};

main();
