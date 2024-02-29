export interface DropDownItemType {
  name: string;
  hotkey: string;
  href: string;
}

export interface MenuItemType {
  name: string;
  list: DropDownItemType[];
}

export const navigation: MenuItemType[] = [
  {
    name: "File",
    list: [
      {
        name: "New",
        hotkey: "Ctr+N",
        href: "#",
      },
      {
        name: "Export",
        hotkey: "",
        href: "#",
      },
      {
        name: "Import",
        hotkey: "",
        href: "#",
      },
      {
        name: "Settings",
        hotkey: "",
        href: "/settings",
      },
    ],
  },
  {
    name: "Edit",
    list: [
      {
        name: "Delete",
        hotkey: "Ctr+D",
        href: "#",
      },
    ],
  },
  {
    name: "About",
    list: [
      {
        name: "About app",
        hotkey: "",
        href: "/about",
      },
    ],
  },
];
