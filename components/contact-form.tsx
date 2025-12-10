import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SERVICES } from "@/lib/constants";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export default function ContactForm() {
    const WEB3FORMS_ACCESS_KEY = "46398f6d-060b-4885-8b69-2cfe2b9a5d8c";
    
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (submitted || error) {
            setSubmitted(false);
            setError('');
        }
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, service: value }));
        if (submitted || error) {
            setSubmitted(false);
            setError('');
        }
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitted(false);
        setError('');

        const form = event.currentTarget;
        const apiData = new FormData(form);
        apiData.append("access_key", WEB3FORMS_ACCESS_KEY);

        if (!apiData.get('service')) {
            apiData.set('service', formData.service);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: apiData
            });

            const data = await response.json();
            if (data.success) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                });
            } else {
                setError(data.message || "An unknown error occurred.");
            }
        } catch (err) {
            console.error(err);
            setError("Could not connect to the server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-1">Email</h3>
                            <p className="text-muted-foreground">info@lumipaix.com</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-2 border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name*</Label>
                                <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="border-border bg-background h-12"disabled={isSubmitting}/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address*</Label>
                                <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="border-border bg-background h-12" disabled={isSubmitting}/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className="border-border bg-background h-12" disabled={isSubmitting}/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="service">Service of Interest</Label>
                                <Select value={formData.service} onValueChange={handleSelectChange} disabled={isSubmitting}>
                                    <SelectTrigger className="border-border bg-background w-full py-6">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {SERVICES.map((service) => (
                                            <SelectItem key={service} value={service}>
                                                {service}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message*</Label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." required className="min-h-[130px] border-border bg-background resize-none"disabled={isSubmitting}/>
                        </div>

                        {error && (
                            <Alert className="bg-red-50 border-red-200 text-red-700">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <Button type="submit" disabled={isSubmitting} className="w-full h-12 font-semibold flex items-center justify-center gap-2 group" >
                            {isSubmitting ? "Sending Message..." : <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Send Message</>}
                        </Button>

                        {submitted && (
                            <Alert className="bg-green-50 border-green-200 text-green-600">
                                <AlertDescription>
                                    ✓ Thank you! Your message has been sent successfully.
                                </AlertDescription>
                            </Alert>
                        )}
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}