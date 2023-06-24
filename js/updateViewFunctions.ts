import { IInputs } from "../generated/ManifestTypes";

export const updateContainerSize = (context: ComponentFramework.Context<IInputs>, container: HTMLDivElement): void => {
    const width = context.mode.allocatedWidth;
    const height = context.mode.allocatedHeight;
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
};

export const updateDynamicStyles = (context: ComponentFramework.Context<IInputs>, inputElement: HTMLTextAreaElement): void => {
    const inputValue = context.parameters.Value.raw || "";
    if (inputElement.value !== inputValue && context.updatedProperties.includes("value")) {
        inputElement.value = inputValue;
    }

    // Set the dynamic styles based on the context parameters
    inputElement.setAttribute("placeholder", context.parameters.PlaceholderText.raw || "Type a new message");
    inputElement.style.fontFamily = context.parameters.FontFamily.raw || "Segoe UI, sans-serif";
    inputElement.style.borderRadius = `${context.parameters.BorderRadius.raw || 4}px`;
    inputElement.style.padding = `${context.parameters.Padding.raw || 12}px`;
    inputElement.style.fontSize = `${context.parameters.FontSize.raw || 14}px`;
    inputElement.maxLength = context.parameters.MaxLength.raw || 1000;
    inputElement.value = context.parameters.Value.raw || ""
    
};