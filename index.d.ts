/* eslint-disable */
// Type definitions for react-sortable-tree 0.3
// Project: https://frontend-collective.github.io/react-sortable-tree
// Definitions by: Wouter Hardeman <https://github.com/wouterhardeman>
//                 Jovica Zoric <https://github.com/jzoric>
//                 Kevin Perrine <https://github.com/kevinsperrine>
//                 Alex Maclean <https://github.com/acemac>
//                 Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { ListProps, Index } from 'react-virtualized';

export type GetNodeKeyFunction<T = {}> = (
  data: TreeIndex & TreeNode<T>
) => string | number;
export type WalkAndMapFunctionParameters<T = {}> = FullTree<T> & {
  getNodeKey: GetNodeKeyFunction<T>;
  callback: Function;
  ignoreCollapsed?: boolean | undefined;
};

// tslint:disable-next-line:no-unnecessary-generics
export function getDescendantCount<T = {}>(
  data: TreeNode<T> & { ignoreCollapsed?: boolean | undefined }
): number;
// tslint:disable-next-line:no-unnecessary-generics
export function getVisibleNodeCount<T = {}>(data: FullTree<T>): number;
export function getVisibleNodeInfoAtIndex<T = {}>(
  data: FullTree<T> & {
    index: number;
    getNodeKey: GetNodeKeyFunction<T>;
  }
): (TreeNode<T> & TreePath & { lowerSiblingsCounts: number[] }) | null;
// tslint:disable-next-line:no-unnecessary-generics
export function walk<T = {}>(data: WalkAndMapFunctionParameters<T>): void;
export function map<T = {}>(
  data: WalkAndMapFunctionParameters<T>
): Array<TreeItem<T>>;
export function toggleExpandedForAll<T = {}>(
  data: FullTree<T> & {
    expanded?: boolean | undefined;
  }
): Array<TreeItem<T>>;
export function changeNodeAtPath<T = {}>(
  data: FullTree<T> &
    TreePath & {
      newNode: Function | any;
      getNodeKey: GetNodeKeyFunction<T>;
      ignoreCollapsed?: boolean | undefined;
    }
): Array<TreeItem<T>>;
export function removeNodeAtPath<T = {}>(
  data: FullTree<T> &
    TreePath & {
      getNodeKey: GetNodeKeyFunction<T>;
      ignoreCollapsed?: boolean | undefined;
    }
): Array<TreeItem<T>>;
export function removeNode<T = {}>(
  data: FullTree<T> &
    TreePath & {
      getNodeKey: GetNodeKeyFunction<T>;
      ignoreCollapsed?: boolean | undefined;
    }
): (FullTree<T> & TreeNode<T> & TreeIndex) | null;
export function getNodeAtPath<T = {}>(
  data: FullTree<T> &
    TreePath & {
      getNodeKey: GetNodeKeyFunction<T>;
      ignoreCollapsed?: boolean | undefined;
    }
): (TreeNode<T> & TreeIndex) | null;
export function addNodeUnderParent<T = {}>(
  data: FullTree<T> & {
    newNode: TreeItem<T>;
    parentKey?: number | string | undefined;
    getNodeKey: GetNodeKeyFunction<T>;
    ignoreCollapsed?: boolean | undefined;
    expandParent?: boolean | undefined;
    addAsFirstChild?: boolean | undefined;
  }
): FullTree<T> & TreeIndex;
export function insertNode<T = {}>(
  data: FullTree<T> & {
    depth: number;
    newNode: TreeItem<T>;
    minimumTreeIndex: number;
    ignoreCollapsed?: boolean | undefined;
    expandParent?: boolean | undefined;
    getNodeKey: GetNodeKeyFunction<T>;
  }
): FullTree<T> & TreeIndex & TreePath & { parentNode: TreeItem<T> };
export function getFlatDataFromTree<T = {}>(
  data: FullTree<T> & {
    getNodeKey: GetNodeKeyFunction<T>;
    ignoreCollapsed?: boolean | undefined;
  }
): Array<FlatDataItem<T>>;
export function getTreeFromFlatData<T = {}>(data: {
  flatData: Array<Omit<TreeItem<T>, 'children'>>;
  getKey?: ((item: TreeItem<T>) => string | number) | undefined;
  getParentKey?: ((item: TreeItem<T>) => string | number | null) | undefined;
  rootKey?: string | number | undefined;
}): Array<TreeItem<T>>;
export function isDescendant<T = {}>(
  older: TreeItem<T>,
  younger: TreeItem<T>
): boolean;
// tslint:disable-next-line:no-unnecessary-generics
export function getDepth<T = {}>(node: TreeItem<T>, depth?: number): number;
export function find<T = {}>(
  data: FullTree<T> & {
    getNodeKey: GetNodeKeyFunction<T>;
    searchQuery?: string | number | undefined;
    searchMethod: (searchData: SearchData<T>) => boolean;
    searchFocusOffset?: number | undefined;
    expandAllMatchPaths?: boolean | undefined;
    expandFocusMatchPaths?: boolean | undefined;
  }
): { matches: Array<NodeData<T>> } & FullTree<T>;

export function defaultGetNodeKey(data: TreeIndex): number;
// tslint:disable-next-line:no-unnecessary-generics
export function defaultSearchMethod<T>(data: SearchData<T>): boolean;

export interface GetTreeItemChildren<T = {}> {
  done: (children: Array<TreeItem<T>>) => void;
  node: TreeItem<T>;
  path: NumberOrStringArray;
  lowerSiblingCounts: number[];
  treeIndex: number;
}

export type GetTreeItemChildrenFn<T = {}> = (
  data: GetTreeItemChildren<T>
) => void;

export type TreeItem<T = {}> = T & {
  title?: React.ReactNode | undefined;
  subtitle?: React.ReactNode | undefined;
  expanded?: boolean | undefined;
  children?: Array<TreeItem<T>> | GetTreeItemChildrenFn<T> | undefined;
};

export interface TreeNode<T = {}> {
  node: TreeItem<T>;
}

export interface TreePath {
  path: NumberOrStringArray;
}

export interface TreeIndex {
  treeIndex: number;
}

export interface FullTree<T = {}> {
  treeData: Array<TreeItem<T>>;
}

export interface NodeData<T = {}> extends TreeNode<T>, TreePath, TreeIndex {}

export interface FlatDataItem<T = {}> extends TreeNode<T>, TreePath {
  lowerSiblingCounts: number[];
  parentNode: TreeItem<T>;
}

export interface SearchData<T = {}> extends NodeData<T> {
  searchQuery: any;
}

export interface ExtendedNodeData<T = {}> extends NodeData<T> {
  parentNode: TreeItem<T>;
  lowerSiblingCounts: number[];
  isSearchMatch: boolean;
  isSearchFocus: boolean;
}

export interface OnVisibilityToggleData<T = {}>
  extends FullTree<T>,
    TreeNode<T> {
  expanded: boolean;
}

export interface OnDragStateChangedData<T = {}> {
  isDragging: boolean;
  draggedNode: TreeItem<T>;
}

interface PreviousAndNextLocation {
  prevTreeIndex: number;
  prevPath: NumberOrStringArray;
  nextTreeIndex: number;
  nextPath: NumberOrStringArray;
}

export interface OnDragPreviousAndNextLocation<T = {}>
  extends PreviousAndNextLocation {
  prevParent: TreeItem<T> | null;
  nextParent: TreeItem<T> | null;
}

export interface ShouldCopyData<T = {}> {
  node: TreeNode<T>;
  prevPath: NumberOrStringArray;
  prevTreeIndex: number;
}

export interface OnMovePreviousAndNextLocation<T = {}>
  extends PreviousAndNextLocation {
  nextParentNode: TreeItem<T> | null;
}

export type NodeRenderer<T = {}> = React.ComponentType<NodeRendererProps<T>>;

export interface NodeRendererProps<T = {}> {
  node: TreeItem<T>;
  path: NumberOrStringArray;
  treeIndex: number;
  isSearchMatch: boolean;
  isSearchFocus: boolean;
  canDrag: boolean;
  scaffoldBlockPxWidth: number;
  toggleChildrenVisibility?(data: NodeData<T>): void;
  buttons?: JSX.Element[] | undefined;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  title?: ((data: NodeData<T>) => JSX.Element | JSX.Element) | undefined;
  subtitle?: ((data: NodeData<T>) => JSX.Element | JSX.Element) | undefined;
  icons?: JSX.Element[] | undefined;
  lowerSiblingCounts: number[];
  swapDepth?: number | undefined;
  swapFrom?: number | undefined;
  swapLength?: number | undefined;
  listIndex: number;
  treeId: string;

  parentNode?: TreeItem<T> | undefined;
  startDrag: any;
  endDrag: any;
  isDragging: boolean;
  didDrop: boolean;
  draggedNode?: TreeItem<T> | undefined;
  isOver: boolean;
  canDrop?: boolean | undefined;
}

export type PlaceholderRenderer<T = {}> = React.ComponentType<
  PlaceholderRendererProps<T>
>;

export interface PlaceholderRendererProps<T = {}> {
  isOver: boolean;
  canDrop: boolean;
  draggedNode: TreeItem<T>;
}

type NumberOrStringArray = Array<string | number>;

export type TreeRenderer<T = {}> = React.ComponentType<TreeRendererProps<T>>;

export interface TreeRendererProps<T = {}> {
  treeIndex: number;
  treeId: string;
  swapFrom?: number | undefined;
  swapDepth?: number | undefined;
  swapLength?: number | undefined;
  scaffoldBlockPxWidth: number;
  lowerSiblingCounts: number[];
  rowDirection?: 'ltr' | 'rtl' | undefined;

  listIndex: number;
  children: JSX.Element[];
  style?: React.CSSProperties | undefined;

  // Drop target
  isOver: boolean;
  canDrop?: boolean | undefined;
  draggedNode?: TreeItem<T> | undefined;

  // used in dndManager
  getPrevRow: () => FlatDataItem | null;
  node: TreeItem<T>;
  path: NumberOrStringArray;
}

interface ThemeTreeProps<T = {}> {
  style?: React.CSSProperties | undefined;
  innerStyle?: React.CSSProperties | undefined;
  reactVirtualizedListProps?: Partial<ListProps> | undefined;
  scaffoldBlockPxWidth?: number | undefined;
  slideRegionSize?: number | undefined;
  rowHeight?: ((info: NodeData<T> & Index) => number) | number | undefined;
  nodeContentRenderer?: NodeRenderer<T> | undefined;
  placeholderRenderer?: PlaceholderRenderer<T> | undefined;
}

export interface ThemeProps<T = {}> extends ThemeTreeProps<T> {
  treeNodeRenderer?: TreeRenderer<T> | undefined;
}

export interface ReactSortableTreeProps<T = {}> extends ThemeTreeProps<T> {
  treeData: Array<TreeItem<T>>;
  onChange(treeData: Array<TreeItem<T>>): void;
  getNodeKey?(data: TreeNode<T> & TreeIndex): string | number;
  generateNodeProps?(data: ExtendedNodeData<T>): { [index: string]: any };
  onMoveNode?(
    data: NodeData<T> & FullTree<T> & OnMovePreviousAndNextLocation<T>
  ): void;
  onVisibilityToggle?(data: OnVisibilityToggleData<T>): void;
  onDragStateChanged?(data: OnDragStateChangedData<T>): void;
  maxDepth?: number | undefined;
  rowDirection?: 'ltr' | 'rtl' | undefined;
  canDrag?: ((data: ExtendedNodeData) => boolean) | boolean | undefined;
  canDrop?(data: OnDragPreviousAndNextLocation<T> & NodeData<T>): boolean;
  canNodeHaveChildren?(node: TreeItem<T>): boolean;
  theme?: ThemeProps<T> | undefined;
  searchMethod?(data: SearchData<T>): boolean;
  searchQuery?: string | any | undefined;
  searchFocusOffset?: number | undefined;
  onlyExpandSearchedNodes?: boolean | undefined;
  searchFinishCallback?(matches: Array<NodeData<T>>): void;
  dndType?: string | undefined;
  shouldCopyOnOutsideDrop?:
    | boolean
    | ((data: ShouldCopyData<T>) => boolean)
    | undefined;
  className?: string | undefined;
  isVirtualized?: boolean | undefined;
}

// tslint:disable-next-line:no-unnecessary-generics
declare function SortableTree<T>(
  props: React.PropsWithChildren<ReactSortableTreeProps<T>>
): JSX.Element;
// tslint:disable-next-line:no-unnecessary-generics
declare function SortableTreeWithoutDndContext<T>(
  props: React.PropsWithChildren<ReactSortableTreeProps<T>>
): JSX.Element;

export { SortableTree, SortableTreeWithoutDndContext };
export default SortableTree;
