import { PageTransition } from "../components/PageTransition";
import { ConnectCTA } from "../components/ConnectCTA";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const ARTICLES = [
  { title: "2000 Dot-Com Bubble Crisis", url: "https://drive.google.com/file/d/1Wq4VPkQcbx-V7IcCUIXFA63jsfoR7KVj/view?usp=sharing" },
  { title: "2008 Financial Crisis", url: "https://drive.google.com/file/d/1hYxGdpEKABFNCjD6GmqGBbl0jicGfHtJ/view?usp=sharing" },
  { title: "Company Funding Cycle 01", url: "https://drive.google.com/file/d/1Q8m-5I2Hdj7AN6iIuQcI_yDEYBcKnvfz/view?usp=sharing" },
  { title: "Company Funding Cycle 02", url: "https://drive.google.com/file/d/1FE41OaaKlxLLfW7jnCDu9eDy2LCc-2pp/view?usp=sharing" },
  { title: "QSR Industry Coverage", url: "https://lnkd.in/p/gN2N8NUA" },
  { title: "March 2026: Oil, War & Markets", url: "https://www.linkedin.com/feed/update/urn:li:activity:7446388624293687297/?originTrackingId=GZ0npoPiRp2mKQp8SqVffg%3D%3D" },
  { title: "Value Migration", url: "https://www.linkedin.com/posts/thejatinsingh_equityresearch-investmentanalysis-marketresearch-share-7455467945712934912-rNA1/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADe-sJoBGMC7p29G_a1DC_DCu8GaBNYYJOI" },
  { title: "Sugar Spike", url: "https://www.linkedin.com/posts/thejatinsingh_sugar-stocks-rally-decoding-the-recent-spike-activity-7497166049436524545-xhsc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADe-sJoBGMC7p29G_a1DC_DCu8GaBNYYJOI" },
  { title: "NISM Roadmap", url: "https://grindwithjatin.substack.com/p/nism-prepration-and-study-roadmap" },
  { title: "India Semiconductor Mission", url: "https://www.linkedin.com/feed/update/urn:li:activity:7465983555370790912/?originTrackingId=d080l0lASYmtqxuE36V%2FrA%3D%3D" },
  { title: "Urban Spending Less; Quick Commerce Growing", url: "https://www.linkedin.com/feed/update/urn:li:activity:7490251429425594368/?originTrackingId=BznjkiV%2BQVet11ZmB4ZyUQ%3D%3D" },
  { title: "Rajesh Exports", url: "https://www.linkedin.com/in/thejatinsingh/recent-activity/documents/" },
  { title: "PESTEL Breakdown: Quick Commerce", url: "https://lnkd.in/p/dBs9Jjqh" },
  { title: "My Vipassana Experience", url: null, status: "COMING SOON" }
];

export default function Articles() {
  return (
    <PageTransition className="w-full min-h-[calc(100vh-5rem)] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-16"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-none tracking-tight">
              ARTICLES
            </h1>
            <div className="mt-2 flex items-center justify-end">
              <span className="relative inline-block px-2.5 sm:px-3 py-1 bg-[#FBF310] text-black font-sans font-medium text-xs sm:text-sm md:text-base rounded shadow-sm transform -rotate-1 origin-left">
                Insightful Coverage
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ARTICLES.map((article, index) => {
            const isClickable = !!article.url;
            const CardWrapper = isClickable ? 'a' : 'div';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <CardWrapper
                  href={article.url || undefined}
                  target={isClickable ? "_blank" : undefined}
                  rel={isClickable ? "noopener noreferrer" : undefined}
                  className={`group h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    isClickable 
                      ? "bg-card border-border hover:border-accent shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer" 
                      : "bg-muted/50 border-border/50 opacity-80"
                  }`}
                >
                  <h3 className={`text-lg sm:text-xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-6 ${
                    isClickable ? "text-card-foreground group-hover:text-accent transition-colors" : "text-card-foreground"
                  }`}>
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center justify-end mt-auto">
                    {isClickable ? (
                      <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground group-hover:text-accent transition-colors">
                        <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity -translate-x-1 sm:-translate-x-2 group-hover:translate-x-0">Read</span>
                        <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                      </div>
                    ) : (
                      <span className="text-xs font-mono bg-background px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-muted-foreground border border-border">
                        {article.status}
                      </span>
                    )}
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Let's Connect CTA */}
        <ConnectCTA />
      </div>
    </PageTransition>
  );
}
