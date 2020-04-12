import 'package:flua/hydroState.dart';
import 'package:flua/vm/context.dart';
import 'package:flua/builtins/flutter/syntheticBox.dart';
import 'package:flua/vm/table.dart';
import 'package:flutter/material.dart';

loadSizeTransition({@required HydroState luaState, @required HydroTable table}) {
  table["sizeTransition"] = makeLuaDartFunc(func: (List<dynamic> args) {
    return [
      SizeTransition(
        sizeFactor: args[0]["sizeFactor"],
        axis: Axis.values.firstWhere((x) => x.index == args[0]["axis"]),
        child: maybeUnwrapAndBuildArgument<Widget>(args[0]["child"],
            parentState: luaState),
      ),
    ];
  });
}
