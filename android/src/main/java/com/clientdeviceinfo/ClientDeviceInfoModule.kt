package com.clientdeviceinfo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import android.os.Build
import android.content.Context
import android.content.pm.ApplicationInfo
import android.content.pm.PackageManager

@ReactModule(name = ClientDeviceInfoModule.NAME)
class ClientDeviceInfoModule(reactContext: ReactApplicationContext) :
  NativeClientDeviceInfoSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getDeviceName(): String {
    return "${Build.MANUFACTURER} ${Build.MODEL}"
  }

  override fun getApplicationName(): String {
    val context: Context = reactApplicationContext
    val packageManager: PackageManager = context.packageManager
    val applicationInfo = packageManager.getApplicationInfo(context.packageName, 0)
    return packageManager.getApplicationLabel(applicationInfo).toString()
  }


  companion object {
    const val NAME = "ClientDeviceInfo"
  }
}
