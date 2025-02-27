import Image from 'next/image'

export default function BackedBySection() {
  return (
    <section className="px-20 py-28 bg-[#FFFDFA]">
      <h2 className="font-semibold leading-heading m-0 p-0 tracking-normal w-auto text-[24px] md:text-[32px] md:tracking-tight text-center">
        Backed by
      </h2>
      
      <div className="m-auto mt-20 flex max-w-screen-2xl flex-wrap justify-center items-center gap-8">
        <a href="https://group.softbank/en/philosophy" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/softbank.png"
            alt="SoftBank"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
        
        <a href="https://www.ally.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/ally-logo.png"
            alt="Ally"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
        
        <a href="https://www.citi.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/citi-logo.png"
            alt="Citi"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
        
        <a href="https://bank.pingan.com/english/index.shtml" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/pingan-bank-logo.png"
            alt="Ping An Bank"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
        
        <a href="https://www.goldmansachs.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/goldman-sachs-logo.png"
            alt="Goldman Sachs"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
        
        <a href="https://www.kpcb.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/kpcb-logo.png"
            alt="KPCB"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
        
        <a href="https://www.americanexpress.com/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/about/amex-logo.png"
            alt="American Express"
            width={154}
            height={90}
            className="grayscale"
          />
        </a>
      </div>
    </section>
  )
}