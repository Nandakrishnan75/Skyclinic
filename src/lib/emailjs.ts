import emailjs from '@emailjs/browser';

// EmailJS configuration - MUST BE UPDATED WITH CLIENT'S CREDENTIALS
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_p88rn6s', 
  TEMPLATE_ID: 'template_v9nbrmi', 
  PUBLIC_KEY: 'tss4zPG_TZwFZhdYq', 
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send appointment booking email
export const sendAppointmentEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}) => {
  try {
    const templateParams = {
      // Email metadata
      subject: `🏥 New Appointment Request - ${formData.name} (${formData.service})`,
      to_name: 'Sky Skin Clinic Team',
      to_email: 'skydentclinic11@gmail.com',
      from_name: `New Appointment Request - ${formData.name}`,
      from_email: 'skyskinclinic0@gmail.com', 
      reply_to: formData.email,

      // Client information
      client_name: formData.name,
      client_email: formData.email,
      phone: formData.phone,

      // Appointment details
      service: formData.service,
      appointment_date: formData.date,
      appointment_time: formData.time,
      message: formData.message || 'No additional message provided',

      // Additional context
      booking_source: 'Website Booking Form',
      priority: 'High - New Appointment',
      clinic_name: 'Sky Skin Clinic',
      clinic_phone: '+91 7994341414',
      clinic_address: 'North Fort Gate, Opposite to Old Sreekala Theatre, Thripunithura, Kochi',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
