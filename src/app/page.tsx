import { Room } from "@/app/Room";
import styles from "@/components/Editor.module.css";
import CollaborativeEditor from "@/components/Editor";

// Learn how to structure your collaborative Next.js app
// https://liveblocks.io/docs/guides/how-to-use-liveblocks-with-nextjs-app-directory

export default function Page() {
  return (
    <main>
      <div className='container px-5 py-5 flex flex-col'>
        <div className='min-h-screen w-full bg-white rounded-md'>
          <Room>
            <CollaborativeEditor />
          </Room>
        </div>
      </div>
    </main>
  );
}
