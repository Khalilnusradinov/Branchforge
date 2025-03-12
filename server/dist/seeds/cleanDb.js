import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        if (!models[modelName] || !models[modelName].db) {
            throw new Error(`Model ${modelName} does not exist or is not connected to the database.`);
        }
        // Ensure modelExists is always an array
        let modelExists = (await models[modelName].db.db?.listCollections({
            name: collectionName
        }).toArray()) || [];
        if (modelExists.length > 0) {
            await db.dropCollection(collectionName);
            console.log(`Collection ${collectionName} dropped successfully.`);
        }
        else {
            console.log(`Collection ${collectionName} does not exist. Skipping drop.`);
        }
    }
    catch (err) {
        console.error(`Error in cleanDb: ${err.message}`);
        throw err;
    }
};
