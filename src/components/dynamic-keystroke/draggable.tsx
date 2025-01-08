/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use client"

import { cn } from "@/lib/utils"
import { DynamicKeystrokeMask } from "@/types/keyboard-device"
import {
  ArrowDownFromLine,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowUpToLine,
  GripVertical,
  Plus,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Draggable, { DraggableData, DraggableEvent } from "react-draggable"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

const WIDTH = 320
const HEIGHT = 64
const SECTION_WIDTH = WIDTH / 4

const NODE_SIZE = 32
const NODE_TOP = HEIGHT / 2 - NODE_SIZE / 2
const NODE_MARGIN = NODE_SIZE + 4
const NODE_WIDTH = [...Array(4)].map((_, i) =>
  Math.max(0, i * SECTION_WIDTH - NODE_MARGIN),
)

const nodeLeft = (index: number) =>
  SECTION_WIDTH / 2 - NODE_SIZE / 2 + index * SECTION_WIDTH

interface IDynamicKeystrokeDraggableNodeProps {
  disabled?: boolean
  index: number
  maskConfig: number
  maxMaskConfig: number
  onMaskConfigChange(maskConfig: number): void
}

const DynamicKeystrokeDraggableNode = ({
  disabled,
  index,
  maskConfig,
  maxMaskConfig,
  onMaskConfigChange,
}: IDynamicKeystrokeDraggableNodeProps) => {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement)

  const [nodePos, setNodePos] = useState({
    x: maskConfig > 0 ? NODE_WIDTH[maskConfig - 1] : 0,
    y: 0,
  })
  const [userMaskConfig, setUserMaskConfig] = useState(maskConfig)

  const onDrag = (_: DraggableEvent, { x }: DraggableData) => {
    const snapConfig = NODE_WIDTH.reduce((acc, cur, i) => {
      const accDiff = Math.abs(NODE_WIDTH[acc] - x)
      const curDiff = Math.abs(cur - x)
      return accDiff < curDiff ? acc : i
    }, 0)
    setUserMaskConfig(snapConfig + 1)
    setNodePos({ x, y: 0 })
  }

  useEffect(() => {
    setUserMaskConfig(maskConfig)
    setNodePos({
      x: maskConfig > 0 ? NODE_WIDTH[maskConfig - 1] : 0,
      y: 0,
    })
  }, [maskConfig])

  return (
    <>
      <Draggable
        disabled={disabled}
        axis="x"
        bounds={{
          left: 0,
          right: NODE_WIDTH[maxMaskConfig - 1],
          top: 0,
          bottom: 0,
        }}
        position={nodePos}
        nodeRef={ref}
        onStart={onDrag}
        onDrag={onDrag}
        onStop={() => {
          setNodePos({
            x: userMaskConfig > 0 ? NODE_WIDTH[userMaskConfig - 1] : 0,
            y: 0,
          })
          onMaskConfigChange(userMaskConfig)
        }}
      >
        <div
          ref={ref}
          className={cn(
            "absolute z-10",
            userMaskConfig > 0
              ? "flex h-4 w-3 cursor-ew-resize items-center justify-center rounded-sm border bg-border"
              : "cursor-pointer rounded-full",
          )}
          style={
            userMaskConfig > 0
              ? {
                  top: NODE_TOP + 8,
                  left: nodeLeft(index) + NODE_SIZE - 10,
                }
              : {
                  width: NODE_SIZE,
                  height: NODE_SIZE,
                  top: NODE_TOP,
                  left: nodeLeft(index),
                }
          }
        >
          {userMaskConfig > 0 && <GripVertical className="size-2.5" />}
          <span className="sr-only">Edit Action</span>
        </div>
      </Draggable>
      {userMaskConfig > 0 && (
        <button
          disabled={disabled}
          className="absolute z-0 rounded-full bg-primary"
          style={{
            width: NODE_WIDTH[userMaskConfig - 1] + NODE_SIZE,
            height: NODE_SIZE,
            top: NODE_TOP,
            left: nodeLeft(index),
          }}
          onClick={() => {
            setUserMaskConfig(0)
            onMaskConfigChange(0)
          }}
        >
          <span className="sr-only">Remove Action</span>
        </button>
      )}
    </>
  )
}

interface IDynamicKeystrokeDraggableHeaderProps {
  disabled?: boolean
}

export function DynamicKeystrokeDraggableHeader({
  disabled,
}: IDynamicKeystrokeDraggableHeaderProps) {
  const iconLeft = (index: number) =>
    SECTION_WIDTH / 2 - 8 + index * SECTION_WIDTH

  return (
    <div className="relative h-[40px]" style={{ width: WIDTH }}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger disabled={disabled} asChild>
            <ArrowDownFromLine
              className="absolute top-[12px] size-4"
              style={{
                left: iconLeft(0),
              }}
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-sm font-medium">
            Key pressed
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger disabled={disabled} asChild>
            <ArrowDownToLine
              className="absolute top-[12px] size-4"
              style={{
                left: iconLeft(1),
              }}
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-sm font-medium">
            Key bottomed-out
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger disabled={disabled} asChild>
            <ArrowUpFromLine
              className="absolute top-[12px] size-4"
              style={{
                left: iconLeft(2),
              }}
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-sm font-medium">
            Key released from bottom-out
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger disabled={disabled} asChild>
            <ArrowUpToLine
              className="absolute top-[12px] size-4"
              style={{
                left: iconLeft(3),
              }}
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-sm font-medium">
            Key released
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

interface IDynamicKeystrokeDraggableProps {
  disabled?: boolean
  mask: DynamicKeystrokeMask
  onMaskChange(mask: DynamicKeystrokeMask): void
}

export function DynamicKeystrokeDraggable({
  disabled,
  mask,
  onMaskChange,
}: IDynamicKeystrokeDraggableProps) {
  const maskConfig = [mask.config0, mask.config1, mask.config2, mask.config3]
  const maxMaskConfig = [
    mask.config1 > 0 ? 2 : mask.config2 > 0 ? 3 : 4,
    mask.config2 > 0 ? 2 : 3,
    2,
    1,
  ]
  const nodeHidden = [
    false,
    mask.config0 > 2,
    mask.config0 > 3 || mask.config1 > 2,
    false,
  ]

  return (
    <div className="relative" style={{ width: WIDTH, height: HEIGHT }}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center justify-center rounded-full border"
          style={{
            width: NODE_SIZE,
            height: NODE_SIZE,
            top: NODE_TOP,
            left: nodeLeft(i),
          }}
        >
          <Plus className="size-4" />
        </div>
      ))}
      {[...Array(4)].map(
        (_, i) =>
          !nodeHidden[i] && (
            <DynamicKeystrokeDraggableNode
              key={i}
              disabled={disabled}
              index={i}
              maskConfig={maskConfig[i]}
              maxMaskConfig={maxMaskConfig[i]}
              onMaskConfigChange={(maskConfig) => {
                onMaskChange({
                  ...mask,
                  [`config${i}`]: maskConfig,
                })
              }}
            />
          ),
      )}
    </div>
  )
}
