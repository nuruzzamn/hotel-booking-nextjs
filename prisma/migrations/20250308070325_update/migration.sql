/*
  Warnings:

  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hotel";

-- CreateTable
CREATE TABLE "Hotels" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "costPerNight" DOUBLE PRECISION NOT NULL,
    "availableRooms" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hotels_pkey" PRIMARY KEY ("id")
);
