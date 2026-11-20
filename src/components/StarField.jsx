import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 20000)
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.5,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.4 + 0.1,
          twinkleSpeed: Math.random() * 0.008 + 0.003,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }

      // Add a few subtle warm orange accent particles
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1.2,
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          opacity: Math.random() * 0.35 + 0.15,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          isAccent: true,
        })
      }
    }

    const drawParticle = (p, time) => {
      const twinkle = Math.sin(time * p.twinkleSpeed + p.twinklePhase) * 0.5 + 0.5
      const alpha = p.opacity * (0.4 + twinkle * 0.6)

      if (p.isAccent) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(234, 88, 12, ${alpha * 0.8})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(234, 88, 12, ${alpha * 0.12})`
        ctx.fill()
      } else {
        // Subtle slate / charcoal particle for light theme
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148, 163, 184, ${alpha * 0.75})`
        ctx.fill()
      }
    }

    let shootingStarTimer = 0
    let shootingStar = null

    const spawnShootingStar = () => {
      shootingStar = {
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * canvas.height * 0.3,
        speedX: 3 + Math.random() * 4,
        speedY: 1.5 + Math.random() * 2,
        life: 1,
        decay: 0.012 + Math.random() * 0.008,
        trail: [],
        size: 1.5 + Math.random(),
      }
    }

    const drawShootingStar = () => {
      if (!shootingStar) return

      shootingStar.x += shootingStar.speedX
      shootingStar.y += shootingStar.speedY
      shootingStar.life -= shootingStar.decay

      shootingStar.trail.push({ x: shootingStar.x, y: shootingStar.y, alpha: shootingStar.life })
      if (shootingStar.trail.length > 20) shootingStar.trail.shift()

      // Draw trail
      for (let i = 0; i < shootingStar.trail.length; i++) {
        const t = shootingStar.trail[i]
        const progress = i / shootingStar.trail.length
        const alpha = t.alpha * progress * 0.5
        ctx.beginPath()
        ctx.arc(t.x, t.y, shootingStar.size * progress, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(234, 88, 12, ${alpha})`
        ctx.fill()
      }

      // Draw head
      ctx.beginPath()
      ctx.arc(shootingStar.x, shootingStar.y, shootingStar.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(234, 88, 12, ${shootingStar.life * 0.85})`
      ctx.fill()

      if (shootingStar.life <= 0) shootingStar = null
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        drawParticle(p, time)
      })

      shootingStarTimer++
      if (shootingStarTimer > 360 && !shootingStar && Math.random() < 0.01) {
        spawnShootingStar()
        shootingStarTimer = 0
      }
      drawShootingStar()

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animationId = requestAnimationFrame(animate)

    const resizeObserver = new ResizeObserver(() => {
      resize()
      createParticles()
    })
    resizeObserver.observe(document.documentElement)

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  )
}
