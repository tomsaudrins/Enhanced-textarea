import { IInputs } from "../generated/ManifestTypes";

export const createContainer = (context: ComponentFramework.Context<IInputs>): HTMLDivElement => {
    const container = document.createElement("div");
    container.style.width = `${context.mode.allocatedWidth}px` 
    container.style.height = `${context.mode.allocatedHeight}px` 
    return container;
};

export const createInputElement = (context: ComponentFramework.Context<IInputs>): HTMLTextAreaElement => {
    const inputElement = document.createElement("textarea");
    inputElement.classList.add("textarea-container");
    inputElement.style.resize = "none";
    inputElement.value = context.parameters.Value.raw || "";
    inputElement.maxLength = context.parameters.MaxLength.raw || 1000;
    return inputElement;
};