import express, { Request, Response } from "express";
import { body } from "express-validator";
import {
  BadRequestError,
  requireAuth,
  validateRequest,
} from "@junior-board/common";
import { Collection } from "../models/collection";

const router = express.Router();

router.post(
  "/api/collections",
  requireAuth,
  [body("name").not().isEmpty().withMessage("Collection name is required")],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, description } = req.body;

    const collectionName = name.toLowerCase();

    const collection = await Collection.findOne({ collectionName });

    if (collection && collection.userId === req.currentUser!.id) {
      throw new BadRequestError("Collection name already exist");
    }

    const newCollection = Collection.build({
      name,
      description,
      userId: req.currentUser!.id,
    });

    await newCollection.save();

    res.status(201).send(newCollection);
  }
);

export { router as newCollectionRouter };
