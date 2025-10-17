import { Education as EducationType } from "@/types/portfolio";

interface EducationProps {
  data: EducationType[];
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {data.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {edu.field}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                {edu.institution}
              </p>
              {edu.description && (
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
