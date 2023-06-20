import React from 'react'
import Image from 'next/image'

const LoadingSkeleton = () => {
  return (
    <div class="center flex items-center h-screen justify-center">
  <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" width={100} height={100} alt=""/>
</div>
  )
}

export default LoadingSkeleton