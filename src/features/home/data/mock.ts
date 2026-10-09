import type { HomeData, HomeFeedItem, HomeGroup, HomeUser } from "../types";

export const mockHomeUser: HomeUser = {
  id: "lucas",
  name: "Lucas Almeida",
  username: "@lucas",
  level: 28,
  xp: 3420,
  xpNext: 4000,
  streak: 14,
  title: "Máquina",
  avatarUrl:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
};

export const mockHomeGroups: HomeGroup[] = [
  {
    id: "maromba-setembro",
    name: "Maromba Setembro",
    coverUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop&auto=format",
    status: "ACTIVE",
    memberCount: 87,
    daysLeft: 24,
    myPosition: 3,
    myCheckins: 5,
    myProgress: 0.55,
    isMember: true,
  },
  {
    id: "projeto-verao",
    name: "Projeto Verão",
    coverUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&auto=format",
    status: "SCHEDULED",
    memberCount: 43,
    daysLeft: 25,
    myPosition: null,
    myCheckins: 0,
    myProgress: 0,
    isMember: true,
  },
  {
    id: "treino-da-firma",
    name: "Treino da Firma",
    coverUrl:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=400&fit=crop&auto=format",
    status: "ACTIVE",
    memberCount: 12,
    daysLeft: null,
    myPosition: 2,
    myCheckins: 18,
    myProgress: 0.72,
    isMember: true,
  },
  {
    id: "desafio-30-dias",
    name: "Desafio 30 Dias",
    coverUrl:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&h=400&fit=crop&auto=format",
    status: "FINISHED",
    memberCount: 156,
    daysLeft: 0,
    myPosition: 1,
    myCheckins: 28,
    myProgress: 1,
    isMember: true,
  },
];

export const mockHomeFeed: HomeFeedItem[] = [
  {
    id: "ci1",
    userId: "joao",
    userName: "João Silva",
    userAvatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format",
    groupId: "maromba-setembro",
    groupName: "Maromba Setembro",
    photoUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop&auto=format",
    status: "APPROVED",
    caption: "Peito e tríceps destruídos hoje 💪",
    timeLabel: "há 2h",
  },
  {
    id: "ci2",
    userId: "maria",
    userName: "Maria Costa",
    userAvatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format",
    groupId: "maromba-setembro",
    groupName: "Maromba Setembro",
    photoUrl:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop&auto=format",
    status: "APPROVED",
    caption: "Yoga matinal + musculação. Dois em um! ✨",
    timeLabel: "há 3h",
  },
  {
    id: "ci3",
    userId: "pedro",
    userName: "Pedro Rocha",
    userAvatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format",
    groupId: "treino-da-firma",
    groupName: "Treino da Firma",
    photoUrl:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=600&fit=crop&auto=format",
    status: "PENDING",
    caption: "Corrida na hora do almoço 🏃",
    timeLabel: "há 4h",
  },
  {
    id: "ci4",
    userId: "gabriel",
    userName: "Gabriel Mendes",
    userAvatarUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&auto=format",
    groupId: "maromba-setembro",
    groupName: "Maromba Setembro",
    photoUrl:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop&auto=format",
    status: "APPROVED",
    caption: "Pernas no limite hoje. Squats até a morte.",
    timeLabel: "há 5h",
  },
  {
    id: "ci5",
    userId: "lucas",
    userName: "Lucas Almeida",
    userAvatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format",
    groupId: "maromba-setembro",
    groupName: "Maromba Setembro",
    photoUrl:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=600&h=600&fit=crop&auto=format",
    status: "APPROVED",
    caption: "Mais um dia, mais uma vitória 🔥",
    timeLabel: "ontem",
  },
];

export const mockHomeData: HomeData = {
  user: mockHomeUser,
  unreadNotifications: 2,
  groups: mockHomeGroups,
  feed: mockHomeFeed,
};
