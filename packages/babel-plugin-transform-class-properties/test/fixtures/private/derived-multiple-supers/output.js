var _bar = /*#__PURE__*/new WeakMap();
let Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  babelHelpers.inherits(Foo, _Bar);
  function Foo() {
    var _this;
    babelHelpers.classCallCheck(this, Foo);
    if (condition) {
      _this = babelHelpers.callSuper(this, Foo);
      babelHelpers.classPrivateFieldInitSpec(babelHelpers.assertThisInitialized(_this), _bar, "foo");
    } else {
      _this = babelHelpers.callSuper(this, Foo);
      babelHelpers.classPrivateFieldInitSpec(babelHelpers.assertThisInitialized(_this), _bar, "foo");
    }
    return babelHelpers.possibleConstructorReturn(_this);
  }
  return babelHelpers.createClass(Foo);
}(Bar);
