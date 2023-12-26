import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(
    null
  ) as React.MutableRefObject<HTMLFormElement>;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      query: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 30 characters or less.")
        .required("Name is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      query: Yup.string().required("Please enter your query / message."),
    }),

    onSubmit: () => {
      const sendEmail = () => {
        emailjs
          .sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result: EmailJSResponseStatus) => {
              console.log(result?.text);
              toast.success("Email sent successfully !", {
                duration: 9000,
              });
              formik.resetForm();
            },
            (error: any) => {
              console.log(error.text);
              toast.error("Some error occured", {
                duration: 9000,
              });
            }
          );
      };
      sendEmail();
    },
  });

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center max-w-5xl px-4 py-24 mx-auto contactpage"
    >
      <div className="pb-2 w-[20%] mx-auto mb-2 font-bold text-center text-white border-b-4 border-pink-500 heading md:text-2xl tracking-tight">
        Contact Me
      </div>
      <div className="p-6 md:w-[80%] rounded-md shadow-md contactForm border-[1px] border-pink-400">
        <form ref={form} onSubmit={formik.handleSubmit}>
          <h1 className="text-lg font-bold tracking-tight text-center text-pink-500 md:text-2xl">
            Get in touch through this form, or directly via{" "}
            <a
              href="mailto:harshitbhardwaj97@gmail.com"
              className="duration-150 ease-in-out text-white/80 hover:scale-110 hover:text-pink-500"
            >
              email
            </a>
          </h1>
          <div className="pb-3 mt-2 text-pink-500 inputField">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 bg-pink-400/90 border-2 rounded-md text-bgPrimaryDark focus:border-pink-500 focus:ring-pink-500 font-bold placeholder-bgPrimaryDark/80"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Name"
            />

            <span className="block font-bold text-red-600 ">
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""}
            </span>
          </div>
          <div className="pb-3 mt-2 text-pink-500 inputField">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 bg-pink-400/90 border-2 rounded-md text-bgPrimaryDark focus:border-pink-500 focus:ring-pink-500 font-bold placeholder-bgPrimaryDark/80"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              placeholder="Email"
            />
            <span className="block font-bold text-red-600 ">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </span>
          </div>
          <div className="pb-3 mt-2 text-pink-500 inputField">
            <label htmlFor="query" className="block">
              Query
            </label>
            <textarea
              id="query"
              name="query"
              cols={50}
              rows={10}
              className="w-full p-2 bg-pink-400/90 border-2 rounded-md text-bgPrimaryDark focus:border-pink-500 focus:ring-pink-500 font-bold placeholder-bgPrimaryDark/80"
              onChange={formik.handleChange}
              value={formik.values.query}
              onBlur={formik.handleBlur}
              placeholder="Query / Message"
              style={{
                resize: "none",
              }}
            ></textarea>

            <span className="block font-bold text-red-600 ">
              {formik.touched.query && formik.errors.query
                ? formik.errors.query
                : ""}
            </span>

            <button
              type="submit"
              className="px-4 py-2 pt-2 mx-auto block duration-100 ease-linear border-white border-2 rounded-md shadow-s text-white hover:border-none hover:text-bgPrimaryDark hover:bg-pink-500 hover:border-pink-500 hover:font-bold text-center hover:scale-105  hover:shadow-pink-400 mt-2 w-[50%]"
            >
              Submit
            </button>
          </div>
          <Toaster position="top-right" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
