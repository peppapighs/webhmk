'use client'

import Configurator from '@/components/Configurator'
import { useKeyboard } from '@/hooks/useKeyboard'
import { useRouter } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'

export default function App() {
  const router = useRouter()

  const keyboard = useKeyboard()

  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    if (keyboard === null) {
      router.replace('/')
    }
  }, [keyboard, router])

  useEffect(() => {
    const fetchKeyboard = async () => {
      if (keyboard === null || keyboard.keymap.length > 0) {
        return
      }

      await Promise.all([
        keyboard.fetchSwitchId(),
        keyboard.fetchTapHoldConfig(),
        keyboard.fetchKeyConfig(),
        keyboard.fetchKeymap(),
        keyboard.fetchDksConfig(),
      ])
    }

    if (loading === false) {
      setLoading(true)
      fetchKeyboard()
    }
  }, [keyboard, loading])

  return (
    keyboard &&
    keyboard.keymap.length > 0 && <Configurator keyboard={keyboard} />
  )
}
