import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://adzadzqkiqhwdpyywsmr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkemFkenFraXFod2RweXl3c21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNjk1NTUsImV4cCI6MjAyMTY0NTU1NX0.I_OiocVejaiY4ZL-8zQBoiJizhxWTPobMYaqWSNDEig",
    {
        auth: {
            persistSession: false,
        }
    }
);
export const createForm = async (name: string, phone: string, email: string, subject: string, message: string) => {
    await supabase.from("form").insert({ name: name, phone: phone, email: email, subject: subject, message: message }).then((err) => {
        if (err.status !== 201) {
            throw err;
        } else {
            console.log("Data stored : " + { name, phone, email, subject, message });
        }
    });
}

export const getForm = async () => {
    const { data, error } = await supabase.from("form").select("*").is("deleted_at", null);
    if (error) throw error;
    return data;
}
