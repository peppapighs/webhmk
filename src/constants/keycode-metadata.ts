import { Keycode, KeycodeMetadata } from "@/types/keycodes"

export const KEYCODE_METADATA: KeycodeMetadata[] = [
  {
    name: "",
    description: "Nothing",
    keycode: Keycode.KC_NO,
    keycodeNames: ["KC_NO", "XXXXXXX"],
    uiCodes: [],
  },
  {
    name: "▽",
    description: "Pass-through",
    keycode: Keycode.KC_TRANSPARENT,
    keycodeNames: ["KC_TRANSPARENT", "_______", "KC_TRNS"],
    uiCodes: [],
  },
  {
    name: "A",
    keycode: Keycode.KC_A,
    keycodeNames: ["KC_A"],
    uiCodes: ["KeyA"],
  },
  {
    name: "B",
    keycode: Keycode.KC_B,
    keycodeNames: ["KC_B"],
    uiCodes: ["KeyB"],
  },
  {
    name: "C",
    keycode: Keycode.KC_C,
    keycodeNames: ["KC_C"],
    uiCodes: ["KeyC"],
  },
  {
    name: "D",
    keycode: Keycode.KC_D,
    keycodeNames: ["KC_D"],
    uiCodes: ["KeyD"],
  },
  {
    name: "E",
    keycode: Keycode.KC_E,
    keycodeNames: ["KC_E"],
    uiCodes: ["KeyE"],
  },
  {
    name: "F",
    keycode: Keycode.KC_F,
    keycodeNames: ["KC_F"],
    uiCodes: ["KeyF"],
  },
  {
    name: "G",
    keycode: Keycode.KC_G,
    keycodeNames: ["KC_G"],
    uiCodes: ["KeyG"],
  },
  {
    name: "H",
    keycode: Keycode.KC_H,
    keycodeNames: ["KC_H"],
    uiCodes: ["KeyH"],
  },
  {
    name: "I",
    keycode: Keycode.KC_I,
    keycodeNames: ["KC_I"],
    uiCodes: ["KeyI"],
  },
  {
    name: "J",
    keycode: Keycode.KC_J,
    keycodeNames: ["KC_J"],
    uiCodes: ["KeyJ"],
  },
  {
    name: "K",
    keycode: Keycode.KC_K,
    keycodeNames: ["KC_K"],
    uiCodes: ["KeyK"],
  },
  {
    name: "L",
    keycode: Keycode.KC_L,
    keycodeNames: ["KC_L"],
    uiCodes: ["KeyL"],
  },
  {
    name: "M",
    keycode: Keycode.KC_M,
    keycodeNames: ["KC_M"],
    uiCodes: ["KeyM"],
  },
  {
    name: "N",
    keycode: Keycode.KC_N,
    keycodeNames: ["KC_N"],
    uiCodes: ["KeyN"],
  },
  {
    name: "O",
    keycode: Keycode.KC_O,
    keycodeNames: ["KC_O"],
    uiCodes: ["KeyO"],
  },
  {
    name: "P",
    keycode: Keycode.KC_P,
    keycodeNames: ["KC_P"],
    uiCodes: ["KeyP"],
  },
  {
    name: "Q",
    keycode: Keycode.KC_Q,
    keycodeNames: ["KC_Q"],
    uiCodes: ["KeyQ"],
  },
  {
    name: "R",
    keycode: Keycode.KC_R,
    keycodeNames: ["KC_R"],
    uiCodes: ["KeyR"],
  },
  {
    name: "S",
    keycode: Keycode.KC_S,
    keycodeNames: ["KC_S"],
    uiCodes: ["KeyS"],
  },
  {
    name: "T",
    keycode: Keycode.KC_T,
    keycodeNames: ["KC_T"],
    uiCodes: ["KeyT"],
  },
  {
    name: "U",
    keycode: Keycode.KC_U,
    keycodeNames: ["KC_U"],
    uiCodes: ["KeyU"],
  },
  {
    name: "V",
    keycode: Keycode.KC_V,
    keycodeNames: ["KC_V"],
    uiCodes: ["KeyV"],
  },
  {
    name: "W",
    keycode: Keycode.KC_W,
    keycodeNames: ["KC_W"],
    uiCodes: ["KeyW"],
  },
  {
    name: "X",
    keycode: Keycode.KC_X,
    keycodeNames: ["KC_X"],
    uiCodes: ["KeyX"],
  },
  {
    name: "Y",
    keycode: Keycode.KC_Y,
    keycodeNames: ["KC_Y"],
    uiCodes: ["KeyY"],
  },
  {
    name: "Z",
    keycode: Keycode.KC_Z,
    keycodeNames: ["KC_Z"],
    uiCodes: ["KeyZ"],
  },
  {
    name: "1!",
    keycode: Keycode.KC_1,
    keycodeNames: ["KC_1"],
    uiCodes: ["Digit1"],
  },
  {
    name: "2@",
    keycode: Keycode.KC_2,
    keycodeNames: ["KC_2"],
    uiCodes: ["Digit2"],
  },
  {
    name: "3#",
    keycode: Keycode.KC_3,
    keycodeNames: ["KC_3"],
    uiCodes: ["Digit3"],
  },
  {
    name: "4$",
    keycode: Keycode.KC_4,
    keycodeNames: ["KC_4"],
    uiCodes: ["Digit4"],
  },
  {
    name: "5%",
    keycode: Keycode.KC_5,
    keycodeNames: ["KC_5"],
    uiCodes: ["Digit5"],
  },
  {
    name: "6^",
    keycode: Keycode.KC_6,
    keycodeNames: ["KC_6"],
    uiCodes: ["Digit6"],
  },
  {
    name: "7&",
    keycode: Keycode.KC_7,
    keycodeNames: ["KC_7"],
    uiCodes: ["Digit7"],
  },
  {
    name: "8*",
    keycode: Keycode.KC_8,
    keycodeNames: ["KC_8"],
    uiCodes: ["Digit8"],
  },
  {
    name: "9(",
    keycode: Keycode.KC_9,
    keycodeNames: ["KC_9"],
    uiCodes: ["Digit9"],
  },
  {
    name: "0)",
    keycode: Keycode.KC_0,
    keycodeNames: ["KC_0"],
    uiCodes: ["Digit0"],
  },
  {
    name: "Enter",
    keycode: Keycode.KC_ENTER,
    keycodeNames: ["KC_ENTER", "KC_ENT"],
    uiCodes: ["Enter"],
  },
  {
    name: "Esc",
    keycode: Keycode.KC_ESCAPE,
    keycodeNames: ["KC_ESCAPE", "KC_ESC"],
    uiCodes: ["Escape"],
  },
  {
    name: "Bksp",
    description: "Backspace",
    keycode: Keycode.KC_BACKSPACE,
    keycodeNames: ["KC_BACKSPACE", "KC_BSPC"],
    uiCodes: ["Backspace"],
  },
  {
    name: "Tab",
    keycode: Keycode.KC_TAB,
    keycodeNames: ["KC_TAB"],
    uiCodes: ["Tab"],
  },
  {
    name: "Space",
    keycode: Keycode.KC_SPACE,
    keycodeNames: ["KC_SPACE", "KC_SPC"],
    uiCodes: ["Space"],
  },
  {
    name: "-_",
    keycode: Keycode.KC_MINUS,
    keycodeNames: ["KC_MINUS", "KC_MINS"],
    uiCodes: ["Minus"],
  },
  {
    name: "=+",
    keycode: Keycode.KC_EQUAL,
    keycodeNames: ["KC_EQUAL", "KC_EQL"],
    uiCodes: ["Equal"],
  },
  {
    name: "[{",
    keycode: Keycode.KC_LEFT_BRACKET,
    keycodeNames: ["KC_LEFT_BRACKET", "KC_LBRC"],
    uiCodes: ["BracketLeft"],
  },
  {
    name: "]}",
    keycode: Keycode.KC_RIGHT_BRACKET,
    keycodeNames: ["KC_RIGHT_BRACKET", "KC_RBRC"],
    uiCodes: ["BracketRight"],
  },
  {
    name: "\\|",
    keycode: Keycode.KC_BACKSLASH,
    keycodeNames: ["KC_BACKSLASH", "KC_BSLS"],
    uiCodes: ["Backslash"],
  },
  {
    name: "ISO #~",
    keycode: Keycode.KC_NONUS_HASH,
    keycodeNames: ["KC_NONUS_HASH", "KC_NUHS"],
    uiCodes: [
      /* "Backslash" */
    ],
  },
  {
    name: ";:",
    keycode: Keycode.KC_SEMICOLON,
    keycodeNames: ["KC_SEMICOLON", "KC_SCLN"],
    uiCodes: ["Semicolon"],
  },
  {
    name: "'\"",
    keycode: Keycode.KC_QUOTE,
    keycodeNames: ["KC_QUOTE", "KC_QUOT"],
    uiCodes: ["Quote"],
  },
  {
    name: "`~",
    keycode: Keycode.KC_GRAVE,
    keycodeNames: ["KC_GRAVE", "KC_GRV"],
    uiCodes: ["Backquote"],
  },
  {
    name: ",<",
    keycode: Keycode.KC_COMMA,
    keycodeNames: ["KC_COMMA", "KC_COMM"],
    uiCodes: ["Comma"],
  },
  {
    name: ".>",
    keycode: Keycode.KC_DOT,
    keycodeNames: ["KC_DOT"],
    uiCodes: ["Period"],
  },
  {
    name: "/?",
    keycode: Keycode.KC_SLASH,
    keycodeNames: ["KC_SLASH", "KC_SLSH"],
    uiCodes: ["Slash"],
  },
  {
    name: "Caps",
    description: "Caps Lock",
    keycode: Keycode.KC_CAPS_LOCK,
    keycodeNames: ["KC_CAPS_LOCK", "KC_CAPS"],
    uiCodes: ["CapsLock"],
  },
  {
    name: "F1",
    keycode: Keycode.KC_F1,
    keycodeNames: ["KC_F1"],
    uiCodes: ["F1"],
  },
  {
    name: "F2",
    keycode: Keycode.KC_F2,
    keycodeNames: ["KC_F2"],
    uiCodes: ["F2"],
  },
  {
    name: "F3",
    keycode: Keycode.KC_F3,
    keycodeNames: ["KC_F3"],
    uiCodes: ["F3"],
  },
  {
    name: "F4",
    keycode: Keycode.KC_F4,
    keycodeNames: ["KC_F4"],
    uiCodes: ["F4"],
  },
  {
    name: "F5",
    keycode: Keycode.KC_F5,
    keycodeNames: ["KC_F5"],
    uiCodes: ["F5"],
  },
  {
    name: "F6",
    keycode: Keycode.KC_F6,
    keycodeNames: ["KC_F6"],
    uiCodes: ["F6"],
  },
  {
    name: "F7",
    keycode: Keycode.KC_F7,
    keycodeNames: ["KC_F7"],
    uiCodes: ["F7"],
  },
  {
    name: "F8",
    keycode: Keycode.KC_F8,
    keycodeNames: ["KC_F8"],
    uiCodes: ["F8"],
  },
  {
    name: "F9",
    keycode: Keycode.KC_F9,
    keycodeNames: ["KC_F9"],
    uiCodes: ["F9"],
  },
  {
    name: "F10",
    keycode: Keycode.KC_F10,
    keycodeNames: ["KC_F10"],
    uiCodes: ["F10"],
  },
  {
    name: "F11",
    keycode: Keycode.KC_F11,
    keycodeNames: ["KC_F11"],
    uiCodes: ["F11"],
  },
  {
    name: "F12",
    keycode: Keycode.KC_F12,
    keycodeNames: ["KC_F12"],
    uiCodes: ["F12"],
  },
  {
    name: "Print",
    description: "Print Screen",
    keycode: Keycode.KC_PRINT_SCREEN,
    keycodeNames: ["KC_PRINT_SCREEN", "KC_PSCR"],
    uiCodes: ["PrintScreen"],
  },
  {
    name: "Scroll",
    description: "Scroll Lock",
    keycode: Keycode.KC_SCROLL_LOCK,
    keycodeNames: ["KC_SCROLL_LOCK", "KC_SCRL"],
    uiCodes: ["ScrollLock"],
  },
  {
    name: "Pause",
    keycode: Keycode.KC_PAUSE,
    keycodeNames: ["KC_PAUSE", "KC_PAUS", "KC_BRK", "KC_BRMU"],
    uiCodes: ["Pause"],
  },
  {
    name: "Ins",
    description: "Insert",
    keycode: Keycode.KC_INSERT,
    keycodeNames: ["KC_INSERT", "KC_INS"],
    uiCodes: ["Insert"],
  },
  {
    name: "Home",
    keycode: Keycode.KC_HOME,
    keycodeNames: ["KC_HOME"],
    uiCodes: ["Home"],
  },
  {
    name: "PgUp",
    description: "Page Up",
    keycode: Keycode.KC_PAGE_UP,
    keycodeNames: ["KC_PAGE_UP", "KC_PGUP"],
    uiCodes: ["PageUp"],
  },
  {
    name: "Del",
    description: "Delete",
    keycode: Keycode.KC_DELETE,
    keycodeNames: ["KC_DELETE", "KC_DEL"],
    uiCodes: ["Delete"],
  },
  {
    name: "End",
    keycode: Keycode.KC_END,
    keycodeNames: ["KC_END"],
    uiCodes: ["End"],
  },
  {
    name: "PgDn",
    description: "Page Down",
    keycode: Keycode.KC_PAGE_DOWN,
    keycodeNames: ["KC_PAGE_DOWN", "KC_PGDN"],
    uiCodes: ["PageDown"],
  },
  {
    name: "→",
    description: "Right Arrow",
    keycode: Keycode.KC_RIGHT,
    keycodeNames: ["KC_RIGHT", "KC_RGHT"],
    uiCodes: ["ArrowRight"],
  },
  {
    name: "←",
    description: "Left Arrow",
    keycode: Keycode.KC_LEFT,
    keycodeNames: ["KC_LEFT"],
    uiCodes: ["ArrowLeft"],
  },
  {
    name: "↓",
    description: "Down Arrow",
    keycode: Keycode.KC_DOWN,
    keycodeNames: ["KC_DOWN"],
    uiCodes: ["ArrowDown"],
  },
  {
    name: "↑",
    description: "Up Arrow",
    keycode: Keycode.KC_UP,
    keycodeNames: ["KC_UP"],
    uiCodes: ["ArrowUp"],
  },
  {
    name: "Num",
    description: "Num Lock",
    keycode: Keycode.KC_NUM_LOCK,
    keycodeNames: ["KC_NUM_LOCK", "KC_NUM"],
    uiCodes: ["NumLock"],
  },
  {
    name: "Num /",
    description: "Numpad /",
    keycode: Keycode.KC_KP_SLASH,
    keycodeNames: ["KC_KP_SLASH", "KC_PSLS"],
    uiCodes: ["NumpadDivide"],
  },
  {
    name: "Num *",
    description: "Numpad *",
    keycode: Keycode.KC_KP_ASTERISK,
    keycodeNames: ["KC_KP_ASTERISK", "KC_PAST"],
    uiCodes: ["NumpadMultiply"],
  },
  {
    name: "Num -",
    description: "Numpad -",
    keycode: Keycode.KC_KP_MINUS,
    keycodeNames: ["KC_KP_MINUS", "KC_PMNS"],
    uiCodes: ["NumpadSubtract"],
  },
  {
    name: "Num +",
    description: "Numpad +",
    keycode: Keycode.KC_KP_PLUS,
    keycodeNames: ["KC_KP_PLUS", "KC_PPLS"],
    uiCodes: ["NumpadAdd"],
  },
  {
    name: "Num Enter",
    description: "Numpad Enter",
    keycode: Keycode.KC_KP_ENTER,
    keycodeNames: ["KC_KP_ENTER", "KC_PENT"],
    uiCodes: ["NumpadEnter"],
  },
  {
    name: "Num 1",
    description: "Numpad 1 & End",
    keycode: Keycode.KC_KP_1,
    keycodeNames: ["KC_KP_1", "KC_P1"],
    uiCodes: ["Numpad1"],
  },
  {
    name: "Num 2",
    description: "Numpad 2 & ↓",
    keycode: Keycode.KC_KP_2,
    keycodeNames: ["KC_KP_2", "KC_P2"],
    uiCodes: ["Numpad2"],
  },
  {
    name: "Num 3",
    description: "Numpad 3 & PgDn",
    keycode: Keycode.KC_KP_3,
    keycodeNames: ["KC_KP_3", "KC_P3"],
    uiCodes: ["Numpad3"],
  },
  {
    name: "Num 4",
    description: "Numpad 4 & ←",
    keycode: Keycode.KC_KP_4,
    keycodeNames: ["KC_KP_4", "KC_P4"],
    uiCodes: ["Numpad4"],
  },
  {
    name: "Num 5",
    description: "Numpad 5",
    keycode: Keycode.KC_KP_5,
    keycodeNames: ["KC_KP_5", "KC_P5"],
    uiCodes: ["Numpad5"],
  },
  {
    name: "Num 6",
    description: "Numpad 6 & →",
    keycode: Keycode.KC_KP_6,
    keycodeNames: ["KC_KP_6", "KC_P6"],
    uiCodes: ["Numpad6"],
  },
  {
    name: "Num 7",
    description: "Numpad 7 & Home",
    keycode: Keycode.KC_KP_7,
    keycodeNames: ["KC_KP_7", "KC_P7"],
    uiCodes: ["Numpad7"],
  },
  {
    name: "Num 8",
    description: "Numpad 8 & ↑",
    keycode: Keycode.KC_KP_8,
    keycodeNames: ["KC_KP_8", "KC_P8"],
    uiCodes: ["Numpad8"],
  },
  {
    name: "Num 9",
    description: "Numpad 9 & PgUp",
    keycode: Keycode.KC_KP_9,
    keycodeNames: ["KC_KP_9", "KC_P9"],
    uiCodes: ["Numpad9"],
  },
  {
    name: "Num 0",
    description: "Numpad 0 & Ins",
    keycode: Keycode.KC_KP_0,
    keycodeNames: ["KC_KP_0", "KC_P0"],
    uiCodes: ["Numpad0"],
  },
  {
    name: "Num .",
    description: "Numpad . & Del",
    keycode: Keycode.KC_KP_DOT,
    keycodeNames: ["KC_KP_DOT", "KC_PDOT"],
    uiCodes: ["NumpadDecimal"],
  },
  {
    name: "ISO \\|",
    keycode: Keycode.KC_NONUS_BACKSLASH,
    keycodeNames: ["KC_NONUS_BACKSLASH", "KC_NUBS"],
    uiCodes: ["IntlBackslash"],
  },
  {
    name: "Menu",
    keycode: Keycode.KC_APPLICATION,
    keycodeNames: ["KC_APPLICATION", "KC_APP"],
    uiCodes: ["ContextMenu"],
  },
  // Keycode.KC_KB_POWER
  {
    name: "Num =",
    description: "Numpad =",
    keycode: Keycode.KC_KP_EQUAL,
    keycodeNames: ["KC_KP_EQUAL", "KC_PEQL"],
    uiCodes: ["NumpadEqual"],
  },
  {
    name: "F13",
    keycode: Keycode.KC_F13,
    keycodeNames: ["KC_F13"],
    uiCodes: ["F13"],
  },
  {
    name: "F14",
    keycode: Keycode.KC_F14,
    keycodeNames: ["KC_F14"],
    uiCodes: ["F14"],
  },
  {
    name: "F15",
    keycode: Keycode.KC_F15,
    keycodeNames: ["KC_F15"],
    uiCodes: ["F15"],
  },
  {
    name: "F16",
    keycode: Keycode.KC_F16,
    keycodeNames: ["KC_F16"],
    uiCodes: ["F16"],
  },
  {
    name: "F17",
    keycode: Keycode.KC_F17,
    keycodeNames: ["KC_F17"],
    uiCodes: ["F17"],
  },
  {
    name: "F18",
    keycode: Keycode.KC_F18,
    keycodeNames: ["KC_F18"],
    uiCodes: ["F18"],
  },
  {
    name: "F19",
    keycode: Keycode.KC_F19,
    keycodeNames: ["KC_F19"],
    uiCodes: ["F19"],
  },
  {
    name: "F20",
    keycode: Keycode.KC_F20,
    keycodeNames: ["KC_F20"],
    uiCodes: ["F20"],
  },
  {
    name: "F21",
    keycode: Keycode.KC_F21,
    keycodeNames: ["KC_F21"],
    uiCodes: ["F21"],
  },
  {
    name: "F22",
    keycode: Keycode.KC_F22,
    keycodeNames: ["KC_F22"],
    uiCodes: ["F22"],
  },
  {
    name: "F23",
    keycode: Keycode.KC_F23,
    keycodeNames: ["KC_F23"],
    uiCodes: ["F23"],
  },
  {
    name: "F24",
    keycode: Keycode.KC_F24,
    keycodeNames: ["KC_F24"],
    uiCodes: ["F24"],
  },
  // Keycode.KC_EXECUTE
  // Keycode.KC_HELP
  // Keycode.KC_MENU
  // Keycode.KC_SELECT
  // Keycode.KC_STOP
  // Keycode.KC_AGAIN
  // Keycode.KC_UNDO
  // Keycode.KC_CUT
  // Keycode.KC_COPY
  // Keycode.KC_PASTE
  // Keycode.KC_FIND
  // Keycode.KC_KB_MUTE
  // Keycode.KC_KB_VOLUME_UP
  // Keycode.KC_KB_VOLUME_DOWN
  // Keycode.KC_LOCKING_CAPS_LOCK
  // Keycode.KC_LOCKING_NUM_LOCK
  // Keycode.KC_LOCKING_SCROLL_LOCK
  // Keycode.KC_KP_COMMA
  // Keycode.KC_KP_EQUAL_AS400
  {
    name: "JP \\_",
    keycode: Keycode.KC_INTERNATIONAL_1,
    keycodeNames: ["KC_INTERNATIONAL_1", "KC_INT1"],
    uiCodes: ["IntlRo"],
  },
  {
    name: "かな",
    description: "Katakana ↔ Hiragana ↔ Rōmaji",
    keycode: Keycode.KC_INTERNATIONAL_2,
    keycodeNames: ["KC_INTERNATIONAL_2", "KC_INT2"],
    uiCodes: ["KanaMode"],
  },
  {
    name: "JP ¥|",
    keycode: Keycode.KC_INTERNATIONAL_3,
    keycodeNames: ["KC_INTERNATIONAL_3", "KC_INT3"],
    uiCodes: ["IntlYen"],
  },
  {
    name: "変換",
    description: "Henkan (Conversion)",
    keycode: Keycode.KC_INTERNATIONAL_4,
    keycodeNames: ["KC_INTERNATIONAL_4", "KC_INT4"],
    uiCodes: ["Convert"],
  },
  {
    name: "無変換",
    description: "Muhenkan (Non-conversion)",
    keycode: Keycode.KC_INTERNATIONAL_5,
    keycodeNames: ["KC_INTERNATIONAL_5", "KC_INT5"],
    uiCodes: ["NonConvert"],
  },
  // Keycode.KC_INTERNATIONAL_6
  // Keycode.KC_INTERNATIONAL_7
  // Keycode.KC_INTERNATIONAL_8
  // Keycode.KC_INTERNATIONAL_9
  {
    name: "ImeOn",
    keycode: Keycode.KC_LANGUAGE_1,
    keycodeNames: ["KC_LANGUAGE_1", "KC_LNG1"],
    uiCodes: ["Lang1"],
  },
  {
    name: "ImeOff",
    keycode: Keycode.KC_LANGUAGE_2,
    keycodeNames: ["KC_LANGUAGE_2", "KC_LNG2"],
    uiCodes: ["Lang2"],
  },
  // Keycode.KC_LANGUAGE_3
  // Keycode.KC_LANGUAGE_4
  // Keycode.KC_LANGUAGE_5
  // Keycode.KC_LANGUAGE_6
  // Keycode.KC_LANGUAGE_7
  // Keycode.KC_LANGUAGE_8
  // Keycode.KC_LANGUAGE_9
  // Keycode.KC_ALTERNATE_ERASE
  // Keycode.KC_SYSTEM_REQUEST
  // Keycode.KC_CANCEL
  // Keycode.KC_CLEAR
  // Keycode.KC_PRIOR
  // Keycode.KC_RETURN
  // Keycode.KC_SEPARATOR
  // Keycode.KC_OUT
  // Keycode.KC_OPER
  // Keycode.KC_CLEAR_AGAIN
  // Keycode.KC_CRSEL
  // Keycode.KC_EXSEL
  {
    name: "System Power",
    keycode: Keycode.KC_SYSTEM_POWER,
    keycodeNames: ["KC_SYSTEM_POWER", "KC_PWR"],
    uiCodes: ["Power"],
  },
  {
    name: "System Sleep",
    keycode: Keycode.KC_SYSTEM_SLEEP,
    keycodeNames: ["KC_SYSTEM_SLEEP", "KC_SLEP"],
    uiCodes: ["Sleep"],
  },
  {
    name: "System Wake",
    keycode: Keycode.KC_SYSTEM_WAKE,
    keycodeNames: ["KC_SYSTEM_WAKE", "KC_WAKE"],
    uiCodes: ["WakeUp"],
  },
  {
    name: "Mute",
    description: "Mute Audio",
    keycode: Keycode.KC_AUDIO_MUTE,
    keycodeNames: ["KC_AUDIO_MUTE", "KC_MUTE"],
    uiCodes: ["AudioVolumeMute", "VolumeMute"],
  },
  {
    name: "Vol +",
    description: "Volume Up",
    keycode: Keycode.KC_AUDIO_VOL_UP,
    keycodeNames: ["KC_AUDIO_VOL_UP", "KC_VOLU"],
    uiCodes: ["AudioVolumeUp", "VolumeUp"],
  },
  {
    name: "Vol -",
    description: "Volume Down",
    keycode: Keycode.KC_AUDIO_VOL_DOWN,
    keycodeNames: ["KC_AUDIO_VOL_DOWN", "KC_VOLD"],
    uiCodes: ["AudioVolumeDown", "VolumeDown"],
  },
  {
    name: "Next",
    description: "Media Next",
    keycode: Keycode.KC_MEDIA_NEXT_TRACK,
    keycodeNames: ["KC_MEDIA_NEXT_TRACK", "KC_MNXT"],
    uiCodes: ["MediaTrackNext"],
  },
  {
    name: "Prev",
    description: "Media Previous",
    keycode: Keycode.KC_MEDIA_PREV_TRACK,
    keycodeNames: ["KC_MEDIA_PREV_TRACK", "KC_MPRV"],
    uiCodes: ["MediaTrackPrevious"],
  },
  {
    name: "Stop",
    description: "Media Stop",
    keycode: Keycode.KC_MEDIA_STOP,
    keycodeNames: ["KC_MEDIA_STOP", "KC_MSTP"],
    uiCodes: ["MediaStop"],
  },
  {
    name: "Play",
    description: "Media Play/Pause",
    keycode: Keycode.KC_MEDIA_PLAY_PAUSE,
    keycodeNames: ["KC_MEDIA_PLAY_PAUSE", "KC_MPLY"],
    uiCodes: ["MediaPlayPause"],
  },
  {
    name: "Select",
    description: "Media Select",
    keycode: Keycode.KC_MEDIA_SELECT,
    keycodeNames: ["KC_MEDIA_SELECT", "KC_MSEL"],
    uiCodes: ["MediaSelect"],
  },
  {
    name: "Eject",
    description: "Media Eject",
    keycode: Keycode.KC_MEDIA_EJECT,
    keycodeNames: ["KC_MEDIA_EJECT", "KC_EJCT"],
    uiCodes: ["Eject"],
  },
  {
    name: "Mail",
    description: "Launch Mail",
    keycode: Keycode.KC_MAIL,
    keycodeNames: ["KC_MAIL"],
    uiCodes: ["LaunchMail"],
  },
  {
    name: "Calc",
    description: "Launch Calculator",
    keycode: Keycode.KC_CALCULATOR,
    keycodeNames: ["KC_CALCULATOR", "KC_CALC"],
    uiCodes: [],
  },
  {
    name: "File",
    description: "Launch File Explorer",
    keycode: Keycode.KC_MY_COMPUTER,
    keycodeNames: ["KC_MY_COMPUTER", "KC_MYCM"],
    uiCodes: [],
  },
  {
    name: "Web Search",
    keycode: Keycode.KC_WWW_SEARCH,
    keycodeNames: ["KC_WWW_SEARCH", "KC_WSCH"],
    uiCodes: ["BrowserSearch"],
  },
  {
    name: "Web Home",
    keycode: Keycode.KC_WWW_HOME,
    keycodeNames: ["KC_WWW_HOME", "KC_WHOM"],
    uiCodes: ["BrowserHome"],
  },
  {
    name: "Web Back",
    keycode: Keycode.KC_WWW_BACK,
    keycodeNames: ["KC_WWW_BACK", "KC_WBAK"],
    uiCodes: ["BrowserBack"],
  },
  {
    name: "Web Forward",
    keycode: Keycode.KC_WWW_FORWARD,
    keycodeNames: ["KC_WWW_FORWARD", "KC_WFWD"],
    uiCodes: ["BrowserForward"],
  },
  {
    name: "Web Stop",
    keycode: Keycode.KC_WWW_STOP,
    keycodeNames: ["KC_WWW_STOP", "KC_WSTP"],
    uiCodes: ["BrowserStop"],
  },
  {
    name: "Web Refresh",
    keycode: Keycode.KC_WWW_REFRESH,
    keycodeNames: ["KC_WWW_REFRESH", "KC_WREF"],
    uiCodes: ["BrowserRefresh"],
  },
  {
    name: "Web Bookmark",
    keycode: Keycode.KC_WWW_FAVORITES,
    keycodeNames: ["KC_WWW_FAVORITES", "KC_WFAV"],
    uiCodes: ["BrowserFavorites"],
  },
  {
    name: "Fast Fwd",
    description: "Media Fast Forward",
    keycode: Keycode.KC_MEDIA_FAST_FORWARD,
    keycodeNames: ["KC_MEDIA_FAST_FORWARD", "KC_MFFD"],
    uiCodes: [],
  },
  {
    name: "Rewind",
    description: "Media Rewind",
    keycode: Keycode.KC_MEDIA_REWIND,
    keycodeNames: ["KC_MEDIA_REWIND", "KC_MRWD"],
    uiCodes: [],
  },
  {
    name: "Screen +",
    description: "Screen Brightness Up",
    keycode: Keycode.KC_BRIGHTNESS_UP,
    keycodeNames: ["KC_BRIGHTNESS_UP", "KC_BRIU"],
    uiCodes: [],
  },
  {
    name: "Screen -",
    description: "Screen Brightness Down",
    keycode: Keycode.KC_BRIGHTNESS_DOWN,
    keycodeNames: ["KC_BRIGHTNESS_DOWN", "KC_BRID"],
    uiCodes: [],
  },
  // Keycode.KC_CONTROL_PANEL
  // Keycode.KC_ASSISTANT
  {
    name: "Mission Ctrl",
    description: "Launch Mission Control",
    keycode: Keycode.KC_MISSION_CONTROL,
    keycodeNames: ["KC_MISSION_CONTROL", "KC_MCTL"],
    uiCodes: [],
  },
  {
    name: "Launchpad",
    description: "Launch Launchpad",
    keycode: Keycode.KC_LAUNCHPAD,
    keycodeNames: ["KC_LAUNCHPAD", "KC_LPAD"],
    uiCodes: [],
  },
  {
    name: "L-Ctrl",
    description: "Left Control",
    keycode: Keycode.KC_LEFT_CTRL,
    keycodeNames: ["KC_LEFT_CTRL", "KC_LCTL"],
    uiCodes: ["ControlLeft"],
  },
  {
    name: "L-Shift",
    description: "Left Shift",
    keycode: Keycode.KC_LEFT_SHIFT,
    keycodeNames: ["KC_LEFT_SHIFT", "KC_LSFT"],
    uiCodes: ["ShiftLeft"],
  },
  {
    name: "L-Alt",
    description: "Left Alt/Option",
    keycode: Keycode.KC_LEFT_ALT,
    keycodeNames: ["KC_LEFT_ALT", "KC_LALT", "KC_LOPT"],
    uiCodes: ["AltLeft"],
  },
  {
    name: "L-Win",
    description: "Left Windows/Super/Command",
    keycode: Keycode.KC_LEFT_GUI,
    keycodeNames: ["KC_LEFT_GUI", "KC_LGUI", "KC_LCMD", "KC_LWIN"],
    uiCodes: ["MetaLeft", "OSLeft"],
  },
  {
    name: "R-Ctrl",
    description: "Right Control",
    keycode: Keycode.KC_RIGHT_CTRL,
    keycodeNames: ["KC_RIGHT_CTRL", "KC_RCTL"],
    uiCodes: ["ControlRight"],
  },
  {
    name: "R-Shift",
    description: "Right Shift",
    keycode: Keycode.KC_RIGHT_SHIFT,
    keycodeNames: ["KC_RIGHT_SHIFT", "KC_RSFT"],
    uiCodes: ["ShiftRight"],
  },
  {
    name: "R-Alt",
    description: "Right Alt/Option",
    keycode: Keycode.KC_RIGHT_ALT,
    keycodeNames: ["KC_RIGHT_ALT", "KC_RALT", "KC_ROPT", "KC_ALGR"],
    uiCodes: ["AltRight"],
  },
  {
    name: "R-Win",
    description: "Right Windows/Super/Command",
    keycode: Keycode.KC_RIGHT_GUI,
    keycodeNames: ["KC_RIGHT_GUI", "KC_RGUI", "KC_RCMD", "KC_RWIN"],
    uiCodes: ["MetaRight", "OSRight"],
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
