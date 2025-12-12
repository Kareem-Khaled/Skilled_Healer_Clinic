import { Target, Eye, Heart, Award, Users, Briefcase, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            ملتزمون بتحويل الحياة من خلال خدمات علاج طبيعي وتأهيل متميزة
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">قصتنا</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                تأسست عيادتنا برؤية تقديم خدمات علاج طبيعي عالمية المستوى، ونمت لتصبح اسماً موثوقاً في التأهيل والعافية. بدأت رحلتنا بإيمان بسيط: أن كل شخص يستحق الوصول إلى رعاية متخصصة تلبي احتياجاته الفريدة.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                اليوم، نخدم مئات المرضى من جميع الفئات العمرية، من الرضع الذين يعانون من تأخر في النمو إلى الرياضيين النخبة الذين يتعافون من الإصابات، وكبار السن الذين يحافظون على استقلاليتهم. يجمع فريقنا متعدد التخصصات بين التميز السريري والرحمة الحقيقية.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نستثمر باستمرار في التدريب المتقدم والمعدات الحديثة والتقنيات القائمة على الأدلة لضمان حصول مرضانا على أعلى معايير الرعاية الممكنة.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
              />
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg mt-8"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تمكين الأفراد من جميع الأعمار لتحقيق الأداء البدني الأمثل ونوعية حياة أفضل من خلال رعاية علاج طبيعي مخصصة وقائمة على الأدلة مقدمة بالتعاطف والتميز.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون عيادة العلاج الطبيعي الرائدة المعترف بها في تحويل الحياة، وتطوير المجال من خلال الابتكار، ووضع معايير جديدة في رعاية المرضى ونتائج التأهيل.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">قيمنا</h3>
              <p className="text-gray-600 leading-relaxed">
                النزاهة والتعاطف والتميز والتحسين المستمر توجه كل ما نقوم به. نعامل كل مريض كشريك مُقدّر في رحلة شفائه.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ما يميزنا</h2>
            <p className="text-xl text-gray-600">الفرق الذي نصنعه</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'خبرة متخصصة',
                description: 'يضم فريقنا متخصصين في طب الأطفال وصحة المرأة والأعصاب والعظام والطب الرياضي، مما يضمن رعاية متخصصة لكل حالة.',
              },
              {
                title: 'نهج شامل',
                description: 'نعالج ليس فقط الأعراض بل الأسباب الجذرية، مع مراعاة العوامل البدنية والعاطفية ونمط الحياة في خطة العلاج الخاصة بك.',
              },
              {
                title: 'تقنية متقدمة',
                description: 'معدات حديثة تشمل العلاج الكهربائي والموجات فوق الصوتية وأدوات التأهيل الحديثة لنتائج مثالية.',
              },
              {
                title: 'رعاية تتمحور حول الأسرة',
                description: 'نشرك العائلات في عملية العلاج، ونقدم التعليم والدعم للنجاح على المدى الطويل.',
              },
              {
                title: 'جدولة مرنة',
                description: 'ساعات عمل ممتدة ومواعيد في نفس اليوم متاحة لتناسب أسلوب حياتك المزدحم.',
              },
              {
                title: 'نتائج مثبتة',
                description: 'آلاف النتائج الناجحة للمرضى مدعومة ببروتوكولات قائمة على الأدلة وتتبع مستمر للنتائج.',
              },
            ].map((item, index) => (
              <div key={index} className="flex space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle size={24} className="text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">الاعتمادات والشهادات</h2>
            <p className="text-xl text-gray-600">تميز معتمد يمكنك الوثوق به</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'معتمد من ISO', subtitle: 'إدارة الجودة' },
              { icon: Briefcase, title: 'ممارسون مرخصون', subtitle: 'معتمدون من المجلس' },
              { icon: Users, title: 'عضو APTA', subtitle: 'جمعية مهنية' },
              { icon: CheckCircle, title: 'معتمد من التأمين', subtitle: 'مزودون رئيسيون' },
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <cert.icon size={48} className="text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">منشأتنا</h2>
            <p className="text-xl text-gray-600">حديثة ومريحة ومصممة للشفاء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659579/pexels-photo-7659579.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659587/pexels-photo-7659587.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
