import mongoose from "mongoose";
import { ResourceDoc } from "./resource";

interface CollectionAttrs {
  name: string;
  userId: string;
  description?: string;
  resources?: ResourceDoc;
}

interface CollectionDoc extends mongoose.Document {
  name: string;
  userId: string;
  description?: string;
}

interface CollectionModel extends mongoose.Model<CollectionDoc> {
  build: (attrs: CollectionAttrs) => CollectionDoc;
}

const collectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    resources: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

collectionSchema.statics.build = (attrs: CollectionAttrs) =>
  new Collection(attrs);

const Collection = mongoose.model<CollectionDoc, CollectionModel>(
  "Collection",
  collectionSchema
);

export { Collection };
