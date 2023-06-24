export const onKeyDownHandler = (e: KeyboardEvent, onEnterPressSetter: (value: string) => void, notifyOutputChanged: () => void, updateInputValue: () => void, delayedOutput: boolean): void => {
    if (e.key !== 'Enter' || e.shiftKey) {
        if(delayedOutput === false) {
            updateInputValue();
            notifyOutputChanged(); 
        }
        return;
    }
    e.preventDefault();
    onEnterPressSetter("EnterPressed");
    updateInputValue();
    notifyOutputChanged();
};

export const onBlurHandler = (inputElement: HTMLTextAreaElement, updateInputValue: () => void, notifyOutputChanged: () => void, delayedOutput: boolean): void => {
    if(delayedOutput !== true)
        return
    
    updateInputValue();
    notifyOutputChanged();
};