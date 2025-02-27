// src/components/about/SecondarySection.tsx
export default function SecondarySection() {
    return (
      <section className="bg-[#017848] text-white p-[20px]">
        <div className="max-w-[1200px] mx-auto p-[80px]">
          <div className="max-w-[1024px]">
            <h2 className="text-[48px] font-semibold mb-12">
              How we&apos;re changing things
            </h2>
            
            <div className="space-y-8 text-[16px] text-left">
              <p>
                Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers&apos;.
              </p>
              
              <p className="text-[16px]">
                That&apos;s why Better.com is redefining the homeownership process from the ground up. We&apos;re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}
