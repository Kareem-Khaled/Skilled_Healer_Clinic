import { Heart, Users, Award, Shield, ArrowRight, Star, Baby, Activity, Zap } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Home() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            حيث تلتقي الجودة بالرعاية
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            علاج طبيعي متخصص للأطفال والنساء والبالغين
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all animate-fadeInUp flex items-center space-x-2 mx-auto"
            style={{ animationDelay: '0.4s' }}
          >
            <ArrowRight size={20} />
            <span>احجز موعد</span>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">خدماتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حلول علاج طبيعي شاملة مصممة خصيصًا لاحتياجاتك الفريدة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Baby,
                title: 'علاج طبيعي للأطفال',
                description: 'رعاية متخصصة للأطفال الذين يعانون من تأخر حركي والشلل الدماغي ومشاكل النمو',
                color: 'from-pink-500 to-rose-500',
              },
              {
                icon: Heart,
                title: 'صحة المرأة',
                description: 'دعم شامل للتعافي بعد الولادة وعلاج قاع الحوض والمشاكل المتعلقة بالحمل',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Activity,
                title: 'علاج طبيعي للبالغين',
                description: 'علاج متخصص للإصابات الرياضية وآلام الظهر ومشاكل المفاصل والتأهيل بعد الجراحة',
                color: 'from-teal-500 to-cyan-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button
                  onClick={() => navigate('/services')}
                  className="text-teal-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
                >
                  <ArrowRight size={18} />
                  <span>اعرف المزيد</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">لماذا تختارنا</h2>
            <p className="text-xl text-gray-600">التميز في كل جانب من جوانب الرعاية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'فريق خبير', description: 'متخصصون مؤهلون تأهيلاً عالياً بخبرة سنوات طويلة' },
              { icon: Users, title: 'رعاية تتمحور حول المريض', description: 'خطط علاجية مخصصة لنتائج مثلى' },
              { icon: Shield, title: 'رعاية موثوقة', description: 'نهج علاجي آمن وقائم على الأدلة' },
              { icon: Zap, title: 'تقنيات حديثة', description: 'أحدث المعدات وأساليب التأهيل' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">ماذا يقول مرضانا</h2>
            <p className="text-xl text-gray-600">قصص حقيقية من أشخاص حقيقيين</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'سارة جونسون',
                role: 'التعافي بعد الولادة',
                content: 'الرعاية التي تلقيتها كانت استثنائية. ساعدتني الدكتورة أحلام على التعافي بشكل كامل بعد الولادة. أشعر بأنني أقوى من أي وقت مضى!',
                rating: 5,
              },
              {
                name: 'ميشيل شين',
                role: 'إصابة رياضية',
                content: 'بعد إصابتي في الرباط الصليبي، ظننت أن أيامي الرياضية انتهت. بفضل الفريق هنا، عدت للعب كرة القدم بكامل قوتي.',
                rating: 5,
              },
              {
                name: 'إيما ويليامز',
                role: 'رعاية الأطفال',
                content: 'عمل الدكتور عبد الرحمن العجائب مع ابني. تحسنت مهاراته الحركية بشكل ملحوظ. نحن ممتنون جدًا!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">هل أنت مستعد لبدء رحلة التعافي؟</h2>
          <p className="text-xl mb-8 text-teal-50">
            احجز موعدك اليوم واتخذ الخطوة الأولى نحو صحة أفضل
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
          >
            احجز استشارة
          </button>
        </div>
      </section>
    </div>
  );
}
