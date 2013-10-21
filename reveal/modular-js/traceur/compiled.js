var $__getDescriptors = function(object) {
  var descriptors = {}, name, names = Object.getOwnPropertyNames(object);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    descriptors[name] = Object.getOwnPropertyDescriptor(object, name);
  }
  return descriptors;
}, $__createClassNoExtends = function(object, staticObject) {
  var ctor = object.constructor;
  Object.defineProperty(object, 'constructor', {enumerable: false});
  ctor.prototype = object;
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
};
var App = (function() {
  "use strict";
  var Hello = function() {
    'use strict';
    var $Hello = ($__createClassNoExtends)({constructor: function() {
        console.log('Hello');
      }}, {});
    return $Hello;
  }();
  return Object.preventExtensions(Object.create(null, {Hello: {
      get: function() {
        return Hello;
      },
      enumerable: true
    }}));
}).call(this);
var Hello = App.Hello;
new Hello();
