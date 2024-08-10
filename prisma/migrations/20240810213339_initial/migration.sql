-- CreateTable
CREATE TABLE "messages_users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "messages_users_pkey" PRIMARY KEY ("id")
);
