import {
  siteSettings,
  navLinks,
  heroData,
  trustItems,
  howItWorksData,
  productsData,
  servicesData,
  faqData,
  footerData
} from "./data";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-surface/70 dark:bg-surface-dim/70 backdrop-blur-xl docked full-width top-0 sticky shadow-sm dark:shadow-none z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto min-h-[80px] md:min-h-[100px] py-2">
          <div className="flex items-center gap-sm">
            <img
              alt={`${siteSettings.brandName} Logo`}
              className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] dark:drop-shadow-none transition-all duration-300 origin-left transform scale-110"
              src={siteSettings.logoUrl}
            />
          </div>
          <div className="hidden md:flex items-center gap-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-label-md text-label-md text-on-secondary-fixed-variant dark:text-on-secondary-container hover:text-primary transition-colors duration-200"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a
              className="inline-flex items-center justify-center gap-xs bg-primary text-on-primary font-label-md text-label-md font-bold px-md py-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-sm"
              href={`https://wa.me/${siteSettings.whatsappNumber}`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat
              </span>
              WhatsApp Order
            </a>
          </div>
          <button className="md:hidden text-on-surface p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-xl pb-xl px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center relative z-10">
            <div className="flex flex-col gap-md">
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface">
                {heroData.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem]">
                {heroData.description}
              </p>
              <div className="pt-sm">
                <a
                  className="inline-flex items-center justify-center gap-sm bg-[#25D366] text-white font-headline-md text-[18px] font-bold px-lg py-md rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)] transform hover:-translate-y-1"
                  href={`https://wa.me/${siteSettings.whatsappNumber}`}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    chat
                  </span>
                  {heroData.whatsappButtonText}
                </a>
              </div>
              <div className="flex items-center gap-sm mt-sm text-on-surface-variant font-caption text-caption">
                <span className="material-symbols-outlined text-tertiary">
                  local_shipping
                </span>
                <span>{heroData.deliveryNote}</span>
              </div>
            </div>
            <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,61,96,0.1)]">
              <div
                className="bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('${heroData.heroImage}')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              {/* Floating Quality Badge */}
              <div className="absolute bottom-md right-md bg-white/90 backdrop-blur-md px-md py-sm rounded-lg shadow-lg flex items-center gap-xs border border-white/50">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    {heroData.badgeTitle}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    {heroData.badgeSubtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-tertiary-fixed/30 blur-3xl -z-10 mix-blend-multiply"></div>
        </section>

        {/* Local Trust Section */}
        <section className="py-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-outline/10 relative topographic-texture">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-md">
            <p className="font-headline-md text-[20px] text-on-surface-variant">
              Trusted by <strong className="text-primary">500+</strong> Nakuru
              Households &amp; Businesses like Wamaggy Choma.
            </p>
            <div className="flex flex-wrap justify-center gap-md mt-sm">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-xs bg-surface text-on-surface-variant px-md py-xs rounded-full border border-outline/20 font-label-md text-label-md">
                  <span
                    className={`material-symbols-outlined ${item.iconColor}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Pipeline */}
        <section
          className="py-xl px-margin-mobile md:px-margin-desktop"
          id="about"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                {howItWorksData.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {howItWorksData.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-outline/20 z-0"></div>
              
              {howItWorksData.steps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center gap-sm">
                  <div className="w-24 h-24 rounded-full bg-surface-container-highest border-4 border-surface-bright flex items-center justify-center shadow-sm mb-xs relative group">
                    <div className={`absolute inset-0 ${step.bgColor} rounded-full scale-0 group-hover:scale-100 transition-transform duration-300`}></div>
                    <span
                      className={`material-symbols-outlined text-4xl ${step.iconColor}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products / Pricing (Bento Grid Style) */}
        <section
          className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low"
          id="products"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                {productsData.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {productsData.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {productsData.products.map((product, index) => (
                <div key={index} className={`glass-card rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-outline/10`}>
                  {/* Image Container - Classic Prominent Display */}
                  <div className="relative w-full h-80 bg-gradient-to-b from-surface-container-lowest to-surface flex justify-center items-center p-md overflow-hidden group">
                     {product.type === "secondary" && (
                       <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -z-0"></div>
                     )}
                     {/* Decorative background circle */}
                     <div className="absolute w-64 h-64 bg-white rounded-full blur-2xl opacity-60 -z-0"></div>
                     
                     <img src={product.imageUrl} alt={product.title} className="h-full w-auto object-contain drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500" />
                     
                     {product.tag && (
                        <span className="absolute top-md left-md bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-label-md px-sm py-xs rounded-full shadow-sm z-20">
                          {product.tag}
                        </span>
                      )}
                  </div>

                  <div className="p-lg flex flex-col flex-grow bg-surface-container-lowest">
                    <h3 className={`font-headline-md text-[28px] text-on-surface mb-sm`}>
                      {product.title}
                    </h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl flex-grow">
                      {product.description}
                    </p>
                    <a
                      className={`inline-flex items-center justify-center w-full py-md font-label-md text-label-md font-bold rounded-lg transition-colors shadow-sm ${
                        product.type === "primary"
                          ? "bg-tertiary text-on-tertiary hover:bg-on-tertiary-fixed-variant"
                          : "bg-surface text-on-surface border border-outline hover:bg-surface-variant"
                      }`}
                      href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(product.whatsappText)}`}
                    >
                      {product.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-lg text-center">
              <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                Weekly Office Supply?
              </p>
              <a
                className="inline-flex items-center gap-xs font-label-md text-label-md text-tertiary hover:text-on-tertiary-fixed-variant transition-colors border-b border-tertiary/30 pb-xs"
                href={`mailto:${productsData.corporateEmail}`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  business
                </span>
                Contact our corporate team for special rates.
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-xl px-margin-mobile md:px-margin-desktop bg-surface"
          id="services"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                {servicesData.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {servicesData.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {servicesData.services.map((service, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden hover:shadow-[0_10px_30px_rgba(13,13,13,0.05)] transition-shadow duration-300 flex flex-col">
                  <div className="h-56 w-full bg-surface-container-highest relative">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-md flex-grow flex flex-col">
                    <h3 className="font-headline-md text-[22px] text-on-surface mb-sm">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-xl px-margin-mobile md:px-margin-desktop border-t border-outline/10"
          id="faq"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
                {faqData.title}
              </h2>
            </div>
            <div className="space-y-sm">
              {faqData.faqs.map((faq, index) => (
                <details key={index} className="group bg-surface-container-lowest rounded-lg border border-outline/20 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-md font-headline-md text-[18px] text-on-surface">
                    {faq.question}
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <div className="px-md pb-md pt-0 font-body-md text-body-md text-on-surface-variant">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-on-secondary-fixed dark:bg-surface-container-highest border-t border-outline/10 w-full px-margin-mobile md:px-margin-desktop py-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-lg">
          <div className="flex flex-col gap-sm max-w-[24rem]">
            <img
              alt={`${siteSettings.brandName} Logo`}
              className="h-28 md:h-36 w-auto object-contain self-start transform scale-110 origin-left"
              src={siteSettings.logoUrl}
            />
            <p className="font-body-md text-body-md text-on-primary dark:text-on-surface opacity-80">
              {footerData.description}
            </p>
            <div className="mt-sm flex items-center gap-xs font-label-md text-label-md text-on-primary dark:text-on-surface">
              <span className="bg-[#E53935] text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                M-Pesa
              </span>
              <span className="opacity-90">
                Till Number: <strong>{footerData.tillNumber}</strong>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-primary-fixed dark:text-primary font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerData.quickLinks.map((link, index) => (
                <a
                  key={index}
                  className="font-body-md text-body-md text-secondary-fixed-dim hover:text-primary-fixed-dim transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-primary-fixed dark:text-primary font-bold uppercase tracking-wider">
              Location
            </h4>
            <address className="font-body-md text-body-md text-secondary-fixed-dim not-italic flex flex-col gap-1">
              <span>{footerData.location.branch}</span>
              <span>{footerData.location.serving}</span>
              <a
                className="hover:text-primary-fixed-dim transition-colors mt-2"
                href={`tel:${footerData.location.phone}`}
              >
                Tel: {footerData.location.displayPhone}
              </a>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-xl pt-md border-t border-outline/20">
          <p className="font-caption text-caption text-secondary-fixed-dim text-center">
            {footerData.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
