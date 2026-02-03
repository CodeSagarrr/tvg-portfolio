'use client'

import {
  motion,
  type MotionProps,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import React, { useRef } from 'react'

type TiltCardProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'div'> &
    MotionProps & {
      /** Max rotation in degrees (both X and Y). */
      tiltMax?: number
      /** Lift amount (px) on hover. */
      lift?: number
      /** Perspective depth (px). */
      perspective?: number
      /** Disable tilt but keep motion.div wrapper (useful if you want only lift/scale). */
      disableTilt?: boolean
    }
>

export default function TiltCard({
  children,
  className,
  tiltMax = 8,
  lift = 6,
  perspective = 900,
  disableTilt = false,
  onMouseMove,
  onMouseLeave,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rX = useSpring(useTransform(my, [-0.5, 0.5], [tiltMax, -tiltMax]), {
    stiffness: 220,
    damping: 18,
    mass: 0.6,
  })
  const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-tiltMax, tiltMax]), {
    stiffness: 220,
    damping: 18,
    mass: 0.6,
  })

  const z = useSpring(0, { stiffness: 220, damping: 18, mass: 0.6 })

  return (
    <motion.div
      ref={ref}
      style={{
        perspective,
      }}
      className={className}
      onMouseMove={(e) => {
        if (!disableTilt && ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const px = (e.clientX - rect.left) / rect.width - 0.5
          const py = (e.clientY - rect.top) / rect.height - 0.5
          mx.set(px)
          my.set(py)
          z.set(-lift)
        }
        onMouseMove?.(e)
      }}
      onMouseLeave={(e) => {
        mx.set(0)
        my.set(0)
        z.set(0)
        onMouseLeave?.(e)
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
      {...rest}
    >
      <motion.div
        style={{
          rotateX: disableTilt ? 0 : rX,
          rotateY: disableTilt ? 0 : rY,
          y: z,
          transformStyle: 'preserve-3d',
        }}
        className="[transform-style:preserve-3d]"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

