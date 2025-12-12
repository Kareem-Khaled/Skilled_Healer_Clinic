import { Baby, Heart, Activity, Brain, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Services() {
  const { navigate } = useRouter();

  const services = [
    {
      icon: Baby,
      title: 'العلاج الطبيعي للأطفال',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'رعاية متخصصة للأطفال من الرضاعة حتى المراهقة، لمعالجة اضطرابات النمو والحركة.',
      conditions: [
        'تأخر النمو الحركي',
        'إدارة الشلل الدماغي',
        'علاج وتصحيح القدم الحنفاء',
        'اضطرابات المشي ومشاكل المشي',
        'علاج الصعر (شد عضلات الرقبة)',
        'تصحيح المشي على أطراف الأصابع',
        'اضطرابات التنسيق والتوازن',
        'مشاكل القوام',
      ],
    },
    {
      icon: Heart,
      title: 'العلاج الطبيعي لصحة المرأة',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'دعم شامل للمرأة في جميع مراحل الحياة، من الحمل إلى ما بعد الولادة وما بعدها.',
      conditions: [
        'التأهيل بعد الولادة',
        'علاج وتقوية قاع الحوض',
        'إصلاح انفراق عضلات البطن',
        'إدارة الآلام المتعلقة بالحمل',
        'تصحيح القوام أثناء وبعد الحمل',
        'علاج سلس البول',
        'التعافي قبل وبعد الولادة القيصرية',
        'برامج العودة للياقة البدنية',
      ],
    },
    {
      icon: Activity,
      title: 'العلاج الطبيعي للبالغين',
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'علاج متخصص للإصابات الحادة والآلام المزمنة والتأهيل بعد الجراحة للبالغين من جميع الأعمار.',
      conditions: [
        'تخفيف آلام الظهر والرقبة',
        'تأهيل الرباط الصليبي والإصابات الرياضية',
        'علاج الانزلاق الغضروفي',
        'إدارة آلام المفاصل والتهاب المفاصل',
        'التعافي بعد الكسور',
        'إصابات الكتف والكفة المدورة',
        'التأهيل بعد استبدال الركبة والورك',
        'إدارة الآلام المزمنة',
      ],
    },
    {
      icon: Brain,
      title: 'التأهيل العصبي',
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/7659580/pexels-photo-7659580.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'برامج متخصصة للمرضى الذين يتعافون من حالات وإصابات عصبية.',
      conditions: [
        'التعافي والتأهيل من السكتة الدماغية',
        'إدارة التصلب العصبي المتعدد',
        'التأهيل من إصابات الحبل الشوكي',
        'علاج إصابات الأعصاب الطرفية',
        'تدريب التوازن والتنسيق',
        'استعادة الحركة الوظيفية',
        'إدارة مرض باركنسون',
        'التعافي من إصابات الدماغ الرضية',
      ],
    },
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
            {services.map((service, index) => (
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
