import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function main() {
    // Test inserting a record
    const testRecord = await prisma.test.create({
        data: { name: "Hello, Supabase!" }
    });
    console.log("Inserted Record:", testRecord);

    // Test retrieving records
    const allRecords = await prisma.test.findMany();
    console.log("All Records:", allRecords);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
