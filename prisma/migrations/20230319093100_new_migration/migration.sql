-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "serialNumber" TEXT,
    "description" TEXT,
    "comments" TEXT,
    "failStatus" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
