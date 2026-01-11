"use client";

import React from "react";

export default function WebsiteBriefForm() {
    return (
        <div className="min-h-screen bg-black flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl text-white space-y-8">

                {/* HEADER */}
                <div className="border border-gray-600 flex items-center justify-between rounded-xl p-6 bg-[#0b0b0b]">
                  <div>
                    <h1 className="text-3xl font-semibold">Website Brief Form</h1>
                    <p className="text-gray-400 mt-2">
                        Please fill out this form so we can scope and craft your website accurately.
                    </p>
                  </div>
                    <div>
                        <img
                            src="/logo.svg"
                            alt="Xpert Web Studio Logo"
                            className="h-12 w-[44%]"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* CLIENT INFORMATION */}
                <Section title="Client Information">
                    <TwoCol>
                        <Input label="Client Name" />
                        <Input label="Date" placeholder="mm/dd/yyyy" />
                    </TwoCol>
                    <Input label="Email" />
                    <Input label="Signature" />
                </Section>

                {/* BUSINESS SPECIFICS */}
                <Section title="Business Specifics">
                    <RadioRow
                        label="Do you have a Logo for the Business?"
                        options={["Yes", "No"]}
                    />
                    <TwoCol>
                        <Input label="Business Name" />
                        <Input label="Slogan (if any)" />
                    </TwoCol>
                    <Input label="Is there an existing website? If yes, URL" />
                </Section>

                {/* WEBSITE SPECIFICS */}
                <Section title="Website Specifics">
                    <TwoCol>
                        <Input label="What is the Principal Purpose of the Website?" />
                        <Input label="Who is the Target Audience?" />
                    </TwoCol>

                    <Input label="Is there an existing website? If yes, please provide the URL" />
                    <Input label="Are there any website color preferences? If yes, mention the details." />
                    <Input label="Please mention 3 top competitors" />

                    <CheckboxRow
                        label="What payment methods would you like to use? (Check all that applies)"
                        options={["Pay by card", "Bank Transfer", "MasterCard", "Paypal"]}
                    />

                    <RadioRow
                        label="Do you need a CMS (Content Management System) to edit content?"
                        options={["Yes", "No"]}
                    />

                    <RadioRow
                        label="SSL integration required?"
                        options={["Yes", "No"]}
                    />

                    <Input label="Do you have any preference for the platform / technology to be used?" />
                    <Input label="Are there any specific requirements not mentioned above?" />

                    <Textarea label="Please list down content pages you will have on your website (Example: About Us, Privacy Policy, FAQs etc.)" />
                </Section>

                {/* MODULES / COMPONENTS */}
                <Section title="Modules / Components">
                    <ModuleRow name="Account Login" />
                    <ModuleRow name="About / Company Information" />
                    <ModuleRow name="Banner / Slider" />
                    <ModuleRow name="Content Area" />
                    <ModuleRow name="News and Events Widget" />
                    <ModuleRow name="Site Search" />
                    <ModuleRow name="Request for Information Form" />
                    <ModuleRow name="Blog Feed" />
                    <ModuleRow name="Featured Products" />
                    <ModuleRow name="Video Gallery" />
                    <ModuleRow name="Newsletter Subscription Option" />
                    <ModuleRow name="Shopping Cart Widget" />
                    <ModuleRow name="Social Media Icons" />
                    <ModuleRow name="Twitter/X Feed" />
                    <ModuleRow name="Facebook Feeds" />
                </Section>

                {/* TECHNICAL DETAILS */}
                <Section>
                    <Textarea label="Any External API required? If yes, please mention the details" />
                    <Textarea label="Detailed Functional Requirements (Please mention the detailed functional requirements of the application)" />
                    <Textarea label="Administration and Dashboard Functional Requirements" />
                    <Textarea label="Any specific content management system (CMS) platform you require?" />
                    <Textarea label="Is there a specific deadline you have for completion?" />
                    <Textarea label="Do you have any other suggestions, ideas or requirements for the website?" />
                </Section>

                {/* SCOPE OF WORK */}
                <Section title="Scope of Work Agreement">
                    <TwoCol>
                        <Input label="Scope of Work Locked In by" />
                        <Input label="Scope of Work Approved by" />
                    </TwoCol>

                    <TwoCol>
                        <Input label="Account Manager Name" />
                        <Input label="Signature" />
                    </TwoCol>

                    <TwoCol>
                        <Input label="Project Deadline" placeholder="mm/dd/yyyy" />
                        <Input label="Signature" />
                    </TwoCol>

                    <TwoCol>
                        <Input label="Delivery Date" placeholder="mm/dd/yyyy" />
                        <Input label="Signature" />
                    </TwoCol>
                </Section>

                {/* SUBMIT */}
                <div className="flex justify-center pt-6">
                    <button className="px-10 py-3 bg-[#FF5900] text-white font-semibold rounded-lg hover:bg-[#E54F00] transition">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
}

/* ===================== */
/* REUSABLE COMPONENTS */
/* ===================== */

function Section({ title, children }: any) {
    return (
        <div className="border border-gray-600 max-w-7xl mx-auto rounded-xl p-6 bg-[#0b0b0b] space-y-4">
            {title && <h2 className="text-xl font-semibold">{title}</h2>}
            {children}
        </div>
    );
}

function TwoCol({ children }: any) {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
            {children}
        </div>
    );
}

function Input({ label, placeholder }: any) {
    return (
        <div>
            <label className="text-sm text-gray-400">{label}</label>
            <input
                placeholder={placeholder}
                className="mt-1 w-full bg-transparent border border-[#FF5900]/40 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF5900]"
            />
        </div>
    );
}

function Textarea({ label }: any) {
    return (
        <div>
            <label className="text-sm  text-gray-400">{label}</label>
            <textarea
                rows={3}
                className="mt-1 w-full bg-transparent border border-[#FF5900]/40 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF5900]"
            />
        </div>
    );
}

function RadioRow({ label, options }: any) {
    return (
        <div>
            <p className="text-sm text-white mb-1">{label}</p>
            <div className="flex gap-6">
                {options.map((opt: string) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name={label} className="w-4 h-4 accent-[#FF5900] cursor-pointer" />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );
}

function CheckboxRow({ label, options }: any) {
    return (
        <div>
            <p className="text-sm text-gray-400 mb-1">{label}</p>
            <div className="flex flex-wrap gap-6">
                {options.map((opt: string) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 accent-[#FF5900] cursor-pointer" />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );
}

function ModuleRow({ name }: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <p className="text-sm">{name}</p>
            <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={name} className="w-4 h-4 accent-[#FF5900] cursor-pointer" /> Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={name} className="w-4 h-4 accent-[#FF5900] cursor-pointer" /> No
                </label>
            </div>
            <input className="bg-black border border-[#FF5900]/40 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF5900]" placeholder="Feedback" />
        </div>
    );
}
