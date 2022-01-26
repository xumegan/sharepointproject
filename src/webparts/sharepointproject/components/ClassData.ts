import { IData } from "./IData";

export class ClassData {
  public ID: string;
  public Title: string;
  public Description: string;

  constructor(item: IData) {
    this.ID = item.ID;
    this.Title = item.Title;
    this.Description = item.Description;
  }
}