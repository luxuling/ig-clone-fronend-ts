export interface UserData {
  fullName: string;
  userName: string;
  noHp: string;
  profile: Profile;
  birth: string;
  createdAt: string;
  updatedAt: string;
}

interface Profile {
  bio: string;
  followers: number;
  followed: number;
  picture: string;
}
