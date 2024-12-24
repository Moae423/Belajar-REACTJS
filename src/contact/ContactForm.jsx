import { useState } from "react";

// deklarasikan data (InitalDataa)
const InitialData = {
  name: "",
  message: "",
};
export default function ContactForm() {
  // useState dari data yang dideklrasikan diatas
  const [contact, setContact] = useState(InitialData);
  function handleNameChanges(event) {
    setContact({
      ...contact,
      name: event.target.value,
    });
  }

  function handleMessageChanges(event) {
    event.setContact({
      ...contact,
      message: event.target.value,
    });
  }
  return (
    <div>
      <section className="bg-slate-950 min-h-screen">
        <h1 className="text-4xl text-center py-4 font-bold font-serif text-slate-300">
          FORM CONTACT
        </h1>
        <form action="#" method="post">
          <div className="mx-auto max-w-md py-4">
            {/* name */}
            <div>
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="small-input"
                value={contact.name}
                onChange={handleNameChanges}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* Message */}
            <div className="my-4">
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
              >
                Message
              </label>
              <input
                type="text"
                id="small-input"
                value={contact.message}
                onChange={handleMessageChanges}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </form>
        <h1 className="text-4xl text-center py-4 font-bold font-serif text-slate-300">
          CONTACT DETAIL
        </h1>
        <div className="ps-4 py-4 border rounded-lg shadow-md max-w-md mx-auto">
          <p className="text-2xl text-white">Nama : {contact.name}</p>
          <p className="text-2xl text-white">Message : {contact.message}</p>
        </div>
      </section>
    </div>
  );
}
