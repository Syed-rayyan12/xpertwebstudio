"use client";

export default function SeoWebCopywritingBrief() {
  return (
    <section className="min-h-screen bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Client Information */}
        <div className="bg-[#0b0b0b] border border-gray-600 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold  pb-2 mb-6 text-white">
            Client Information
          </h2>

          <FormInput label="Company Name" required />
          <FormInput label="Contact Person" required />
          <FormInput label="Email Address" type="email" required />
          <FormInput label="Phone Number" required />
          <FormInput label="Skype / Zoom ID (optional)" />
          <FormInput label="Industry / Business Type" required />
        </div>

        {/* About Business */}
        <div className="bg-[#0b0b0b] border border-gray-600 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold  pb-2 mb-6 text-white">
            About Your Business
          </h2>

          <FormTextarea
            label="Give us a short summary of your business — what do you do?"
            required
          />
          <FormInput label="How long have you been in business?" required />
          <FormTextarea
            label="List your main products and/or services."
            required
          />
          <FormTextarea
            label="Who are your top competitors, and what makes your business, product, or service different from theirs?"
            required
          />
          <FormInput label="If we have any questions, who should we contact? (Name)" />
          <FormInput label="Role" />
          <FormInput label="Email / Phone" />
        </div>

        {/* About Customers */}
        <div className="bg-[#0b0b0b] border border-gray-600 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold  pb-2 mb-6 text-white">
            About Your Customers
          </h2>

        <FormTextarea
          label="Describe your ideal customer (age, location, profession, interests, etc.)"
          required
        />
        <FormTextarea
          label="Who is the target audience for your website?"
          required
        />
        <FormTextarea
          label="What action do you want visitors to take? (call, buy, fill form, etc.)"
        />
        <FormTextarea
          label="How do your products/services help your customers’ needs?"
          required
        />
        <FormTextarea
          label="Share at least 3 websites your audience visits or follows."
          placeholder="e.g. www.site1.com, www.site2.com"
        />
        <FormTextarea
          label="Share websites your audience would avoid."
        />
        <FormInput
          label="Where are your customers mainly located? (Local / National / International)"
          required
        />

        {/* About Website */}
        <h2 className="text-xl font-semibold border-b border-gray-600 pb-2 mt-10 mb-6 text-white">
          About Your Website
        </h2>

          <FormInput
            label="Website Domain (URL)"
            placeholder="https://www.yourwebsite.com"
            required
          />
          <FormTextarea
            label="Pages you need content for (Home, About, Services, Contact, etc.)"
            required
          />
          <FormTextarea
            label="Any specific keywords or phrases you'd like included"
          />
          <FormTextarea
            label="Anything that must be included (tagline, awards, tone of voice)"
          />
          <FormTextarea
            label="Anything else you'd like us to know?"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-10 py-3 bg-[#FF5900] hover:bg-[#E54F00] text-white rounded-md font-medium transition"
          >
            Submit Brief
          </button>
        </div>

      </div>
    </section>
  );
}

/* Reusable Input */
function FormInput({ label, required, type = "text", placeholder }: { label: string; required?: boolean; type?: string; placeholder?: string }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-400">
        {label} {required && <span className="text-[#FF5900]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#FF5900]/40 bg-transparent rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
      />
    </div>
  );
}

/* Reusable Textarea */
function FormTextarea({ label, required, placeholder }: { label: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-400">
        {label} {required && <span className="text-[#FF5900]">*</span>}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full border border-[#FF5900]/40 bg-transparent rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
      />
    </div>
  );
}
