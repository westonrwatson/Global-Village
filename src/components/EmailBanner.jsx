function EmailBanner() {
  return (
    <section className="bg-[#FFF9E6] py-16 md:py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16">
          <div className="flex-1 text-center md:text-left w-full md:w-auto mb-8 md:mb-0">
            <p className="font-black text-[#002A34] text-2xl md:text-5xl leading-tight">
              Get travel tips, exclusive deals, & community updates.
            </p>
          </div>
          <div className="w-full md:w-auto md:flex-1 md:max-w-none flex-shrink-0">
            <div className="bg-[#002A34] rounded-lg p-2 flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-transparent text-[#FDFBF4] placeholder:text-[#FDFBF4]/60 focus:outline-none text-sm md:text-base min-w-0"
              />
              <span className="text-[#CEF550] font-medium text-sm md:text-base whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity pr-4">
                Submit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmailBanner
