"use client"

import { DEFAULT_KEY_CONFIG } from "@/constants/key-config"
import { SWITCH_DISTANCE_MAP } from "@/constants/switches"
import { useKeyConfig } from "@/hooks/use-key-config"
import { useSwitchId } from "@/hooks/use-switch-id"
import { KeyConfig } from "@/types/keyboard-device"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"
import { useConfiguratorState } from "../configurator-state-provider"

type KeyConfigContextState = {
  disabled: boolean
  switchDistance: number
  userConfig: KeyConfig
}

type KeyConfigContextAction = {
  setUserConfig: Dispatch<SetStateAction<KeyConfig>>
  commitUserConfig(config: KeyConfig): void
}

const initialState: KeyConfigContextState = {
  disabled: true,
  switchDistance: 0,
  userConfig: DEFAULT_KEY_CONFIG,
}

const KeyConfigContext = createContext<
  KeyConfigContextState & KeyConfigContextAction
>({
  ...initialState,
  setUserConfig() {},
  commitUserConfig() {},
})

export const useKeyConfigContext = () => useContext(KeyConfigContext)

export function PerformanceKeyConfigContextProvider({
  children,
}: Readonly<{ children?: ReactNode }>) {
  const {
    profileNum,
    performance: { indices },
  } = useConfiguratorState()

  const {
    status: keyConfigStatus,
    keyConfig,
    setKeyConfigQuery,
  } = useKeyConfig()
  const { status: switchIdStatus, switchId } = useSwitchId()

  const disabled =
    keyConfigStatus !== "success" ||
    switchIdStatus !== "success" ||
    indices.length === 0

  const [userConfig, setUserConfig] = useState<KeyConfig>(DEFAULT_KEY_CONFIG)

  const commitUserConfig = (config: KeyConfig) =>
    setKeyConfigQuery.mutate(indices.map((index) => ({ index, config })))

  useEffect(() => {
    if (disabled) {
      setUserConfig(DEFAULT_KEY_CONFIG)
    } else {
      setUserConfig(keyConfig[profileNum][indices[indices.length - 1]])
    }
  }, [disabled, indices, keyConfig, profileNum])

  return (
    <KeyConfigContext.Provider
      value={{
        disabled,
        switchDistance:
          switchIdStatus === "success" ? SWITCH_DISTANCE_MAP[switchId] : 0,
        userConfig,
        setUserConfig,
        commitUserConfig,
      }}
    >
      {children}
    </KeyConfigContext.Provider>
  )
}
