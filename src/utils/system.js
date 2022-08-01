import { APP_COLORS } from "../Styling/System";

export const SCREENS_NAME = {
  Home: "Home",
  Profile: "Profile",
  Feed: "Feed",
  NewMedia: "NewMedia",
  GameTips: "GameTips",
  Ranking: "Ranking",
  Suggestion: "Suggestion",
};

export const getPositionColor = (position) => {
    switch (position) {
      case 1:
        return APP_COLORS.YELLOW_COLOR.color;
      case 2:
        return APP_COLORS.ORANGE_COLOR.color;
      case 3:
        return APP_COLORS.SECONDARY_COLOR.color;
      default:
        return APP_COLORS.LIGHT_COLOR.color;
    }
  };

export const sortArrayRankingByPosition = (data = []) => {
  return data.sort((a, b) => a.position - b.position);
};
