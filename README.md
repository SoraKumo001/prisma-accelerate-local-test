# prisma-accelerate-local-test

## usage

- commands

```sh

# Initialization of DB and prisma
yarn dev:docker
yarn prisma:migrate
yarn prisma:generate

# Launch accelerate locally
yarn dev:accelerate

# Test program execution
yarn dev

```

- result

```json
[
  {
    id: '69b2e9bb-072e-495e-9705-ae0489d8bc06',
    email: 'test1@example.com',
    name: 'test1',
    roles: [ 'USER' ],
    createdAt: 2023-12-11T00:18:00.693Z,
    updatedAt: 2023-12-11T00:18:00.693Z
  },
  {
    id: '7ba94683-5cd2-4718-8daf-ffe1b71641aa',
    email: 'test2@example.com',
    name: 'test2',
    roles: [ 'USER' ],
    createdAt: 2023-12-11T00:18:00.693Z,
    updatedAt: 2023-12-11T00:18:00.693Z
  },
  {
    id: 'df3df8d8-aa4a-491c-912e-750fab323c55',
    email: 'test3@example.com',
    name: 'test3',
    roles: [ 'USER' ],
    createdAt: 2023-12-11T00:18:00.693Z,
    updatedAt: 2023-12-11T00:18:00.693Z
  }
]
[
  {
    id: '8c6a0b1a-7d9e-46a6-86dc-fbb753c39821',
    published: false,
    title: 'test1',
    content: 'test1@example.com',
    authorId: null,
    createdAt: 2023-12-11T00:18:00.718Z,
    updatedAt: 2023-12-11T00:18:00.718Z,
    publishedAt: 2023-12-11T00:18:00.718Z
  },
  {
    id: '8ecf857a-4377-4397-a6fe-e89f6561f0e5',
    published: false,
    title: 'test2',
    content: 'test2@example.com',
    authorId: null,
    createdAt: 2023-12-11T00:18:00.718Z,
    updatedAt: 2023-12-11T00:18:00.718Z,
    publishedAt: 2023-12-11T00:18:00.718Z
  },
  {
    id: '7593cb25-ae1b-40bf-bdfb-ecde8615a556',
    published: false,
    title: 'test3',
    content: 'test3@example.com',
    authorId: null,
    createdAt: 2023-12-11T00:18:00.718Z,
    updatedAt: 2023-12-11T00:18:00.718Z,
    publishedAt: 2023-12-11T00:18:00.718Z
  }
]
```

## Required Configuration

```env
DIRECT_DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres"
DATABASE_URL="prisma://localhost:4000/?api_key=abc"
NODE_TLS_REJECT_UNAUTHORIZED=0
NODE_NO_WARNINGS=1
```

## Start self host

```sh
npx prisma-accelerate-local postgresql://postgres:password@localhost:5432/postgres
```
