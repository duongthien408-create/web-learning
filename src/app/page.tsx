import { BookOpen, Palette, Target, Zap, Database, BarChart3 } from "lucide-react";

const categories = [
  {
    id: "content",
    name: "Content Marketing",
    icon: BookOpen,
    description: "Tài liệu về content strategy, copywriting, storytelling",
    color: "bg-blue-500",
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    description: "Thiết kế đồ họa, UI/UX, branding",
    color: "bg-purple-500",
  },
  {
    id: "digital-ads",
    name: "Digital Ads",
    icon: Target,
    description: "Facebook Ads, Google Ads, TikTok Ads",
    color: "bg-red-500",
  },
  {
    id: "automation",
    name: "Marketing Automation",
    icon: Zap,
    description: "Email marketing, chatbot, workflow automation",
    color: "bg-yellow-500",
  },
  {
    id: "data",
    name: "Data & Analytics",
    icon: Database,
    description: "Google Analytics, tracking, conversion optimization",
    color: "bg-green-500",
  },
  {
    id: "dashboard",
    name: "Dashboard & Reporting",
    icon: BarChart3,
    description: "Data Studio, Power BI, báo cáo marketing",
    color: "bg-orange-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Marketing Resources Hub
          </h1>
          <p className="mt-2 text-gray-600">
            Tổng hợp tài liệu, khóa học và công cụ Marketing chất lượng
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Khám phá nguồn tài liệu Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Được tuyển chọn kỹ lưỡng từ các chuyên gia, có nguồn gốc rõ ràng,
            phục vụ miễn phí cho cộng đồng
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className={`${category.color} p-3 rounded-lg mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">
                    Đang cập nhật...
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
              <div className="text-gray-600">Tài liệu & Khóa học</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Chuyên mục</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Miễn phí</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            Made with ❤️ for Marketing Community
          </p>
        </div>
      </footer>
    </div>
  );
}
