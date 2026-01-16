import { Baby, Heart, Activity, Brain, ArrowRight, Zap, Users2 } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Services() {
  const { navigate } = useRouter();

  const mainServices = [
    {
      icon: Baby,
      title: 'العلاج الطبيعي للأطفال',
      color: 'from-pink-500 to-rose-500',
      image: `${import.meta.env.BASE_URL}Pictures/children-therapy.jpeg`,
      description: 'نساعد الأطفال على تحسين الحركة، القوة، والتناسق من خلال برامج علاجية متخصصة.',
      conditions: [
        'تأخر المهارات الحركية',
        'التواء الرقبة (Torticollis)',
        'القدم الحنفاء (Clubfoot)',
        'القدم المسطحة',
        'المشي على أطراف الأصابع',
        'الشلل الدماغي',
        'اضطرابات التناسق الحركي',
        'اختلالات المشي',
        'إعادة التأهيل بعد الإصابات',
      ],
    },
    {
      icon: Heart,
      title: 'العلاج الطبيعي لصحة المرأة',
      color: 'from-purple-500 to-pink-500',
      image: `${import.meta.env.BASE_URL}Pictures/womens-health-therapy.jpeg`,
      description: 'رعاية متخصصة للسيدات في كل مراحل الحياة من الحمل إلى ما بعد الولادة.',
      conditions: [
        'آلام الحمل',
        'إعادة التأهيل بعد الولادة',
        'علاج انفصال عضلات البطن',
        'تقوية عضلات قاع الحوض',
        'آلام الظهر والرقبة',
        'برامج تصحيح القوام للسيدات',
      ],
    },
    {
      icon: Activity,
      title: 'العلاج الطبيعي للبالغين',
      color: 'from-teal-500 to-cyan-500',
      image: `${import.meta.env.BASE_URL}Pictures/adult-therapy.jpg`,
      description: 'علاج متخصص للإصابات الحادة والآلام المزمنة والتأهيل بعد الجراحة للبالغين وكبار السن.',
      conditions: [
        'آلام الظهر والرقبة',
        'التهابات الكتف والانحشار',
        'تأهيل الرباط الصليبي (ACL)',
        'إصابات الغضروف الهلالي',
        'التقلصات والآلام المزمنة',
        'إعادة التأهيل بعد الكسور',
        'إصابات الغضاريف',
        'تأهيل إصابات الرياضة',
      ],
    },
  ];

  const neurologicalConditions = [
    { title: 'حالات الشلل', items: [
      'شلل رباعي تشنجي - Spastic quadriplegia',
      'ضعف رباعي - Quadriparesis',
      'شلل تشنجي مزدوج - Spastic diplegia',
      'شلل نصفي سفلي تشنجي - Spastic paraplegia',
      'شلل نصفي أيمن تشنجي - Spastic Rt hemiplegia',
      'شلل ثلاثي تشنجي - Spastic Triplegia',
      'شلل نصفي أيمن/أيسر - Rt/Lt hemiplegia',
      'شلل نصفي سفلي - Paraplegia',
    ]},
    { title: 'اضطرابات عصبية', items: [
      'السكتة الدماغية - Stroke/Hemiplegia',
      'إصابات الحبل الشوكي',
      'التصلب المتعدد - Multiple Sclerosis',
      'التصلب الحدبي - Tuberous sclerosis',
      'الورم العصبي الليفي - Neurofibromatosis',
      'اعتلال الأعصاب الطرفية والوراثي',
      'مرض شاركو-ماري-توث - Charcot-Marie-Tooth',
    ]},
    { title: 'حالات الصرع والدماغ', items: [
      'الصرع - Epilepsy',
      'متلازمة درافيت، فرط الحركة - Dravet syndrome, ADHD',
      'اعتلال الدماغ بنقص الأكسجة - Hypoxic ischemic encephalopathy',
      'نقص التروية الدماغية الشديد - Severe cerebral ischemia',
      'إصابة الدماغ الرضية - TBI',
      'استسقاء دماغي - Hydrocephalus',
    ]},
    { title: 'اضطرابات الحركة', items: [
      'الرنح - Ataxia',
      'الحركات اللاإرادية - Choreo-athetosis',
      'خلل التوتر العضلي - Dystonia',
    ]},
  ];

  const developmentalConditions = [
    'التوحد - Autism',
    'تأخر النمو وتأخر الكلام - Developmental delay and speech delay',
    'تأخر في اكتساب المهارات - Delayed milestone',
    'تأخر النمو الشامل - GDD (Global Developmental Delay)',
    'تأخر النمو الحركي النفسي - Global psycho-motor delay',
  ];

  const geneticSyndromes = [
    'متلازمة جوبيرت - Joubert syndrome',
    'متلازمة لارسن - Larsen syndrome',
    'ضمور العضلات الشوكي - SMA',
    'متلازمة إهلرز-دانلوس - Ehlers-Danlos syndrome',
    'متلازمة كورنيا دي لانج - Cornea de Lange syndrome',
    'متلازمة داندي-ووكر - Dandy-Walker syndrome',
    'نقص عامل التخثر الوراثي الثامن',
  ];

  const congenitalConditions = [
    'السنسنة المشقوقة - Spina bifida',
    'القيلة النخاعية السحائية - MMC (Myelomeningocele)',
    'استسقاء دماغي خلقي مع شلل رباعي',
    'الحثل العضلي الخلقي',
    'خلل التنسج العظمي الغضروفي',
    'الجنف - Scoliosis',
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            حلول علاج طبيعي شاملة مصممة خصيصاً لاحتياجاتك وأهدافك الفريدة
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">نعالج:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.conditions.map((condition, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span className="text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className={`mt-8 bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2`}
                  >
                    <ArrowRight size={18} />
                    <span>احجز الآن</span>
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="h-96 lg:h-[500px] rounded-3xl shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">التأهيل العصبي المتخصص</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم علاجاً شاملاً لمجموعة واسعة من الحالات العصبية لجميع الأعمار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {neurologicalConditions.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <Brain size={28} className="text-blue-600" />
                  <span>{category.title}</span>
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Zap size={28} className="text-purple-600" />
                <span>اضطرابات النمو</span>
              </h3>
              <ul className="space-y-3">
                {developmentalConditions.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Users2 size={28} className="text-pink-600" />
                <span>أمراض وراثية ومتلازمات</span>
              </h3>
              <ul className="space-y-3">
                {geneticSyndromes.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-pink-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Activity size={28} className="text-teal-600" />
                <span>تشوهات خلقية</span>
              </h3>
              <ul className="space-y-3">
                {congenitalConditions.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">نقدم خدمة العلاج الطبيعي المكثف</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-teal-50">
              برامج علاجية مكثفة مصممة خصيصاً لحالات الأطفال والأعصاب لتحقيق أفضل النتائج
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              حدد موعد استشارة
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">لست متأكداً من الخدمة التي تحتاجها؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              سيقوم فريقنا المتخصص بتقييم حالتك والتوصية بخطة العلاج الأنسب لك.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              حدد موعد استشارة
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
