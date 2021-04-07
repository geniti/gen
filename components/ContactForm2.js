import React, { useState } from "react";
import axios from "axios";

export default function ContactForm2() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xnqladdj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          ""
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main id="contactform">
      <form onSubmit={handleOnSubmit}>
        <div className=" mx-auto mt-10">
      <div className="flex flex-wrap -m-2">
       
        <div className="p-2 w-full">
          <div className="relative" data-aos="fade" data-aos-duration="1500">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400 hidden">Email</label>
            <input type="email" id="email" name="email" placeholder="Jouw E-mail"  name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email} className="w-full bg-gray-100  rounded  focus:border-yellow-400  focus:ring-2 focus:ring-yellow-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
        <div className="p-2 w-full">
          <div className="relative" data-aos="fade" data-aos-duration="2500">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400 hidden">Message</label>
            <textarea id="message" name="message" placeholder="Vertel mij wat je wil weten"  onChange={handleOnChange}
          required
          value={inputs.message} className="w-full bg-gray-100  rounded  focus:border-yellow-400  focus:ring-2 focus:ring-yellow-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="rounded shadow w-full" data-aos="fade">
        <button
          type="submit"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-yellow-400 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Stuur bericht"
              : "Verstuurd"
            : "Versturen..."}
        </button>        
        </div>
        </div>
        </div>
        
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
}
