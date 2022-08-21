const FormInput = ({ label, ...otherProps }) => {
    return (
        <>
            <label className="block mb-2 font-medium text-coolGray-800">
                {label}
            </label>
            <input
                className="block w-full p-3 leading-5 border rounded-lg shadow-md appearance-none text-coolGray-900 border-coolGray-200 placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                {...otherProps}
            />
        </>
    );
};
export default FormInput;
