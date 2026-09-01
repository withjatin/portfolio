import { PageTransition } from "../components/PageTransition";
import { DropdownFolder } from "../components/DropdownFolder";
import { Button } from "../components/Button";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { ConnectCTA } from "../components/ConnectCTA";
import { motion } from "motion/react";

const CATEGORIES = [
  {
    name: "Equity Research Reports",
    type: "dropdown" as const,
    projects: [
      {
        title: "Westlife: Initiating Coverage",
        url: "https://www.linkedin.com/posts/thejatinsingh_westlifeicrjatinsingh-activity-7497519079759720448-dlwS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADe-sJoBGMC7p29G_a1DC_DCu8GaBNYYJOI"
      },
      {
        title: "Q1 FY26 Review: Westlife",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7488964927630508032/?originTrackingId=QCAGs4lBSYK7nNOyYO%2BVmw%3D%3D"
      },
      {
        title: "Groww: One-Pager",
        url: "https://drive.google.com/file/d/1nfofYxcEI650ZhU4HTeghEcLWjkVVZc9/view?usp=sharing"
      },
      {
        title: "Management & Governance Analysis",
        url: "https://drive.google.com/file/d/18XQKfQgSBwD_sXfSyKD_1VulMTwI0UWp/view?usp=sharing"
      }
    ]
  },
  {
    name: "Research Work",
    type: "dropdown" as const,
    projects: [
      {
        title: "Q1 FY26 Review: Westlife",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7488964927630508032/?originTrackingId=QCAGs4lBSYK7nNOyYO%2BVmw%3D%3D"
      },
      {
        title: "March 2026: Oil, War & Markets",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7446388624293687297/?originTrackingId=GZ0npoPiRp2mKQp8SqVffg%3D%3D"
      },
      {
        title: "Power Sector Coverage: May 2026",
        url: "https://drive.google.com/file/d/1JNWwteTA9EYhiQqJDUaG1wlcrK30hDUH/view?usp=sharing"
      },
      {
        title: "Parag Parikh Flexi Cap: Decoding Underperformance",
        url: "https://drive.google.com/file/d/1o0uGXNKjeavTOGnOock_VnubQTvrcnNU/view?usp=sharing"
      },
      {
        title: "Value Migration",
        url: "https://www.linkedin.com/posts/thejatinsingh_equityresearch-investmentanalysis-marketresearch-share-7455467945712934912-rNA1/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADe-sJoBGMC7p29G_a1DC_DCu8GaBNYYJOI"
      },
      {
        title: "Fundamental Analysis: Infosys",
        url: "https://drive.google.com/file/d/1Pd2da6eibMnFM02IGDuWq4Ll0CF2dHAp/view?usp=sharing"
      },
      {
        title: "Technical Analysis: Bajaj Finance",
        url: "https://drive.google.com/file/d/1biDg0GiMILGBKqrLY3uhYe13Rgm7343W/view?usp=sharing"
      }
    ]
  },
  {
    name: "Mutual Funds Analysis",
    type: "dropdown" as const,
    projects: [
      {
        title: "Parag Parikh Flexi Cap: Decoding Underperformance",
        url: "https://drive.google.com/file/d/1o0uGXNKjeavTOGnOock_VnubQTvrcnNU/view?usp=sharing"
      },
      {
        title: "Quant MF Performance Analysis",
        url: "https://drive.google.com/file/d/1KJm-TI-VOhZ39iudl28T4JATAveUuXCw/view?usp=sharing"
      }
    ]
  },
  {
    name: "Valuation & Financial Modelling",
    type: "dropdown" as const,
    projects: [
      {
        title: "Tata Motors: Financial Model",
        url: "https://drive.google.com/file/d/1U3XyMcQJqTc3Q76A1Hao0cvfG0VuuC5R/view?usp=sharing"
      }
    ]
  },
  {
    name: "AI Builds",
    type: "folder_link" as const,
    url: "https://drive.google.com/drive/u/0/folders/1JSyMOsCu5LVQET3onfrSjmGMZviikArn"
  }
];

export default function MyWork() {
  return (
    <PageTransition className="w-full min-h-[calc(100vh-5rem)] pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-16"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-none tracking-tight">
              MY WORK
            </h1>
            <div className="mt-2 flex items-center justify-end">
              <span className="relative inline-block px-2.5 sm:px-3 py-1 bg-[#FBF310] text-black font-sans font-medium text-xs sm:text-sm md:text-base rounded shadow-sm transform -rotate-1 origin-left">
                Awesome Projects
              </span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DropdownFolder {...category} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 sm:mt-32 mb-16 sm:mb-24 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold mb-6 sm:mb-8 leading-tight">
            I turn complex financials into clear, data-driven insights to support sound investment decisions.
          </h2>
          <div className="space-y-2 mb-8 sm:mb-10 border-l-4 border-accent pl-4 sm:pl-6 py-2">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">Basically : i don’t predict markets.</p>
            <p className="text-lg sm:text-xl text-foreground font-bold">I understand businesses & let the number talk.</p>
          </div>
          <Button href="https://drive.google.com/drive/u/0/folders/1JSyMOsCu5LVQET3onfrSjmGMZviikArn" icon="arrow-right" className="w-full sm:w-auto">
            Explore Analysis
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-display font-semibold mb-6 sm:mb-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-muted p-2.5 sm:p-2 rounded-xl border border-border shadow-sm overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <img 
                  src="/NISM%20XV.jpeg?v=1" 
                  alt="NISM Series XV Certification" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x600/171717/333333?text=NISM+Series+XV";
                  }}
                />
              </div>
              <p className="text-center font-medium text-sm sm:text-base mt-3 sm:mt-4 mb-2">NISM Series XV: Research Analyst</p>
            </div>
            
            <div className="bg-muted p-2.5 sm:p-2 rounded-xl border border-border shadow-sm overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <img 
                  src="/NISM%20VIII.jpg?v=1" 
                  alt="NISM Series VIII Certification" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x600/171717/333333?text=NISM+Series+VIII";
                  }}
                />
              </div>
              <p className="text-center font-medium text-sm sm:text-base mt-3 sm:mt-4 mb-2">NISM Series VIII: Equity Derivatives</p>
            </div>
          </div>
        </motion.div>

        {/* Let's Connect CTA */}
        <ConnectCTA />
      </div>

      <ScrollIndicator />
    </PageTransition>
  );
}
