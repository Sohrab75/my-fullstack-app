import React from 'react'
import bgVideo from "../assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
import { HeaderOne } from './Heading'

const HeroComponent = () => {
  return (
    <div className="relative -z-1 overflow-hidden">
      <video className="w-full" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1c1c1c00] to-[#1c1c1c]">
        <HeaderOne>HungerBox</HeaderOne>
        <span
          className="text-3xl font-bold px-6 py-3 rounded-lg bg-transparent"
        >
          Welcome to HungerBox
        </span>
      </div>
    </div>
  )
}

export default HeroComponent