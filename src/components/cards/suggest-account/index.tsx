import Image from 'next/image';

export default function SuggesAccountCard({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full h-[32px] w-[32px] overflow-hidden">
        <Image src={imageUrl} alt="profile image" width={32} height={32} />
      </div>
      <div className="text-white text-[14px] leading-[18px]">
        <h1 className="font-semibold">codewithlixu</h1>
        <h2 className="text-gray-400 text-[12px]">Diikuti oleh none</h2>
      </div>
      <button type="button" className="text-[12px] text-sky-500 ml-auto">
        Ikuti
      </button>
    </div>
  );
}
