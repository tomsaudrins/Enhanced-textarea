# Enhanced Textarea

An advanced textarea control for Power Apps that support submitting text by pressing the Enter key.

## Features

- Submit text by pressing Enter
- Customizable font family, font size, border radius, and padding
- Resizable textarea container
- Easy integration with Power Apps

## Installation

1. Download the latest solution package.
2. Import the solution package to your Power Apps environment.
3. Add the Enhanced Textarea control to your canvas or model-driven app.

## Usage

1. Add the Enhanced Textarea control to your Power Apps form or canvas.
2. Bind the `Value` property to the desired field in your data source (if required).
3. Configure the appearance of the textarea by setting the `Font Family`, `Font Size`, `Border Radius`, and `Padding` properties.
4. Use the `onChange` action to trigger actions when the Enter key is pressed, by checking if Self.EventStatus = "EnterPressed".
5. Use the `InputEvent` property to Clear the value of the control. Pass `ClearValue` & `Text(Rand())` (to pass new value) to clear the control.

### Events

`InputEvent` currently accepts three events:
1. ClearValue
2. SetFocus
3. RemoveFocus

Pass the name of the event (or stack them) & `Text(Rand())` and it will be executed.

![Drag Racing](https://i.imgur.com/qHNgWFE.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
