import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

export function useSwitchId() {
  const device = useKeyboardDevice()

  const { status, data: switchId } = useQuery({
    queryKey: [device, "configurator", "switchId"],
    queryFn: device.getSwitchId,
  })

  const queryClient = useQueryClient()

  const setSwitchIdQuery = useMutation({
    mutationFn: device.setSwitchId,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device, "configurator", "switchId"],
      })
    },
  })

  if (status !== "success") {
    return {
      status,
      setSwitchIdQuery,
    }
  }

  return {
    status,
    switchId,
    setSwitchIdQuery,
  }
}
