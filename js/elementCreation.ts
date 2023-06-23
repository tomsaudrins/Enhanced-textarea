import { IInputs } from "../generated/ManifestTypes";

export const createContainer = (context: ComponentFramework.Context<IInputs>): HTMLDivElement => {
    const container = document.createElement("div");
    container.style.height = `${context.mode.allocatedHeight}px`;
    container.style.width = `${context.mode.allocatedWidth}px`;
    return container;
};

export const createInputElement = (context: ComponentFramework.Context<IInputs>): HTMLTextAreaElement => {
    const inputElement = document.createElement("textarea");
    inputElement.classList.add("textarea-container");
    inputElement.style.resize = "none";
    inputElement.value = context.parameters.value.raw || "";
    inputElement.maxLength = context.parameters.maxLength.raw || 1000;
    return inputElement;
};