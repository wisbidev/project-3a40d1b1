import { ClipboardList, Layers, Code2, FlaskConical } from "lucide-react";

const agents = [
  {
    icon: ClipboardList,
    title: "PM",
    responsibilities: [
      "Phân tích yêu cầu",
      "Chia nhỏ task",
      "Lên kế hoạch sprint",
      "Theo dõi tiến độ",
    ],
  },
  {
    icon: Layers,
    title: "TL",
    responsibilities: [
      "Thiết kế kiến trúc",
      "Review code",
      "Đảm bảo chất lượng",
      "Quyết định công nghệ",
    ],
  },
  {
    icon: Code2,
    title: "Dev",
    responsibilities: [
      "Implement tính năng",
      "Viết unit test",
      "Tối ưu hiệu năng",
      "Fix bug",
    ],
  },
  {
    icon: FlaskConical,
    title: "TestLead",
    responsibilities: [
      "Viết test case",
      "Kiểm thử tự động",
      "Đảm bảo coverage",
      "Report kết quả",
    ],
  },
];

export default function AIAgents() {
  return (
    <section id="agents" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
          4 AI Agents vận hành như engineering team thật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.title}
                className="bg-surface border border-gray-700/50 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {agent.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {agent.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="text-muted text-sm flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
