import express from "express";
import connectToDatabase from "../models/db.js";

const router = express.Router();


// GET all gifts
router.get("/", async (req, res) => {
    try {
        const db = await connectToDatabase();

        const collection = db.collection("gifts");

        const gifts = await collection.find({}).toArray();

        res.json(gifts);
    } catch (error) {
        console.error("MongoDB ERROR:", error);
        res.status(500).json({
            error: error.message
        });
    }
});


// GET gift by ID
router.get("/:id", async (req, res) => {
    try {
        const db = await connectToDatabase();

        const collection = db.collection("gifts");

        const id = req.params.id;

        const gift = await collection.findOne({ id: id });

        if (!gift) {
            return res.status(404).json({
                error: "Gift not found"
            });
        }

        res.json(gift);
    } catch (error) {
        console.error("MongoDB ERROR:", error);
        res.status(500).json({
            error: error.message
        });
    }
});


export default router;