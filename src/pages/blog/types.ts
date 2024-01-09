export enum EBlogPost {
  PREVENTING_QUITING = 'preventingQuiting',
  INCENTIVE_PROBLEM = 'incentiveProblem',
}

export interface IBlogSlotProps {
  title: string;
  date: string;
  description: string;
  path: string;
}

export interface IBlogPostProps {
  post: EBlogPost;
}
