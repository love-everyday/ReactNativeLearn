//
//  ViewController.swift
//  ReactNativeLearn
//
//  Created by Pisen on 2017/4/26.
//  Copyright © 2017年 SMIT. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        /* let jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index.ios", fallbackResource: nil) */
        let jsCodeLocation = URL(string: "http://localhost:8081/index.ios.bundle?platform=ios&dev=true")
        
         let mockData = ["poetry": [
         ["content": "凉州词二首", "fontSize": 30],
         ["content": "王翰", "fontSize": 18],
         ["content": "葡萄美酒夜光杯，欲饮琵琶马上催；", "fontSize": 18],
         ["content": "醉卧沙场君莫笑，古来征战几人回。", "fontSize": 18]
         ]]
 
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "ReactNativeLearn", initialProperties: mockData as [String: AnyObject], launchOptions: nil)
        rootView?.backgroundColor = UIColor.white
        rootView?.frame = view.bounds
        view.addSubview(rootView!)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

@objc(CalendarManager)
class CalendarManager: NSObject {
    @objc(addEvent:)
    func addEvent(name: String) {
        print(name)
    }
}

