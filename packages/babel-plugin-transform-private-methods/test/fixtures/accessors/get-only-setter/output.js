var _privateField = /*#__PURE__*/new WeakMap();
var _privateFieldValue = /*#__PURE__*/new WeakSet();
class Cl {
  constructor() {
    babelHelpers.classPrivateMethodInitSpec(this, _privateFieldValue);
    babelHelpers.classPrivateFieldInitSpec(this, _privateField, 0);
    this.publicField = (this, babelHelpers.writeOnlyError("#privateFieldValue"));
  }
}
function _set_privateFieldValue(newValue) {
  babelHelpers.classPrivateFieldSet2(this, _privateField, newValue);
}
