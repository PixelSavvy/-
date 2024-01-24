import { LiveChatLoaderProvider, Messenger } from "react-live-chat-loader";

interface FacebookChatProviderProps {
  children: React.ReactNode;
}

const FacebookChatProvider: React.FC<FacebookChatProviderProps> = ({
  children,
}) => {
  return (
    <LiveChatLoaderProvider
      provider="messenger"
      providerKey={import.meta.env.VITE_FACEBOOK_PAGE_ID}
    >
      <Messenger />
      {children}
    </LiveChatLoaderProvider>
  );
};

export default FacebookChatProvider;
