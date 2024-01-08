import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("message sent");
    console.log(formData);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="contact_container">
      <h1>
        Contact <span>Us Now</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name :"
          name="name"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number:"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email:"
          onChange={handleChange}
          required
        />
        <textarea placeholder="Message:" name="content" />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
        <p>* Please fill this form and we will contact you shortly</p>
      </form>
    </div>
  );
}

export default Contact;
