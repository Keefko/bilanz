export interface Menu {
  id?: number;
  title: string;
  link: string;
  parent_id: number;
  children?: Menu[];
}
