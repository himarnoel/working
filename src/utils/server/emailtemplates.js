export const autoResponseTemplate = {
    subject: 'We\'ve Received Your Message - Thank You!',
    html: (name) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for contacting us, ${name}!</h2>
        
        <p>We've successfully received your message and wanted to let you know that:</p>
        
        <ul style="color: #555;">
          <li>Our team has been notified</li>
          <li>We will review your message and respond within the next 24 hours</li>
          <li>If your matter is urgent, please call us at [Your Phone Number]</li>
        </ul>
        
        <p style="margin-top: 20px;">During our business hours (9 AM - 5 PM), we typically respond much sooner.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">Best regards,<br>[Your Company Name] Team</p>
        </div>
      </div>
    `
  };
  
  export const teamNotificationTemplate = {
    subject: 'New Contact Form Submission',
    html: (data) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
    `
  };
  