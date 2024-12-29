interface IKeycodeMetadata {
  name: string
  description?: string
  code: number
  codeName: string
}

export enum Keycode {
  // Internal keycodes
  KC_NO = 0x0000,
  KC_TRANSPARENT = 0x0001,

  // Basic keycodes
  KC_A = 0x0004,
  KC_B = 0x0005,
  KC_C = 0x0006,
  KC_D = 0x0007,
  KC_E = 0x0008,
  KC_F = 0x0009,
  KC_G = 0x000a,
  KC_H = 0x000b,
  KC_I = 0x000c,
  KC_J = 0x000d,
  KC_K = 0x000e,
  KC_L = 0x000f,
  KC_M = 0x0010,
  KC_N = 0x0011,
  KC_O = 0x0012,
  KC_P = 0x0013,
  KC_Q = 0x0014,
  KC_R = 0x0015,
  KC_S = 0x0016,
  KC_T = 0x0017,
  KC_U = 0x0018,
  KC_V = 0x0019,
  KC_W = 0x001a,
  KC_X = 0x001b,
  KC_Y = 0x001c,
  KC_Z = 0x001d,
  KC_1 = 0x001e,
  KC_2 = 0x001f,
  KC_3 = 0x0020,
  KC_4 = 0x0021,
  KC_5 = 0x0022,
  KC_6 = 0x0023,
  KC_7 = 0x0024,
  KC_8 = 0x0025,
  KC_9 = 0x0026,
  KC_0 = 0x0027,
  KC_ENTER = 0x0028,
  KC_ESCAPE = 0x0029,
  KC_BACKSPACE = 0x002a,
  KC_TAB = 0x002b,
  KC_SPACE = 0x002c,
  KC_MINUS = 0x002d,
  KC_EQUAL = 0x002e,
  KC_LEFT_BRACKET = 0x002f,
  KC_RIGHT_BRACKET = 0x0030,
  KC_BACKSLASH = 0x0031,
  KC_NONUS_HASH = 0x0032,
  KC_SEMICOLON = 0x0033,
  KC_QUOTE = 0x0034,
  KC_GRAVE = 0x0035,
  KC_COMMA = 0x0036,
  KC_DOT = 0x0037,
  KC_SLASH = 0x0038,
  KC_CAPS_LOCK = 0x0039,
  KC_F1 = 0x003a,
  KC_F2 = 0x003b,
  KC_F3 = 0x003c,
  KC_F4 = 0x003d,
  KC_F5 = 0x003e,
  KC_F6 = 0x003f,
  KC_F7 = 0x0040,
  KC_F8 = 0x0041,
  KC_F9 = 0x0042,
  KC_F10 = 0x0043,
  KC_F11 = 0x0044,
  KC_F12 = 0x0045,
  KC_PRINT_SCREEN = 0x0046,
  KC_SCROLL_LOCK = 0x0047,
  KC_PAUSE = 0x0048,
  KC_INSERT = 0x0049,
  KC_HOME = 0x004a,
  KC_PAGE_UP = 0x004b,
  KC_DELETE = 0x004c,
  KC_END = 0x004d,
  KC_PAGE_DOWN = 0x004e,
  KC_RIGHT = 0x004f,
  KC_LEFT = 0x0050,
  KC_DOWN = 0x0051,
  KC_UP = 0x0052,
  KC_NUM_LOCK = 0x0053,
  KC_KP_SLASH = 0x0054,
  KC_KP_ASTERISK = 0x0055,
  KC_KP_MINUS = 0x0056,
  KC_KP_PLUS = 0x0057,
  KC_KP_ENTER = 0x0058,
  KC_KP_1 = 0x0059,
  KC_KP_2 = 0x005a,
  KC_KP_3 = 0x005b,
  KC_KP_4 = 0x005c,
  KC_KP_5 = 0x005d,
  KC_KP_6 = 0x005e,
  KC_KP_7 = 0x005f,
  KC_KP_8 = 0x0060,
  KC_KP_9 = 0x0061,
  KC_KP_0 = 0x0062,
  KC_KP_DOT = 0x0063,
  KC_NONUS_BACKSLASH = 0x0064,
  KC_APPLICATION = 0x0065,
  KC_KB_POWER = 0x0066,
  KC_KP_EQUAL = 0x0067,
  KC_F13 = 0x0068,
  KC_F14 = 0x0069,
  KC_F15 = 0x006a,
  KC_F16 = 0x006b,
  KC_F17 = 0x006c,
  KC_F18 = 0x006d,
  KC_F19 = 0x006e,
  KC_F20 = 0x006f,
  KC_F21 = 0x0070,
  KC_F22 = 0x0071,
  KC_F23 = 0x0072,
  KC_F24 = 0x0073,
  KC_EXECUTE = 0x0074,
  KC_HELP = 0x0075,
  KC_MENU = 0x0076,
  KC_SELECT = 0x0077,
  KC_STOP = 0x0078,
  KC_AGAIN = 0x0079,
  KC_UNDO = 0x007a,
  KC_CUT = 0x007b,
  KC_COPY = 0x007c,
  KC_PASTE = 0x007d,
  KC_FIND = 0x007e,
  KC_KB_MUTE = 0x007f,
  KC_KB_VOLUME_UP = 0x0080,
  KC_KB_VOLUME_DOWN = 0x0081,
  KC_LOCKING_CAPS_LOCK = 0x0082,
  KC_LOCKING_NUM_LOCK = 0x0083,
  KC_LOCKING_SCROLL_LOCK = 0x0084,
  KC_KP_COMMA = 0x0085,
  KC_KP_EQUAL_AS400 = 0x0086,
  KC_INTERNATIONAL_1 = 0x0087,
  KC_INTERNATIONAL_2 = 0x0088,
  KC_INTERNATIONAL_3 = 0x0089,
  KC_INTERNATIONAL_4 = 0x008a,
  KC_INTERNATIONAL_5 = 0x008b,
  KC_INTERNATIONAL_6 = 0x008c,
  KC_INTERNATIONAL_7 = 0x008d,
  KC_INTERNATIONAL_8 = 0x008e,
  KC_INTERNATIONAL_9 = 0x008f,
  KC_LANGUAGE_1 = 0x0090,
  KC_LANGUAGE_2 = 0x0091,
  KC_LANGUAGE_3 = 0x0092,
  KC_LANGUAGE_4 = 0x0093,
  KC_LANGUAGE_5 = 0x0094,
  KC_LANGUAGE_6 = 0x0095,
  KC_LANGUAGE_7 = 0x0096,
  KC_LANGUAGE_8 = 0x0097,
  KC_LANGUAGE_9 = 0x0098,
  KC_ALTERNATE_ERASE = 0x0099,
  KC_SYSTEM_REQUEST = 0x009a,
  KC_CANCEL = 0x009b,
  KC_CLEAR = 0x009c,
  KC_PRIOR = 0x009d,
  KC_RETURN = 0x009e,
  KC_SEPARATOR = 0x009f,
  KC_OUT = 0x00a0,
  KC_OPER = 0x00a1,
  KC_CLEAR_AGAIN = 0x00a2,
  KC_CRSEL = 0x00a3,
  KC_EXSEL = 0x00a4,

  // System keycodes
  KC_SYSTEM_POWER = 0x00a5,
  KC_SYSTEM_SLEEP = 0x00a6,
  KC_SYSTEM_WAKE = 0x00a7,

  // Consumer keycodes
  KC_AUDIO_MUTE = 0x00a8,
  KC_AUDIO_VOL_UP = 0x00a9,
  KC_AUDIO_VOL_DOWN = 0x00aa,
  KC_MEDIA_NEXT_TRACK = 0x00ab,
  KC_MEDIA_PREV_TRACK = 0x00ac,
  KC_MEDIA_STOP = 0x00ad,
  KC_MEDIA_PLAY_PAUSE = 0x00ae,
  KC_MEDIA_SELECT = 0x00af,
  KC_MEDIA_EJECT = 0x00b0,
  KC_MAIL = 0x00b1,
  KC_CALCULATOR = 0x00b2,
  KC_MY_COMPUTER = 0x00b3,
  KC_WWW_SEARCH = 0x00b4,
  KC_WWW_HOME = 0x00b5,
  KC_WWW_BACK = 0x00b6,
  KC_WWW_FORWARD = 0x00b7,
  KC_WWW_STOP = 0x00b8,
  KC_WWW_REFRESH = 0x00b9,
  KC_WWW_FAVORITES = 0x00ba,
  KC_MEDIA_FAST_FORWARD = 0x00bb,
  KC_MEDIA_REWIND = 0x00bc,
  KC_BRIGHTNESS_UP = 0x00bd,
  KC_BRIGHTNESS_DOWN = 0x00be,
  KC_CONTROL_PANEL = 0x00bf,
  KC_ASSISTANT = 0x00c0,
  KC_MISSION_CONTROL = 0x00c1,
  KC_LAUNCHPAD = 0x00c2,

  // Modifiers
  KC_LEFT_CTRL = 0x00e0,
  KC_LEFT_SHIFT = 0x00e1,
  KC_LEFT_ALT = 0x00e2,
  KC_LEFT_GUI = 0x00e3,
  KC_RIGHT_CTRL = 0x00e4,
  KC_RIGHT_SHIFT = 0x00e5,
  KC_RIGHT_ALT = 0x00e6,
  KC_RIGHT_GUI = 0x00e7,
}

const KEYCODES_TO_METADATA: { [key: number]: IKeycodeMetadata } = {
  [Keycode.KC_NO]: {
    name: '',
    description: 'Nothing',
    code: Keycode.KC_NO,
    codeName: 'KC_NO',
  },
  [Keycode.KC_TRANSPARENT]: {
    name: '▽',
    description: 'Pass-through',
    code: Keycode.KC_TRANSPARENT,
    codeName: 'KC_TRANSPARENT',
  },
  [Keycode.KC_A]: {
    name: 'A',
    code: Keycode.KC_A,
    codeName: 'KC_A',
  },
  [Keycode.KC_B]: {
    name: 'B',
    code: Keycode.KC_B,
    codeName: 'KC_B',
  },
  [Keycode.KC_C]: {
    name: 'C',
    code: Keycode.KC_C,
    codeName: 'KC_C',
  },
  [Keycode.KC_D]: {
    name: 'D',
    code: Keycode.KC_D,
    codeName: 'KC_D',
  },
  [Keycode.KC_E]: {
    name: 'E',
    code: Keycode.KC_E,
    codeName: 'KC_E',
  },
  [Keycode.KC_F]: {
    name: 'F',
    code: Keycode.KC_F,
    codeName: 'KC_F',
  },
  [Keycode.KC_G]: {
    name: 'G',
    code: Keycode.KC_G,
    codeName: 'KC_G',
  },
  [Keycode.KC_H]: {
    name: 'H',
    code: Keycode.KC_H,
    codeName: 'KC_H',
  },
  [Keycode.KC_I]: {
    name: 'I',
    code: Keycode.KC_I,
    codeName: 'KC_I',
  },
  [Keycode.KC_J]: {
    name: 'J',
    code: Keycode.KC_J,
    codeName: 'KC_J',
  },
  [Keycode.KC_K]: {
    name: 'K',
    code: Keycode.KC_K,
    codeName: 'KC_K',
  },
  [Keycode.KC_L]: {
    name: 'L',
    code: Keycode.KC_L,
    codeName: 'KC_L',
  },
  [Keycode.KC_M]: {
    name: 'M',
    code: Keycode.KC_M,
    codeName: 'KC_M',
  },
  [Keycode.KC_N]: {
    name: 'N',
    code: Keycode.KC_N,
    codeName: 'KC_N',
  },
  [Keycode.KC_O]: {
    name: 'O',
    code: Keycode.KC_O,
    codeName: 'KC_O',
  },
  [Keycode.KC_P]: {
    name: 'P',
    code: Keycode.KC_P,
    codeName: 'KC_P',
  },
  [Keycode.KC_Q]: {
    name: 'Q',
    code: Keycode.KC_Q,
    codeName: 'KC_Q',
  },
  [Keycode.KC_R]: {
    name: 'R',
    code: Keycode.KC_R,
    codeName: 'KC_R',
  },
  [Keycode.KC_S]: {
    name: 'S',
    code: Keycode.KC_S,
    codeName: 'KC_S',
  },
  [Keycode.KC_T]: {
    name: 'T',
    code: Keycode.KC_T,
    codeName: 'KC_T',
  },
  [Keycode.KC_U]: {
    name: 'U',
    code: Keycode.KC_U,
    codeName: 'KC_U',
  },
  [Keycode.KC_V]: {
    name: 'V',
    code: Keycode.KC_V,
    codeName: 'KC_V',
  },
  [Keycode.KC_W]: {
    name: 'W',
    code: Keycode.KC_W,
    codeName: 'KC_W',
  },
  [Keycode.KC_X]: {
    name: 'X',
    code: Keycode.KC_X,
    codeName: 'KC_X',
  },
  [Keycode.KC_Y]: {
    name: 'Y',
    code: Keycode.KC_Y,
    codeName: 'KC_Y',
  },
  [Keycode.KC_Z]: {
    name: 'Z',
    code: Keycode.KC_Z,
    codeName: 'KC_Z',
  },
  [Keycode.KC_1]: {
    name: '1!',
    code: Keycode.KC_1,
    codeName: 'KC_1',
  },
  [Keycode.KC_2]: {
    name: '2@',
    code: Keycode.KC_2,
    codeName: 'KC_2',
  },
  [Keycode.KC_3]: {
    name: '3#',
    code: Keycode.KC_3,
    codeName: 'KC_3',
  },
  [Keycode.KC_4]: {
    name: '4$',
    code: Keycode.KC_4,
    codeName: 'KC_4',
  },
  [Keycode.KC_5]: {
    name: '5%',
    code: Keycode.KC_5,
    codeName: 'KC_5',
  },
  [Keycode.KC_6]: {
    name: '6^',
    code: Keycode.KC_6,
    codeName: 'KC_6',
  },
  [Keycode.KC_7]: {
    name: '7&',
    code: Keycode.KC_7,
    codeName: 'KC_7',
  },
  [Keycode.KC_8]: {
    name: '8*',
    code: Keycode.KC_8,
    codeName: 'KC_8',
  },
  [Keycode.KC_9]: {
    name: '9(',
    code: Keycode.KC_9,
    codeName: 'KC_9',
  },
  [Keycode.KC_0]: {
    name: '0)',
    code: Keycode.KC_0,
    codeName: 'KC_0',
  },
  [Keycode.KC_ENTER]: {
    name: 'Enter',
    code: Keycode.KC_ENTER,
    codeName: 'KC_ENTER',
  },
  [Keycode.KC_ESCAPE]: {
    name: 'Esc',
    description: 'Escape',
    code: Keycode.KC_ESCAPE,
    codeName: 'KC_ESCAPE',
  },
  [Keycode.KC_BACKSPACE]: {
    name: 'Backspace',
    code: Keycode.KC_BACKSPACE,
    codeName: 'KC_BACKSPACE',
  },
  [Keycode.KC_TAB]: {
    name: 'Tab',
    code: Keycode.KC_TAB,
    codeName: 'KC_TAB',
  },
  [Keycode.KC_SPACE]: {
    name: 'Space',
    code: Keycode.KC_SPACE,
    codeName: 'KC_SPACE',
  },
  [Keycode.KC_MINUS]: {
    name: '-_',
    code: Keycode.KC_MINUS,
    codeName: 'KC_MINUS',
  },
  [Keycode.KC_EQUAL]: {
    name: '=+',
    code: Keycode.KC_EQUAL,
    codeName: 'KC_EQUAL',
  },
  [Keycode.KC_LEFT_BRACKET]: {
    name: '[{',
    code: Keycode.KC_LEFT_BRACKET,
    codeName: 'KC_LEFT_BRACKET',
  },
  [Keycode.KC_RIGHT_BRACKET]: {
    name: ']}',
    code: Keycode.KC_RIGHT_BRACKET,
    codeName: 'KC_RIGHT_BRACKET',
  },
  [Keycode.KC_BACKSLASH]: {
    name: '\\|',
    code: Keycode.KC_BACKSLASH,
    codeName: 'KC_BACKSLASH',
  },
  [Keycode.KC_NONUS_HASH]: {
    name: 'ISO #~',
    code: Keycode.KC_NONUS_HASH,
    codeName: 'KC_NONUS_HASH',
  },
  [Keycode.KC_SEMICOLON]: {
    name: ';:',
    code: Keycode.KC_SEMICOLON,
    codeName: 'KC_SEMICOLON',
  },
  [Keycode.KC_QUOTE]: {
    name: '\'"',
    code: Keycode.KC_QUOTE,
    codeName: 'KC_QUOTE',
  },
  [Keycode.KC_GRAVE]: {
    name: '`~',
    code: Keycode.KC_GRAVE,
    codeName: 'KC_GRAVE',
  },
  [Keycode.KC_COMMA]: {
    name: ',<',
    code: Keycode.KC_COMMA,
    codeName: 'KC_COMMA',
  },
  [Keycode.KC_DOT]: {
    name: '.>',
    code: Keycode.KC_DOT,
    codeName: 'KC_DOT',
  },
  [Keycode.KC_SLASH]: {
    name: '/?',
    code: Keycode.KC_SLASH,
    codeName: 'KC_SLASH',
  },
  [Keycode.KC_CAPS_LOCK]: {
    name: 'Caps',
    code: Keycode.KC_CAPS_LOCK,
    codeName: 'KC_CAPS_LOCK',
  },
  [Keycode.KC_F1]: {
    name: 'F1',
    code: Keycode.KC_F1,
    codeName: 'KC_F1',
  },
  [Keycode.KC_F2]: {
    name: 'F2',
    code: Keycode.KC_F2,
    codeName: 'KC_F2',
  },
  [Keycode.KC_F3]: {
    name: 'F3',
    code: Keycode.KC_F3,
    codeName: 'KC_F3',
  },
  [Keycode.KC_F4]: {
    name: 'F4',
    code: Keycode.KC_F4,
    codeName: 'KC_F4',
  },
  [Keycode.KC_F5]: {
    name: 'F5',
    code: Keycode.KC_F5,
    codeName: 'KC_F5',
  },
  [Keycode.KC_F6]: {
    name: 'F6',
    code: Keycode.KC_F6,
    codeName: 'KC_F6',
  },
  [Keycode.KC_F7]: {
    name: 'F7',
    code: Keycode.KC_F7,
    codeName: 'KC_F7',
  },
  [Keycode.KC_F8]: {
    name: 'F8',
    code: Keycode.KC_F8,
    codeName: 'KC_F8',
  },
  [Keycode.KC_F9]: {
    name: 'F9',
    code: Keycode.KC_F9,
    codeName: 'KC_F9',
  },
  [Keycode.KC_F10]: {
    name: 'F10',
    code: Keycode.KC_F10,
    codeName: 'KC_F10',
  },
  [Keycode.KC_F11]: {
    name: 'F11',
    code: Keycode.KC_F11,
    codeName: 'KC_F11',
  },
  [Keycode.KC_F12]: {
    name: 'F12',
    code: Keycode.KC_F12,
    codeName: 'KC_F12',
  },
  [Keycode.KC_PRINT_SCREEN]: {
    name: 'Print',
    description: 'Print Screen',
    code: Keycode.KC_PRINT_SCREEN,
    codeName: 'KC_PRINT_SCREEN',
  },
  [Keycode.KC_SCROLL_LOCK]: {
    name: 'Scroll',
    description: 'Scroll Lock',
    code: Keycode.KC_SCROLL_LOCK,
    codeName: 'KC_SCROLL_LOCK',
  },
  [Keycode.KC_PAUSE]: {
    name: 'Pause',
    code: Keycode.KC_PAUSE,
    codeName: 'KC_PAUSE',
  },
  [Keycode.KC_INSERT]: {
    name: 'Ins',
    description: 'Insert',
    code: Keycode.KC_INSERT,
    codeName: 'KC_INSERT',
  },
  [Keycode.KC_HOME]: {
    name: 'Home',
    code: Keycode.KC_HOME,
    codeName: 'KC_HOME',
  },
  [Keycode.KC_PAGE_UP]: {
    name: 'PgUp',
    description: 'Page Up',
    code: Keycode.KC_PAGE_UP,
    codeName: 'KC_PAGE_UP',
  },
  [Keycode.KC_DELETE]: {
    name: 'Del',
    description: 'Delete',
    code: Keycode.KC_DELETE,
    codeName: 'KC_DELETE',
  },
  [Keycode.KC_END]: {
    name: 'End',
    code: Keycode.KC_END,
    codeName: 'KC_END',
  },
  [Keycode.KC_PAGE_DOWN]: {
    name: 'PgDn',
    description: 'Page Down',
    code: Keycode.KC_PAGE_DOWN,
    codeName: 'KC_PAGE_DOWN',
  },
  [Keycode.KC_RIGHT]: {
    name: '→',
    description: 'Right Arrow',
    code: Keycode.KC_RIGHT,
    codeName: 'KC_RIGHT',
  },
  [Keycode.KC_LEFT]: {
    name: '←',
    description: 'Left Arrow',
    code: Keycode.KC_LEFT,
    codeName: 'KC_LEFT',
  },
  [Keycode.KC_DOWN]: {
    name: '↓',
    description: 'Down Arrow',
    code: Keycode.KC_DOWN,
    codeName: 'KC_DOWN',
  },
  [Keycode.KC_UP]: {
    name: '↑',
    description: 'Up Arrow',
    code: Keycode.KC_UP,
    codeName: 'KC_UP',
  },
  [Keycode.KC_NUM_LOCK]: {
    name: 'Num Lock',
    code: Keycode.KC_NUM_LOCK,
    codeName: 'KC_NUM_LOCK',
  },
  [Keycode.KC_KP_SLASH]: {
    name: 'Num /',
    description: 'Numpad /',
    code: Keycode.KC_KP_SLASH,
    codeName: 'KC_KP_SLASH',
  },
  [Keycode.KC_KP_ASTERISK]: {
    name: 'Num *',
    description: 'Numpad *',
    code: Keycode.KC_KP_ASTERISK,
    codeName: 'KC_KP_ASTERISK',
  },
  [Keycode.KC_KP_MINUS]: {
    name: 'Num -',
    description: 'Numpad -',
    code: Keycode.KC_KP_MINUS,
    codeName: 'KC_KP_MINUS',
  },
  [Keycode.KC_KP_PLUS]: {
    name: 'Num +',
    description: 'Numpad +',
    code: Keycode.KC_KP_PLUS,
    codeName: 'KC_KP_PLUS',
  },
  [Keycode.KC_KP_ENTER]: {
    name: 'Num Enter',
    description: 'Numpad Enter',
    code: Keycode.KC_KP_ENTER,
    codeName: 'KC_KP_ENTER',
  },
  [Keycode.KC_KP_1]: {
    name: 'Num 1',
    description: 'Numpad 1 & End',
    code: Keycode.KC_KP_1,
    codeName: 'KC_KP_1',
  },
  [Keycode.KC_KP_2]: {
    name: 'Num 2',
    description: 'Numpad 2 & ↓',
    code: Keycode.KC_KP_2,
    codeName: 'KC_KP_2',
  },
  [Keycode.KC_KP_3]: {
    name: 'Num 3',
    description: 'Numpad 3 & PgDn',
    code: Keycode.KC_KP_3,
    codeName: 'KC_KP_3',
  },
  [Keycode.KC_KP_4]: {
    name: 'Num 4',
    description: 'Numpad 4 & ←',
    code: Keycode.KC_KP_4,
    codeName: 'KC_KP_4',
  },
  [Keycode.KC_KP_5]: {
    name: 'Num 5',
    description: 'Numpad 5',
    code: Keycode.KC_KP_5,
    codeName: 'KC_KP_5',
  },
  [Keycode.KC_KP_6]: {
    name: 'Num 6',
    description: 'Numpad 6 & →',
    code: Keycode.KC_KP_6,
    codeName: 'KC_KP_6',
  },
  [Keycode.KC_KP_7]: {
    name: 'Num 7',
    description: 'Numpad 7 & Home',
    code: Keycode.KC_KP_7,
    codeName: 'KC_KP_7',
  },
  [Keycode.KC_KP_8]: {
    name: 'Num 8',
    description: 'Numpad 8 & ↑',
    code: Keycode.KC_KP_8,
    codeName: 'KC_KP_8',
  },
  [Keycode.KC_KP_9]: {
    name: 'Num 9',
    description: 'Numpad 9 & PgUp',
    code: Keycode.KC_KP_9,
    codeName: 'KC_KP_9',
  },
  [Keycode.KC_KP_0]: {
    name: 'Num 0',
    description: 'Numpad 0 & Ins',
    code: Keycode.KC_KP_0,
    codeName: 'KC_KP_0',
  },
  [Keycode.KC_KP_DOT]: {
    name: 'Num .',
    description: 'Numpad . & Del',
    code: Keycode.KC_KP_DOT,
    codeName: 'KC_KP_DOT',
  },
  [Keycode.KC_NONUS_BACKSLASH]: {
    name: 'ISO \\|',
    code: Keycode.KC_NONUS_BACKSLASH,
    codeName: 'KC_NONUS_BACKSLASH',
  },
  [Keycode.KC_APPLICATION]: {
    name: 'Menu',
    code: Keycode.KC_APPLICATION,
    codeName: 'KC_APPLICATION',
  },
  // [Keycode.KC_KB_POWER]
  [Keycode.KC_KP_EQUAL]: {
    name: 'Num =',
    description: 'Numpad =',
    code: Keycode.KC_KP_EQUAL,
    codeName: 'KC_KP_EQUAL',
  },
  [Keycode.KC_F13]: {
    name: 'F13',
    code: Keycode.KC_F13,
    codeName: 'KC_F13',
  },
  [Keycode.KC_F14]: {
    name: 'F14',
    code: Keycode.KC_F14,
    codeName: 'KC_F14',
  },
  [Keycode.KC_F15]: {
    name: 'F15',
    code: Keycode.KC_F15,
    codeName: 'KC_F15',
  },
  [Keycode.KC_F16]: {
    name: 'F16',
    code: Keycode.KC_F16,
    codeName: 'KC_F16',
  },
  [Keycode.KC_F17]: {
    name: 'F17',
    code: Keycode.KC_F17,
    codeName: 'KC_F17',
  },
  [Keycode.KC_F18]: {
    name: 'F18',
    code: Keycode.KC_F18,
    codeName: 'KC_F18',
  },
  [Keycode.KC_F19]: {
    name: 'F19',
    code: Keycode.KC_F19,
    codeName: 'KC_F19',
  },
  [Keycode.KC_F20]: {
    name: 'F20',
    code: Keycode.KC_F20,
    codeName: 'KC_F20',
  },
  [Keycode.KC_F21]: {
    name: 'F21',
    code: Keycode.KC_F21,
    codeName: 'KC_F21',
  },
  [Keycode.KC_F22]: {
    name: 'F22',
    code: Keycode.KC_F22,
    codeName: 'KC_F22',
  },
  [Keycode.KC_F23]: {
    name: 'F23',
    code: Keycode.KC_F23,
    codeName: 'KC_F23',
  },
  [Keycode.KC_F24]: {
    name: 'F24',
    code: Keycode.KC_F24,
    codeName: 'KC_F24',
  },
  // [Keycode.KC_EXECUTE]
  // [Keycode.KC_HELP]
  // [Keycode.KC_MENU]
  // [Keycode.KC_SELECT]
  // [Keycode.KC_STOP]
  // [Keycode.KC_AGAIN]
  // [Keycode.KC_UNDO]
  // [Keycode.KC_CUT]
  // [Keycode.KC_COPY]
  // [Keycode.KC_PASTE]
  // [Keycode.KC_FIND]
  // [Keycode.KC_KB_MUTE]
  // [Keycode.KC_KB_VOLUME_UP]
  // [Keycode.KC_KB_VOLUME_DOWN]
  // [Keycode.KC_LOCKING_CAPS_LOCK]
  // [Keycode.KC_LOCKING_NUM_LOCK]
  // [Keycode.KC_LOCKING_SCROLL_LOCK]
  // [Keycode.KC_KP_COMMA]
  // [Keycode.KC_KP_EQUAL_AS400]
  [Keycode.KC_INTERNATIONAL_1]: {
    name: 'JIS \\_',
    code: Keycode.KC_INTERNATIONAL_1,
    codeName: 'KC_INTERNATIONAL_1',
  },
  [Keycode.KC_INTERNATIONAL_2]: {
    name: 'かな',
    description: 'Katakana ↔ Hiragana ↔ Rōmaji',
    code: Keycode.KC_INTERNATIONAL_2,
    codeName: 'KC_INTERNATIONAL_2',
  },
  [Keycode.KC_INTERNATIONAL_3]: {
    name: 'JIS ¥|',
    code: Keycode.KC_INTERNATIONAL_3,
    codeName: 'KC_INTERNATIONAL_3',
  },
  [Keycode.KC_INTERNATIONAL_4]: {
    name: '変換',
    description: 'Henkan (Conversion)',
    code: Keycode.KC_INTERNATIONAL_4,
    codeName: 'KC_INTERNATIONAL_4',
  },
  [Keycode.KC_INTERNATIONAL_5]: {
    name: '無変換',
    description: 'Muhenkan (Non-conversion)',
    code: Keycode.KC_INTERNATIONAL_5,
    codeName: 'KC_INTERNATIONAL_5',
  },
  // [Keycode.KC_INTERNATIONAL_6]
  // [Keycode.KC_INTERNATIONAL_7]
  // [Keycode.KC_INTERNATIONAL_8]
  // [Keycode.KC_INTERNATIONAL_9]
  [Keycode.KC_LANGUAGE_1]: {
    name: 'IME On',
    code: Keycode.KC_LANGUAGE_1,
    codeName: 'KC_LANGUAGE_1',
  },
  [Keycode.KC_LANGUAGE_2]: {
    name: 'IME Off',
    code: Keycode.KC_LANGUAGE_2,
    codeName: 'KC_LANGUAGE_2',
  },
  // [Keycode.KC_LANGUAGE_3]
  // [Keycode.KC_LANGUAGE_4]
  // [Keycode.KC_LANGUAGE_5]
  // [Keycode.KC_LANGUAGE_6]
  // [Keycode.KC_LANGUAGE_7]
  // [Keycode.KC_LANGUAGE_8]
  // [Keycode.KC_LANGUAGE_9]
  // [Keycode.KC_ALTERNATE_ERASE]
  // [Keycode.KC_SYSTEM_REQUEST]
  // [Keycode.KC_CANCEL]
  // [Keycode.KC_CLEAR]
  // [Keycode.KC_PRIOR]
  // [Keycode.KC_RETURN]
  // [Keycode.KC_SEPARATOR]
  // [Keycode.KC_OUT]
  // [Keycode.KC_OPER]
  // [Keycode.KC_CLEAR_AGAIN]
  // [Keycode.KC_CRSEL]
  // [Keycode.KC_EXSEL]
  [Keycode.KC_SYSTEM_POWER]: {
    name: 'System Power',
    code: Keycode.KC_SYSTEM_POWER,
    codeName: 'KC_SYSTEM_POWER',
  },
  [Keycode.KC_SYSTEM_SLEEP]: {
    name: 'System Sleep',
    code: Keycode.KC_SYSTEM_SLEEP,
    codeName: 'KC_SYSTEM_SLEEP',
  },
  [Keycode.KC_SYSTEM_WAKE]: {
    name: 'System Wake',
    code: Keycode.KC_SYSTEM_WAKE,
    codeName: 'KC_SYSTEM_WAKE',
  },
  [Keycode.KC_AUDIO_MUTE]: {
    name: 'Mute',
    description: 'Mute Audio',
    code: Keycode.KC_AUDIO_MUTE,
    codeName: 'KC_AUDIO_MUTE',
  },
  [Keycode.KC_AUDIO_VOL_UP]: {
    name: 'Vol +',
    description: 'Volume Up',
    code: Keycode.KC_AUDIO_VOL_UP,
    codeName: 'KC_AUDIO_VOL_UP',
  },
  [Keycode.KC_AUDIO_VOL_DOWN]: {
    name: 'Vol -',
    description: 'Volume Down',
    code: Keycode.KC_AUDIO_VOL_DOWN,
    codeName: 'KC_AUDIO_VOL_DOWN',
  },
  [Keycode.KC_MEDIA_NEXT_TRACK]: {
    name: 'Next',
    description: 'Media Next',
    code: Keycode.KC_MEDIA_NEXT_TRACK,
    codeName: 'KC_MEDIA_NEXT_TRACK',
  },
  [Keycode.KC_MEDIA_PREV_TRACK]: {
    name: 'Previous',
    description: 'Media Previous',
    code: Keycode.KC_MEDIA_PREV_TRACK,
    codeName: 'KC_MEDIA_PREV_TRACK',
  },
  [Keycode.KC_MEDIA_STOP]: {
    name: 'Stop',
    description: 'Media Stop',
    code: Keycode.KC_MEDIA_STOP,
    codeName: 'KC_MEDIA_STOP',
  },
  [Keycode.KC_MEDIA_PLAY_PAUSE]: {
    name: 'Play',
    description: 'Play/Pause',
    code: Keycode.KC_MEDIA_PLAY_PAUSE,
    codeName: 'KC_MEDIA_PLAY_PAUSE',
  },
  [Keycode.KC_MEDIA_SELECT]: {
    name: 'Select',
    description: 'Media Select',
    code: Keycode.KC_MEDIA_SELECT,
    codeName: 'KC_MEDIA_SELECT',
  },
  [Keycode.KC_MEDIA_EJECT]: {
    name: 'Eject',
    description: 'Media Eject',
    code: Keycode.KC_MEDIA_EJECT,
    codeName: 'KC_MEDIA_EJECT',
  },
  [Keycode.KC_MAIL]: {
    name: 'Mail',
    code: Keycode.KC_MAIL,
    codeName: 'KC_MAIL',
  },
  [Keycode.KC_CALCULATOR]: {
    name: 'Calc',
    description: 'Calculator',
    code: Keycode.KC_CALCULATOR,
    codeName: 'KC_CALCULATOR',
  },
  [Keycode.KC_MY_COMPUTER]: {
    name: 'My Comp',
    description: 'My Computer',
    code: Keycode.KC_MY_COMPUTER,
    codeName: 'KC_MY_COMPUTER',
  },
  [Keycode.KC_WWW_SEARCH]: {
    name: 'W.Search',
    description: 'Web Search',
    code: Keycode.KC_WWW_SEARCH,
    codeName: 'KC_WWW_SEARCH',
  },
  [Keycode.KC_WWW_HOME]: {
    name: 'W.Home',
    description: 'Web Home',
    code: Keycode.KC_WWW_HOME,
    codeName: 'KC_WWW_HOME',
  },
  [Keycode.KC_WWW_BACK]: {
    name: 'W.Back',
    description: 'Web Back',
    code: Keycode.KC_WWW_BACK,
    codeName: 'KC_WWW_BACK',
  },
  [Keycode.KC_WWW_FORWARD]: {
    name: 'W.Forward',
    description: 'Web Forward',
    code: Keycode.KC_WWW_FORWARD,
    codeName: 'KC_WWW_FORWARD',
  },
  [Keycode.KC_WWW_STOP]: {
    name: 'W.Stop',
    description: 'Web Stop',
    code: Keycode.KC_WWW_STOP,
    codeName: 'KC_WWW_STOP',
  },
  [Keycode.KC_WWW_REFRESH]: {
    name: 'W.Refresh',
    description: 'Web Refresh',
    code: Keycode.KC_WWW_REFRESH,
    codeName: 'KC_WWW_REFRESH',
  },
  [Keycode.KC_WWW_FAVORITES]: {
    name: 'W.Fav',
    description: 'Web Favorites',
    code: Keycode.KC_WWW_FAVORITES,
    codeName: 'KC_WWW_FAVORITES',
  },
  [Keycode.KC_MEDIA_FAST_FORWARD]: {
    name: 'Fast Forward',
    description: 'Media Fast Forward',
    code: Keycode.KC_MEDIA_FAST_FORWARD,
    codeName: 'KC_MEDIA_FAST_FORWARD',
  },
  [Keycode.KC_MEDIA_REWIND]: {
    name: 'Rewind',
    description: 'Media Rewind',
    code: Keycode.KC_MEDIA_REWIND,
    codeName: 'KC_MEDIA_REWIND',
  },
  [Keycode.KC_BRIGHTNESS_UP]: {
    name: 'Screen +',
    description: 'Screen Brightness Up',
    code: Keycode.KC_BRIGHTNESS_UP,
    codeName: 'KC_BRIGHTNESS_UP',
  },
  [Keycode.KC_BRIGHTNESS_DOWN]: {
    name: 'Screen -',
    description: 'Screen Brightness Down',
    code: Keycode.KC_BRIGHTNESS_DOWN,
    codeName: 'KC_BRIGHTNESS_DOWN',
  },
  // [Keycode.KC_CONTROL_PANEL]
  // [Keycode.KC_ASSISTANT]
  [Keycode.KC_MISSION_CONTROL]: {
    name: 'Mission Control',
    code: Keycode.KC_MISSION_CONTROL,
    codeName: 'KC_MISSION_CONTROL',
  },
  [Keycode.KC_LAUNCHPAD]: {
    name: 'Launchpad',
    code: Keycode.KC_LAUNCHPAD,
    codeName: 'KC_LAUNCHPAD',
  },
  [Keycode.KC_LEFT_CTRL]: {
    name: 'L-Ctrl',
    description: 'Left Control',
    code: Keycode.KC_LEFT_CTRL,
    codeName: 'KC_LEFT_CTRL',
  },
  [Keycode.KC_LEFT_SHIFT]: {
    name: 'L-Shift',
    description: 'Left Shift',
    code: Keycode.KC_LEFT_SHIFT,
    codeName: 'KC_LEFT_SHIFT',
  },
  [Keycode.KC_LEFT_ALT]: {
    name: 'L-Alt',
    description: 'Left Alt/Option',
    code: Keycode.KC_LEFT_ALT,
    codeName: 'KC_LEFT_ALT',
  },
  [Keycode.KC_LEFT_GUI]: {
    name: 'L-Win',
    description: 'Left Windows/Super/Command',
    code: Keycode.KC_LEFT_GUI,
    codeName: 'KC_LEFT_GUI',
  },
  [Keycode.KC_RIGHT_CTRL]: {
    name: 'R-Ctrl',
    description: 'Right Control',
    code: Keycode.KC_RIGHT_CTRL,
    codeName: 'KC_RIGHT_CTRL',
  },
  [Keycode.KC_RIGHT_SHIFT]: {
    name: 'R-Shift',
    description: 'Right Shift',
    code: Keycode.KC_RIGHT_SHIFT,
    codeName: 'KC_RIGHT_SHIFT',
  },
  [Keycode.KC_RIGHT_ALT]: {
    name: 'R-Alt',
    description: 'Right Alt/Option',
    code: Keycode.KC_RIGHT_ALT,
    codeName: 'KC_RIGHT_ALT',
  },
}

export const getKeycodeMetadata = (keycode: Keycode): IKeycodeMetadata => {
  if (KEYCODES_TO_METADATA[keycode]) {
    return KEYCODES_TO_METADATA[keycode]
  } else {
    const hexKeycode = `0x${keycode.toString(16).padStart(4, '0').toUpperCase()}`
    return {
      name: hexKeycode,
      description: `Unknown keycode ${hexKeycode}`,
      code: keycode,
      codeName: hexKeycode,
    }
  }
}
