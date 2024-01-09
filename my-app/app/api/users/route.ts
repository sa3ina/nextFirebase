import { NextResponse } from "next/server";
import connectDb from "./config";
import Insan from "./model";
connectDb();
export async function GET(req: Request, res: Response) {
  const allUser = await Insan.find({});
  console.log(allUser);
  return NextResponse.json(allUser);
}
