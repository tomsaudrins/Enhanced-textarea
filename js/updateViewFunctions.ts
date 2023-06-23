import { IInputs } from "../generated/ManifestTypes";

export const updateContainerSize = (context: ComponentFramework.Context<IInputs>, container: HTMLDivElement): void => {
    const width = context.mode.allocatedWidth;
    const height = context.mode.allocatedHeight;
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
};

export const updateDynamicStyles = (context: ComponentFramework.Context<IInputs>, inputElement: HTMLTextAreaElement): void => {
    const inputValue = context.parameters.value.raw || "";
    if (inputElement.value !== inputValue && context.updatedProperties.includes("value")) {
        inputElement.value = inputValue;
    }

    // Set the dynamic styles based on the context parameters
    inputElement.setAttribute("placeholder", context.parameters.placeholderText.raw || "Type a new message");
    inputElement.style.fontFamily = context.parameters.fontFamily.raw || "Segoe UI, sans-serif";
    inputElement.style.borderRadius = `${context.parameters.borderRadius.raw || 4}px`;
    inputElement.style.padding = `${context.parameters.padding.raw || 16}px`;
    inputElement.style.fontSize = `${context.parameters.fontSize.raw || 14}px`;
    inputElement.maxLength = context.parameters.maxLength.raw || 1000;
    
};