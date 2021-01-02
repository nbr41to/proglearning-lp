import Image from "next/image"
import React from 'react'
import { FadeInBlock } from "src/components/FadeInBlock"

export default function Home() {
  return (
    <div>
      <FadeInBlock>
        <Image src="/progLab.002.png" width={10000} height={5500} />
      </FadeInBlock>
      <FadeInBlock>
        右から
      </FadeInBlock>
    </div>
  )
}
