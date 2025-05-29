import emailjs from 'emailjs-com';

type ContactFormData = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  to: string;
};

export async function sendContactEmail(data: ContactFormData) {
  // TODO: Replace with your actual EmailJS IDs
  const SERVICE_ID = 'service_zh0f87r';
  const TEMPLATE_ID = 'template_ghi3qfo';
  const USER_ID = 'Gf1zfaLRh9fdhQnmx';

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    to_email: data.to,     
    subject: data.subject || '',
    message: data.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
}
