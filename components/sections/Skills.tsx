import { SkillCategory } from "@/types/portfolio";

interface SkillsProps {
  data: SkillCategory[];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Core Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
              style={{ borderLeftColor: category.color || '#6b7280' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={category.category}>
                  {category.icon || '📋'}
                </span>
                <h3 
                  className="text-xl font-semibold"
                  style={{ color: category.color || '#374151' }}
                >
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-white px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-sm"
                    style={{ 
                      backgroundColor: skill.color || category.color || '#6b7280',
                      boxShadow: `0 2px 4px ${skill.color || category.color || '#6b7280'}20`
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
