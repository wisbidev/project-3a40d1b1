import { FileSearch, Calendar, Code2, FlaskConical, GitPullRequest, Rocket } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Tự động phân tích yêu cầu",
    description: "AI phân tích và hiểu yêu cầu dự án từ mô tả ngắn, tạo specification chi tiết.",
  },
  {
    icon: Calendar,
    title: "Lập kế hoạch chi tiết",
    description: "Tự động chia nhỏ công việc, lên kế hoạch sprint và theo dõi tiến độ.",
  },
  {
    icon: Code2,
    title: "Code tự động",
    description: "AI sinh code chất lượng cao cho từng tính năng theo specification.",
  },
  {
    icon: FlaskConical,
    title: "Kiểm thử toàn diện",
    description: "Tự động viết và chạy test case, đảm bảo coverage và chất lượng.",
  },
  {
    icon: GitPullRequest,
    title: "Review & Merge",
    description: "AI review code, đề xuất cải thiện và tự động merge pull request.",
  },
  {
    icon: Rocket,
    title: "Deploy liên tục",
    description: "Sau khi merge, code được đóng gói và deploy tự động lên production.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Tự động hóa toàn bộ quy trình phát triển phần mềm
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center px-4 py-6"
              >
                <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
