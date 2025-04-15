import * as React from 'react';

interface EmailTemplateProps {
    name: string,
    email: string,
    subject: string,
    message: string
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, message }) => (
    <div>
        <h1 className='text-sm'>Oi! Sou {name}</h1>
        <h2>{subject}</h2>
        <p>{message}</p>
        <span>{email}</span>
    </div>
);