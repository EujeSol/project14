import { NumberFormatStyle } from "@angular/common";

export interface Note
{
  id: number;
  date: string;
  time: string;
  name: string;
  text: string;
  editStatus: boolean;
}