/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    Value: ComponentFramework.PropertyTypes.StringProperty;
    PlaceholderText: ComponentFramework.PropertyTypes.StringProperty;
    FontSize: ComponentFramework.PropertyTypes.WholeNumberProperty;
    FontFamily: ComponentFramework.PropertyTypes.StringProperty;
    BorderRadius: ComponentFramework.PropertyTypes.WholeNumberProperty;
    Padding: ComponentFramework.PropertyTypes.WholeNumberProperty;
    MaxLength: ComponentFramework.PropertyTypes.WholeNumberProperty;
    InputEvent: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    Value?: string;
    EventStatus?: string;
    InputEvent?: string;
}
