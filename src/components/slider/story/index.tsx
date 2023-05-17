import * as React from 'react';
import axios from 'axios';
import StoryCard from '@components/cards/story-card';
import CreateStory from '@components/cards/create-story';

interface StoryType {
  picture: {
    medium: string;
  };
  login: {
    username: string;
  };
}

export default function StoryAccountSlider() {
  const [storys, setStorys] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getStorys = async () => {
    setLoading(true);
    const updated = (await axios.get('https://randomuser.me/api/?results=20')).data.results;
    setStorys(updated);
    setLoading(false);
  };
  React.useEffect(() => {
    getStorys();
  }, []);

  return (
    <div className="h-[106px] flex items-center bg-[#121212] border-b border-b-[#363636] border-t border-t-[#363636] py-3 md:border-none md:bg-black md:mt-[30px] lg:px-[35px]">
      <div className="flex items-center h-full gap-3 px-3 overflow-x-auto scrollbar-hide">
        <CreateStory />
        {loading ? (
          <div>
            <h1 className="font-semibold text-center text-white">loading</h1>
          </div>
        ) : (
          storys.map((story: StoryType, index: number) => (
            <StoryCard
              key={`story-${index}`}
              imageUrl={story.picture.medium}
              username={story.login.username}
            />
          ))
        )}
      </div>
    </div>
  );
}
