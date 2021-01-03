import Image from "next/image"
import React from 'react'
import { FadeInBlock } from "src/components/FadeInBlock"

export default () => {
  return (
    <div>
      <FadeInBlock>
        <Image src="/progLab.002.png" width={10000} height={5500} />
      </FadeInBlock>
      <FadeInBlock>
        <h1>新しい好きよ、集まれ。</h1>
      </FadeInBlock>


    </div>
  )
}
