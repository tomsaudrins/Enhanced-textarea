import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { onBlurHandler, onKeyDownHandler } from "./js/eventHandlers";
import { createContainer, createInputElement } from "./js/elementCreation";
import { updateContainerSize, updateDynamicStyles } from "./js/updateViewFunctions";

export class EnhancedTextarea implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private _notifyOutputChanged: () => void;
    private _context: ComponentFramework.Context<IInputs>;
    private _container: HTMLDivElement;
    private _inputElement: HTMLTextAreaElement;
    private _inputValue: string;
    private _onEnterPress: string;

    // Getters and Setters
    public get onEnterPress(): string {
        return this._onEnterPress;
    }

    // Add public getter and setter methods for _inputElement, _inputValue, and _notifyOutputChanged
    public get inputElement(): HTMLTextAreaElement {
        return this._inputElement;
    }

    public get inputValue(): string {
        return this._inputValue;
    }

    public set inputValue(value: string) {
        this._inputValue = value;
    }

    public notifyOutputChanged(): void {
        this._notifyOutputChanged();
    }

    public updateInputValue = (): void => {
        this._inputValue = this._inputElement.value;
    }

    public onEnterPressSetter = (value: string): void => {
        
            this._onEnterPress = value;
            this._inputValue = this._inputElement.value;
            this._notifyOutputChanged();
        
    }

    // Initialization
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
        this._notifyOutputChanged = notifyOutputChanged;
        this._context = context;

        this._container = createContainer(context);
        this._inputElement = createInputElement(context);

        this._inputElement.addEventListener("blur", () => onBlurHandler(this._inputElement, this.updateInputValue, this._notifyOutputChanged, this._context.parameters.DelayedOutput.raw || false));
        this._inputElement.addEventListener("keydown", (e) => onKeyDownHandler(e, this.onEnterPressSetter, this._notifyOutputChanged, this.updateInputValue, this._context.parameters.DelayedOutput.raw || false));

        this._container.appendChild(this._inputElement);
        container.appendChild(this._container);

        // Track container resizing
        context.mode.trackContainerResize(true);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        updateContainerSize(context, this._container);
        updateDynamicStyles(context, this._inputElement);
        if (this._onEnterPress === "EnterPressed") {
                this._onEnterPress = "";
                this._notifyOutputChanged();
        }
    }

    // Get Outputs
    public getOutputs(): IOutputs {
        return { EventStatus: this.onEnterPress, Value: this._inputValue };
    }

    // Destroy
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
