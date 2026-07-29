-- AlterTable
ALTER TABLE "bookingPlans" ALTER COLUMN "note" DROP NOT NULL;

-- AlterTable
ALTER TABLE "bookings" ALTER COLUMN "note" DROP NOT NULL;
