export const onKeyDownHandler = (e: KeyboardEvent, onEnterPressSetter: (value: string) => void, notifyOutputChanged: () => void, updateInputValue: () => void): void => {
    if (e.key !== 'Enter' || e.shiftKey) {
        return;
    }
    e.preventDefault();
    onEnterPressSetter("EnterPressed");
    updateInputValue();
    notifyOutputChanged();
};

export const onBlurHandler = (updateInputValue: () => void, notifyOutputChanged: () => void): void => {
    updateInputValue();
    notifyOutputChanged();
};