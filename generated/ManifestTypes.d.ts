/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.StringProperty;
    placeholderText: ComponentFramework.PropertyTypes.StringProperty;
    fontSize: ComponentFramework.PropertyTypes.WholeNumberProperty;
    fontFamily: ComponentFramework.PropertyTypes.StringProperty;
    borderRadius: ComponentFramework.PropertyTypes.WholeNumberProperty;
    padding: ComponentFramework.PropertyTypes.WholeNumberProperty;
    maxLength: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
    value?: string;
    onEnterPress?: string;
}
