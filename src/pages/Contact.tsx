import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log form data (in production, you would send this to your backend)
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            هل أنت مستعد لبدء رحلتك نحو صحة أفضل؟ تواصل معنا اليوم
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <p className="text-gray-600 mb-8">
                املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    placeholder="أحمد محمد"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    placeholder="+966 50 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    الخدمة المهتم بها
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  >
                    <option value="">اختر خدمة</option>
                    <option value="pediatric">العلاج الطبيعي للأطفال</option>
                    <option value="womens">صحة المرأة</option>
                    <option value="adult">العلاج الطبيعي للبالغين</option>
                    <option value="neuro">التأهيل العصبي</option>
                    <option value="other">أخرى / غير متأكد</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all resize-none"
                    placeholder="أخبرنا عن حالتك أو ما تريد مناقشته..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 text-green-800">
                    <CheckCircle size={24} className="flex-shrink-0" />
                    <p className="font-medium">شكراً لك! سنتواصل معك خلال 24 ساعة.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                    <p className="font-medium">حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
                <p className="text-gray-600 mb-8">
                  نحن هنا للإجابة على أي أسئلة قد تكون لديك حول خدماتنا.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">الهاتف</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-teal-600 mt-2">الإثنين-الجمعة: 8 صباحاً - 8 مساءً</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-600">info@physiolife.com</p>
                      <p className="text-sm text-purple-600 mt-2">سنرد خلال 24 ساعة</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">العنوان</h3>
                      <p className="text-gray-600">123 Healthcare Boulevard</p>
                      <p className="text-gray-600">Medical District, City 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ساعات العمل</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>الإثنين - الجمعة: 8:00 صباحاً - 8:00 مساءً</p>
                        <p>السبت: 9:00 صباحاً - 5:00 مساءً</p>
                        <p>الأحد: مغلق</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                <MessageSquare size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">تواصل معنا عبر واتساب</h3>
                <p className="mb-6 text-teal-50">
                  احصل على إجابات فورية لأسئلتك عبر واتساب
                </p>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block"
                >
                  دردش عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">اعثر علينا</h2>
            <p className="text-xl text-gray-600">موقع مريح في المنطقة الطبية</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-96">
            <div
              className="w-full h-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={64} className="text-teal-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  مساحة لتكامل الخريطة
                  <br />
                  <span className="text-sm">123 Healthcare Boulevard, Medical District</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
