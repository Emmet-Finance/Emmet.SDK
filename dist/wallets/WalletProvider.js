export default class WalletProvider {
    isMobile() {
        return this.isAndroid() || this.isSmalliOS();
    }
    isAndroid() {
        return (typeof navigator !== 'undefined' &&
            /android/i.test(navigator.userAgent));
    }
    isSmalliOS() {
        return (typeof navigator !== 'undefined' &&
            /iPhone|iPod/.test(navigator.userAgent));
    }
}
