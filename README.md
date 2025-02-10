# react-native-client-device-info

Device info for React Native

## API

❌,  ✅


| Method                                                              | Return Type         |  iOS | Android | Windows | Web  | visionOS |
| ------------------------------------------------------------------- | ------------------- | :--: | :-----: | :-----: | :-:  | :------: |
| [getAndroidId()](#getandroidid)                                     | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getApiLevel()](#getapilevel)                                       | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getApplicationName()](#getapplicationname)                         | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getAvailableLocationProviders()](#getAvailableLocationProviders)   | `Promise<Object>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBaseOs()](#getbaseOs)                                           | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBuildId()](#getbuildid)                                         | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBatteryLevel()](#getbatterylevel)                               | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBootloader()](#getbootloader)                                   | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBrand()](#getbrand)                                             | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBuildNumber()](#getbuildnumber)                                 | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBundleId()](#getbundleid)                                       | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isCameraPresent()](#iscamerapresent)                               | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getCarrier()](#getcarrier)                                         | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getCodename()](#getcodename)                                       | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getDevice()](#getdevice)                                           | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getDeviceId()](#getdeviceid)                                       | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getDeviceType()](#getDeviceType)                                   | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getDisplay()](#getdisplay)                                         | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getDeviceName()](#getdevicename)                                   | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getDeviceToken()](#getdevicetoken)                                 | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getFirstInstallTime()](#getfirstinstalltime)                       | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getFingerprint()](#getfingerprint)                                 | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getFontScale()](#getfontscale)                                     | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getFreeDiskStorage()](#getfreediskstorage)                         | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getFreeDiskStorageOld()](#getfreediskstorageold)                   | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getHardware()](#gethardware)                                       | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getHost()](#gethost)                                               | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getHostNames()](#getHostNames)                                     | `Promise<string[]>` |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getIpAddress()](#getipaddress)                                     | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getIncremental()](#getincremental)                                 | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getInstallerPackageName()](#getinstallerpackagename)               | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getInstallReferrer()](#getinstallreferrer)                         | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getInstanceId()](#getinstanceid)                                   | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getLastUpdateTime()](#getlastupdatetime)                           | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getMacAddress()](#getmacaddress)                                   | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getManufacturer()](#getmanufacturer)                               | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getMaxMemory()](#getmaxmemory)                                     | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getModel()](#getmodel)                                             | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getPowerState()](#getpowerstate)                                   | `Promise<object>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getProduct()](#getproduct)                                         | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getPreviewSdkInt()](#getPreviewSdkInt)                             | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getReadableVersion()](#getreadableversion)                         | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getSerialNumber()](#getserialnumber)                               | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getSecurityPatch()](#getsecuritypatch)                             | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getStartupTime()](#getstartuptime)                                 | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getSystemAvailableFeatures()](#getSystemAvailableFeatures)         | `Promise<string[]>` |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getSystemName()](#getsystemname)                                   | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getSystemVersion()](#getsystemversion)                             | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getTags()](#gettags)                                               | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getType()](#gettype)                                               | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getTotalDiskCapacity()](#gettotaldiskcapacity)                     | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getTotalDiskCapacityOld()](#gettotaldiskcapacityold)               | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getTotalMemory()](#gettotalmemory)                                 | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getUniqueId()](#getuniqueid)                                       | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getUsedMemory()](#getusedmemory)                                   | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getUserAgent()](#getuseragent)                                     | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getUserAgentSync()](#getuseragent)                                 | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getVersion()](#getversion)                                         | `string`            |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getBrightness()](#getBrightness)                                   | `Promise<number>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [hasGms()](#hasGms)                                                 | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [hasHms()](#hasHms)                                                 | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [hasNotch()](#hasNotch)                                             | `boolean`           |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [hasDynamicIsland()](#hasDynamicIsland)                             | `boolean`           |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [hasSystemFeature()](#hassystemfeaturefeature)                      | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isAirplaneMode()](#isairplanemode)                                 | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isBatteryCharging()](#isbatterycharging)                           | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isEmulator()](#isemulator)                                         | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isKeyboardConnected()](#iskeyboardconnected)                       | `Promise<bool>`     |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isLandscape()](#isLandscape)                                       | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isLocationEnabled()](#isLocationEnabled)                           | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isMouseConnected()](#ismouseconneted)                              | `Promise<bool>`     |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isHeadphonesConnected()](#isHeadphonesConnected)                   | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isWiredHeadphonesConnected()](#isWiredHeadphonesConnected)         | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isBluetoothHeadphonesConnected()](#isBluetoothHeadphonesConnected) | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isPinOrFingerprintSet()](#ispinorfingerprintset)                   | `Promise<boolean>`  |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isTablet()](#istablet)                                             | `boolean`           |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isLowRamDevice()](#istablet)                                       | `boolean`           |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isDisplayZoomed()](#isdisplayzoomed)                               | `boolean`           |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [isTabletMode()](#istabletmode)                                     | `Promise<bool>`     |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [supported32BitAbis()](#supported32BitAbis)                         | `Promise<string[]>` |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [supported64BitAbis()](#supported64BitAbis)                         | `Promise<string[]>` |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [supportedAbis()](#supportedAbis)                                   | `Promise<string[]>` |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [syncUniqueId()](#syncuniqueid)                                     | `Promise<string>`   |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |
| [getSupportedMediaTypeList()](#getSupportedMediaTypeList)           | `Promise<string[]>` |  ❌  |   ❌    |   ❌     | ❌   |   ❌     |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
