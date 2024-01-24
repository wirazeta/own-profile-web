import { createForm } from "../../components/form";

function Contact() {

    const sendForm = async () => {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const subject = (document.getElementById("subject") as HTMLInputElement).value;
        const message = (document.getElementById("message") as HTMLInputElement).value;

        await createForm(name, phone, email, subject, message);
    }

    return (
        <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="py-4 text-4xl font-bold text-center text-gray-600">Contact</h1>
            <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Name</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" id="name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-sm py-2">Phone Number</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" id="phone" />
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" id="email" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" id="subject" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows={10} name="message" id="message" />
                </div>
                <button className="bg-gray-600 text-gray-100 mt-4 w-full p-4 rounded-lg"
                    onClick={sendForm}
                    type="button"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact;