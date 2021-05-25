import mongoose from "mongoose";

interface ResourceAttrs {
  name: string;
  url: string;
}

export interface ResourceDoc extends mongoose.Document {
  name: string;
  url: string;
}

interface ResourceModel extends mongoose.Model<ResourceDoc> {
  build: (attrs: ResourceAttrs) => ResourceDoc;
}

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
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

resourceSchema.statics.build = (attrs: ResourceAttrs) => new Resource(attrs);

const Resource = mongoose.model<ResourceDoc, ResourceModel>(
  "Resource",
  resourceSchema
);

export { Resource };
