//
//  CalendarManagerBridge.m
//  ReactNativeLearn
//
//  Created by Pisen on 2017/4/28.
//  Copyright © 2017年 SMIT. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent: (NSString *)name)

@end
