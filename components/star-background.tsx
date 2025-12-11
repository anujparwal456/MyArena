"use client"

import React, { useEffect, useRef } from "react"

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const snowflakes = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2.5,
      speed: 0.4 + Math.random() * 1.1,
      opacity: 0.25 + Math.random() * 0.6,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.shadowBlur = 8
      ctx.shadowColor = "rgba(255, 255, 255, 0.6)"

      snowflakes.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${flake.opacity})`
        ctx.fill()

        flake.y += flake.speed
        flake.x += Math.sin(flake.y * 0.01) * 0.4

        if (flake.y > height) {
          flake.y = -flake.radius
          flake.x = Math.random() * width
          flake.radius = 1 + Math.random() * 2.5
          flake.speed = 0.4 + Math.random() * 1.1
          flake.opacity = 0.25 + Math.random() * 0.6
        }
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b102b] via-[#101735] to-[#0b1228]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
    </div>
  )
}
