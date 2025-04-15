import * as React from 'react';

interface EmailTemplateProps {
    name: string,
    email: string,
    subject: string,
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, message }) => (
    <div>
        <h1>Oi, sou o {name}</h1>
    </div>
);