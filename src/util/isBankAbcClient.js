/**
 * 判断当前是否是微信浏览器,还是APP客户端
 */
export let isBankAbcClient = () => {
    let ua = window.navigator.userAgent.toLowerCase();
    // 农行android app "mozilla/5.0 (iphone; cpu iphone os 13_3_1 like mac os x) applewebkit/605.1.15 (khtml, like gecko) mobile/15e148 bankabcandroid/4.2.0 rv:4.2.1 ios/13.3.1"
    // 农行ios app "mozilla/5.0 (iphone; cpu iphone os 13_3_1 like mac os x) applewebkit/605.1.15 (khtml, like gecko) mobile/15e148 bankabciphone/4.2.0 rv:4.2.1 ios/13.3.1"
    if (ua.match(/bankabciphone/i)) {
        return true;
    }
    else {
        return false;
    }
}