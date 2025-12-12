import { Award, GraduationCap, Heart } from 'lucide-react';

export default function Team() {
  const doctors = [
    {
      name: 'د. عبدالرحمن',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['طب الأطفال', 'الأعصاب', 'العظام'],
      bio: 'مع أكثر من 10 سنوات من الخبرة في العلاج الطبيعي للأطفال، يتخصص الدكتور عبدالرحمن في اضطرابات النمو والحالات العصبية عند الأطفال. نهجه المتمحور حول المريض وخبرته في التدخل المبكر ساعدا مئات العائلات على تحقيق نتائج متميزة.',
      education: 'دكتوراه في العلاج الطبيعي للأطفال',
      certifications: ['أخصائي طب الأطفال معتمد من المجلس', 'معتمد NDT'],
    },
    {
      name: 'د. عبدالله',
      image: 'https://images.pexels.com/photos/5215093/pexels-photo-5215093.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['طب الأطفال', 'الأعصاب', 'العظام'],
      bio: 'يقدم الدكتور عبدالله خبرة واسعة في علاج الحالات العصبية والعظمية المعقدة عند الأطفال والبالغين. يدمج نهجه الشامل العلاج اليدوي مع تقنيات التأهيل المتقدمة لرعاية شاملة.',
      education: 'ماجستير في التأهيل العصبي',
      certifications: ['معالج يدوي معتمد', 'أخصائي سريري في العظام'],
    },
    {
      name: 'د. عبدالعزيز',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['الأعصاب', 'العظام'],
      bio: 'متخصص في التأهيل العصبي والتعافي من العظام، عالج الدكتور عبدالعزيز بنجاح المرضى الذين يتعافون من السكتة الدماغية وإصابات العمود الفقري والجراحات العظمية المعقدة. تضمن ممارسته القائمة على الأدلة نتائج وظيفية مثالية.',
      education: 'ماجستير في العلاج الطبيعي العظمي',
      certifications: ['أخصائي تاهيل السكتة الدماغية معتمد', 'معالج يدوي متقدم في العظام'],
    },
    {
      name: 'د. ركان',
      image: 'https://images.pexels.com/photos/5215028/pexels-photo-5215028.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['طب الأطفال', 'الأعصاب', 'العظام'],
      bio: 'تمتد خبرة الدكتور ركان متعددة التخصصات لتشمل رعاية الأطفال والتأهيل العصبي وعلاج العظام. معروف بنهجه الرحيم، يتفوق في بناء علاقة ودية مع المرضى من جميع الأعمار وإعداد برامج علاجية فعالة.',
      education: 'ماجستير في العلاج الطبيعي',
      certifications: ['أخصائي النمو عند الأطفال', 'معتمد في الإصابات الرياضية'],
    },
    {
      name: 'د. أحلام',
      image: 'https://images.pexels.com/photos/5207236/pexels-photo-5207236.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['صحة المرأة', 'الأعصاب', 'العظام'],
      bio: 'الدكتورة أحلام هي المتخصصة الرائدة في العلاج الطبيعي لصحة المرأة، مع خبرة خاصة في التعافي بعد الولادة وتأهيل قاع الحوض والحالات المتعلقة بالحمل. نهجها الحساس والمخصص جعلها مدافعة موثوقة عن عافية المرأة.',
      education: 'ماجستير في العلاج الطبيعي لصحة المرأة',
      certifications: ['أخصائية تأهيل قاع الحوض', 'أخصائية التمارين قبل وبعد الولادة'],
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">تعرف على فريقنا</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            معالجون طبيعيون متخصصون مكرسون لتعافيك ورفاهيتك
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              يتكون فريقنا من متخصصين مؤهلين بدرجة عالية ومتحمسين لمساعدتك في تحقيق أهدافك الصحية. كل عضو يقدم خبرة فريدة والتزاماً بالتميز.
            </p>
          </div>

          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="h-96 lg:h-[500px] rounded-3xl shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctor.image})` }}
                  >
                    <div className="h-full w-full bg-gradient-to-t from-gray-900/60 to-transparent rounded-3xl flex items-end p-8">
                      <div className="text-white">
                        <h2 className="text-4xl font-bold mb-2">{doctor.name}</h2>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialization.map((spec, i) => (
                            <span
                              key={i}
                              className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">{doctor.bio}</p>

                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <GraduationCap size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">التعليم</h4>
                          <p className="text-gray-700">{doctor.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Award size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">الشهادات</h4>
                          <ul className="space-y-1">
                            {doctor.certifications.map((cert, i) => (
                              <li key={i} className="text-gray-700 flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                {cert}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Heart size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">التخصصات</h4>
                          <p className="text-gray-700">{doctor.specialization.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">انضم إلى عائلتنا المتنامية من المرضى الراضين</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              جرب الرعاية المخصصة من فريقنا المتخصص. احجز استشارتك اليوم وابدأ رحلتك نحو صحة أفضل.
            </p>
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              احجز موعد
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
