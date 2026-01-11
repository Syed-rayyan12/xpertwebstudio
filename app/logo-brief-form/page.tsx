'use client'
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react'
import LogoMark from '../components/header/LogoMark';

interface FormData {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    companyDescription: string;
    targetAudience: string;
    brandPersonality: string;
    logoStyle: string;
    colors: string;
    usage: string;
    slogan: string;
    inspirationType: string[];
    competitors: string;
    additionalNotes: string;
}

export default function LogoBriefForm() {
    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        address: '',
        website: '',
        companyDescription: '',
        targetAudience: '',
        brandPersonality: '',
        logoStyle: '',
        colors: '',
        usage: '',
        slogan: '',
        inspirationType: [],
        competitors: '',
        additionalNotes: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleCheckbox = (value: any) => {
        setFormData((prev) => ({
            ...prev,
            inspirationType: prev.inspirationType.includes(value)
                ? prev.inspirationType.filter((v) => v !== value)
                : [...prev.inspirationType, value],
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <section className="min-h-screen bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* TITLE */}
                <div className="border border-gray-600 flex justify-between rounded-xl p-6 mb-10">
                    <div className=''>
                        <h1 className="text-2xl font-semibold">Logo Brief Form</h1>
                        <p className="text-white text-sm">
                            Help us understand your brand before designing your logo.
                        </p>
                    </div>
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/logo.svg"
                            alt="Xpert Web Studio Logo"
                            className="h-12 w-[44%]"
                            loading="lazy"
                        />
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10  flex flex-col gap-8">

                    {/* CLIENT INFO */}
                    <Card title="Client Information" >
                        <Grid>
                            <Input label="Company Name" name="companyName" onChange={handleChange} />
                            <Input label="Contact Name" name="contactName" onChange={handleChange} />
                            <Input label="Email Address" name="email" onChange={handleChange} />
                            <Input label="Phone Number" name="phone" onChange={handleChange} />
                            <Input label="Address" name="address" onChange={handleChange} />
                            <Input label="Website / Social Media" name="website" onChange={handleChange} />
                        </Grid>
                    </Card>

                    {/* LOGO BRIEF */}
                    <Card title="Logo Design Brief">
                        <Textarea label="What does your company do?" name="companyDescription" onChange={handleChange} />
                        <Textarea label="Target Audience" name="targetAudience" onChange={handleChange} />
                        <Textarea label="Brand Personality" name="brandPersonality" onChange={handleChange} />
                        <Textarea label="Logo Style Preference" name="logoStyle" onChange={handleChange} />
                        <Textarea label="Preferred Colors" name="colors" onChange={handleChange} />
                        <Textarea label="Where will the logo be used?" name="usage" onChange={handleChange} />
                        <Textarea label="Text / Slogan to include" name="slogan" onChange={handleChange} />
                    </Card>

                    {/* LOGO EXAMPLES */}
                    <Card title="Logo Examples">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {[
                                'logo01.png', 'logo02.jfif', 'logo03.jfif', 'logo04.jfif', 'logo05.jfif',
                                'logo06.jfif', 'logo07.jfif', 'logo08.png', 'logo09.png', 'logo10.jfif',
                                'logo11.jfif', 'logo12.jfif', 'logo13.jfif', 'logo14.jfif', 'logo15.jfif',
                                'logo16.jfif', 'logo17.png', 'logo18.jfif', 'logo19.png', 'logo20.jfif',
                                'logo21.jfif', 'logo25.jfif', 'logo26.png', 'logo27.png', 'logo28.jfif',
                                'logo29.png', 'logo30.jfif', 'logo31.jfif', 'logo32.jfif', 'logo33.jfif'
                            ].map((logo) => (
                                <label
                                    key={logo}
                                    className="border border-[#FF5900]/30 rounded-lg p-2 cursor-pointer hover:bg-[#FF5900]/10 hover:border-[#FF5900]/60 transition-all relative overflow-hidden aspect-square"
                                >
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        onChange={() => handleCheckbox(logo)}
                                    />
                                    <img 
                                        src={`/images/logos/${logo}`} 
                                        alt={`Logo ${logo}`}
                                        className="w-full h-full object-contain"
                                    />
                                </label>
                            ))}
                        </div>
                    </Card>

                    {/* FINAL */}
                    <Card title="Final Details">
                        <Textarea label="Competitors" name="competitors" onChange={handleChange} />
                        <Textarea label="Additional Notes" name="additionalNotes" onChange={handleChange} />
                    </Card>

                    {/* SUBMIT */}
                    <div className="text-center">
                        <button className="px-10 py-3 bg-[#FF5900] text-white rounded-lg font-semibold hover:bg-[#E54F00] transition">
                            Submit Brief
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

/* ---------- REUSABLE UI ---------- */

function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="border border-gray-600 rounded-xl p-6">
            <h2 className="text-lg font-medium mb-6">{title}</h2>
            {children}
        </div>
    )
}

function Grid({ children }: { children: React.ReactNode }) {
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
}

function Input({ label, name, onChange }: { label: string; name: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div>
            <label className="text-sm text-gray-400 mb-2 block">{label}</label>
            <input
                name={name}
                onChange={onChange}
                className="w-full bg-transparent border border-[#FF5900]/40 rounded-lg px-4 py-2 focus:outline-none"
            />
        </div>
    )
}

function Textarea({ label, name, onChange }: { label: string; name: string; onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="mb-4">
            <label className="text-sm text-gray-400 mb-2 block">{label}</label>
            <textarea
                name={name}
                rows={4}
                onChange={onChange}
                className="w-full bg-transparent border border-[#FF5900]/40 rounded-lg px-4 py-2 focus:outline-none"
            />
        </div>
    )
}
