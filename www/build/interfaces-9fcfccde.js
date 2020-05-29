var StorageKeys;
(function (StorageKeys) {
    StorageKeys["CurrentTheme"] = "current-theme";
})(StorageKeys || (StorageKeys = {}));
var ToastMessageType;
(function (ToastMessageType) {
    ToastMessageType["Success"] = "success";
    ToastMessageType["Failure"] = "failure";
})(ToastMessageType || (ToastMessageType = {}));

export { StorageKeys as S, ToastMessageType as T };
