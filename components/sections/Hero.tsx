import Image from "next/image";
import { BasicInfo } from "@/types/portfolio";

interface HeroProps {
  data: BasicInfo;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
            <Image
              src={data.photo}
              alt={data.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {data.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {data.summary}
            </p>
            {data.location && (
              <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {data.location}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
