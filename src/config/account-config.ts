import accountConfig from './account-config.json';

export interface AccountConfig {
  account: {
    nickname: string;
    region: string;
  };
  progress: {
    currentLevel: number;
    nextLevel: number;
    currentExp: number;
    expToNextLevel: number;
    totalExp: number;
    progressPercentage: number;
    playedMatches: number;
  };
  levels: {
    level: number;
    expRequired: number;
  }[];
}

export const config: AccountConfig = accountConfig;