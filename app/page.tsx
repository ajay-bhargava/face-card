"use client"

import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { Mail, ThumbsDown, ThumbsUp } from "lucide-react"
import { useVoteStore } from "@/store/ValueStore"


interface UserData {
  name: string
  email: string
  avatar: string
}

export default function UserCard({ userData = {
  name: "Ajay Bhargava",
  email: "bhargava.ajay@gmail.com`",
  avatar: "https://github.com/shadcn.png",
} }: { userData?: UserData }) {
  const { upVotes, downVotes, incrementUpVotes, incrementDownVotes, aggregateVotes } = useVoteStore();

  return (
    <section className="container min-h-screen grid place-items-center gap-6">
      <Card className="max-w-[600px] min-h-[300px]">
        <div className="grid grid-cols-[auto_1fr] items-center p-6 gap-6">
          <Image src={userData.avatar} alt="User Avatar" width={150} height={150} className="rounded-full" />
          <div className="text-left">
            <CardTitle className="text-4xl font-bold">{userData.name}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm pt-2 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {userData.email}
            </CardDescription>
            <CardContent className="mt-6 pl-0">
              <span className="block max-w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </span>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp 
                  className="h-4 w-4 cursor-pointer transition-all hover:text-green-500 hover:scale-110"
                  onClick={incrementUpVotes}
                />
                <span className="text-sm text-green-500">+{upVotes}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsDown 
                  className="h-4 w-4 cursor-pointer transition-all hover:text-red-500 hover:scale-110"
                  onClick={incrementDownVotes}
                />
                <span className="text-sm text-red-500">-{downVotes}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">Aggregate Votes: {aggregateVotes}</span>
              </div>
            </CardFooter> 
          </div>
        </div>
      </Card>
    </section>
  )
}
