import * as dotenv from 'dotenv';
import { AppDataSource } from "./database/data-source";
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Data Source has been initialized!");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error during Data Source initialization", error);
        process.exit(1);
    }
}

main();