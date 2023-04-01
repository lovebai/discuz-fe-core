import isServer from '../is-server';
import browser from '../browser';

export default function initTj() {
    //妈的，发那么多请求干嘛😩
    // if ( process.env.DISCUZ_ENV === 'web' && process.env.NODE_ENV !== 'development' && !isServer() && !window.BeaconAction ) {
    //     const tj = document.createElement('script');
    //     tj.src = 'https://beaconcdn.qq.com/sdk/4.3.4/beacon_web.min.js';
    //     tj.onload = function() {
    //         window.beacon = new BeaconAction({
    //             appkey: "0WEB0YYH4M4A3ZFW", // 系统或项目id, 必填
    //             isDebug: false
    //         });
    //         window.beacon.addAdditionalParams({
    //             host: window.location.host,
    //             page_platform: browser.env('mobile') ? 'h5' : 'pc',
    //         });
    //         if ( window.beaconTaskList && window.beaconTaskList.length > 0 ) {
    //             for ( let i = 0; i < window.beaconTaskList.length; i++ ) {
    //                 window.beacon.onUserAction('plugin_register', {
    //                     ...window.beaconTaskList[i]
    //                 });
    //             }
    //             window.beaconTaskList = null;
    //         }
    //     }
    //     document.body.appendChild(tj);

    // }

}