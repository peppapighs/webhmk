"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useConfiguratorState } from "./use-configurator-state"

export const useResetDevice = (reset: () => Promise<void>) => {
  const { reset: configuratorReset } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => reset(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["configurator"] })
      configuratorReset()
    },
  })
}
