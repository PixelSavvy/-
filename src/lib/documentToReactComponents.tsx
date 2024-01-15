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
      return <h2 className="">{children}</h2>;
    },
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
      return <p className="">{children}</p>;
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const src = node.data.target.fields.file.url;
      const alt = node.data.target.fields.title;
      return (
        <AspectRatio ratio={16 / 9}>
          <img src={src} alt={alt} loading="lazy" />
        </AspectRatio>
      );
    },
  },
};

export const documentToReact = (document: Document) => {
  const blogBody: React.ReactNode = documentToReactComponents(
    document,
    OPTIONS
  );

  return { blogBody };
};
