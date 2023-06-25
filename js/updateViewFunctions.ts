import { IInputs } from "../generated/ManifestTypes";

export const updateContainerSize = (context: ComponentFramework.Context<IInputs>, container: HTMLDivElement): void => {
    const width = context.mode.allocatedWidth;
    const height = context.mode.allocatedHeight;
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;
};

export const updateDynamicStyles = (context: ComponentFramework.Context<IInputs>, inputElement: HTMLTextAreaElement): void => {
    const inputValue = context.parameters.Value.raw || "";

    if (context.updatedProperties.includes("Value") || inputElement.value !== inputValue) {
        inputElement.value = inputValue;
    }

    inputElement.setAttribute("placeholder", context.parameters.PlaceholderText.raw || "Type a new message");
    inputElement.style.fontFamily = context.parameters.FontFamily.raw || "Segoe UI, sans-serif";
    inputElement.style.borderRadius = `${context.parameters.BorderRadius.raw || 4}px`;
    inputElement.style.padding = `${context.parameters.Padding.raw || 12}px`;
    inputElement.style.fontSize = `${context.parameters.FontSize.raw || 14}px`;
    inputElement.maxLength = context.parameters.MaxLength.raw || 1000;
};

export const resetInput = (context: ComponentFramework.Context<IInputs>, inputElement: HTMLTextAreaElement, setInputValue: (value: string) => void, notifyOutputChanged: () => void): void => {
    console.log(context.updatedProperties)
    console.log("new version")
    if (context.updatedProperties.includes("InputEvent") && context.parameters.InputEvent.raw?.includes("ClearValue")) {
        setInputValue("");
        inputElement.value = "";
        notifyOutputChanged();
    }
};