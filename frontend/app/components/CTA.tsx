export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 bg-bg"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Sẵn sàng biến ý tưởng thành sản phẩm?
        </h2>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          Bắt đầu trò chuyện với AI Team qua Telegram — không cần cài đặt, không
          cần thuê dev.
        </p>
        <a
          href="https://t.me/aiteam"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-lg bg-accent text-white font-semibold text-lg hover:bg-blue-600 transition-colors"
        >
          Chat qua Telegram
        </a>
      </div>
    </section>
  );
}
