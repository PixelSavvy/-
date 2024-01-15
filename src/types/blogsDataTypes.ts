import { Document } from "@contentful/rich-text-types";

export interface blogsDataTypes {
  blogTitle: string;
  blogId: string;
  blogCategory: string;
  blogDate: string;
  blogCover: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  blogDescription: string;
  blogBody: Document;
}
