#import "ClientDeviceInfo.h"

@implementation ClientDeviceInfo
RCT_EXPORT_MODULE()

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (NSDictionary *)getDeviceInfo {
  UIDevice *device = [UIDevice currentDevice];
  NSString *name = device.name;
  NSString *model = device.model;
  NSString *systemVersion = device.systemVersion;
  NSString *identifier = [[[UIDevice currentDevice] identifierForVendor] UUIDString];

  NSDictionary *deviceInfo = @{
    @"name": name,
    @"model": model,
    @"systemVersion": systemVersion,
    @"identifier": identifier
  };

  return deviceInfo;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeClientDeviceInfoSpecJSI>(params);
}

@end
