import { autoResponseTemplate, teamNotificationTemplate } from "@/utils/server/emailtemplates";
import { mailOptions, transporter } from "@/utils/server/nodemail";
import { contactSchema } from "@/utils/server/validationSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
  
        // Validate request body using Joi
        const { error, value } = contactSchema.validate(body, {
          abortEarly: false,
          stripUnknown: true,
        });
    
        if (error) {
          const errorMessages = error.details.map(detail => detail.message);
          return NextResponse.json(
            { success: false, errors: errorMessages },
            { status: 400 }
          );
        }
    
         // Email to the internal team
    const teamEmailContent = {
        ...mailOptions,
        to: process.env.TEAM_NOTIFICATION_EMAIL, // Email where team wants to receive notifications
        subject: teamNotificationTemplate.subject,
        html: teamNotificationTemplate.html(value)
      };
  
      // Auto-response to the client
      const clientEmailContent = {
        ...mailOptions,
        to: value.email, // Client's email from the form
        subject: autoResponseTemplate.subject,
        html: autoResponseTemplate.html(value.name)
      };
  
      await Promise.all([
        transporter.sendMail(teamEmailContent),
        transporter.sendMail(clientEmailContent)
      ]).catch(error => {
          console.error('Error sending emails:', error);
          throw new Error('Failed to send emails');
        });
    
        return NextResponse.json(
          { 
            success: true,
            message: 'Your message has been sent successfully. Please check your email for confirmation.' 
          },
          { status: 200 }
        );
        
      } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json(
          { 
            success: false,
            error: 'Failed to process request. Please try again later.' 
          },
          { status: 500 }
        );
      }
  }
  