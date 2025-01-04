"use client"

import { KEYCODE_CATEGORIES } from "@/constants/keycode-metadata"
import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { keycodeToMetadata, renderableKeycodes } from "@/lib/keycodes"
import { cn } from "@/lib/utils"
import { KeyboardDevice } from "@/types/keyboard-device"
import { KeycodeMetadata } from "@/types/keycodes"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Badge } from "../ui/badge"
import { buttonVariants } from "../ui/button"
import { Label } from "../ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

interface IRemapKeycodes {
  device: KeyboardDevice
}

export function RemapKeycodes({
  device: { metadata, setKeymap },
}: IRemapKeycodes) {
  const {
    profileNum,
    remap: { layerNum, index, setIndex },
  } = useConfiguratorState()

  const groupedKeycodes = renderableKeycodes(metadata)
    .map((keycode) => keycodeToMetadata(keycode))
    .reduce(
      (acc, keycode) => {
        const category = keycode.category
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(keycode)
        return acc
      },
      KEYCODE_CATEGORIES.reduce(
        (acc, category) => {
          acc[category] = []
          return acc
        },
        {} as Record<string, KeycodeMetadata[]>,
      ),
    )

  const queryClient = useQueryClient()

  type SetKeymapQuery = {
    index: number
    keycode: number
  }

  const setKeymapQuery = useMutation({
    mutationFn: async ({ index, keycode }: SetKeymapQuery) => {
      await setKeymap([
        { profile: profileNum, layer: layerNum, index, keycode },
      ])
      return index
    },
    onSuccess: (index) => {
      queryClient.invalidateQueries({ queryKey: ["configurator", "keymap"] })
      if (index !== null) {
        setIndex(index + 1 === metadata.numKeys ? null : index + 1)
      }
    },
  })

  return (
    <div className="flex flex-col items-center gap-6">
      {Object.entries(groupedKeycodes).map(
        ([category, keycodes]) =>
          keycodes.length > 0 && (
            <div key={category} className="flex flex-col">
              <Label
                htmlFor={`category-${category}`}
                className={cn(
                  "ml-1 text-lg font-bold text-muted-foreground",
                  index !== null && "text-foreground",
                )}
              >
                {category}
              </Label>
              <div className="mt-2 grid min-w-max grid-cols-12">
                {keycodes.map((keycode, i) => (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <div className="size-16 p-0.5">
                        <TooltipTrigger
                          disabled={index === null}
                          onClick={() =>
                            index !== null &&
                            setKeymapQuery.mutate({
                              index,
                              keycode: keycode.keycode,
                            })
                          }
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "keycode size-full overflow-hidden p-1 text-center",
                          )}
                        >
                          {keycode.render ? (
                            <>
                              {keycode.render}
                              <span className="sr-only">{keycode.name}</span>
                            </>
                          ) : (
                            keycode.name
                          )}
                        </TooltipTrigger>
                      </div>
                      <TooltipContent className="flex max-w-prose flex-col gap-2">
                        {keycode.description && (
                          <p className="text-sm font-medium">
                            {keycode.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {keycode.keycodeNames.map((name, j) => (
                            <div key={j}>
                              <Badge variant="secondary">{name}</Badge>
                            </div>
                          ))}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ),
      )}
    </div>
  )
}
