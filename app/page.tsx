"use client"

import UserCard from "@/components/UserCard"
import type { StaticImageData } from "next/image"
import Portrait from "@/img/Portrait.jpeg"

type UserData = {
  name: string
  email: string
  avatar: StaticImageData
}

const defaultUserData: UserData = {
  name: "Ajay Bhargava",
  email: "bhargava.ajay@gmail.com",
  avatar: Portrait,
}

export default function Home() {
  return (
    <section className="container min-h-screen grid place-items-center gap-6">
      <UserCard userData={defaultUserData} />
    </section>
  )
}
