import Image from 'next/image';

export function Loading() {
  return (
    <div className='flex absolute w-[100vh] h-[100vh] place-content-center place-items-center'>
      <Image 
        src="https://liveblocks.io/loading.svg" 
        alt="Loading"
        width={64}
        height={64}
        className='opacity-20'
      ></Image>
    </div>
  );
}
