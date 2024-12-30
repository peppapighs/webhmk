'use client'

import Configurator from '@/components/Configurator'
import { useDemoKeyboard } from '@/hooks/useDemoKeyboard'

export default function Demo() {
  const keyboard = useDemoKeyboard()

  return <Configurator keyboard={keyboard} />
}
