export type navigationLinksTypes = {
  label: string;
  to: string;
  collapsed?: boolean;
  sublinks?: navigationLinksTypes[] | [];
};

export type navigationSideLinksTypes = {
  label: string;
};

export type navigationSideMenuTriggerTypes = {
  label: string;
  sublinks: navigationLinksTypes[];
};
