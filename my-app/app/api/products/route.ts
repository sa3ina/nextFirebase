import { NextResponse } from "next/server";

export let arr = [
  {
    id: 1,
    name: "cola",
  },
  {
    id: 2,
    name: "sprite",
  },
  {
    id: 3,
    name: "fanta",
  },
  {
    id: 4,
    name: "pepsi",
  },
];
export async function GET(req: Request, res: Response) {
  return NextResponse.json(arr);
}
