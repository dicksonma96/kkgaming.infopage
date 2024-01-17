"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Loader from "../loader";

function ClientContent({ label, submit }) {
  const handleSubmit = async (formData) => {
    try {
      let res = await submit(formData);
    } catch (e) {
      console.error(error);
    }
  };

  return (
    <section className="contact" id="contact">
      <form action={handleSubmit} className="content col">
        <h2 className="section_title">{label.title}</h2>
        <label className="input col">
          <span>{label.name}</span>
          <input type="text" name="name" />
        </label>
        <label className="input col">
          <span>{label.company}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{label.email}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{label.phone_number}</span>
          <input type="text" />
        </label>
        <label className="input col">
          <span>{label.message}</span>
          <textarea />
        </label>
        <SubmitButton text={label.submit} />
      </form>
    </section>
  );
}

function SubmitButton({ text }) {
  const { pending } = useFormStatus();

  return (
    <button className="cta_btn1" type="submit" disabled={pending}>
      {pending ? <Loader /> : text}
    </button>
  );
}

export default ClientContent;
