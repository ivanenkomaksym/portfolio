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
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                {/* University Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-white">
                    <img 
                      src="/images/unilogo.jpg" 
                      alt="Ivan Franko National University of Lviv" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Education Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    {edu.period}
                  </p>
                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300 mt-3">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
