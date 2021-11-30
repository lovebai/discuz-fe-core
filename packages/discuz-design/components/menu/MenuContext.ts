import { createContext } from 'react';

interface MenuContextValue {
  /**
   * submenu的hover index
   */
  hoverSubMenuIndex: string;

  /**
   * 设置hover的index方法
   */
  setHoverSubMenuIndex: (index: string) => void;

  /**
   * 当前激活的submenu index
   */
  currentActiveSubMenuIndex: string;

  /**
   * 设置当前激活的index方法
   */
  setCurrentActiveSubMenuIndex: (index: string) => void;

  /**
   * 当前激活的menu-item index
   */
  currentActiveItemIndex: string;

  /**
   * 设置当前激活的menu-item index
   */
  setCurrentActiveItemIndex: (index: string) => void;

  /**
   * 开启手风琴模式
   */
  uniqueOpened: boolean;

  /**
   * 菜单模式
   */
  mode: 'horizontal' | 'vertical';

  /**
   * 触发方式
   */
  menuTrigger: 'click' | 'hover';

  /**
   * 是否多选
   */
  multiple: boolean;

  /**
   * 多选menu-item index集合Set
   */
  currentActiveItemIndexSet: any;

  /**
   * 设置多选menu-item
   */
  setCurrentActiveItemIndexSet: (index: any) => void;

  /**
   * 多选sub-menu index集合Set
   */
  currentActiveSubMenuIndexSet: any;

  /**
   * 设置多选sub-menu
   */
  setCurrentActiveSubMenuIndexSet: (index: any) => void;

  /**
   * 当前默认打开的 sub-menu 的index的数组
   * @default ''
   */
  defaultOpeneds?: string[];
}

export const INITIAL_VALUE = '-1';

export const MenuContext = createContext<MenuContextValue>({
  hoverSubMenuIndex: INITIAL_VALUE,
  setHoverSubMenuIndex: () => {},
  currentActiveSubMenuIndex: INITIAL_VALUE,
  setCurrentActiveSubMenuIndex: () => {},
  currentActiveItemIndex: INITIAL_VALUE,
  setCurrentActiveItemIndex: () => {},
  uniqueOpened: false,
  mode: 'vertical',
  menuTrigger: 'click',
  multiple: false,
  currentActiveItemIndexSet: new Set(),
  setCurrentActiveItemIndexSet: () => {},
  currentActiveSubMenuIndexSet: new Set(),
  setCurrentActiveSubMenuIndexSet: () => {},
  defaultOpeneds: [],
});

interface SubMenuContextValue {
  subMenuIndex: string;
}

export const SubMenuContext = createContext<SubMenuContextValue>({
  subMenuIndex: INITIAL_VALUE,
});
