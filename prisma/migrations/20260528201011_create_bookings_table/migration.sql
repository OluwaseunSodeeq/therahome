/*
  Warnings:

  - You are about to drop the `Bookings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Bookings";

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);
