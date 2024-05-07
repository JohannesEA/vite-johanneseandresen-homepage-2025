export enum ManuActionType {
  CHANGE = "change",
}

export interface IMenu {
  menuIsActive: boolean;
}

export interface MenuChangeAction {
  type: ManuActionType.CHANGE;
}

export type MenuAction = MenuChangeAction;
