import { type FormEvent, useState } from "react";
import "./Login.css";

function Loginpage() {
  const [name, setname] = useState("");
  const [pseudo, setpseudo] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      `Name: ${name} Pseudo: ${pseudo} Email: ${email} Message: ${message}`,
    );
  };

  return (
    <main className="formule">
      <section className="form">
        <img src="/public/images/pngegg_2.png" alt="dragonball" />

        <form onSubmit={handlesubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="pseudo"
            id="pseudo"
            value={pseudo}
            onChange={(e) => setpseudo(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols={25}
            rows={2}
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button type="submit">Submit</button>
          <div className="lien-button">
            <button className="google" type="button">
              Google
            </button>
            <button className="apple" type="button">
              Apple
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Loginpage;
