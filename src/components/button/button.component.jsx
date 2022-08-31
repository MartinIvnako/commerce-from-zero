const BUTTON_TYPE_CLASSES = {
    google: "inline-flex items-center justify-center w-full    py-3 mb-6 text-base font-medium leading-6 text-center bg-white border rounded-md shadow-sm px-7 text-coolGray-500 border-coolGray-100 hover:border-coolGray-200",
    primary:
        "inline-block  w-full py-3 mb-4 text-base font-medium leading-6 text-center bg-green-500 rounded-md shadow-sm px-7 text-green-50 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50",
    secondary:
        "py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-r-xl rounded-t-xl transition duration-200",
};

const buttonIcon = (buttonType) => {
    if (buttonType === "google")
        return (
            <img
                className="mr-2"
                src="https://shuffle.dev/flex-ui-assets/elements/sign-up/google-icon-sign-up.svg"
                alt=""
            />
        );
};

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {buttonIcon(buttonType)}
            {children}
        </button>
    );
};

export default Button;
