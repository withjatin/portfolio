import { PageTransition } from "../components/PageTransition";
import { Button } from "../components/Button";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { ConnectCTA } from "../components/ConnectCTA";
import { motion } from "motion/react";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Wrench, 
  FileText, 
  ExternalLink, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Sparkles,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

export default function Resume() {
  return (
    <PageTransition className="w-full pb-28">
      {/* Hero Header */}
      <section className="bg-foreground text-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block relative mb-3 sm:mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-background leading-none">
                MY RESUME
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-background/90 mt-1 sm:mt-2 mb-3">
              Jatin Singh
            </p>
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-black text-[#FBF310] font-semibold text-xs sm:text-sm md:text-base px-3.5 sm:px-4 py-1.5 rounded-full border border-[#FBF310]/30 shadow-md">
                Equity Research Professional
              </span>
            </div>

            {/* Quick Contact Bar - Single line sequence */}
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 text-xs sm:text-sm text-background/85 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
              <a 
                href="tel:+918198831306" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 hover:text-accent transition-colors whitespace-nowrap shrink-0"
              >
                <Phone size={14} />
                <span>+91 81988 31306</span>
              </a>
              <a 
                href="mailto:speaktojatinsingh@gmail.com" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 hover:text-accent transition-colors whitespace-nowrap shrink-0"
              >
                <Mail size={14} />
                <span>speaktojatinsingh@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/thejatinsingh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 hover:bg-background/20 hover:text-accent transition-colors whitespace-nowrap shrink-0"
              >
                <Linkedin size={14} />
                <span>in/thejatinsingh</span>
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 text-background/70 whitespace-nowrap shrink-0">
                <MapPin size={14} />
                <span>Amritsar, Punjab</span>
              </span>
            </div>

            <Button 
              href="https://drive.google.com/file/d/1pDzAutBt-tmVMbohR5avFyt5OyiyUXo3/view?usp=sharing" 
              variant="primary" 
              icon="arrow-down"
              className="w-full sm:w-auto"
            >
              DOWNLOAD RESUME
            </Button>
          </motion.div>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-background rounded-full"></div>
          <div className="absolute bottom-10 -left-24 w-64 h-64 border-[20px] border-background rounded-full"></div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 space-y-10 sm:space-y-16">
        
        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <TrendingUp className="text-accent shrink-0" size={22} />
            <h2 className="text-xl sm:text-2xl font-display font-bold">Professional Summary</h2>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Equity Research professional with over a year of experience across fundamental research, financial analysis, valuation, and equity markets. Proficient in analyzing listed companies, evaluating business performance, and translating financial data into actionable research insights. Hands-on experience in equity trade execution, portfolio dealing, and market distribution.
          </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <Briefcase size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Experience Item 1 */}
            <div className="bg-card border border-border p-5 sm:p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">Equity Research Associate</h3>
                  <p className="text-accent font-semibold text-sm sm:text-base mt-0.5">Green Hedge Capital</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={13} /> Amritsar, Punjab
                  </p>
                </div>
                <div className="bg-muted px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground self-start shrink-0">
                  Oct 2025 – Present
                </div>
              </div>

              <ul className="space-y-2.5 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span>Conduct in-depth research in securities within targeted industries.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span>Delivering well-informed investment recommendations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span className="text-foreground font-medium">Resulting in 15% increase in profit table recommendation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span>Tracking market moves, sector trends, macro factors, and delivering research reports.</span>
                </li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-card border border-border p-5 sm:p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">IPO Analyst</h3>
                  <p className="text-accent font-semibold text-sm sm:text-base mt-0.5">InsightKnox</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={13} /> Remote
                  </p>
                </div>
                <div className="bg-muted px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground self-start shrink-0">
                  Oct 2025 – Jan 2026
                </div>
              </div>

              <ul className="space-y-2.5 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span>Analyzed IPO DRHPs to assess fundamentals and growth potential.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span>Produced clear reports highlighting key strengths and risks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                  <span>Delivered concise investment insight reports published on the firm’s website for internal reference.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Research Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <FileText size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Research Projects</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Project 1 */}
            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-accent/60 transition-colors">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-card-foreground">Westlife Foodworld Ltd</h3>
                  <a 
                    href="https://www.linkedin.com/posts/thejatinsingh_westlifeicrjatinsingh-activity-7497519079759720448-dlwS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline shrink-0"
                  >
                    View Report <ExternalLink size={13} />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-accent font-medium mb-2 sm:mb-3">Equity Research Report</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Developed an equity research report covering financial metrics, growth drivers, competitive positioning, governance analysis, and recent Concall Analysis.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-accent/60 transition-colors">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-card-foreground">Groww</h3>
                  <a 
                    href="https://drive.google.com/file/d/1nfofYxcEI650ZhU4HTeghEcLWjkVVZc9/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline shrink-0"
                  >
                    View Report <ExternalLink size={13} />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-accent font-medium mb-2 sm:mb-3">One Pager Report</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  One-page presentable stock profile covering Key Financial Metrics, Key Financial Ratios, Shareholding Pattern, Price Performance, and Recent Updates.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-accent/60 transition-colors">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-card-foreground">Quants Mutual Funds</h3>
                  <a 
                    href="https://drive.google.com/file/d/1KJm-TI-VOhZ39iudl28T4JATAveUuXCw/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline shrink-0"
                  >
                    View Report <ExternalLink size={13} />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-accent font-medium mb-2 sm:mb-3">Analysis Report</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Comprehensive research report including Fund and Scheme details, Investment Philosophy, Top Sector Holdings, SIP Performance, Returns & Risk Analysis, and Portfolio Allocation.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-accent/60 transition-colors">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-card-foreground">Tata Motors Ltd</h3>
                  <a 
                    href="https://drive.google.com/file/d/1U3XyMcQJqTc3Q76A1Hao0cvfG0VuuC5R/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline shrink-0"
                  >
                    View Report <ExternalLink size={13} />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-accent font-medium mb-2 sm:mb-3">Financial Model</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Built comprehensive financial model covering DCF, Relative Valuation, Sensitivity, Ratio Analysis, Altman’s Z Score, Football Field, Beta, FCFF, Growth Rate, Cost of Debt & WACC.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications & Cohorts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <Award size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Certifications & Cohorts</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card border border-border p-5 sm:p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">Equity Research Cohort 2026</h3>
                  <p className="text-accent font-medium text-sm sm:text-base mt-0.5 sm:mt-1">The Valuation School</p>
                </div>
                <div className="bg-muted px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm self-start md:self-auto text-left md:text-right shrink-0">
                  <p className="font-bold text-accent">Cohort Graduate</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                  <span>Gained hands-on experience in quantitative analysis, developing investment models, and analyzing stocks to support portfolio managers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                  <span>Acquired practical knowledge of equity research, including financial statement analysis, industry analysis, company analysis, and investment research tools.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-card-foreground">NISM Series XV: Research Analyst</h3>
                  <span className="bg-[#FBF310] text-black text-xs font-bold px-2.5 py-1 rounded shrink-0">Score: 81.25%</span>
                </div>
                <p className="text-accent text-xs sm:text-sm font-medium mb-2 sm:mb-3">SEBI Recognized Certification</p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Covers fundamental analysis, valuation models, concall insights, risk assessment, and SEBI regulatory research frameworks.
                </p>
              </div>

              <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-card-foreground">NISM Series VIII: Equity Derivatives</h3>
                  <span className="bg-[#FBF310] text-black text-xs font-bold px-2.5 py-1 rounded shrink-0">Score: 81.75%</span>
                </div>
                <p className="text-accent text-xs sm:text-sm font-medium mb-2 sm:mb-3">SEBI Recognized Certification</p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Covering equity derivatives markets, futures & options strategies, risk management mechanisms, and clearing operations.
                </p>
              </div>
            </div>

            <div className="bg-muted/40 border border-border p-4 sm:p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Sparkles className="text-accent shrink-0" size={18} />
                <span className="font-semibold text-sm sm:text-base text-foreground">CFA Level 1 Aspirant</span>
              </div>
              <span className="text-xs font-mono bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-border text-muted-foreground">In Progress</span>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Education</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* College */}
            <div className="bg-card border border-border p-5 sm:p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">Guru Nanak Dev University</h3>
                  <p className="text-accent font-semibold text-sm sm:text-base mt-0.5 sm:mt-1">Bachelor of Commerce (B.Com)</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={13} /> Amritsar, Punjab
                  </p>
                </div>
                <div className="bg-muted px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground self-start shrink-0">
                  Sep 2021 – Sep 2024
                </div>
              </div>
            </div>

            {/* ICAI */}
            <div className="bg-card border border-border p-5 sm:p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">The Institute of Chartered Accountants of India (ICAI)</h3>
                  <p className="text-accent font-semibold text-sm sm:text-base mt-0.5 sm:mt-1">CA Foundation</p>
                </div>
                <div className="bg-muted px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-muted-foreground self-start shrink-0">
                  2023
                </div>
              </div>
            </div>

            {/* School */}
            <div className="bg-card border border-border p-5 sm:p-6 md:p-8 rounded-2xl hover:border-accent/50 transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground">Modern Jagat Jyoti Sr. Sec. School</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                    <span className="font-semibold text-foreground">12th Commerce: 90%</span> &nbsp;|&nbsp; <span className="font-semibold text-foreground">10th Matriculation: 86%</span>
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={13} /> Amritsar, Punjab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <Wrench size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Skills & Competencies</h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-3 sm:mb-4">Equity Research</h3>
              <div className="flex flex-wrap gap-2">
                {["Company Analysis", "Concall Analysis", "DCF Valuation", "Relative Valuation", "Sensitivity Analysis", "Report Writing", "Financial Modeling"].map((skill) => (
                  <span key={skill} className="bg-muted px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium text-card-foreground border border-border/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-3 sm:mb-4">Financial Analysis</h3>
              <div className="flex flex-wrap gap-2">
                {["Financial Statement Analysis", "Financial Ratios", "Financial Forecasting", "Macro Analysis", "Risk Assessment"].map((skill) => (
                  <span key={skill} className="bg-muted px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium text-card-foreground border border-border/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-3 sm:mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["Nuvama Trading Terminal", "MS Excel", "MS PowerPoint", "MS Word", "Screener.in"].map((tool) => (
                  <span key={tool} className="bg-muted px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium text-card-foreground border border-border/50">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-5 sm:p-6 rounded-2xl">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-3 sm:mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Analytical Thinking", "Business Writing", "Client Communication", "Investment Pitching", "Trade Execution"].map((skill) => (
                  <span key={skill} className="bg-muted px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium text-card-foreground border border-border/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bootcamps & Personal Developments */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-muted/30 border border-border p-5 sm:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Sparkles className="text-accent shrink-0" size={22} />
            <h2 className="text-xl sm:text-2xl font-display font-bold">Bootcamps & Continuous Learning</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
            <div className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/70">
              <p className="font-bold text-foreground text-sm sm:text-base">AI Upskilling</p>
              <p className="text-muted-foreground text-xs mt-1">Claude, Manus, OpenAI's GPT, Perplexity, Kimi AI, LaTeX Code</p>
            </div>
            <div className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/70">
              <p className="font-bold text-foreground text-sm sm:text-base">McKinsey Forward Program</p>
              <p className="text-muted-foreground text-xs mt-1">Leadership, digital skills, and problem solving</p>
            </div>
            <div className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/70">
              <p className="font-bold text-foreground text-sm sm:text-base">Infosys Springboard</p>
              <p className="text-muted-foreground text-xs mt-1">Capital Markets specialization</p>
            </div>
            <div className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/70">
              <p className="font-bold text-foreground text-sm sm:text-base">The Valuation School</p>
              <p className="text-muted-foreground text-xs mt-1">Technical Analysis & Equity Research Financial Modelling</p>
            </div>
            <div className="bg-card p-3.5 sm:p-4 rounded-xl border border-border/70 sm:col-span-2">
              <p className="font-bold text-foreground text-sm sm:text-base">ICAI — ICITSS</p>
              <p className="text-muted-foreground text-xs mt-1">Information Technology & Soft Skills Certification</p>
            </div>
          </div>
        </motion.section>

        {/* Let's Connect CTA */}
        <ConnectCTA />

      </div>

      <ScrollIndicator />
    </PageTransition>
  );
}
