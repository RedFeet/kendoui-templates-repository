define(["require", "exports"], function (require, exports) {
    "use strict";
    var ButtonApi = (function () {
        function ButtonApi() {
        }
        ButtonApi.prototype.test = function () {
            alert('You clicked me');
        };
        return ButtonApi;
    }());
    exports.ButtonApi = ButtonApi;
});
//# sourceMappingURL=button.js.map