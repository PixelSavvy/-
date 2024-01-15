import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Document, Node } from "@contentful/rich-text-types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const OPTIONS = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => {
      return <span className="font-tbc-caps-bld">{text}</span>;
    },
    [MARKS.ITALIC]: (text: React.ReactNode) => {
      return <span className="italic">{text}</span>;
    },
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => {
      return <h3 className="mt-4 text-secondary">{children}</h3>;
    },
    [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => {
      return <h4 className="mt-4 text-secondary">{children}</h4>;
    },
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
      return <p className="">{children}</p>;
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const src = node.data.target.fields.file.url;
      const alt = node.data.target.fields.title;
      return (
        <AspectRatio ratio={16 / 9} className="my-6">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="object-contain object-center w-full h-full"
          />
        </AspectRatio>
      );
    },
  },
};

export const documentToReact = (document: Document | undefined) => {
  if (!document) return;

  const blogBody: React.ReactNode = documentToReactComponents(
    document,
    OPTIONS
  );

  return { blogBody };
};
