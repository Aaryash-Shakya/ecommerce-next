/*
  Warnings:

  - Added the required column `refId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionUuid` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "method" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "transactionUuid" TEXT NOT NULL,
    "totalAmount" REAL NOT NULL,
    "refId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Payment" ("createdAt", "id", "method", "status", "updatedAt") SELECT "createdAt", "id", "method", "status", "updatedAt" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
