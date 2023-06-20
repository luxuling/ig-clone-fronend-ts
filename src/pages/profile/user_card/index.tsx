import Image from 'next/image';
import SettingIcon from '@public/assets/svg/profile/setting.svg';
import { UserData } from 'interfaces/redux/user_data';

interface UserProps {
  user: UserData | null;
}
export default function UserCard({ user }: UserProps) {
  return (
    <div className="flex items-center px-[13px] py-10 gap-7">
      <div className="flex rounded-full w-[77px] h-[77px] overflow-hidden">
        {user !== undefined ? (
          <Image alt="Profile picture" src={`${user?.profile.picture}`} width={900} height={900} />
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white">{user?.userName}</span>
          <SettingIcon />
        </div>
        <button
          type="button"
          className="w-full max-w-[250px] bg-bgGrey h-[32px] rounded-lg font-semibold text-sm"
        >
          Edit Profile
        </button>
        <button
          type="button"
          className="w-full max-w-[250px] bg-bgGrey h-[32px] rounded-lg font-semibold text-sm"
        >
          Fitur iklan
        </button>
      </div>
    </div>
  );
}
