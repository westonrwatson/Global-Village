import { Link } from 'react-router-dom'

function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = 'cream',
  image,
  facts,
  cta,
  secondaryCta,
  align = 'center',
}) {
  const tones = {
    cream: 'bg-[#FFF9E6]',
    lime: 'bg-[#CEF550]',
    soft: 'bg-[#EFECE1]',
    yellow: 'bg-[#EBE694]',
    green: 'bg-[#B8DC73]',
    ink: 'bg-[#002A34]',
  }

  const inkOnDark = tone === 'ink'
  const text = inkOnDark ? 'text-[#FDFBF4]' : 'text-[#002A34]'
  const muted = inkOnDark ? 'text-[#FDFBF4]/80' : 'text-[#002A34]/80'
  const isCenter = align === 'center'

  return (
    <section
      className={`relative overflow-hidden ${tones[tone] || tones.cream} pt-28 md:pt-32 pb-14 md:pb-20 px-6`}
    >
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-[#002A34]/55 pointer-events-none" />
        </>
      )}

      {!image && !inkOnDark && (
        <div
          className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: tone === 'lime' || tone === 'green' ? '#FDFBF4' : '#CEF550' }}
        />
      )}

      <div
        className={`relative max-w-5xl mx-auto ${isCenter ? 'text-center' : 'text-left md:max-w-6xl'}`}
      >
        <p
          className={`uppercase font-black text-lg md:text-xl tracking-wide mb-3 ${
            image ? 'text-[#FDFBF4]' : text
          }`}
        >
          GLOBAL VILLAGE
        </p>
        {eyebrow && (
          <p
            className={`chivo-mono text-sm md:text-base mb-4 uppercase tracking-wide ${
              image ? 'text-[#CEF550]' : muted
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.05] mb-5 ${
            image ? 'text-[#FDFBF4]' : text
          } ${isCenter ? 'max-w-4xl mx-auto' : 'max-w-3xl'}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`roboto-regular text-base md:text-lg leading-relaxed mb-8 ${
              image ? 'text-[#FDFBF4]/90' : muted
            } ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          >
            {subtitle}
          </p>
        )}

        {(cta || secondaryCta) && (
          <div
            className={`flex flex-col sm:flex-row gap-3 mb-10 ${
              isCenter ? 'items-center justify-center' : 'items-start'
            }`}
          >
            {cta && (
              <Link
                to={cta.to}
                className={`px-8 py-3 font-medium text-base rounded-full transition-all ${
                  image || inkOnDark
                    ? 'bg-[#CEF550] text-[#002A34] hover:brightness-95'
                    : 'bg-[#002A34] text-[#FDFBF4] hover:bg-[#CEF550] hover:text-[#002A34]'
                }`}
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className={`px-8 py-3 font-medium text-base rounded-full border transition-colors ${
                  image || inkOnDark
                    ? 'border-[#FDFBF4] text-[#FDFBF4] hover:bg-[#FDFBF4] hover:text-[#002A34]'
                    : 'border-[#002A34] text-[#002A34] hover:bg-[#CEF550] hover:border-[#CEF550]'
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {facts?.length > 0 && (
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t ${
              image || inkOnDark ? 'border-[#FDFBF4]/25' : 'border-[#002A34]/15'
            } ${isCenter ? '' : 'md:max-w-3xl'}`}
          >
            {facts.map((fact) => (
              <div key={fact.label} className={isCenter ? 'text-center' : 'text-left'}>
                <p
                  className={`chivo-mono text-xs uppercase tracking-wide mb-1 ${
                    image || inkOnDark ? 'text-[#CEF550]' : 'text-[#002A34]/60'
                  }`}
                >
                  {fact.label}
                </p>
                <p
                  className={`font-black text-sm md:text-base uppercase leading-snug ${
                    image || inkOnDark ? 'text-[#FDFBF4]' : 'text-[#002A34]'
                  }`}
                >
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PageHero
