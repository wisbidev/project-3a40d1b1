import { Lightbulb, ClipboardList, Code2, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Lightbulb,
    title: "Ý tưởng",
    description: "Gửi yêu cầu qua Telegram, AI phân tích và nắm bắt ý tưởng.",
  },
  {
    icon: ClipboardList,
    title: "PM lên kế hoạch",
    description: "PM Agent tạo spec, phân chia module và lên timeline tự động.",
  },
  {
    icon: Code2,
    title: "Dev code",
    description: "Dev Agent viết code chuẩn clean architecture theo spec đã duyệt.",
  },
  {
    icon: ShieldCheck,
    title: "Test kiểm tra",
    description: "Test Agent chạy unit test, tích hợp và kiểm tra toàn bộ.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Tự động deploy lên server, CI/CD hoàn tất trong vài phút.",
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Từ ý tưởng đến deploy hoàn toàn tự động
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Desktop: horizontal row; Mobile: vertical stack */}
          <div className="relative flex flex-col lg:flex-row lg:items-start items-center gap-8 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.title} className="relative flex flex-col lg:flex-row items-center w-full lg:w-1/5">
                  {/* Step card */}
                  <div className="relative z-10 w-full max-w-[220px]">
                    <div className="bg-surface rounded-2xl p-6 flex flex-col items-center text-center h-full">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector arrow — desktop (horizontal) */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 items-center"
                      style={{ left: "auto" }}
                    >
                      <svg
                        width="40"
                        height="24"
                        viewBox="0 0 40 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 12H32M32 12L24 4M32 12L24 20"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Connector arrow — mobile (vertical, after each card) */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="lg:hidden flex items-center justify-center py-2"
                    >
                      <svg
                        width="24"
                        height="40"
                        viewBox="0 0 24 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0V28M12 28L4 20M12 28L20 20"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
