export enum ClassRequest {
  CLASS_REQUEST_PROTOCOL_VERSION = 0,
  CLASS_REQUEST_FIRMWARE_VERSION,
  CLASS_REQUEST_BOOTLOADER,
  CLASS_REQUEST_REBOOT,
  CLASS_REQUEST_FACTORY_RESET,
  CLASS_REQUEST_RECALIBRATE,
  CLASS_REQUEST_SWITCH_DEBUG,
  CLASS_REQUEST_SW_ID,
  CLASS_REQUEST_TAP_HOLD,
  CLASS_REQUEST_KEY_CONFIG,
  CLASS_REQUEST_KEYMAP,
  CLASS_REQUEST_DKS_CONFIG,
}

export enum ClassRequestIndex {
  CLASS_REQUEST_INDEX_GET = 0,
  CLASS_REQUEST_INDEX_SET,
}

export type ClassRequestSwitchDebugResponse = {
  adcValues: number[]
  distances: number[]
}
