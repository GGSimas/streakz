export type HomeGroupStatus = "ACTIVE" | "SCHEDULED" | "FINISHED";

export type HomeCheckinStatus = "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export type HomeUser = {
  id: string;
  name: string;
  username: string;
  level: number;
  xp: number;
  xpNext: number;
  streak: number;
  title: string;
  avatarUrl: string;
};

export type HomeGroup = {
  id: string;
  name: string;
  coverUrl: string;
  status: HomeGroupStatus;
  memberCount: number;
  daysLeft: number | null;
  myPosition: number | null;
  myCheckins: number;
  myProgress: number;
  isMember: boolean;
};

export type HomeFeedItem = {
  id: string;
  userId: string;
  userName: string;
  userAvatarUrl: string;
  groupId: string;
  groupName: string;
  photoUrl: string | null;
  status: HomeCheckinStatus;
  caption: string | null;
  timeLabel: string;
};

export type HomeData = {
  user: HomeUser;
  unreadNotifications: number;
  groups: HomeGroup[];
  feed: HomeFeedItem[];
};
