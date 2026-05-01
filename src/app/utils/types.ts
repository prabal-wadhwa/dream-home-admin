export interface IMenuItem {
  name: string;
  icon: string;
  expanded?: boolean;
  children?: IMenuItem[];
}