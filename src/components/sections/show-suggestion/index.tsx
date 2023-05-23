import Image from 'next/image';
import * as React from 'react';
import axios from 'axios';
import SuggesAccountCard from '@components/cards/suggest-account';

interface SuggestType {
  picture: {
    medium: string;
  };
  login: {
    username: string;
  };
}

export default function Suggestion() {
  const [suggests, setSuggests] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getStorys = async () => {
    setLoading(true);
    const updated = (await axios.get('https://randomuser.me/api/?results=6')).data.results;
    setSuggests(updated);
    setLoading(false);
  };
  React.useEffect(() => {
    getStorys();
  }, []);
  return (
    <div className="hidden xl:block w-[420px] mt-[30px] px-[50px]">
      <header className="h-[90px] flex items-center py-3 justify-start gap-4">
        <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
          <Image src="/assets/images/profile.png" alt="photo profile" width={100} height={100} />
        </div>
        <div className="text-white text-[14px] leading-[18px]">
          <h1 className="font-semibold">codewithlixu</h1>
          <h2 className="text-gray-400">code_with_lixu</h2>
        </div>
        <button type="button" className="text-[12px] text-sky-500 ml-auto">
          Alihkan
        </button>
      </header>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#A8A8A8] text-[14px] font-semibold">Disarankan untuk anda</h1>
          <button type="button" className="text-white font-semibold text-[12px]">
            Lihat semua
          </button>
        </div>
        <div className="flex flex-col gap-3 pt-5">
          {loading ? (
            <h1 className="text-white">Loading</h1>
          ) : (
            suggests.map((suggest: SuggestType, index) => (
              <SuggesAccountCard key={`account-${index}`} imageUrl={suggest.picture.medium} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
