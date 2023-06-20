import SettingIcon from '@public/assets/svg/profile/setting.svg';
import ExplorePeopleIcon from '@public/assets/svg/profile/explorePeople.svg';
import { Icon } from '@iconify/react';
import { UserData } from 'interfaces/redux/user_data';

interface UserProps {
  user: UserData | null;
}
export default function NavbarProfile({ user }: UserProps) {
  return (
    <div className="h-[44px] border-b border-b-darkGrey flex justify-between items-center px-[16px] fixed top-0 w-full">
      <button type="button">
        <SettingIcon />
      </button>
      <div className="flex items-center text-white">
        <h1 className="font-semibold">{user?.fullName}</h1>
        <Icon icon="iconamoon:arrow-up-2-light" className="text-lg" rotate={2} />
      </div>
      <button type="button">
        <ExplorePeopleIcon />
      </button>
    </div>
  );
}
