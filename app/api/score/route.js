import { NextResponse } from "next/server";

export async function GET() {
   const Ref = await fetch("http://13.125.172.71:3000/users/rank");
   const RankArr = await Ref.json();
   return NextResponse.json({ RankArr });
}

export async function POST(req) {
   try {
      const { UserName, UserScore } = await req.json();
      console.log(UserName, UserScore);

      const Ref = await fetch("http://13.125.172.71:3000/users/save", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ user_name: UserName, score: UserScore }),
      });
      const Data = await Ref.json();
      if (Data.statusCode === 500) throw new Error("Failed to save data");
      return NextResponse.json({ Success: true });
   } catch (e) {
      console.log(e);
      return NextResponse.json({ Success: false });
   }
}
