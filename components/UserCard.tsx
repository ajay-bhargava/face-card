"use client"

import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import type { StaticImageData } from "next/image"
import { Mail, ThumbsDown, ThumbsUp } from "lucide-react"
import { useVoteStore } from "@/store/ValueStore"
import { ImagePixelated } from "react-pixelate"
import Portrait from "@/img/Portrait.jpeg"

export interface UserData {
  name: string
  email: string
  avatar: StaticImageData
}

type Props = {
  userData: UserData
}

export default function UserCard({ userData }: Props) {
  const { upVotes, downVotes, incrementUpVotes, incrementDownVotes, aggregateVotes } = useVoteStore();

  return (
    <Card className="max-w-[600px] min-h-[300px]">
      <div className="grid grid-cols-[auto_1fr] items-center p-6 gap-6">
        <div className="rounded-full overflow-hidden w-200 h-200">
          <ImagePixelated src={Portrait.src} width={200} height={200} fillTransparencyColor={"grey"} pixelSize={aggregateVotes}/>
        </div>
        <div className="text-left">
          <CardTitle className="text-4xl font-bold">{userData.name}</CardTitle>
          <CardDescription className="text-muted-foreground text-sm pt-2 flex items-center gap-2">
            <Mail className="h-4 w-4" />
            {userData.email}
          </CardDescription>
          <CardContent className="mt-6 pl-0">
            <span className="block max-w-full">
              Hey there my name is Ajay. I am reformed cancer scientist, machine learning engineer and a data scientist. Lately I've been heads down in full-stack development as I find it necessary to build the products that capture the data that enable me to build better and cooler machine learning models that I want to build.
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
  )
} 