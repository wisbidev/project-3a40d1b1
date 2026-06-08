export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial-blue pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          AI Team.
          <br />
          Không cần thuê dev.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          Nền tảng AI tự động phân tích yêu cầu, viết code, kiểm thử và deploy
          phần mềm — tất cả chỉ qua Telegram.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/aiteam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-accent text-white font-semibold text-base hover:bg-blue-600 transition-colors"
          >
            Bắt đầu ngay
          </a>
          <a
            href="#pipeline"
            className="px-8 py-3 rounded-lg border border-gray-500 text-white font-semibold text-base hover:border-gray-300 transition-colors"
          >
            Xem cách hoạt động
          </a>
        </div>
      </div>
    </section>
  );
}
