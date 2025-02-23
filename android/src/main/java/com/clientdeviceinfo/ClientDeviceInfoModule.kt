package com.clientdeviceinfo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import android.os.Build

@ReactModule(name = ClientDeviceInfoModule.NAME)
class ClientDeviceInfoModule(reactContext: ReactApplicationContext) :
  NativeClientDeviceInfoSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getDeviceName(): String {
    return "${Build.MANUFACTURER} ${Build.MODEL}"
  }

  companion object {
    const val NAME = "ClientDeviceInfo"
  }
}
