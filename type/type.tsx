export type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

export interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};