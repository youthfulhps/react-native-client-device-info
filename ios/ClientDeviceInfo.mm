#import "ClientDeviceInfo.h"

@implementation ClientDeviceInfo
RCT_EXPORT_MODULE()

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (NSString *)getDeviceName {
  UIDevice *device = [UIDevice currentDevice];
  NSString *name = device.name;

  return name;
}

- (NSString *)getApplicationName {
  NSString *appName = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];

  return appName;
}

- (NSString *)getBuildNumber {
  NSString *buildNumber = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"];

  return buildNumber;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeClientDeviceInfoSpecJSI>(params);
}

@end
