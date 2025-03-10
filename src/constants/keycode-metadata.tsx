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

import { Keycode, KeycodeMetadata } from "@/types/keycodes"
import {
  AlarmClock,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bookmark,
  Calculator,
  Crosshair,
  Factory,
  FastForward,
  FolderClosed,
  Grid3X3,
  HardDriveDownload,
  Home,
  LayoutDashboard,
  Mail,
  Moon,
  Play,
  Power,
  RefreshCw,
  Rewind,
  Search,
  SkipBack,
  SkipForward,
  Square,
  Sun,
  SunDim,
  Volume1,
  Volume2,
  VolumeOff,
} from "lucide-react"

export const KEYCODE_CATEGORIES = [
  "Special",
  "Alphanumeric",
  "Modifier",
  "International",
  "Function",
  "Navigation",
  "Numpad",
  "Media",
  "System",
  "Application",
  "Browser",
  "Layer",
  "Profile",
  "Dynamic Keystroke",
  "Unknown",
] as const

export const KEYCODE_METADATA: KeycodeMetadata[] = [
  {
    name: "",
    description: "Nothing",
    keycode: Keycode.KC_NO,
    keycodeNames: ["KC_NO", "XXXXXXX"],
    uiCodes: [],
    category: "Special",
  },
  {
    name: "▽",
    description: "Pass-through",
    keycode: Keycode.KC_TRANSPARENT,
    keycodeNames: ["KC_TRANSPARENT", "_______", "KC_TRNS"],
    uiCodes: [],
    category: "Special",
  },
  {
    name: "A",
    keycode: Keycode.KC_A,
    keycodeNames: ["KC_A"],
    uiCodes: ["KeyA"],
    category: "Alphanumeric",
  },
  {
    name: "B",
    keycode: Keycode.KC_B,
    keycodeNames: ["KC_B"],
    uiCodes: ["KeyB"],
    category: "Alphanumeric",
  },
  {
    name: "C",
    keycode: Keycode.KC_C,
    keycodeNames: ["KC_C"],
    uiCodes: ["KeyC"],
    category: "Alphanumeric",
  },
  {
    name: "D",
    keycode: Keycode.KC_D,
    keycodeNames: ["KC_D"],
    uiCodes: ["KeyD"],
    category: "Alphanumeric",
  },
  {
    name: "E",
    keycode: Keycode.KC_E,
    keycodeNames: ["KC_E"],
    uiCodes: ["KeyE"],
    category: "Alphanumeric",
  },
  {
    name: "F",
    keycode: Keycode.KC_F,
    keycodeNames: ["KC_F"],
    uiCodes: ["KeyF"],
    category: "Alphanumeric",
  },
  {
    name: "G",
    keycode: Keycode.KC_G,
    keycodeNames: ["KC_G"],
    uiCodes: ["KeyG"],
    category: "Alphanumeric",
  },
  {
    name: "H",
    keycode: Keycode.KC_H,
    keycodeNames: ["KC_H"],
    uiCodes: ["KeyH"],
    category: "Alphanumeric",
  },
  {
    name: "I",
    keycode: Keycode.KC_I,
    keycodeNames: ["KC_I"],
    uiCodes: ["KeyI"],
    category: "Alphanumeric",
  },
  {
    name: "J",
    keycode: Keycode.KC_J,
    keycodeNames: ["KC_J"],
    uiCodes: ["KeyJ"],
    category: "Alphanumeric",
  },
  {
    name: "K",
    keycode: Keycode.KC_K,
    keycodeNames: ["KC_K"],
    uiCodes: ["KeyK"],
    category: "Alphanumeric",
  },
  {
    name: "L",
    keycode: Keycode.KC_L,
    keycodeNames: ["KC_L"],
    uiCodes: ["KeyL"],
    category: "Alphanumeric",
  },
  {
    name: "M",
    keycode: Keycode.KC_M,
    keycodeNames: ["KC_M"],
    uiCodes: ["KeyM"],
    category: "Alphanumeric",
  },
  {
    name: "N",
    keycode: Keycode.KC_N,
    keycodeNames: ["KC_N"],
    uiCodes: ["KeyN"],
    category: "Alphanumeric",
  },
  {
    name: "O",
    keycode: Keycode.KC_O,
    keycodeNames: ["KC_O"],
    uiCodes: ["KeyO"],
    category: "Alphanumeric",
  },
  {
    name: "P",
    keycode: Keycode.KC_P,
    keycodeNames: ["KC_P"],
    uiCodes: ["KeyP"],
    category: "Alphanumeric",
  },
  {
    name: "Q",
    keycode: Keycode.KC_Q,
    keycodeNames: ["KC_Q"],
    uiCodes: ["KeyQ"],
    category: "Alphanumeric",
  },
  {
    name: "R",
    keycode: Keycode.KC_R,
    keycodeNames: ["KC_R"],
    uiCodes: ["KeyR"],
    category: "Alphanumeric",
  },
  {
    name: "S",
    keycode: Keycode.KC_S,
    keycodeNames: ["KC_S"],
    uiCodes: ["KeyS"],
    category: "Alphanumeric",
  },
  {
    name: "T",
    keycode: Keycode.KC_T,
    keycodeNames: ["KC_T"],
    uiCodes: ["KeyT"],
    category: "Alphanumeric",
  },
  {
    name: "U",
    keycode: Keycode.KC_U,
    keycodeNames: ["KC_U"],
    uiCodes: ["KeyU"],
    category: "Alphanumeric",
  },
  {
    name: "V",
    keycode: Keycode.KC_V,
    keycodeNames: ["KC_V"],
    uiCodes: ["KeyV"],
    category: "Alphanumeric",
  },
  {
    name: "W",
    keycode: Keycode.KC_W,
    keycodeNames: ["KC_W"],
    uiCodes: ["KeyW"],
    category: "Alphanumeric",
  },
  {
    name: "X",
    keycode: Keycode.KC_X,
    keycodeNames: ["KC_X"],
    uiCodes: ["KeyX"],
    category: "Alphanumeric",
  },
  {
    name: "Y",
    keycode: Keycode.KC_Y,
    keycodeNames: ["KC_Y"],
    uiCodes: ["KeyY"],
    category: "Alphanumeric",
  },
  {
    name: "Z",
    keycode: Keycode.KC_Z,
    keycodeNames: ["KC_Z"],
    uiCodes: ["KeyZ"],
    category: "Alphanumeric",
  },
  {
    name: "1!",
    render: "!\n1",
    keycode: Keycode.KC_1,
    keycodeNames: ["KC_1"],
    uiCodes: ["Digit1"],
    category: "Alphanumeric",
  },
  {
    name: "2@",
    render: "@\n2",
    keycode: Keycode.KC_2,
    keycodeNames: ["KC_2"],
    uiCodes: ["Digit2"],
    category: "Alphanumeric",
  },
  {
    name: "3#",
    render: "#\n3",
    keycode: Keycode.KC_3,
    keycodeNames: ["KC_3"],
    uiCodes: ["Digit3"],
    category: "Alphanumeric",
  },
  {
    name: "4$",
    render: "$\n4",
    keycode: Keycode.KC_4,
    keycodeNames: ["KC_4"],
    uiCodes: ["Digit4"],
    category: "Alphanumeric",
  },
  {
    name: "5%",
    render: "%\n5",
    keycode: Keycode.KC_5,
    keycodeNames: ["KC_5"],
    uiCodes: ["Digit5"],
    category: "Alphanumeric",
  },
  {
    name: "6^",
    render: "^\n6",
    keycode: Keycode.KC_6,
    keycodeNames: ["KC_6"],
    uiCodes: ["Digit6"],
    category: "Alphanumeric",
  },
  {
    name: "7&",
    render: "&\n7",
    keycode: Keycode.KC_7,
    keycodeNames: ["KC_7"],
    uiCodes: ["Digit7"],
    category: "Alphanumeric",
  },
  {
    name: "8*",
    render: "*\n8",
    keycode: Keycode.KC_8,
    keycodeNames: ["KC_8"],
    uiCodes: ["Digit8"],
    category: "Alphanumeric",
  },
  {
    name: "9(",
    render: "(\n9",
    keycode: Keycode.KC_9,
    keycodeNames: ["KC_9"],
    uiCodes: ["Digit9"],
    category: "Alphanumeric",
  },
  {
    name: "0)",
    render: ")\n0",
    keycode: Keycode.KC_0,
    keycodeNames: ["KC_0"],
    uiCodes: ["Digit0"],
    category: "Alphanumeric",
  },
  {
    name: "Enter",
    keycode: Keycode.KC_ENTER,
    keycodeNames: ["KC_ENTER", "KC_ENT"],
    uiCodes: ["Enter"],
    category: "Navigation",
  },
  {
    name: "Esc",
    keycode: Keycode.KC_ESCAPE,
    keycodeNames: ["KC_ESCAPE", "KC_ESC"],
    uiCodes: ["Escape"],
    category: "Navigation",
  },
  {
    name: "Bksp",
    description: "Backspace",
    keycode: Keycode.KC_BACKSPACE,
    keycodeNames: ["KC_BACKSPACE", "KC_BSPC"],
    uiCodes: ["Backspace"],
    category: "Navigation",
  },
  {
    name: "Tab",
    keycode: Keycode.KC_TAB,
    keycodeNames: ["KC_TAB"],
    uiCodes: ["Tab"],
    category: "Navigation",
  },
  {
    name: "Space",
    keycode: Keycode.KC_SPACE,
    keycodeNames: ["KC_SPACE", "KC_SPC"],
    uiCodes: ["Space"],
    category: "Navigation",
  },
  {
    name: "-_",
    render: "_\n-",
    keycode: Keycode.KC_MINUS,
    keycodeNames: ["KC_MINUS", "KC_MINS"],
    uiCodes: ["Minus"],
    category: "Alphanumeric",
  },
  {
    name: "=+",
    render: "+\n=",
    keycode: Keycode.KC_EQUAL,
    keycodeNames: ["KC_EQUAL", "KC_EQL"],
    uiCodes: ["Equal"],
    category: "Alphanumeric",
  },
  {
    name: "[{",
    render: "{\n[",
    keycode: Keycode.KC_LEFT_BRACKET,
    keycodeNames: ["KC_LEFT_BRACKET", "KC_LBRC"],
    uiCodes: ["BracketLeft"],
    category: "Alphanumeric",
  },
  {
    name: "]}",
    render: "}\n]",
    keycode: Keycode.KC_RIGHT_BRACKET,
    keycodeNames: ["KC_RIGHT_BRACKET", "KC_RBRC"],
    uiCodes: ["BracketRight"],
    category: "Alphanumeric",
  },
  {
    name: "\\|",
    render: "|\n\\",
    keycode: Keycode.KC_BACKSLASH,
    keycodeNames: ["KC_BACKSLASH", "KC_BSLS"],
    uiCodes: ["Backslash"],
    category: "Alphanumeric",
  },
  {
    name: "ISO #~",
    render: "ISO\n#",
    keycode: Keycode.KC_NONUS_HASH,
    keycodeNames: ["KC_NONUS_HASH", "KC_NUHS"],
    uiCodes: [
      /* "Backslash" */
    ],
    category: "International",
  },
  {
    name: ";:",
    render: ":\n;",
    keycode: Keycode.KC_SEMICOLON,
    keycodeNames: ["KC_SEMICOLON", "KC_SCLN"],
    uiCodes: ["Semicolon"],
    category: "Alphanumeric",
  },
  {
    name: "'\"",
    render: "\"\n'",
    keycode: Keycode.KC_QUOTE,
    keycodeNames: ["KC_QUOTE", "KC_QUOT"],
    uiCodes: ["Quote"],
    category: "Alphanumeric",
  },
  {
    name: "`~",
    render: "~\n`",
    keycode: Keycode.KC_GRAVE,
    keycodeNames: ["KC_GRAVE", "KC_GRV"],
    uiCodes: ["Backquote"],
    category: "Alphanumeric",
  },
  {
    name: ",<",
    render: "<\n,",
    keycode: Keycode.KC_COMMA,
    keycodeNames: ["KC_COMMA", "KC_COMM"],
    uiCodes: ["Comma"],
    category: "Alphanumeric",
  },
  {
    name: ".>",
    render: ">\n.",
    keycode: Keycode.KC_DOT,
    keycodeNames: ["KC_DOT"],
    uiCodes: ["Period"],
    category: "Alphanumeric",
  },
  {
    name: "/?",
    render: "?\n/",
    keycode: Keycode.KC_SLASH,
    keycodeNames: ["KC_SLASH", "KC_SLSH"],
    uiCodes: ["Slash"],
    category: "Alphanumeric",
  },
  {
    name: "Caps",
    description: "Caps Lock",
    keycode: Keycode.KC_CAPS_LOCK,
    keycodeNames: ["KC_CAPS_LOCK", "KC_CAPS"],
    uiCodes: ["CapsLock"],
    category: "Navigation",
  },
  {
    name: "F1",
    keycode: Keycode.KC_F1,
    keycodeNames: ["KC_F1"],
    uiCodes: ["F1"],
    category: "Function",
  },
  {
    name: "F2",
    keycode: Keycode.KC_F2,
    keycodeNames: ["KC_F2"],
    uiCodes: ["F2"],
    category: "Function",
  },
  {
    name: "F3",
    keycode: Keycode.KC_F3,
    keycodeNames: ["KC_F3"],
    uiCodes: ["F3"],
    category: "Function",
  },
  {
    name: "F4",
    keycode: Keycode.KC_F4,
    keycodeNames: ["KC_F4"],
    uiCodes: ["F4"],
    category: "Function",
  },
  {
    name: "F5",
    keycode: Keycode.KC_F5,
    keycodeNames: ["KC_F5"],
    uiCodes: ["F5"],
    category: "Function",
  },
  {
    name: "F6",
    keycode: Keycode.KC_F6,
    keycodeNames: ["KC_F6"],
    uiCodes: ["F6"],
    category: "Function",
  },
  {
    name: "F7",
    keycode: Keycode.KC_F7,
    keycodeNames: ["KC_F7"],
    uiCodes: ["F7"],
    category: "Function",
  },
  {
    name: "F8",
    keycode: Keycode.KC_F8,
    keycodeNames: ["KC_F8"],
    uiCodes: ["F8"],
    category: "Function",
  },
  {
    name: "F9",
    keycode: Keycode.KC_F9,
    keycodeNames: ["KC_F9"],
    uiCodes: ["F9"],
    category: "Function",
  },
  {
    name: "F10",
    keycode: Keycode.KC_F10,
    keycodeNames: ["KC_F10"],
    uiCodes: ["F10"],
    category: "Function",
  },
  {
    name: "F11",
    keycode: Keycode.KC_F11,
    keycodeNames: ["KC_F11"],
    uiCodes: ["F11"],
    category: "Function",
  },
  {
    name: "F12",
    keycode: Keycode.KC_F12,
    keycodeNames: ["KC_F12"],
    uiCodes: ["F12"],
    category: "Function",
  },
  {
    name: "Print",
    description: "Print Screen",
    keycode: Keycode.KC_PRINT_SCREEN,
    keycodeNames: ["KC_PRINT_SCREEN", "KC_PSCR"],
    uiCodes: ["PrintScreen"],
    category: "System",
  },
  {
    name: "Scroll",
    description: "Scroll Lock",
    keycode: Keycode.KC_SCROLL_LOCK,
    keycodeNames: ["KC_SCROLL_LOCK", "KC_SCRL"],
    uiCodes: ["ScrollLock"],
    category: "Navigation",
  },
  {
    name: "Pause",
    keycode: Keycode.KC_PAUSE,
    keycodeNames: ["KC_PAUSE", "KC_PAUS", "KC_BRK", "KC_BRMU"],
    uiCodes: ["Pause"],
    category: "System",
  },
  {
    name: "Ins",
    description: "Insert",
    keycode: Keycode.KC_INSERT,
    keycodeNames: ["KC_INSERT", "KC_INS"],
    uiCodes: ["Insert"],
    category: "Navigation",
  },
  {
    name: "Home",
    keycode: Keycode.KC_HOME,
    keycodeNames: ["KC_HOME"],
    uiCodes: ["Home"],
    category: "Navigation",
  },
  {
    name: "PgUp",
    description: "Page Up",
    keycode: Keycode.KC_PAGE_UP,
    keycodeNames: ["KC_PAGE_UP", "KC_PGUP"],
    uiCodes: ["PageUp"],
    category: "Navigation",
  },
  {
    name: "Del",
    description: "Delete",
    keycode: Keycode.KC_DELETE,
    keycodeNames: ["KC_DELETE", "KC_DEL"],
    uiCodes: ["Delete"],
    category: "Navigation",
  },
  {
    name: "End",
    keycode: Keycode.KC_END,
    keycodeNames: ["KC_END"],
    uiCodes: ["End"],
    category: "Navigation",
  },
  {
    name: "PgDn",
    description: "Page Down",
    keycode: Keycode.KC_PAGE_DOWN,
    keycodeNames: ["KC_PAGE_DOWN", "KC_PGDN"],
    uiCodes: ["PageDown"],
    category: "Navigation",
  },
  {
    name: "→",
    description: "Right Arrow",
    render: <ArrowRight />,
    keycode: Keycode.KC_RIGHT,
    keycodeNames: ["KC_RIGHT", "KC_RGHT"],
    uiCodes: ["ArrowRight"],
    category: "Navigation",
  },
  {
    name: "←",
    description: "Left Arrow",
    render: <ArrowLeft />,
    keycode: Keycode.KC_LEFT,
    keycodeNames: ["KC_LEFT"],
    uiCodes: ["ArrowLeft"],
    category: "Navigation",
  },
  {
    name: "↓",
    description: "Down Arrow",
    render: <ArrowDown />,
    keycode: Keycode.KC_DOWN,
    keycodeNames: ["KC_DOWN"],
    uiCodes: ["ArrowDown"],
    category: "Navigation",
  },
  {
    name: "↑",
    description: "Up Arrow",
    render: <ArrowUp />,
    keycode: Keycode.KC_UP,
    keycodeNames: ["KC_UP"],
    uiCodes: ["ArrowUp"],
    category: "Navigation",
  },
  {
    name: "Num",
    description: "Num Lock",
    keycode: Keycode.KC_NUM_LOCK,
    keycodeNames: ["KC_NUM_LOCK", "KC_NUM"],
    uiCodes: ["NumLock"],
    category: "Numpad",
  },
  {
    name: "Num /",
    description: "Numpad /",
    render: "Num\n/",
    keycode: Keycode.KC_KP_SLASH,
    keycodeNames: ["KC_KP_SLASH", "KC_PSLS"],
    uiCodes: ["NumpadDivide"],
    category: "Numpad",
  },
  {
    name: "Num *",
    description: "Numpad *",
    render: "Num\n*",
    keycode: Keycode.KC_KP_ASTERISK,
    keycodeNames: ["KC_KP_ASTERISK", "KC_PAST"],
    uiCodes: ["NumpadMultiply"],
    category: "Numpad",
  },
  {
    name: "Num -",
    description: "Numpad -",
    render: "Num\n-",
    keycode: Keycode.KC_KP_MINUS,
    keycodeNames: ["KC_KP_MINUS", "KC_PMNS"],
    uiCodes: ["NumpadSubtract"],
    category: "Numpad",
  },
  {
    name: "Num +",
    description: "Numpad +",
    render: "Num\n+",
    keycode: Keycode.KC_KP_PLUS,
    keycodeNames: ["KC_KP_PLUS", "KC_PPLS"],
    uiCodes: ["NumpadAdd"],
    category: "Numpad",
  },
  {
    name: "Num Enter",
    description: "Numpad Enter",
    render: "Num\nEnter",
    keycode: Keycode.KC_KP_ENTER,
    keycodeNames: ["KC_KP_ENTER", "KC_PENT"],
    uiCodes: ["NumpadEnter"],
    category: "Numpad",
  },
  {
    name: "Num 1",
    description: "Numpad 1 & End",
    render: "Num\n1",
    keycode: Keycode.KC_KP_1,
    keycodeNames: ["KC_KP_1", "KC_P1"],
    uiCodes: ["Numpad1"],
    category: "Numpad",
  },
  {
    name: "Num 2",
    description: "Numpad 2 & ↓",
    render: "Num\n2",
    keycode: Keycode.KC_KP_2,
    keycodeNames: ["KC_KP_2", "KC_P2"],
    uiCodes: ["Numpad2"],
    category: "Numpad",
  },
  {
    name: "Num 3",
    description: "Numpad 3 & PgDn",
    render: "Num\n3",
    keycode: Keycode.KC_KP_3,
    keycodeNames: ["KC_KP_3", "KC_P3"],
    uiCodes: ["Numpad3"],
    category: "Numpad",
  },
  {
    name: "Num 4",
    description: "Numpad 4 & ←",
    render: "Num\n4",
    keycode: Keycode.KC_KP_4,
    keycodeNames: ["KC_KP_4", "KC_P4"],
    uiCodes: ["Numpad4"],
    category: "Numpad",
  },
  {
    name: "Num 5",
    description: "Numpad 5",
    render: "Num\n5",
    keycode: Keycode.KC_KP_5,
    keycodeNames: ["KC_KP_5", "KC_P5"],
    uiCodes: ["Numpad5"],
    category: "Numpad",
  },
  {
    name: "Num 6",
    description: "Numpad 6 & →",
    render: "Num\n6",
    keycode: Keycode.KC_KP_6,
    keycodeNames: ["KC_KP_6", "KC_P6"],
    uiCodes: ["Numpad6"],
    category: "Numpad",
  },
  {
    name: "Num 7",
    description: "Numpad 7 & Home",
    render: "Num\n7",
    keycode: Keycode.KC_KP_7,
    keycodeNames: ["KC_KP_7", "KC_P7"],
    uiCodes: ["Numpad7"],
    category: "Numpad",
  },
  {
    name: "Num 8",
    description: "Numpad 8 & ↑",
    render: "Num\n8",
    keycode: Keycode.KC_KP_8,
    keycodeNames: ["KC_KP_8", "KC_P8"],
    uiCodes: ["Numpad8"],
    category: "Numpad",
  },
  {
    name: "Num 9",
    description: "Numpad 9 & PgUp",
    render: "Num\n9",
    keycode: Keycode.KC_KP_9,
    keycodeNames: ["KC_KP_9", "KC_P9"],
    uiCodes: ["Numpad9"],
    category: "Numpad",
  },
  {
    name: "Num 0",
    description: "Numpad 0 & Ins",
    render: "Num\n0",
    keycode: Keycode.KC_KP_0,
    keycodeNames: ["KC_KP_0", "KC_P0"],
    uiCodes: ["Numpad0"],
    category: "Numpad",
  },
  {
    name: "Num .",
    description: "Numpad . & Del",
    render: "Num\n.",
    keycode: Keycode.KC_KP_DOT,
    keycodeNames: ["KC_KP_DOT", "KC_PDOT"],
    uiCodes: ["NumpadDecimal"],
    category: "Numpad",
  },
  {
    name: "ISO \\|",
    render: "ISO\n\\",
    keycode: Keycode.KC_NONUS_BACKSLASH,
    keycodeNames: ["KC_NONUS_BACKSLASH", "KC_NUBS"],
    uiCodes: ["IntlBackslash"],
    category: "International",
  },
  {
    name: "Menu",
    keycode: Keycode.KC_APPLICATION,
    keycodeNames: ["KC_APPLICATION", "KC_APP"],
    uiCodes: ["ContextMenu"],
    category: "System",
  },
  {
    name: "Num =",
    description: "Numpad =",
    render: "Num\n=",
    keycode: Keycode.KC_KP_EQUAL,
    keycodeNames: ["KC_KP_EQUAL", "KC_PEQL"],
    uiCodes: ["NumpadEqual"],
    category: "Numpad",
  },
  {
    name: "F13",
    keycode: Keycode.KC_F13,
    keycodeNames: ["KC_F13"],
    uiCodes: ["F13"],
    category: "Function",
  },
  {
    name: "F14",
    keycode: Keycode.KC_F14,
    keycodeNames: ["KC_F14"],
    uiCodes: ["F14"],
    category: "Function",
  },
  {
    name: "F15",
    keycode: Keycode.KC_F15,
    keycodeNames: ["KC_F15"],
    uiCodes: ["F15"],
    category: "Function",
  },
  {
    name: "F16",
    keycode: Keycode.KC_F16,
    keycodeNames: ["KC_F16"],
    uiCodes: ["F16"],
    category: "Function",
  },
  {
    name: "F17",
    keycode: Keycode.KC_F17,
    keycodeNames: ["KC_F17"],
    uiCodes: ["F17"],
    category: "Function",
  },
  {
    name: "F18",
    keycode: Keycode.KC_F18,
    keycodeNames: ["KC_F18"],
    uiCodes: ["F18"],
    category: "Function",
  },
  {
    name: "F19",
    keycode: Keycode.KC_F19,
    keycodeNames: ["KC_F19"],
    uiCodes: ["F19"],
    category: "Function",
  },
  {
    name: "F20",
    keycode: Keycode.KC_F20,
    keycodeNames: ["KC_F20"],
    uiCodes: ["F20"],
    category: "Function",
  },
  {
    name: "F21",
    keycode: Keycode.KC_F21,
    keycodeNames: ["KC_F21"],
    uiCodes: ["F21"],
    category: "Function",
  },
  {
    name: "F22",
    keycode: Keycode.KC_F22,
    keycodeNames: ["KC_F22"],
    uiCodes: ["F22"],
    category: "Function",
  },
  {
    name: "F23",
    keycode: Keycode.KC_F23,
    keycodeNames: ["KC_F23"],
    uiCodes: ["F23"],
    category: "Function",
  },
  {
    name: "F24",
    keycode: Keycode.KC_F24,
    keycodeNames: ["KC_F24"],
    uiCodes: ["F24"],
    category: "Function",
  },
  {
    name: "JP \\_",
    render: "JP\n\\",
    keycode: Keycode.KC_INTERNATIONAL_1,
    keycodeNames: ["KC_INTERNATIONAL_1", "KC_INT1"],
    uiCodes: ["IntlRo"],
    category: "International",
  },
  {
    name: "かな",
    description: "Katakana ↔ Hiragana ↔ Rōmaji",
    keycode: Keycode.KC_INTERNATIONAL_2,
    keycodeNames: ["KC_INTERNATIONAL_2", "KC_INT2"],
    uiCodes: ["KanaMode"],
    category: "International",
  },
  {
    name: "JP ¥|",
    render: "JP\n¥",
    keycode: Keycode.KC_INTERNATIONAL_3,
    keycodeNames: ["KC_INTERNATIONAL_3", "KC_INT3"],
    uiCodes: ["IntlYen"],
    category: "International",
  },
  {
    name: "変換",
    description: "Henkan (Conversion)",
    keycode: Keycode.KC_INTERNATIONAL_4,
    keycodeNames: ["KC_INTERNATIONAL_4", "KC_INT4"],
    uiCodes: ["Convert"],
    category: "International",
  },
  {
    name: "無変換",
    description: "Muhenkan (Non-conversion)",
    keycode: Keycode.KC_INTERNATIONAL_5,
    keycodeNames: ["KC_INTERNATIONAL_5", "KC_INT5"],
    uiCodes: ["NonConvert"],
    category: "International",
  },
  {
    name: "ImeOn",
    keycode: Keycode.KC_LANGUAGE_1,
    keycodeNames: ["KC_LANGUAGE_1", "KC_LNG1"],
    uiCodes: ["Lang1"],
    category: "International",
  },
  {
    name: "ImeOff",
    keycode: Keycode.KC_LANGUAGE_2,
    keycodeNames: ["KC_LANGUAGE_2", "KC_LNG2"],
    uiCodes: ["Lang2"],
    category: "International",
  },
  {
    name: "Sys Power",
    description: "System Power",
    render: <Power />,
    keycode: Keycode.KC_SYSTEM_POWER,
    keycodeNames: ["KC_SYSTEM_POWER", "KC_PWR"],
    uiCodes: ["Power"],
    category: "System",
  },
  {
    name: "Sys Sleep",
    description: "System Sleep",
    render: <Moon />,
    keycode: Keycode.KC_SYSTEM_SLEEP,
    keycodeNames: ["KC_SYSTEM_SLEEP", "KC_SLEP"],
    uiCodes: ["Sleep"],
    category: "System",
  },
  {
    name: "Sys Wake",
    description: "System Wake",
    render: <AlarmClock />,
    keycode: Keycode.KC_SYSTEM_WAKE,
    keycodeNames: ["KC_SYSTEM_WAKE", "KC_WAKE"],
    uiCodes: ["WakeUp"],
    category: "System",
  },
  {
    name: "Mute",
    description: "Mute Audio",
    render: <VolumeOff />,
    keycode: Keycode.KC_AUDIO_MUTE,
    keycodeNames: ["KC_AUDIO_MUTE", "KC_MUTE"],
    uiCodes: ["AudioVolumeMute", "VolumeMute"],
    category: "Media",
  },
  {
    name: "Vol +",
    description: "Volume Up",
    render: <Volume2 />,
    keycode: Keycode.KC_AUDIO_VOL_UP,
    keycodeNames: ["KC_AUDIO_VOL_UP", "KC_VOLU"],
    uiCodes: ["AudioVolumeUp", "VolumeUp"],
    category: "Media",
  },
  {
    name: "Vol -",
    description: "Volume Down",
    render: <Volume1 />,
    keycode: Keycode.KC_AUDIO_VOL_DOWN,
    keycodeNames: ["KC_AUDIO_VOL_DOWN", "KC_VOLD"],
    uiCodes: ["AudioVolumeDown", "VolumeDown"],
    category: "Media",
  },
  {
    name: "Next",
    description: "Media Next",
    render: <SkipForward />,
    keycode: Keycode.KC_MEDIA_NEXT_TRACK,
    keycodeNames: ["KC_MEDIA_NEXT_TRACK", "KC_MNXT"],
    uiCodes: ["MediaTrackNext"],
    category: "Media",
  },
  {
    name: "Prev",
    description: "Media Previous",
    render: <SkipBack />,
    keycode: Keycode.KC_MEDIA_PREV_TRACK,
    keycodeNames: ["KC_MEDIA_PREV_TRACK", "KC_MPRV"],
    uiCodes: ["MediaTrackPrevious"],
    category: "Media",
  },
  {
    name: "Stop",
    description: "Media Stop",
    render: <Square />,
    keycode: Keycode.KC_MEDIA_STOP,
    keycodeNames: ["KC_MEDIA_STOP", "KC_MSTP"],
    uiCodes: ["MediaStop"],
    category: "Media",
  },
  {
    name: "Play",
    description: "Media Play/Pause",
    render: <Play />,
    keycode: Keycode.KC_MEDIA_PLAY_PAUSE,
    keycodeNames: ["KC_MEDIA_PLAY_PAUSE", "KC_MPLY"],
    uiCodes: ["MediaPlayPause"],
    category: "Media",
  },
  {
    name: "Select",
    description: "Media Select",
    keycode: Keycode.KC_MEDIA_SELECT,
    keycodeNames: ["KC_MEDIA_SELECT", "KC_MSEL"],
    uiCodes: ["MediaSelect"],
    category: "Media",
  },
  {
    name: "Eject",
    description: "Media Eject",
    keycode: Keycode.KC_MEDIA_EJECT,
    keycodeNames: ["KC_MEDIA_EJECT", "KC_EJCT"],
    uiCodes: ["Eject"],
    category: "Media",
  },
  {
    name: "Mail",
    description: "Launch Mail",
    render: <Mail />,
    keycode: Keycode.KC_MAIL,
    keycodeNames: ["KC_MAIL"],
    uiCodes: ["LaunchMail"],
    category: "Application",
  },
  {
    name: "Calc",
    description: "Launch Calculator",
    render: <Calculator />,
    keycode: Keycode.KC_CALCULATOR,
    keycodeNames: ["KC_CALCULATOR", "KC_CALC"],
    uiCodes: [],
    category: "Application",
  },
  {
    name: "File",
    description: "Launch File Explorer",
    render: <FolderClosed />,
    keycode: Keycode.KC_MY_COMPUTER,
    keycodeNames: ["KC_MY_COMPUTER", "KC_MYCM"],
    uiCodes: [],
    category: "Application",
  },
  {
    name: "Browser Search",
    description: "Browser Search",
    render: (
      <>
        Web
        <Search />
      </>
    ),
    keycode: Keycode.KC_WWW_SEARCH,
    keycodeNames: ["KC_WWW_SEARCH", "KC_WSCH"],
    uiCodes: ["BrowserSearch"],
    category: "Browser",
  },
  {
    name: "Browser Home",
    description: "Browser Home",
    render: (
      <>
        Web
        <Home />
      </>
    ),
    keycode: Keycode.KC_WWW_HOME,
    keycodeNames: ["KC_WWW_HOME", "KC_WHOM"],
    uiCodes: ["BrowserHome"],
    category: "Browser",
  },
  {
    name: "Browser Back",
    description: "Browser Back",
    render: (
      <>
        Web
        <ArrowBigLeft />
      </>
    ),
    keycode: Keycode.KC_WWW_BACK,
    keycodeNames: ["KC_WWW_BACK", "KC_WBAK"],
    uiCodes: ["BrowserBack"],
    category: "Browser",
  },
  {
    name: "Browser Fwd",
    description: "Browser Forward",
    render: (
      <>
        Web
        <ArrowBigRight />
      </>
    ),
    keycode: Keycode.KC_WWW_FORWARD,
    keycodeNames: ["KC_WWW_FORWARD", "KC_WFWD"],
    uiCodes: ["BrowserForward"],
    category: "Browser",
  },
  {
    name: "Browser Stop",
    description: "Browser Stop",
    render: (
      <>
        Web
        <Square />
      </>
    ),
    keycode: Keycode.KC_WWW_STOP,
    keycodeNames: ["KC_WWW_STOP", "KC_WSTP"],
    uiCodes: ["BrowserStop"],
    category: "Browser",
  },
  {
    name: "Browser Ref",
    description: "Browser Refresh",
    render: (
      <>
        Web
        <RefreshCw />
      </>
    ),
    keycode: Keycode.KC_WWW_REFRESH,
    keycodeNames: ["KC_WWW_REFRESH", "KC_WREF"],
    uiCodes: ["BrowserRefresh"],
    category: "Browser",
  },
  {
    name: "Browser Fav",
    description: "Browser Favorites",
    render: (
      <>
        Web
        <Bookmark />
      </>
    ),
    keycode: Keycode.KC_WWW_FAVORITES,
    keycodeNames: ["KC_WWW_FAVORITES", "KC_WFAV"],
    uiCodes: ["BrowserFavorites"],
    category: "Browser",
  },
  {
    name: "Fast Fwd",
    description: "Media Fast Forward",
    render: <FastForward />,
    keycode: Keycode.KC_MEDIA_FAST_FORWARD,
    keycodeNames: ["KC_MEDIA_FAST_FORWARD", "KC_MFFD"],
    uiCodes: [],
    category: "Media",
  },
  {
    name: "Rwd",
    description: "Media Rewind",
    render: <Rewind />,
    keycode: Keycode.KC_MEDIA_REWIND,
    keycodeNames: ["KC_MEDIA_REWIND", "KC_MRWD"],
    uiCodes: [],
    category: "Media",
  },
  {
    name: "Scr +",
    description: "Screen Brightness Up",
    render: <Sun />,
    keycode: Keycode.KC_BRIGHTNESS_UP,
    keycodeNames: ["KC_BRIGHTNESS_UP", "KC_BRIU"],
    uiCodes: [],
    category: "System",
  },
  {
    name: "Scr -",
    description: "Screen Brightness Down",
    render: <SunDim />,
    keycode: Keycode.KC_BRIGHTNESS_DOWN,
    keycodeNames: ["KC_BRIGHTNESS_DOWN", "KC_BRID"],
    uiCodes: [],
    category: "System",
  },
  {
    name: "Mssn Ctrl",
    description: "Launch Mission Control",
    render: <LayoutDashboard />,
    keycode: Keycode.KC_MISSION_CONTROL,
    keycodeNames: ["KC_MISSION_CONTROL", "KC_MCTL"],
    uiCodes: [],
    category: "System",
  },
  {
    name: "Lpad",
    description: "Launch Launchpad",
    render: <Grid3X3 />,
    keycode: Keycode.KC_LAUNCHPAD,
    keycodeNames: ["KC_LAUNCHPAD", "KC_LPAD"],
    uiCodes: [],
    category: "System",
  },
  {
    name: "L-Ctrl",
    description: "Left Control",
    keycode: Keycode.KC_LEFT_CTRL,
    keycodeNames: ["KC_LEFT_CTRL", "KC_LCTL"],
    uiCodes: ["ControlLeft"],
    category: "Modifier",
  },
  {
    name: "L-Shift",
    description: "Left Shift",
    keycode: Keycode.KC_LEFT_SHIFT,
    keycodeNames: ["KC_LEFT_SHIFT", "KC_LSFT"],
    uiCodes: ["ShiftLeft"],
    category: "Modifier",
  },
  {
    name: "L-Alt",
    description: "Left Alt/Option",
    keycode: Keycode.KC_LEFT_ALT,
    keycodeNames: ["KC_LEFT_ALT", "KC_LALT", "KC_LOPT"],
    uiCodes: ["AltLeft"],
    category: "Modifier",
  },
  {
    name: "L-Win",
    description: "Left Windows/Super/Command",
    keycode: Keycode.KC_LEFT_GUI,
    keycodeNames: ["KC_LEFT_GUI", "KC_LGUI", "KC_LCMD", "KC_LWIN"],
    uiCodes: ["MetaLeft", "OSLeft"],
    category: "Modifier",
  },
  {
    name: "R-Ctrl",
    description: "Right Control",
    keycode: Keycode.KC_RIGHT_CTRL,
    keycodeNames: ["KC_RIGHT_CTRL", "KC_RCTL"],
    uiCodes: ["ControlRight"],
    category: "Modifier",
  },
  {
    name: "R-Shift",
    description: "Right Shift",
    keycode: Keycode.KC_RIGHT_SHIFT,
    keycodeNames: ["KC_RIGHT_SHIFT", "KC_RSFT"],
    uiCodes: ["ShiftRight"],
    category: "Modifier",
  },
  {
    name: "R-Alt",
    description: "Right Alt/Option",
    keycode: Keycode.KC_RIGHT_ALT,
    keycodeNames: ["KC_RIGHT_ALT", "KC_RALT", "KC_ROPT", "KC_ALGR"],
    uiCodes: ["AltRight"],
    category: "Modifier",
  },
  {
    name: "R-Win",
    description: "Right Windows/Super/Command",
    keycode: Keycode.KC_RIGHT_GUI,
    keycodeNames: ["KC_RIGHT_GUI", "KC_RGUI", "KC_RCMD", "KC_RWIN"],
    uiCodes: ["MetaRight", "OSRight"],
    category: "Modifier",
  },
  {
    name: "Boot",
    description: "Enter bootloader",
    render: <HardDriveDownload />,
    keycode: Keycode.SP_MAGIC_BOOTLOADER,
    keycodeNames: ["SP_MAGIC_BOOTLOADER"],
    uiCodes: [],
    category: "Special",
  },
  {
    name: "Reset",
    description: "Software Reset",
    render: <RefreshCw />,
    keycode: Keycode.SP_MAGIC_REBOOT,
    keycodeNames: ["SP_MAGIC_REBOOT"],
    uiCodes: [],
    category: "Special",
  },
  {
    name: "Factory Reset",
    description: "Reset to default configuration defined in the firmware",
    render: <Factory />,
    keycode: Keycode.SP_MAGIC_FACTORY_RESET,
    keycodeNames: ["SP_MAGIC_FACTORY_RESET"],
    uiCodes: [],
    category: "Special",
  },
  {
    name: "Recalibrate",
    description: "Recalibrate ADC values",
    render: <Crosshair />,
    keycode: Keycode.SP_MAGIC_RECALIBRATE,
    keycodeNames: ["SP_MAGIC_RECALIBRATE"],
    uiCodes: [],
    category: "Special",
  },
]

export const KEYCODE_METADATA_MAP: Record<number, KeycodeMetadata> =
  KEYCODE_METADATA.reduce(
    (acc, metadata) => {
      acc[metadata.keycode] = metadata
      return acc
    },
    {} as Record<number, KeycodeMetadata>,
  )
