(function () {
  const translations = {
    en: {
      meta: {
        home: {
          title: "A2 Digital World, Ads that sell. Results that show.",
          description: "A2 Digital World builds ad strategies that bring real customers, not just clicks and likes. Measurable results, every month."
        },
        work: {
          title: "Work, A2 Digital World",
          description: "Selected case studies from A2 Digital World, businesses we've grown through ads, content and systems that sell."
        }
      },
      nav: {
        services: "Services",
        work: "Work",
        about: "About",
        pricing: "Pricing",
        faq: "FAQ",
        freeOffer: "Get your free offer <span class=\"arrow\">→</span>"
      },
      hero: {
        pill: "Accepting new clients, 2 slots left this month",
        title: "Your business<br>deserves <em>more sales.</em>",
        sub: "A2 Digital World builds ad strategies that bring real customers, not just clicks and likes. Measurable results, every month. Ads that sell. Results that show.",
        primaryCta: "Start today, free consultation <span class=\"arrow\">→</span>",
        secondaryCta: "See the results",
        scroll: "Scroll"
      },
      stats: {
        businesses: "Businesses grown",
        years: "Years of results",
        roas: "Average ROAS",
        promises: "Empty promises"
      },
      problem: {
        eyebrow: "The gap we close",
        title: "Most businesses don't have<br>a <em>product problem</em>.<br>They have a <em>selling problem</em>.",
        leftHead: "✗ Sound familiar?",
        rightHead: "✓ With A2DW",
        leftRows: [
          "You've spent on ads but your sales haven't moved.",
          "Your agency reports likes and reach, not revenue.",
          "You don't actually know what's working and what isn't.",
          "Budget left the account. Customers never arrived."
        ],
        rightRows: [
          "Campaigns optimized for conversions, not reach.",
          "We report ROAS, CPA and real sales every month.",
          "Transparent dashboard, you see where every cent goes.",
          "Systems that keep selling, even when you're offline."
        ]
      },
      services: {
        eyebrow: "Services",
        title: "Every service has one goal,<br><em>to grow your sales.</em>",
        sub: "We don't offer 'standard packages'. We build the right system based on your business, your target, and your budget.",
        items: [
          {
            badge: "ADS",
            popupCode: "01",
            order: "01 / Paid Ads",
            group: "Paid Ads",
            title: "Meta Ads",
            desc: "Facebook and Instagram advertising, targeting, creatives and conversion campaigns built for local and regional brands.",
            tags: ["Meta Ads", "Instagram Ads", "Retargeting", "Creative testing"]
          },
          {
            badge: "BRD",
            popupCode: "02",
            order: "02 / Brand",
            group: "Brand",
            title: "Brand Strategy",
            desc: "Repositioning, tone of voice, audience definition and competitive analysis that give your brand a sharper place in the market.",
            tags: ["Positioning", "Messaging", "Audience", "Direction"]
          },
          {
            badge: "VID",
            popupCode: "03",
            order: "03 / Content",
            group: "Content",
            title: "Video & Reels",
            desc: "Short-form video, animated reels and story-led content designed to stop the scroll and move people to action.",
            tags: ["Reels", "Short-form video", "Creative concepts", "Editing"]
          },
          {
            badge: "ECM",
            popupCode: "04",
            order: "04 / E-Commerce",
            group: "E-Commerce",
            title: "Store Growth",
            desc: "Product launches, catalog ads, retargeting flows and store-side improvements for online brands that want more sales.",
            tags: ["Catalog ads", "Product launches", "Retargeting", "Store UX"]
          },
          {
            badge: "SOC",
            popupCode: "05",
            order: "05 / Social",
            group: "Social",
            title: "Social Media",
            desc: "Monthly planning, publishing, community management and performance tracking for brands that want consistent growth.",
            tags: ["Planning", "Posting", "Community", "Insights"]
          }
        ]
      },
      work: {
        eyebrow: "Case studies",
        title: "New projects are being<br><em>prepared right now.</em>",
        sub: "This section stays ready so new case studies can be added as soon as they are approved.",
        kicker: "Portfolio update in progress",
        emptyTitle: "Projects will appear here soon.",
        emptyText: "The section is ready for your real case studies, screenshots and results. Once you have them, they can be dropped in here without rebuilding the rest of the site."
      },
      about: {
        eyebrow: "About A2DW",
        title: "We're not an agency,<br>we're your <em>sales partner.</em>",
        p1: "A2 Digital World was created because businesses deserve marketing that works, not pretty pages without results. Every campaign has one goal: to grow your sales.",
        p2: "From Skopje, North Macedonia, we work with founders and SMB owners across the region who want numbers that move, not vanity metrics.",
        cta: "See what we can do for you <span class=\"arrow\">→</span>"
      },
      process: {
        eyebrow: "How we work",
        title: "A short, <em>honest</em> process.",
        sub: "Four steps. No mystery. You always know what's happening and what's next.",
        rows: [
          {
            num: "01",
            title: "Audit",
            desc: "We look at your business, your numbers and the money you've already spent, and tell you exactly where it's leaking."
          },
          {
            num: "02",
            title: "Strategize",
            desc: "Positioning, offer, channels, creative angles, budget and KPIs, on paper, signed off before a single euro is spent."
          },
          {
            num: "03",
            title: "Launch",
            desc: "Ads, content, landing pages, automations. We ship fast and go live with the full system in 14 days or less."
          },
          {
            num: "04",
            title: "Optimize",
            desc: "Weekly reviews. Cut what doesn't work, double what does. Full transparency through a live dashboard."
          }
        ]
      },
      pricing: {
        eyebrow: "Pricing",
        title: "One starting point.<br><em>One honest number.</em>",
        sub: "No hidden fees. No '12-month contracts'. We build the right plan for your business, and scale it as you grow.",
        caption: "Starting from",
        amount: "350",
        period: "/month",
        lead: "Talk to us, we build the right plan for your business, based on your industry, budget and goals.",
        cta: "Get your free offer <span class=\"arrow\">→</span>",
        features: [
          "Free 15-minute strategy call",
          "Transparent monthly reporting",
          "Live dashboard, ROAS, CPA, revenue",
          "Weekly campaign optimization",
          "Content built for conversion",
          "No long-term contracts"
        ]
      },
      faq: {
        eyebrow: "Questions",
        title: "Good <em>questions.</em><br>Honest answers.",
        sub: "If yours isn't here, just ask, we reply within 2 hours during business hours.",
        cta: "Ask a question <span class=\"arrow\">→</span>",
        items: [
          {
            q: "How long until I see results?",
            a: "Paid ads typically show signal within 2–3 weeks. Organic and content compound, expect meaningful lift by days 60–90. We share a live dashboard from day one, so you never have to guess."
          },
          {
            q: "Do you work with small budgets?",
            a: "Yes, we start from €350/month and scale with you. What we need is a real product, a clear offer, and willingness to test. We've taken businesses from zero online revenue to consistent daily bookings."
          },
          {
            q: "What do you actually report on?",
            a: "ROAS, CPA, revenue generated, cost per lead, funnel conversion rates, the numbers that pay your bills. Likes and reach are context, not KPIs."
          },
          {
            q: "Who owns the content you produce?",
            a: "You do. Every asset, raw footage, edited video, ad creative, design files, is yours the moment it's approved. No licensing weirdness, no hostage files."
          },
          {
            q: "Can I cancel anytime?",
            a: "Yes. Month-to-month, 30 days notice. We'd rather you stay because the work is good, not because you're locked in."
          }
        ]
      },
      cta: {
        title: "Add a new customer<br>next month. <em>Start today.</em>",
        sub: "15 minutes, and we'll tell you exactly what's costing you sales every day and how to fix it. Free, no commitment.",
        button: "Book your free consultation <span class=\"arrow\">→</span>"
      },
      footer: {
        brand: "A2 Digital World, ads that sell, results that show. Built in Skopje, working with businesses across the region.",
        servicesHead: "Services",
        studioHead: "Studio",
        contactHead: "Contact",
        studioWork: "Work",
        studioProcess: "Process",
        studioPricing: "Pricing",
        studioFaq: "FAQ",
        contactBook: "Book a consultation",
        contactOffer: "Get a free offer",
        contactWork: "See our work",
        rights: "© 2026 A2 Digital World. All rights reserved.",
        email: "Email",
        portfolio: "Portfolio",
        instagram: "Instagram",
        bookCall: "Book a call"
      },
      popup: {
        eyebrow: "Our services",
        title: "Before you continue.<br><em>Here is what we do.</em>",
        lead: "A2DW focuses on five core services built around growth, conversions and stronger brand positioning.",
        note: "Close with the X, or continue straight into the website.",
        button: "Continue to website <span class=\"arrow\">→</span>"
      },
      modal: {
        title: "Get your <em>free offer.</em>",
        lead: "15 minutes, and we'll tell you exactly what's costing you sales every day and how to fix it. Free, no commitment.",
        nameLabel: "Your name",
        namePlaceholder: "Jane Doe",
        emailLabel: "Email address",
        emailPlaceholder: "you@company.com",
        phoneLabel: "Phone number",
        phonePlaceholder: "+389 ...",
        businessLabel: "Business name",
        businessPlaceholder: "Your business",
        serviceLabel: "Which service?",
        budgetLabel: "Monthly ad budget (€)",
        messageLabel: "How can we help you?",
        messagePlaceholder: "Tell us about your business, your goals, and what you've tried so far.",
        submit: "Send, we reply within 2 hours",
        note: "By submitting, you agree to be contacted by A2DW. We never share your info.",
        successTitle: "Your message is <em>on the way.</em>",
        successLead: "We'll reply within 2 hours during business hours. Talk soon.",
        successClose: "Close",
        sending: "Sending...",
        closeAria: "Close",
        popupCloseAria: "Close services popup",
        serviceOptions: {
          placeholder: "Select a service",
          full: "Full package, I need everything",
          unsure: "Not sure yet, help me decide"
        },
        budgetOptions: [
          { value: "", label: "Select a range" },
          { value: "0-500", label: "€0 – €500" },
          { value: "500-1500", label: "€500 – €1,500" },
          { value: "1500-5000", label: "€1,500 – €5,000" },
          { value: "5000+", label: "€5,000+" },
          { value: "No budget yet", label: "Not sure / no budget yet" }
        ]
      },
      workPage: {
        homeCrumb: "Home",
        currentCrumb: "Work",
        eyebrow: "Portfolio",
        title: "The next case studies<br>are coming <em>soon.</em>",
        sub: "This page is kept ready for your real projects only. When the materials are finalized, the cards, visuals and detailed breakdowns can be added here without redesigning the page.",
        emptyKicker: "Portfolio update in progress",
        emptyTitle: "Projects are being added.",
        emptyText: "This page stays live, but the project cards are cleared for now so you can add only the real case studies you want to show later.",
        detailEyebrow: "Detailed portfolio",
        detailTitle: "Case studies will be added <em>here.</em>",
        detailLead: "When your projects are ready, this area can hold the full story, visuals and results for each one without changing the rest of the page.",
        detailKicker: "Coming soon",
        detailEmptyTitle: "Only your final projects will be published here.",
        detailEmptyText: "For now, the old examples are removed so the portfolio stays clean until you are ready to add the real work.",
        ctaTitle: "Your project<br>could be <em>next.</em>",
        ctaSub: "15 minutes, and we'll tell you exactly what's costing you sales every day and how to fix it. Free, no commitment.",
        ctaButton: "Get your free offer <span class=\"arrow\">→</span>",
        contactFaq: "Common questions"
      }
    },
    sq: {
      meta: {
        home: {
          title: "A2 Digital World, Reklama që shesin. Rezultate që duken.",
          description: "A2 Digital World ndërton strategji reklamimi që sjellin klientë realë, jo vetëm klikime dhe pëlqime. Rezultate të matshme, çdo muaj."
        },
        work: {
          title: "Punimet, A2 Digital World",
          description: "Raste të zgjedhura nga A2 Digital World, biznese që i kemi rritur me reklama, përmbajtje dhe sisteme që shesin."
        }
      },
      nav: {
        services: "Shërbimet",
        work: "Punimet",
        about: "Rreth nesh",
        pricing: "Çmimet",
        faq: "Pyetje",
        freeOffer: "Merr ofertën falas <span class=\"arrow\">→</span>"
      },
      hero: {
        pill: "Po pranojmë klientë të rinj, edhe 2 vende këtë muaj",
        title: "Biznesi yt<br>e meriton <em>më shumë shitje.</em>",
        sub: "A2 Digital World ndërton strategji reklamimi që sjellin klientë realë, jo vetëm klikime dhe pëlqime. Rezultate të matshme, çdo muaj. Reklama që shesin. Rezultate që duken.",
        primaryCta: "Fillo sot, konsultë falas <span class=\"arrow\">→</span>",
        secondaryCta: "Shihe rezultatin",
        scroll: "Poshtë"
      },
      stats: {
        businesses: "Biznese të rritura",
        years: "Vite rezultatesh",
        roas: "ROAS mesatar",
        promises: "Premtime boshe"
      },
      problem: {
        eyebrow: "Hendeku që e mbyllim",
        title: "Shumica e bizneseve nuk kanë<br>një <em>problem me produktin</em>.<br>Kanë një <em>problem me shitjen</em>.",
        leftHead: "✗ Të tingëllon e njohur?",
        rightHead: "✓ Me A2DW",
        leftRows: [
          "Ke shpenzuar në reklama, por shitjet nuk janë lëvizur.",
          "Agjencia jote raporton pëlqime dhe reach, jo të ardhura.",
          "Nuk e di realisht çfarë po funksionon dhe çfarë jo.",
          "Buxheti doli nga llogaria. Klientët nuk erdhën."
        ],
        rightRows: [
          "Fushata të optimizuara për konvertime, jo për reach.",
          "Raportojmë ROAS, CPA dhe shitje reale çdo muaj.",
          "Dashboard transparent, e sheh ku shkon çdo cent.",
          "Sisteme që vazhdojnë të shesin edhe kur nuk je online."
        ]
      },
      services: {
        eyebrow: "Shërbimet",
        title: "Çdo shërbim ka një qëllim,<br><em>të rrisë shitjet e tua.</em>",
        sub: "Nuk ofrojmë 'paketa standarde'. E ndërtojmë sistemin e duhur sipas biznesit, targetit dhe buxhetit tënd.",
        items: [
          {
            badge: "ADS",
            popupCode: "01",
            order: "01 / Reklama me pagesë",
            group: "Reklama",
            title: "Meta Ads",
            desc: "Reklama në Facebook dhe Instagram, targetim, kreativa dhe fushata konvertimi për brende lokale dhe rajonale.",
            tags: ["Meta Ads", "Instagram Ads", "Retargeting", "Testim kreativash"]
          },
          {
            badge: "BRD",
            popupCode: "02",
            order: "02 / Brand",
            group: "Brand",
            title: "Strategji Brendi",
            desc: "Ripozicionim i brandit, tone of voice, definim audience dhe analizë konkurrence për biznese gati për rritje.",
            tags: ["Pozicionim", "Mesazh", "Audience", "Drejtim"]
          },
          {
            badge: "VID",
            popupCode: "03",
            order: "03 / Content",
            group: "Përmbajtje",
            title: "Video & Reels",
            desc: "Video të shkurtra, reels të animuara dhe përmbajtje me storytelling që ndalin scroll-in dhe shtyjnë drejt veprimit.",
            tags: ["Reels", "Video të shkurtra", "Koncepte kreative", "Editim"]
          },
          {
            badge: "ECM",
            popupCode: "04",
            order: "04 / E-Commerce",
            group: "E-Commerce",
            title: "Rritje e Dyqanit",
            desc: "Lansime produktesh, catalog ads, rrjedha retargetimi dhe përmirësime në store për brende online që duan më shumë shitje.",
            tags: ["Catalog ads", "Lansime", "Retargeting", "Store UX"]
          },
          {
            badge: "SOC",
            popupCode: "05",
            order: "05 / Social",
            group: "Social",
            title: "Menaxhim Social",
            desc: "Planifikim mujor, publikim, menaxhim komuniteti dhe matje performance për brende që duan rritje të vazhdueshme.",
            tags: ["Planifikim", "Postime", "Komunitet", "Insight-e"]
          }
        ]
      },
      work: {
        eyebrow: "Rastet e punës",
        title: "Projektet e reja po<br><em>përgatiten tani.</em>",
        sub: "Kjo pjesë është gati që case study-t e reja të shtohen sapo të miratohen.",
        kicker: "Portfolio po përditësohet",
        emptyTitle: "Projektet do të shfaqen këtu së shpejti.",
        emptyText: "Seksioni është gati për case study-t e tua reale, screenshot-et dhe rezultatet. Kur t’i kesh gati, futen këtu pa e rindërtuar faqen."
      },
      about: {
        eyebrow: "Rreth A2DW",
        title: "Nuk jemi agjenci,<br>jemi <em>partneri yt i shitjeve.</em>",
        p1: "A2 Digital World u krijua sepse bizneset meritojnë marketing që funksionon, jo faqe të bukura pa rezultat. Çdo fushatë ka një qëllim: të rrisë shitjet e tua.",
        p2: "Nga Shkupi, Maqedonia e Veriut, punojmë me themelues dhe pronarë biznesesh në rajon që duan numra që lëvizin, jo vanity metrics.",
        cta: "Shihe çfarë mund të bëjmë për ty <span class=\"arrow\">→</span>"
      },
      process: {
        eyebrow: "Si punojmë",
        title: "Një proces i shkurtër, <em>i sinqertë</em>.",
        sub: "Katër hapa. Pa mister. Gjithmonë e di çfarë po ndodh dhe çfarë vjen më pas.",
        rows: [
          {
            num: "01",
            title: "Auditim",
            desc: "E shohim biznesin tënd, numrat dhe paratë që i ke shpenzuar tashmë, dhe të tregojmë saktë ku po rrjedhin."
          },
          {
            num: "02",
            title: "Strategji",
            desc: "Pozicionim, ofertë, kanale, kënde kreative, buxhet dhe KPI, në letër, të qarta para se të shpenzohet qoftë edhe një euro."
          },
          {
            num: "03",
            title: "Lansim",
            desc: "Reklama, përmbajtje, landing pages, automacione. E nxjerrim sistemin live shpejt, zakonisht brenda 14 ditësh ose më pak."
          },
          {
            num: "04",
            title: "Optimizim",
            desc: "Rishikime javore. E presim atë që s’funksionon dhe e dyfishojmë atë që funksionon. Transparencë e plotë me dashboard live."
          }
        ]
      },
      pricing: {
        eyebrow: "Çmimet",
        title: "Një pikë nisjeje.<br><em>Një numër i sinqertë.</em>",
        sub: "Pa tarifa të fshehura. Pa 'kontrata 12-mujore'. E ndërtojmë planin e duhur për biznesin tënd, dhe e rrisim bashkë me ty.",
        caption: "Duke filluar nga",
        amount: "350",
        period: "/muaj",
        lead: "Fol me ne, e ndërtojmë planin e duhur për biznesin tënd, sipas industrisë, buxhetit dhe objektivave.",
        cta: "Merr ofertën falas <span class=\"arrow\">→</span>",
        features: [
          "Telefonatë strategjie falas 15 minuta",
          "Raportim mujor transparent",
          "Dashboard live, ROAS, CPA, të ardhura",
          "Optimizim javor i fushatave",
          "Përmbajtje e ndërtuar për konvertime",
          "Pa kontrata afatgjata"
        ]
      },
      faq: {
        eyebrow: "Pyetje",
        title: "Pyetje të <em>mira.</em><br>Përgjigje të sinqerta.",
        sub: "Nëse pyetja jote s’është këtu, vetëm na shkruaj, kthehemi brenda 2 orëve gjatë orarit të punës.",
        cta: "Bëj një pyetje <span class=\"arrow\">→</span>",
        items: [
          {
            q: "Sa kohë duhet derisa të shoh rezultate?",
            a: "Paid ads zakonisht japin sinjal brenda 2–3 javësh. Organiku dhe përmbajtja ndërtohen me kohë, rritje kuptimplote zakonisht nga dita 60–90. Që nga dita e parë ke dashboard live, që të mos hamendësosh."
          },
          {
            q: "A punoni edhe me buxhete të vogla?",
            a: "Po, fillojmë nga €350/muaj dhe rritemi bashkë me ty. Na duhet një produkt real, një ofertë e qartë dhe gatishmëri për testim. Kemi çuar biznese nga zero të ardhura online në booking-e të përditshme."
          },
          {
            q: "Çfarë raportoni realisht?",
            a: "ROAS, CPA, të ardhura të gjeneruara, kosto për lead, norma konvertimi në funnel, numrat që të paguajnë faturat. Likes dhe reach janë vetëm kontekst, jo KPI."
          },
          {
            q: "Kush e zotëron përmbajtjen që e prodhoni?",
            a: "Ti. Çdo asset, video raw, video e montuar, kreativë reklamash, fajlla dizajni, është i yti sapo të aprovohet. Pa licenca të çuditshme dhe pa fajlla peng."
          },
          {
            q: "A mund ta ndërpres kur të dua?",
            a: "Po. Muaj pas muaji, me njoftim 30 ditë. Preferojmë të rrish sepse puna është e mirë, jo sepse je i lidhur me kontratë."
          }
        ]
      },
      cta: {
        title: "Shto një klient të ri<br>muajin tjetër. <em>Fillo sot.</em>",
        sub: "15 minuta, dhe të tregojmë saktë çfarë po të kushton shitje çdo ditë dhe si ta rregullosh. Falas, pa obligim.",
        button: "Rezervo konsultën falas <span class=\"arrow\">→</span>"
      },
      footer: {
        brand: "A2 Digital World, reklama që shesin, rezultate që duken. Ndërtuar në Shkup, duke punuar me biznese në gjithë rajonin.",
        servicesHead: "Shërbimet",
        studioHead: "Studio",
        contactHead: "Kontakt",
        studioWork: "Punimet",
        studioProcess: "Procesi",
        studioPricing: "Çmimet",
        studioFaq: "Pyetje",
        contactBook: "Rezervo konsultë",
        contactOffer: "Merr ofertë falas",
        contactWork: "Shih punimet",
        rights: "© 2026 A2 Digital World. Të gjitha të drejtat e rezervuara.",
        email: "Email",
        portfolio: "Portfolio",
        instagram: "Instagram",
        bookCall: "Rezervo telefonatë"
      },
      popup: {
        eyebrow: "Shërbimet tona",
        title: "Para se të vazhdosh.<br><em>Ja çfarë bëjmë.</em>",
        lead: "A2DW fokusohet në pesë shërbime kryesore të ndërtuara rreth rritjes, konvertimeve dhe pozicionimit më të fortë të brandit.",
        note: "Mbylle me X, ose vazhdo direkt në website.",
        button: "Vazhdo në website <span class=\"arrow\">→</span>"
      },
      modal: {
        title: "Merr <em>ofertën falas.</em>",
        lead: "15 minuta, dhe të tregojmë saktë çfarë po të kushton shitje çdo ditë dhe si ta rregullosh. Falas, pa obligim.",
        nameLabel: "Emri yt",
        namePlaceholder: "Emër Mbiemër",
        emailLabel: "Email adresa",
        emailPlaceholder: "ti@kompania.com",
        phoneLabel: "Numri i telefonit",
        phonePlaceholder: "+389 ...",
        businessLabel: "Emri i biznesit",
        businessPlaceholder: "Biznesi yt",
        serviceLabel: "Cilin shërbim kërkon?",
        budgetLabel: "Buxheti mujor për ads (€)",
        messageLabel: "Si mund të të ndihmojmë?",
        messagePlaceholder: "Na trego për biznesin, qëllimet dhe çfarë ke provuar deri tani.",
        submit: "Dërgo, kthehemi brenda 2 orësh",
        note: "Duke e dërguar formularin, pranon të kontaktohesh nga A2DW. Informacioni yt nuk ndahet.",
        successTitle: "Mesazhi yt është <em>nisur.</em>",
        successLead: "Të kthehemi brenda 2 orëve gjatë orarit të punës. Flasim shpejt.",
        successClose: "Mbylle",
        sending: "Duke dërguar...",
        closeAria: "Mbylle",
        popupCloseAria: "Mbylle popup-in e shërbimeve",
        serviceOptions: {
          placeholder: "Zgjidh një shërbim",
          full: "Paketa e plotë, më duhet gjithçka",
          unsure: "Nuk jam i sigurt ende, më ndihmo të vendos"
        },
        budgetOptions: [
          { value: "", label: "Zgjidh një interval" },
          { value: "0-500", label: "€0 – €500" },
          { value: "500-1500", label: "€500 – €1,500" },
          { value: "1500-5000", label: "€1,500 – €5,000" },
          { value: "5000+", label: "€5,000+" },
          { value: "No budget yet", label: "Nuk jam i sigurt / ende pa buxhet" }
        ]
      },
      workPage: {
        homeCrumb: "Ballina",
        currentCrumb: "Punimet",
        eyebrow: "Portfolio",
        title: "Case study-t e radhës<br>vijnë <em>së shpejti.</em>",
        sub: "Kjo faqe mbahet gati vetëm për projektet e tua reale. Kur materialet finalizohen, kartelat, vizualet dhe breakdown-et e detajuara shtohen pa e ridizajnuar faqen.",
        emptyKicker: "Portfolio po përditësohet",
        emptyTitle: "Projektet po shtohen.",
        emptyText: "Faqja mbetet live, por kartelat e projekteve janë pastruar për tani që më vonë të shtosh vetëm case study-t reale që do t’i shfaqësh.",
        detailEyebrow: "Portfolio e detajuar",
        detailTitle: "Case study-t do të shtohen <em>këtu.</em>",
        detailLead: "Kur projektet të jenë gati, kjo pjesë mund të mbajë historinë e plotë, vizualet dhe rezultatet për secilin pa e ndryshuar pjesën tjetër të faqes.",
        detailKicker: "Së shpejti",
        detailEmptyTitle: "Vetëm projektet finale do të publikohen këtu.",
        detailEmptyText: "Për momentin, shembujt e vjetër janë hequr që portfolio të mbetet i pastër derisa të jesh gati për punën reale.",
        ctaTitle: "Projekti yt<br>mund të jetë <em>tjetri.</em>",
        ctaSub: "15 minuta, dhe të tregojmë saktë çfarë po të kushton shitje çdo ditë dhe si ta rregullosh. Falas, pa obligim.",
        ctaButton: "Merr ofertën falas <span class=\"arrow\">→</span>",
        contactFaq: "Pyetje të zakonshme"
      }
    },
    mk: {
      meta: {
        home: {
          title: "A2 Digital World, Реклами што продаваат. Резултати што се гледаат.",
          description: "A2 Digital World гради рекламни стратегии што носат вистински клиенти, не само кликови и лајкови. Мерливи резултати, секој месец."
        },
        work: {
          title: "Проекти, A2 Digital World",
          description: "Избрани случаи од A2 Digital World, бизниси што сме ги растеле преку реклами, содржина и системи што продаваат."
        }
      },
      nav: {
        services: "Услуги",
        work: "Проекти",
        about: "За нас",
        pricing: "Цени",
        faq: "Прашања",
        freeOffer: "Земи бесплатна понуда <span class=\"arrow\">→</span>"
      },
      hero: {
        pill: "Прифаќаме нови клиенти, уште 2 места овој месец",
        title: "Твојот бизнис<br>заслужува <em>повеќе продажби.</em>",
        sub: "A2 Digital World гради рекламни стратегии што носат вистински клиенти, не само кликови и лајкови. Мерливи резултати, секој месец. Реклами што продаваат. Резултати што се гледаат.",
        primaryCta: "Почни денес, бесплатна консултација <span class=\"arrow\">→</span>",
        secondaryCta: "Види ги резултатите",
        scroll: "Надолу"
      },
      stats: {
        businesses: "Пораснати бизниси",
        years: "Години резултати",
        roas: "Просечен ROAS",
        promises: "Празни ветувања"
      },
      problem: {
        eyebrow: "Јазот што го затвораме",
        title: "Повеќето бизниси немаат<br><em>проблем со производот</em>.<br>Тие имаат <em>проблем со продажбата</em>.",
        leftHead: "✗ Звучи познато?",
        rightHead: "✓ Со A2DW",
        leftRows: [
          "Трошеше на реклами, а продажбата не се помести.",
          "Твојата агенција прикажува лајкови и reach, не приход.",
          "Не знаеш точно што работи, а што не.",
          "Буџетот излезе од сметката. Клиентите не дојдоа."
        ],
        rightRows: [
          "Кампањи оптимизирани за конверзии, не за reach.",
          "Секој месец прикажуваме ROAS, CPA и вистинска продажба.",
          "Транспарентен dashboard, гледаш каде оди секој цент.",
          "Системи што продолжуваат да продаваат и кога не си online."
        ]
      },
      services: {
        eyebrow: "Услуги",
        title: "Секоја услуга има една цел,<br><em>да ја зголеми твојата продажба.</em>",
        sub: "Не нудиме 'стандардни пакети'. Го градиме вистинскиот систем според твојот бизнис, таргет и буџет.",
        items: [
          {
            badge: "ADS",
            popupCode: "01",
            order: "01 / Платени реклами",
            group: "Реклами",
            title: "Meta Ads",
            desc: "Facebook и Instagram реклами, таргетирање, креативи и conversion кампањи за локални и регионални брендови.",
            tags: ["Meta Ads", "Instagram Ads", "Retargeting", "Тестирање креативи"]
          },
          {
            badge: "BRD",
            popupCode: "02",
            order: "02 / Бренд",
            group: "Бренд",
            title: "Бренд стратегија",
            desc: "Репозиционирање, tone of voice, дефинирање публика и анализа на конкуренција за бизниси подготвени за раст.",
            tags: ["Позиционирање", "Порака", "Публика", "Насока"]
          },
          {
            badge: "VID",
            popupCode: "03",
            order: "03 / Содржина",
            group: "Содржина",
            title: "Видео и рилс",
            desc: "Кратки видеа, анимирани рилс и бренд приказни што го запираат scroll-от и носат акција.",
            tags: ["Рилс", "Кратки видеа", "Креативни концепти", "Едитирање"]
          },
          {
            badge: "ECM",
            popupCode: "04",
            order: "04 / E-Commerce",
            group: "E-Commerce",
            title: "Раст на продавница",
            desc: "Лансирање производи, catalog ads, retargeting текови и подобрувања во продавницата за online брендови што сакаат повеќе продажба.",
            tags: ["Catalog ads", "Лансирања", "Retargeting", "Store UX"]
          },
          {
            badge: "SOC",
            popupCode: "05",
            order: "05 / Social",
            group: "Социјални",
            title: "Социјални мрежи",
            desc: "Месечно планирање, објавување, community management и следење перформанси за брендови што сакаат конзистентен раст.",
            tags: ["Планирање", "Објавување", "Заедница", "Insights"]
          }
        ]
      },
      work: {
        eyebrow: "Студии на случај",
        title: "Новите проекти се<br><em>подготвуваат токму сега.</em>",
        sub: "Овој дел останува подготвен за нови case studies веднаш штом бидат одобрени.",
        kicker: "Портфолиото се ажурира",
        emptyTitle: "Проектите наскоро ќе се појават тука.",
        emptyText: "Секцијата е подготвена за твоите реални case studies, screenshots и резултати. Кога ќе бидат готови, се додаваат тука без да се редизајнира целата страна."
      },
      about: {
        eyebrow: "За A2DW",
        title: "Не сме агенција,<br>ние сме твој <em>партнер за продажба.</em>",
        p1: "A2 Digital World е создаден затоа што бизнисите заслужуваат маркетинг што работи, не убави страници без резултат. Секоја кампања има една цел: да ја зголеми твојата продажба.",
        p2: "Од Скопје, Северна Македонија, работиме со основачи и сопственици на мали и средни бизниси низ регионот што сакаат бројки што се движат, не vanity metrics.",
        cta: "Види што можеме да направиме за тебе <span class=\"arrow\">→</span>"
      },
      process: {
        eyebrow: "Како работиме",
        title: "Краток, <em>искрен</em> процес.",
        sub: "Четири чекори. Без мистерија. Секогаш знаеш што се случува и што следува.",
        rows: [
          {
            num: "01",
            title: "Аудит",
            desc: "Го разгледуваме твојот бизнис, бројките и парите што веќе си ги потрошил, и ти кажуваме точно каде истекуваат."
          },
          {
            num: "02",
            title: "Стратегија",
            desc: "Позиционирање, понуда, канали, креативни агли, буџет и KPI, на хартија, одобрени пред да се потроши и едно евро."
          },
          {
            num: "03",
            title: "Лансирање",
            desc: "Реклами, содржина, landing pages, автоматизации. Брзо пуштаме и обично целосниот систем е live за 14 дена или помалку."
          },
          {
            num: "04",
            title: "Оптимизација",
            desc: "Неделни прегледи. Го кратиме тоа што не работи и го дуплираме тоа што работи. Целосна транспарентност преку live dashboard."
          }
        ]
      },
      pricing: {
        eyebrow: "Цени",
        title: "Една почетна точка.<br><em>Една искрена бројка.</em>",
        sub: "Без скриени трошоци. Без '12-месечни договори'. Го градиме вистинскиот план за твојот бизнис, и го зголемуваме како што растеш.",
        caption: "Почнува од",
        amount: "350",
        period: "/месец",
        lead: "Разговарај со нас, го градиме вистинскиот план за твојот бизнис, според индустријата, буџетот и целите.",
        cta: "Земи бесплатна понуда <span class=\"arrow\">→</span>",
        features: [
          "Бесплатен 15-минутен стратегиски повик",
          "Транспарентно месечно известување",
          "Live dashboard, ROAS, CPA, приход",
          "Неделна оптимизација на кампањи",
          "Содржина направена за конверзии",
          "Без долгорочни договори"
        ]
      },
      faq: {
        eyebrow: "Прашања",
        title: "Добри <em>прашања.</em><br>Искрени одговори.",
        sub: "Ако твоето прашање не е тука, само пиши ни, одговараме во рок од 2 часа за време на работно време.",
        cta: "Постави прашање <span class=\"arrow\">→</span>",
        items: [
          {
            q: "Колку време треба за да видам резултати?",
            a: "Paid ads обично покажуваат сигнал за 2–3 недели. Organic и content се градат со време, значаен раст очекувај до ден 60–90. Од првиот ден добиваш live dashboard за да нема нагаѓање."
          },
          {
            q: "Дали работите и со помали буџети?",
            a: "Да, почнуваме од €350/месец и растеме заедно со тебе. Ни треба реален производ, јасна понуда и подготвеност за тестирање. Имаме однесено бизниси од нула online приход до секојдневни резервации."
          },
          {
            q: "На што точно известувате?",
            a: "ROAS, CPA, генериран приход, cost per lead, conversion rates низ funnel, бројките што ги плаќаат сметките. Likes и reach се контекст, не KPI."
          },
          {
            q: "Кој ја поседува содржината што ја произведувате?",
            a: "Ти. Секој asset, raw footage, едитирано видео, ad creative, design files, е твој веднаш штом ќе биде одобрен. Без чудни лиценци и без заложени фајлови."
          },
          {
            q: "Можам ли да откажам кога сакам?",
            a: "Да. Од месец за месец, со 30 дена најава. Подобро е да останеш затоа што работата е добра, не затоа што си заклучен во договор."
          }
        ]
      },
      cta: {
        title: "Додај нов клиент<br>следниот месец. <em>Почни денес.</em>",
        sub: "15 минути, и ќе ти кажеме точно што ти одзема продажба секој ден и како да го поправиш. Бесплатно, без обврска.",
        button: "Резервирај бесплатна консултација <span class=\"arrow\">→</span>"
      },
      footer: {
        brand: "A2 Digital World, реклами што продаваат, резултати што се гледаат. Создадено во Скопје, работи со бизниси низ целиот регион.",
        servicesHead: "Услуги",
        studioHead: "Студио",
        contactHead: "Контакт",
        studioWork: "Проекти",
        studioProcess: "Процес",
        studioPricing: "Цени",
        studioFaq: "Прашања",
        contactBook: "Резервирај консултација",
        contactOffer: "Земи бесплатна понуда",
        contactWork: "Види ги проектите",
        rights: "© 2026 A2 Digital World. Сите права се задржани.",
        email: "Е-пошта",
        portfolio: "Портфолио",
        instagram: "Instagram",
        bookCall: "Резервирај повик"
      },
      popup: {
        eyebrow: "Наши услуги",
        title: "Пред да продолжиш.<br><em>Еве што работиме.</em>",
        lead: "A2DW се фокусира на пет главни услуги изградени околу раст, конверзии и посилно позиционирање на брендот.",
        note: "Затвори со X, или продолжи директно на веб-страницата.",
        button: "Продолжи на веб-страницата <span class=\"arrow\">→</span>"
      },
      modal: {
        title: "Земи <em>бесплатна понуда.</em>",
        lead: "15 минути, и ќе ти кажеме точно што ти одзема продажба секој ден и како да го поправиш. Бесплатно, без обврска.",
        nameLabel: "Твоето име",
        namePlaceholder: "Име Презиме",
        emailLabel: "Е-пошта",
        emailPlaceholder: "ti@kompanija.com",
        phoneLabel: "Телефонски број",
        phonePlaceholder: "+389 ...",
        businessLabel: "Име на бизнис",
        businessPlaceholder: "Твојот бизнис",
        serviceLabel: "Која услуга?",
        budgetLabel: "Месечен ad буџет (€)",
        messageLabel: "Како можеме да помогнеме?",
        messagePlaceholder: "Кажи ни за твојот бизнис, целите и што си пробал досега.",
        submit: "Испрати, одговараме во рок од 2 часа",
        note: "Со испраќање, се согласуваш да бидеш контактиран од A2DW. Никогаш не ги споделуваме твоите информации.",
        successTitle: "Твојата порака е <em>испратена.</em>",
        successLead: "Ќе одговориме во рок од 2 часа за време на работното време. Се слушаме наскоро.",
        successClose: "Затвори",
        sending: "Испраќаме...",
        closeAria: "Затвори",
        popupCloseAria: "Затвори го popup-от за услуги",
        serviceOptions: {
          placeholder: "Избери услуга",
          full: "Цел пакет, ми треба сè",
          unsure: "Сè уште не сум сигурен, помогни ми да одлучам"
        },
        budgetOptions: [
          { value: "", label: "Избери опсег" },
          { value: "0-500", label: "€0 – €500" },
          { value: "500-1500", label: "€500 – €1,500" },
          { value: "1500-5000", label: "€1,500 – €5,000" },
          { value: "5000+", label: "€5,000+" },
          { value: "No budget yet", label: "Не сум сигурен / сè уште без буџет" }
        ]
      },
      workPage: {
        homeCrumb: "Почетна",
        currentCrumb: "Проекти",
        eyebrow: "Портфолио",
        title: "Следните case studies<br>доаѓаат <em>наскоро.</em>",
        sub: "Оваа страница е подготвена само за твоите вистински проекти. Кога материјалите ќе бидат финализирани, картите, визуелите и деталните breakdown-и се додаваат без редизајн.",
        emptyKicker: "Портфолиото се ажурира",
        emptyTitle: "Проектите се додаваат.",
        emptyText: "Страницата останува live, но проектните картички се исчистени засега за подоцна да ги додадеш само реалните case studies што сакаш да ги прикажеш.",
        detailEyebrow: "Детално портфолио",
        detailTitle: "Case studies ќе се додадат <em>тука.</em>",
        detailLead: "Кога проектите ќе бидат подготвени, овој дел може да ја содржи целата приказна, визуели и резултати за секој без да се менува остатокот од страницата.",
        detailKicker: "Наскоро",
        detailEmptyTitle: "Само финалните проекти ќе бидат објавени тука.",
        detailEmptyText: "Засега, старите примери се отстранети за портфолиото да остане чисто додека не бидеш подготвен за вистинската работа.",
        ctaTitle: "Твојот проект<br>може да биде <em>следен.</em>",
        ctaSub: "15 минути, и ќе ти кажеме точно што ти одзема продажба секој ден и како да го поправиш. Бесплатно, без обврска.",
        ctaButton: "Земи бесплатна понуда <span class=\"arrow\">→</span>",
        contactFaq: "Чести прашања"
      }
    }
  };

  const serviceOptionValues = ["meta-ads", "brand-strategy", "video-reels", "store-growth", "social-media"];
  const localStorageKey = "a2dw-language";

  function getValue(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function renderServiceCards(items) {
    return items.map((item) => `
      <div class="service-card" data-open-modal>
        <div class="service-arrow">↗</div>
        <div>
          <div class="service-icon">${item.badge}</div>
          <div class="service-num">${item.order}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="service-tags">
          ${item.tags.map((tag) => `<span class="service-tag">${tag}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderPopupCards(items) {
    return items.map((item) => `
      <div class="intro-service-card">
        <div class="intro-service-code">${item.popupCode}</div>
        <div>
          <div class="intro-service-num">${item.group}</div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join("");
  }

  function renderCompareRows(items, icon) {
    return items.map((row) => `
      <div class="compare-row"><span class="compare-icon">${icon}</span><span>${row}</span></div>
    `).join("");
  }

  function renderProcessRows(items) {
    return items.map((row) => `
      <div class="process-row">
        <div class="process-num">${row.num}</div>
        <div class="process-title">${row.title}</div>
        <div class="process-desc">${row.desc}</div>
        <div class="process-plus">+</div>
      </div>
    `).join("");
  }

  function renderFeatureRows(items) {
    return items.map((item) => `<li>${item}</li>`).join("");
  }

  function renderFaqRows(items) {
    return items.map((item) => `
      <div class="faq-item">
        <div class="faq-q">
          <h3>${item.q}</h3>
          <div class="faq-toggle">+</div>
        </div>
        <div class="faq-a">${item.a}</div>
      </div>
    `).join("");
  }

  function renderFooterServices(items, href) {
    return items.map((item) => `<li><a href="${href}">${item.title}</a></li>`).join("");
  }

  function renderServiceOptions(data) {
    const options = [
      `<option value="">${data.modal.serviceOptions.placeholder}</option>`,
      ...data.services.items.map((item, index) => `<option value="${serviceOptionValues[index]}">${item.title}</option>`),
      `<option value="full-package">${data.modal.serviceOptions.full}</option>`,
      `<option value="not-sure">${data.modal.serviceOptions.unsure}</option>`
    ];
    return options.join("");
  }

  function renderBudgetOptions(items) {
    return items.map((item) => `<option value="${item.value}">${item.label}</option>`).join("");
  }

  function setMeta(page, data) {
    if (!data.meta || !data.meta[page]) return;
    const meta = data.meta[page];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (description) description.setAttribute("content", meta.description);
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    if (ogDescription) ogDescription.setAttribute("content", meta.description);
  }

  function applyDataBindings(data) {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getValue(data, node.dataset.i18n);
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      const value = getValue(data, node.dataset.i18nHtml);
      if (value !== undefined) node.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const value = getValue(data, node.dataset.i18nPlaceholder);
      if (value !== undefined) node.setAttribute("placeholder", value);
    });
  }

  function renderDynamicSections(page, data) {
    const serviceGrid = document.getElementById("serviceGrid");
    if (serviceGrid) serviceGrid.innerHTML = renderServiceCards(data.services.items);

    const introPopupGrid = document.getElementById("introPopupGrid");
    if (introPopupGrid) introPopupGrid.innerHTML = renderPopupCards(data.services.items);

    const comparePain = document.getElementById("comparePain");
    if (comparePain) comparePain.innerHTML = renderCompareRows(data.problem.leftRows, "✗");

    const compareWin = document.getElementById("compareWin");
    if (compareWin) compareWin.innerHTML = renderCompareRows(data.problem.rightRows, "✓");

    const processList = document.getElementById("processList");
    if (processList) processList.innerHTML = renderProcessRows(data.process.rows);

    const priceFeatures = document.getElementById("priceFeatures");
    if (priceFeatures) priceFeatures.innerHTML = renderFeatureRows(data.pricing.features);

    const faqList = document.getElementById("faqList");
    if (faqList) faqList.innerHTML = renderFaqRows(data.faq.items);

    const footerServicesHome = document.getElementById("footerServicesHome");
    if (footerServicesHome) footerServicesHome.innerHTML = renderFooterServices(data.services.items, "#services");

    const footerServicesWork = document.getElementById("footerServicesWork");
    if (footerServicesWork) footerServicesWork.innerHTML = renderFooterServices(data.services.items, "index.html#services");

    const serviceSelect = document.getElementById("service");
    if (serviceSelect) serviceSelect.innerHTML = renderServiceOptions(data);

    const budgetSelect = document.getElementById("budget");
    if (budgetSelect) budgetSelect.innerHTML = renderBudgetOptions(data.modal.budgetOptions);

    const modalClose = document.getElementById("modalClose");
    if (modalClose) modalClose.setAttribute("aria-label", data.modal.closeAria);

    const introPopupClose = document.getElementById("introPopupClose");
    if (introPopupClose) introPopupClose.setAttribute("aria-label", data.modal.popupCloseAria);

    const langButtons = document.querySelectorAll("[data-lang]");
    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === document.documentElement.lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (page === "work") {
      const activeWorkLink = document.querySelector('.nav-links a[href="work.html"]');
      if (activeWorkLink) activeWorkLink.classList.add("active");
    }
  }

  function createAPI() {
    let currentLang = "en";
    let currentPage = "home";

    function getText(path) {
      return getValue(translations[currentLang], path);
    }

    function applyLanguage(lang) {
      currentLang = translations[lang] ? lang : "en";
      document.documentElement.lang = currentLang;
      try {
        localStorage.setItem(localStorageKey, currentLang);
      } catch (error) {
        void error;
      }
      const data = translations[currentLang];
      setMeta(currentPage, data);
      applyDataBindings(data);
      renderDynamicSections(currentPage, data);
    }

    return {
      init(page) {
        currentPage = page || "home";
        let initialLang = "en";
        try {
          const urlLang = new URL(window.location.href).searchParams.get("lang");
          if (urlLang && translations[urlLang]) {
            initialLang = urlLang;
          }
          const stored = localStorage.getItem(localStorageKey);
          if ((!urlLang || !translations[urlLang]) && stored && translations[stored]) initialLang = stored;
        } catch (error) {
          void error;
        }
        document.querySelectorAll("[data-lang]").forEach((button) => {
          button.addEventListener("click", () => applyLanguage(button.dataset.lang));
        });
        applyLanguage(initialLang);
        return {
          applyLanguage,
          t: getText
        };
      }
    };
  }

  window.A2DWI18N = createAPI();
})();


