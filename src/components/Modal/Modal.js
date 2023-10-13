import "./styled.css";
import { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import Circle from "../../assets/modal/circle.png";
import useOnClickOutside from "./useOnClickOutside";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Неккоректная почта")
    .required("Поле обязательно для заполнения."),
  phone: yup.string().required("Поле обязательно для заполнения."),
  name: yup.string().max(32, "").required("Поле обязательно для заполнения."),
});

const Modal = ({ active, setActive }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const root = useRef(null);

  useOnClickOutside(root, () => {
    setActive(false);
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className={active ? "modal modal_active" : "modal"}>
      <div className="modal_content" ref={root}>
        <img
          className="modal_circle"
          src={Circle}
          onClick={() => setActive(false)}
        />
        <h1 className="modal_title">Обратная связь</h1>
        <form className="modal_form" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="modal_box_input">
            {/* <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="First name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="firstName"
            /> */}
            <span className="modal_error_msg">{errors.name?.message}</span>
          </div>
          <div className="modal_box_input">
            <InputMask
              className="input_modal"
              mask="(+7) 999 999 9999"
              type="tel"
              pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?"
              placeholder="Телефон"
              {...register("phone")}
            />
            <span className="modal_error_msg">{errors.phone?.message}</span>
          </div>
          <div className="modal_box_input">
            <input
              className="input_modal"
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <span className="modal_error_msg">{errors.email?.message}</span>
          </div>
          <button className="modal_button" type="submit">
            Отправить
          </button>
        </form>
        <button className="modal_button" >
            Отправить
          </button>
      </div>
    </div>
  );
};

export default Modal;
