import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    const { name, email, subject, message } = await req.json()
    
    try {
        const { data, error } = await resend.emails.send({
            from: `Portfolio <onboarding@resend.dev>`,
            to: 'luis.belo@outlook.com.br',
            subject: `Nova mensagem de ${name}`,
            replyTo: email,
            react: EmailTemplate({ name, email, subject, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}