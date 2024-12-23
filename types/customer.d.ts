import { LucideIcon } from 'lucide-react';


export interface User {
  name: string;
  email: string;
  avatar: string;
}


export interface Team {
  name: string;
  logo: LucideIcon;
  plan: string;
}


export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
}


export interface Data {
  user: User;
  team: Team;
  navMain: NavItem[];
}
