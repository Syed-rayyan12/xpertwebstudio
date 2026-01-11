import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Validate input
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to owner
    const ownerMailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px 40px; background: linear-gradient(135deg, #FF5900 0%, #E54F00 100%);">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                        You have received a new message from your website contact form:
                      </p>
                      
                      <!-- Contact Details -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                        <tr>
                          <td style="padding: 15px; background-color: #f8f8f8; border-left: 4px solid #FF5900;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="padding: 8px 0;">
                                  <strong style="color: #FF5900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name:</strong>
                                  <p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;">${name}</p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <strong style="color: #FF5900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                                  <p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;">
                                    <a href="mailto:${email}" style="color: #FF5900; text-decoration: none;">${email}</a>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <strong style="color: #FF5900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Service Interested In:</strong>
                                  <p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;">${service}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message -->
                      <div style="margin: 30px 0;">
                        <strong style="color: #FF5900; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</strong>
                        <div style="margin-top: 10px; padding: 20px; background-color: #f8f8f8; border-radius: 8px; border-left: 4px solid #FF5900;">
                          <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                      </div>
                      
                      <!-- Action Button -->
                      <table role="presentation" style="margin: 30px 0;">
                        <tr>
                          <td style="border-radius: 8px; background-color: #FF5900;">
                            <a href="mailto:${email}" style="display: inline-block; padding: 15px 30px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold;">Reply to ${name}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #1A1B1E; text-align: center;">
                      <p style="margin: 0; color: #999999; font-size: 14px;">
                        This email was sent from your website contact form at XpertBrand
                      </p>
                      <p style="margin: 10px 0 0 0; color: #666666; font-size: 12px;">
                        © ${new Date().getFullYear()} XpertBrand. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Auto-reply email to user
    const userMailOptions = {
      from: `"XpertBrand" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting XpertBrand',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Us</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 20px 40px; background: linear-gradient(135deg, #FF5900 0%, #E54F00 100%); text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Thank You!</h1>
                      <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px;">We've received your message</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <p style="margin: 0 0 20px 0; color: #333333; font-size: 18px; line-height: 1.6;">
                        Hi <strong>${name}</strong>,
                      </p>
                      
                      <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                        Thank you for reaching out to us! We have received your inquiry about <strong>${service}</strong> and appreciate your interest in XpertBrand.
                      </p>
                      
                      <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">
                        Our team will review your message and get back to you within 24-48 hours. We're excited to learn more about your project and explore how we can help bring your vision to life.
                      </p>
                      
                      <!-- What's Next Section -->
                      <div style="margin: 30px 0; padding: 25px; background-color: #f8f8f8; border-radius: 8px; border-left: 4px solid #FF5900;">
                        <h2 style="margin: 0 0 15px 0; color: #FF5900; font-size: 20px;">What happens next?</h2>
                        <ul style="margin: 0; padding-left: 20px; color: #333333; font-size: 15px; line-height: 1.8;">
                          <li>Our team reviews your requirements</li>
                          <li>We'll contact you to discuss your project in detail</li>
                          <li>You'll receive a customized proposal tailored to your needs</li>
                        </ul>
                      </div>
                      
                      <!-- Your Message -->
                      <div style="margin: 30px 0;">
                        <h3 style="margin: 0 0 15px 0; color: #333333; font-size: 18px;">Your message:</h3>
                        <div style="padding: 20px; background-color: #f8f8f8; border-radius: 8px; border-left: 4px solid #FF5900;">
                          <p style="margin: 0; color: #666666; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                      </div>
                      
                      <!-- CTA -->
                      <div style="text-align: center; margin: 30px 0;">
                        <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px;">
                          In the meantime, feel free to explore our work:
                        </p>
                        <table role="presentation" style="margin: 0 auto;">
                          <tr>
                            <td style="border-radius: 8px; background-color: #FF5900;">
                              <a href="https://yourwebsite.com/our-work" style="display: inline-block; padding: 15px 30px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold;">View Our Portfolio</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #1A1B1E;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="text-align: center; padding-bottom: 20px;">
                            <p style="margin: 0 0 10px 0; color: #999999; font-size: 14px; font-weight: bold;">
                              Connect with us:
                            </p>
                            <!-- Social Icons -->
                            <div style="margin: 15px 0;">
                              <a href="#" style="display: inline-block; margin: 0 10px; text-decoration: none;">
                                <span style="display: inline-block; width: 40px; height: 40px; background-color: #333333; border-radius: 8px; line-height: 40px; text-align: center; color: #ffffff;">f</span>
                              </a>
                              <a href="#" style="display: inline-block; margin: 0 10px; text-decoration: none;">
                                <span style="display: inline-block; width: 40px; height: 40px; background-color: #333333; border-radius: 8px; line-height: 40px; text-align: center; color: #ffffff;">in</span>
                              </a>
                              <a href="#" style="display: inline-block; margin: 0 10px; text-decoration: none;">
                                <span style="display: inline-block; width: 40px; height: 40px; background-color: #333333; border-radius: 8px; line-height: 40px; text-align: center; color: #ffffff;">X</span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center; border-top: 1px solid #333333; padding-top: 20px;">
                            <p style="margin: 0 0 5px 0; color: #999999; font-size: 14px;">
                              XpertBrand
                            </p>
                            <p style="margin: 0 0 5px 0; color: #666666; font-size: 12px;">
                              242 Ellesmere Road, West Gate Road, Newcastle upon Tyne, NE4 8TQ UK
                            </p>
                            <p style="margin: 10px 0 0 0; color: #666666; font-size: 12px;">
                              © ${new Date().getFullYear()} XpertBrand. All rights reserved.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
