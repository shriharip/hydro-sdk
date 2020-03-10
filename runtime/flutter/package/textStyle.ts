import {JITAllocatingRTManagedBox} from "../../syntheticBox";
import {DartObject} from "../../dart/core";
import {Color} from "../../dart/ui/color";

export interface TextStyleProps {
    fontSize?: number | undefined;
    color?: Color | undefined;
}

declare const flutter: {
    package: {
        textStyle: (this: void, props: TextStyleProps) => TextStyle;
    };
};

export class TextStyle extends JITAllocatingRTManagedBox<TextStyleProps, TextStyle> implements Readonly<DartObject>
{
    public readonly runtimeType = "TextStyle";
    public props: TextStyleProps;
    public color?: Color;
    public constructor(props: TextStyleProps) 
    {
        super();
        this.props = props;
    }

    public copyWith(props: { color: Color }): TextStyle 
    {
        return {} as any;
    }

    public unwrap(): TextStyle 
    {
        return flutter.package.textStyle(this.props);
    }
}
