export interface Player {
  id: string;
  active: string;
  'profile-id': string;
}

export interface PlayerInfo {
  id: string;
  profile: {
    age: string;
    role: string;
    team: string;
    picture: string;
  };
}

