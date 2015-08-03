/**
 * @file 测试文件 不包含错误
 * @author Fental<fengeeker@gmail.com>
 * Created by Fental on 15/5/6.
 */
(function () {
    var version = -1;
    // alert(version);
    if (version !== -1 && version < 9) {
        document.createElement('header');
        document.createElement('main');
        document.createElement('article');
        document.createElement('footer');
    }
})();
