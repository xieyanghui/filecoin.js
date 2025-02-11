var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JsonRpcErrorResponse = /** @class */ (function () {
    function JsonRpcErrorResponse() {
    }
    return JsonRpcErrorResponse;
}());
export { JsonRpcErrorResponse };
var JsonRpcResponse = /** @class */ (function () {
    function JsonRpcResponse() {
    }
    return JsonRpcResponse;
}());
export { JsonRpcResponse };
var JsonRpcError = /** @class */ (function (_super) {
    __extends(JsonRpcError, _super);
    function JsonRpcError(e) {
        var _this = _super.call(this, e.message) || this;
        _this.code = e.code;
        _this.message = e.message;
        _this.data = e.data;
        Object.setPrototypeOf(_this, JsonRpcError.prototype);
        return _this;
    }
    return JsonRpcError;
}(Error));
export { JsonRpcError };
var ResponseError = /** @class */ (function (_super) {
    __extends(ResponseError, _super);
    function ResponseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.message = message;
        Object.setPrototypeOf(_this, ResponseError.prototype);
        return _this;
    }
    return ResponseError;
}(Error));
export { ResponseError };
var ConnectionError = /** @class */ (function (_super) {
    __extends(ConnectionError, _super);
    function ConnectionError(e) {
        var _this = _super.call(this, e.message) || this;
        Object.setPrototypeOf(_this, ConnectionError.prototype);
        return _this;
    }
    return ConnectionError;
}(Error));
export { ConnectionError };
//# sourceMappingURL=Connector.js.map