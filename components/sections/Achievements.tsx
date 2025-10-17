import { Achievement } from "@/types/portfolio";

interface AchievementsProps {
  data: Achievement[];
}

export default function Achievements({ data }: AchievementsProps) {
  // Map certification titles to logo images
  const getCertificationLogo = (title: string): string => {
    if (title.toLowerCase().includes('aws')) {
      return '/images/aws.png';
    } else if (title.toLowerCase().includes('azure')) {
      return '/images/azurecertified.png';
    } else if (title.toLowerCase().includes('qt')) {
      return '/images/qt.png';
    }
    return ''; // fallback to generic icon
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Achievements & Certifications
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((achievement, idx) => {
            const logoSrc = getCertificationLogo(achievement.title);
            
            return (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  {logoSrc ? (
                    <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg p-1 shadow-sm">
                      <img 
                        src={logoSrc} 
                        alt={`${achievement.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.issuer}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                      {achievement.date}
                    </p>
                  </div>
                </div>
                {achievement.description && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {achievement.description}
                  </p>
                )}
                {achievement.credentialUrl && (
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    View Credential
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
