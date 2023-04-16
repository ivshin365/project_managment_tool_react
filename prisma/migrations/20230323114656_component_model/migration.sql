-- CreateTable
CREATE TABLE "Components" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "serialNumber" TEXT,
    "description" TEXT,
    "number" INTEGER NOT NULL,
    "board" TEXT,
    "project" TEXT,

    CONSTRAINT "Components_pkey" PRIMARY KEY ("id")
);
