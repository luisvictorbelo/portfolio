import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";



interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5 text-purple-500" />,
            title: "Email",
            value: "luis.belo@outlook.com.br",
            link: "mailto:luis.belo@outlook.com.br"
        },
        {
            icon: <Phone className="w-5 h-5 text-purple-500" />,
            title: "Telefone",
            value: "(98) 99109-3171",
            link: "https://wa.me/98991093171"
        },
        {
            icon: <MapPin className="w-5 h-5 text-purple-500" />,
            title: "Localização",
            value: "São Luís, MA - Brasil",
            link: "https://www.google.com/maps/place/S%C3%A3o+Lu%C3%ADs,+MA/@-2.5606322,-44.258122,12z/data=!4m15!1m8!3m7!1s0x7f68ff06f7f6d21:0x983102e459a3de47!2zU8OjbyBMdcOtcywgTUE!3b1!8m2!3d-2.5306721!4d-44.2988947!16zL20vMDF6cGtw!3m5!1s0x7f68ff06f7f6d21:0x983102e459a3de47!8m2!3d-2.5306721!4d-44.2988947!16zL20vMDF6cGtw?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
        }
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((res) => res.status === 200 ? toast({
            title: "Mensagem enviada!",
            description: "Obrigado por entrar em contato.",
            variant: "default",
            duration: 5000
        }) : toast({
            title: "Erro!",
            description: "Houve um erro ao enviar sua mensagem. Tente novamente!",
            variant: "default",
            duration: 5000
        }))

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        setLoading(false);
    };

    return (
        <AnimatedSection id="contact">
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Entre em Contato</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-foreground font-medium">
                                        Nome
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Seu nome"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="border-purple-200 dark:border-purple-700/20 focus:border-purple-400 dark:focus:border-purple-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-foreground font-medium">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border-purple-200 dark:border-purple-700/20 focus:border-purple-400 dark:focus:border-purple-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-foreground font-medium">
                                    Assunto
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Assunto da mensagem"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="border-purple-200 dark:border-purple-700/20 focus:border-purple-400 dark:focus:border-purple-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-foreground font-medium">
                                    Mensagem
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Sua mensagem"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="border-purple-200 dark:border-purple-700/20 focus:border-purple-400 dark:focus:border-purple-500"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="bg-purple-gradient hover:opacity-90 text-white w-full sm:w-auto px-8"
                            >
                                {loading ? (
                                    <>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensagem <Send className="ml-2 w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>

                    <div className="bg-white dark:bg-purple-800/10 p-6 rounded-xl shadow-md border border-purple-100 dark:border-purple-700/20 h-fit">
                        <h3 className="text-xl font-bold mb-6 text-foreground">
                            Informações de Contato
                        </h3>
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="flex items-start gap-4 text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    <div className="bg-purple-100 dark:bg-purple-700/20 p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{item.title}</h4>
                                        <p className="text-muted-foreground">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h4 className="font-medium mb-4 text-foreground">
                                Me encontre nas redes
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-purple-100 dark:bg-purple-700/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-600/20 transition-colors"
                                >
                                    <Github />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-purple-100 dark:bg-purple-700/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-600/20 transition-colors"
                                >
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Contact;