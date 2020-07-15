define('dartpad_main', ['dart_sdk', 'flutter_web'], (function load__dartpad_main(dart_sdk, flutter_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_web.src__widgets__framework;
  const colors = flutter_web.src__material__colors;
  const border_radius = flutter_web.src__painting__border_radius;
  const app = flutter_web.src__material__app;
  const scaffold = flutter_web.src__material__scaffold;
  const app_bar = flutter_web.src__material__app_bar;
  const text = flutter_web.src__widgets__text;
  const basic = flutter_web.src__widgets__basic;
  const implicit_animations = flutter_web.src__widgets__implicit_animations;
  const box_decoration = flutter_web.src__painting__box_decoration;
  const curves = flutter_web.src__animation__curves;
  const floating_action_button = flutter_web.src__material__floating_action_button;
  const icon = flutter_web.src__widgets__icon;
  const icons = flutter_web.src__material__icons;
  const binding = flutter_web.src__widgets__binding;
  var bootstrap = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $toDouble = dartx.toDouble;
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "file:///tmp/dartpadLWVBRC/main.dart";
  bootstrap.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      main.main();
    });
  };
  main.AnimatedContainerApp = class AnimatedContainerApp extends framework.StatefulWidget {
    createState() {
      return new main._AnimatedContainerAppState.new();
    }
  };
  (main.AnimatedContainerApp.new = function() {
    main.AnimatedContainerApp.__proto__.new.call(this);
    ;
  }).prototype = main.AnimatedContainerApp.prototype;
  dart.addTypeTests(main.AnimatedContainerApp);
  dart.addTypeCaches(main.AnimatedContainerApp);
  dart.setMethodSignature(main.AnimatedContainerApp, () => ({
    __proto__: dart.getMethods(main.AnimatedContainerApp.__proto__),
    createState: dart.fnType(dart.legacy(main._AnimatedContainerAppState), [])
  }));
  dart.setLibraryUri(main.AnimatedContainerApp, L0);
  var _width = dart.privateName(main, "_width");
  var _height = dart.privateName(main, "_height");
  var _color = dart.privateName(main, "_color");
  var _borderRadius = dart.privateName(main, "_borderRadius");
  main._AnimatedContainerAppState = class _AnimatedContainerAppState extends framework.State$(dart.legacy(main.AnimatedContainerApp)) {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Animated Container")}), body: new basic.Center.new({child: new implicit_animations.AnimatedContainer.new({width: this[_width], height: this[_height], decoration: new box_decoration.BoxDecoration.new({color: this[_color], borderRadius: this[_borderRadius]}), duration: new core.Duration.new({seconds: 2}), curve: curves.Curves.fastOutSlowIn})}), floatingActionButton: new floating_action_button.FloatingActionButton.new({child: new icon.Icon.new(icons.Icons.play_arrow), onPressed: dart.fn(() => {
              this.setState(dart.fn(() => {
                let random = math.Random.new();
                this[_width] = random.nextInt(300)[$toDouble]();
                this[_height] = random.nextInt(300)[$toDouble]();
                this[_color] = new ui.Color.fromRGBO(random.nextInt(256), random.nextInt(256), random.nextInt(256), 1.0);
                this[_borderRadius] = new border_radius.BorderRadius.circular(random.nextInt(100)[$toDouble]());
              }, VoidToNullN()));
            }, VoidToNullN())})})});
    }
  };
  (main._AnimatedContainerAppState.new = function() {
    this[_width] = 50.0;
    this[_height] = 50.0;
    this[_color] = colors.Colors.purple;
    this[_borderRadius] = new border_radius.BorderRadius.circular(8.0);
    main._AnimatedContainerAppState.__proto__.new.call(this);
    ;
  }).prototype = main._AnimatedContainerAppState.prototype;
  dart.addTypeTests(main._AnimatedContainerAppState);
  dart.addTypeCaches(main._AnimatedContainerAppState);
  dart.setMethodSignature(main._AnimatedContainerAppState, () => ({
    __proto__: dart.getMethods(main._AnimatedContainerAppState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._AnimatedContainerAppState, L0);
  dart.setFieldSignature(main._AnimatedContainerAppState, () => ({
    __proto__: dart.getFields(main._AnimatedContainerAppState.__proto__),
    [_width]: dart.fieldType(dart.legacy(core.double)),
    [_height]: dart.fieldType(dart.legacy(core.double)),
    [_color]: dart.fieldType(dart.legacy(ui.Color)),
    [_borderRadius]: dart.fieldType(dart.legacy(border_radius.BorderRadiusGeometry))
  }));
  main.main = function main$0() {
    return binding.runApp(new main.AnimatedContainerApp.new());
  };
  dart.trackLibraries("dartpad_main", {
    "file:///tmp/dartpadLWVBRC/bootstrap.dart": bootstrap,
    "file:///tmp/dartpadLWVBRC/main.dart": main
  }, {
  }, null);
  // Exports:
  return {
    tmp__dartpadLWVBRC__bootstrap: bootstrap,
    tmp__dartpadLWVBRC__main: main
  };
}));

//# sourceMappingURL=main.dart.js.map