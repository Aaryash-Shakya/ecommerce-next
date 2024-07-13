/*
  Warnings:

  - A unique constraint covering the columns `[transactionUuid]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN "transactionUuid" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Order_transactionUuid_key" ON "Order"("transactionUuid");
