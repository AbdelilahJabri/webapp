import React, {Fragment} from "react";
import cs from "classnames";
import Select from "react-select";
import Toggle from 'react-toggle'

export const renderInputField = ({
                                     input,
                                     label,
                                     type,
                                     rtl,
                                     meta: {touched, error, warning},
                                 }) => {

    return (
        <>
            <input
                {...input}
                className={cs({
                    "form-control": true,
                    "is-invalid": touched && error,
                    "is-valid": touched,
                    "rtl-input": !!rtl,
                })}
                placeholder={label}
                type={type}
            />
            {touched &&
            ((error && (
                    <span className="text-danger">
            {" "}
                        <i className="fa fa-exclamation-circle"/> {error}{" "}
          </span>
                )) ||
                (warning && <span>{warning}</span>))}
        </>
    );
};

export const renderNumberInput = ({
                                      input,
                                      label,
                                      type,
                                      meta: {touched, error, warning},
                                  }) => (
    <div>
        <input
            step="1"
            className={cs({
                "form-control": true,
                "is-invalid": touched && error,
                "is-valid": touched,
            })}
            placeholder={label}
            type={"number"}
            value={input.value}
            min={"0"}
            {...input}
        />
        {touched &&
        ((error && (
                <span className="text-danger">
          {" "}
                    <i className="fa fa-exclamation-circle"/> {error}{" "}
        </span>
            )) ||
            (warning && <span>{warning}</span>))}
    </div>
);

export const renderBigTextArea = ({
                                      input,
                                      label,
                                      rows,
                                      rtl,
                                      meta: {touched, error, warning},
                                  }) => (
    <div>
    <textarea
        minLength="2"
        {...input}
        style={{minHeight: 100}}
        className={cs("input", {
            "form-control": true,
            "is-invalid": touched && error,
            "is-valid": touched,
            "rtl-input": !!rtl,
        })}
        placeholder={label}
        rows={rows}
    >
      <Fragment/>
    </textarea>
        {touched &&
        ((error && (
                <span className="text-danger">
          {" "}
                    <i className="fa fa-exclamation-circle"/> {error}{" "}
        </span>
            )) ||
            (warning && <span>{warning}</span>))}
    </div>
);

export const renderSelect2Async = ({
                                       input,
                                       loadOptions,
                                       placeholder,
                                       options,
                                       rtl,
                                       noOptionsMessage,
                                       onChange,
                                       meta: {touched, warning, error},
                                   }) => (
    <div>
        <Select
            {...input}
            className={cs({
                "is-invalid": touched && error,
                "is-valid": touched,
                "rtl-input": !!rtl,
            })}
            value={
                options && options.find((e) => e.value === input.value)
                    ? options.find((e) => e.value === input.value)
                    : ""
            }
            name={input.name}
            options={options}
            loadOptions={loadOptions}
            noOptionsMessage={() => noOptionsMessage}
            loadingMessage={() => "loading_message"}
            onChange={onChange ? onchange : (value) => {
                return input.onChange(value.value);
            }}
            onBlur={() => input.onBlur(input.value)}
            placeholder={placeholder}
        />
        {touched &&
        ((error && (
                <span className="text-danger">
          {" "}
                    <i className="fa fa-exclamation-circle"/> {error}{" "}
        </span>
            )) ||
            (warning && <span>{warning}</span>))}
    </div>
);

export const renderToggleInput = (field) => {
    return <Toggle checked={!!field.input.value} onChange={field.input.onChange} icons={false}/>
};

export const ShowError = ({error}) => (
    <div className="mt-1 text-danger">
        <i className="fa fa-exclamation-circle"/> {error}
    </div>
);
