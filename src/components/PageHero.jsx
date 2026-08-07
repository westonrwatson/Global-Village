function PageHero({ eyebrow, title, subtitle, tone = 'cream' }) {
  const tones = {
    cream: 'bg-[#FFF9E6]',
    lime: 'bg-[#CEF550]',
    soft: 'bg-[#EFECE1]',
    yellow: 'bg-[#EBE694]',
    green: 'bg-[#B8DC73]',
  }

  return (
    <section className={`${tones[tone] || tones.cream} pt-28 md:pt-32 pb-16 md:pb-20 px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase font-black text-xl md:text-2xl tracking-wide text-[#002A34] mb-4">
          GLOBAL VILLAGE
        </p>
        {eyebrow && (
          <p className="chivo-mono text-[#002A34] text-base md:text-lg mb-3">{eyebrow}</p>
        )}
        <h1 className="text-[#002A34] font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="roboto-regular text-[#002A34] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHero
