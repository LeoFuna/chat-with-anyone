import ChatList from "@/components/ChatList";
import ChatPermissionError from "@/components/ChatPermissionError";

type ChatsPageProps = {
  params: {};
  searchParams: {
    error: string;
  }
}

export default function ChatsPage({ searchParams: { error } }: ChatsPageProps) {
  return (
    <div>
      { error && (
        <div className="m-2">
          <ChatPermissionError />
        </div>
      ) }
      <ChatList />
    </div>
  )
}