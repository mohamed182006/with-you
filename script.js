// ==================== DATA BASE ====================
const WHATSAPP_NUMBER = "96896728224";
const categories = [
    { 
        id: "all", 
        name: "الكل", 
        icon: '<img src="pexels-ramonkaphotography-31266794.jpg" alt="الكل" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "restaurants", 
        name: "المطاعم", 
        icon: '<img src="مطعم البيت العُماني/pexels-ali-dashti-506667798-17650208.jpg" alt="المطاعم" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "cafes", 
        name: "الكافيهات", 
        icon: '<img src="pexels-slytonic-33847787.jpg" alt="الكافيهات" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "fruits", 
        name: "الفواكه", 
        icon: '<img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=150" alt="الفواكه" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "veg", 
        name: "الخضروات", 
        icon: '<img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=150" alt="الخضروات" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "butchery", 
        name: "الملاحم", 
        icon: '<img src="لحوم/pexels-wicho-17481109.jpg" alt="الملاحم" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "bakery", 
        name: "المخابز", 
        icon: '<img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150" alt="المخابز" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "sweets", 
        name: "الحلويات", 
        icon: '<img src="حلويات/pexels-shameel-mukkath-3421394-6262158.jpg" alt="الحلويات" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
    { 
        id: "grocery", 
        name: "البقالة", 
        icon: '<img src="pexels-fajrinugroho-20489330.jpg" alt="البقالة" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">' 
    },
];

const stores = [

      // ================= 9. المطاعم =================
    {
        id: "r1", name: "مطعم البيت العُماني", category: "restaurants",
        logo: "مطعم البيت العُماني/pexels-ali-dashti-506667798-17650208.jpg",
        cover: "مطعم البيت العُماني/pexels-ali-dashti-506667798-17650208.jpg",
        location: "سناو",
        tag: "أكلات عمانية وخليجية",
        products: [
            { id: "r1_1", name: "شوا لحم عُماني", desc: "لحم متبل بالتوابل العمانية ويُقدم مع الأرز", price: 3.500, img: "مطعم البيت العُماني/pexels-cromwell-ken-71366571-36442202.jpg" },
            { id: "r1_2", name: "كبسة دجاج", desc: "أرز متبل مع نصف دجاجة وصوص خاص", price: 2.200, img: "مطعم البيت العُماني/pexels-ali-dashti-506667798-17650208.jpg" },
            { id: "r1_3", name: "كبسة لحم", desc: "أرز عطري مع قطع لحم طرية", price: 3.000, img: "مطعم البيت العُماني/pexels-ali-dashti-506667798-17696669.jpg" },
            { id: "r1_4", name: "دجاج مشوي", desc: "نصف دجاجة مشوية بتتبيلة خاصة", price: 2.300, img: "مطعم البيت العُماني/pexels-husien-bisky-620750755-37417613.jpg" },
            { id: "r1_5", name: "مشاكيك لحم", desc: "أسياخ لحم مشوية على الفحم", price: 2.000, img: "مطعم البيت العُماني/pexels-aboodi-18698223.jpg" },
            { id: "r1_6", name: "عرسية دجاج", desc: "أرز مهروس مع الدجاج وصلصة تقليدية", price: 1.500, img: "مطعم البيت العُماني/pexels-ali-dashti-506667798-17696671.jpg" },
            { id: "r1_7", name: "هريس باللحم", desc: "قمح مطهو مع اللحم بطريقة عمانية", price: 1.800, img: "مطعم البيت العُماني/pexels-ali-dashti-506667798-27359363.jpg" },
            { id: "r1_8", name: "شوربة عدس", desc: "شوربة عدس ساخنة مع التوابل", price: 0.800, img: "مطعم البيت العُماني/pexels-shameel-mukkath-3421394-15108372.jpg" },
            { id: "r1_9", name: "سلطة عمانية", desc: "خضروات طازجة مع الليمون والتوابل", price: 0.700, img: "مطعم البيت العُماني/pexels-shameel-mukkath-3421394-6271859.jpg" },
            { id: "r1_10", name: "لقيمات عمانية", desc: "لقيمات ذهبية مع دبس التمر والسمسم", price: 0.900, img: "مطعم البيت العُماني/pexels-mantaz-uddin-180443412-11187800.jpg" }
        ]
    },
    {
        id: "r2", name: "مطعم المذاق الشرقي", category: "restaurants",
        logo: "مطعم المذاق الشرقي/pexels-omar-b-shokerat-3263898-18177327.jpg",
        cover: "مطعم المذاق الشرقي/pexels-omar-b-shokerat-3263898-18177327.jpg",
        location: "سناو",
        tag: "مشاوي وأكلات عربية",
        products: [
            { id: "r2_1", name: "مشاوي مشكلة", desc: "تشكيلة من الكباب والشيش طاووق والريش", price: 3.500, img: "مطعم المذاق الشرقي/pexels-jdgromov-4899799.jpg" },
            { id: "r2_2", name: "كباب لحم", desc: "أسياخ لحم مفروم متبلة ومشوية", price: 2.500, img: "مطعم المذاق الشرقي/pexels-shameel-mukkath-3421394-5175623.jpg" },
            { id: "r2_3", name: "شيش طاووق", desc: "قطع دجاج متبلة ومشوية", price: 2.300, img: "مطعم المذاق الشرقي/pexels-superash93-16423838.jpg" },
            { id: "r2_4", name: "أوصال لحم", desc: "قطع لحم طرية مشوية مع التوابل", price: 2.800, img: "مطعم المذاق الشرقي/pexels-mohamed9380-36593611.jpg" },
            { id: "r2_5", name: "عرايس لحم", desc: "خبز محشو باللحم والتوابل ومشوي", price: 1.800, img: "مطعم المذاق الشرقي/pexels-ali-dashti-506667798-28241718.jpg" },
            { id: "r2_6", name: "فتة شاورما", desc: "شاورما مع الخبز والصلصة والزبادي", price: 1.900, img: "مطعم المذاق الشرقي/pexels-amirho3intavkooli-10794794.jpg" },
            { id: "r2_7", name: "شاورما دجاج", desc: "دجاج متبل مع الثوم والخضروات", price: 1.200, img: "مطعم المذاق الشرقي/pexels-omar-b-shokerat-3263898-18177327.jpg" },
            { id: "r2_8", name: "حمص بالطحينة", desc: "حمص كريمي مع الطحينة وزيت الزيتون", price: 0.800, img: "مطعم المذاق الشرقي/pexels-anthony-rahayel-125801377-32592711.jpg" },
            { id: "r2_9", name: "تبولة", desc: "بقدونس وطماطم وبرغل مع الليمون", price: 0.900, img: "مطعم المذاق الشرقي/pexels-ali-dashti-506667798-25856517.jpg" },
            { id: "r2_10", name: "كنافة", desc: "كنافة شرقية بالجبن والقطر", price: 1.200, img: "مطعم المذاق الشرقي/pexels-mohamed9380-36543156.jpg" }
        ]
    },

    // ================= 1. الفواكه =================
    {
        id: "f1", name: "متجر الواحة للفواكه", category: "fruits",
        logo: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=150",
        cover: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
        location: "سناو",
        tag: "فواكه طازجة يومياً",
        products: [
            { id: "f1_1", name: "تفاح أحمر", desc: "تفاح طازج وعالي الجودة", price: 1.200, img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200" },
            { id: "f1_2", name: "موز", desc: "موز طازج مناسب للفطور والعصائر", price: 0.900, img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200" },
            { id: "f1_3", name: "برتقال", desc: "برتقال عصير طازج", price: 1.000, img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=200" },
            { id: "f1_4", name: "مانجو", desc: "مانجو حلوة وناضجة", price: 1.800, img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=200" },
            { id: "f1_5", name: "فراولة", desc: "فراولة طازجة", price: 1.500, img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200" },
            { id: "f1_6", name: "عنب أحمر", desc: "عنب حلو بدون بذور", price: 1.700, img: "فواكه/pexels-adnan-bhatti-38056420-8206533.jpg" },
            { id: "f1_7", name: "بطيخ", desc: "بطيخ طازج وعصيري", price: 1.200, img: "فواكه/pexels-halilibrahimxq-586316034-18067322.jpg" },
            { id: "f1_8", name: "كيوي", desc: "كيوي طازج", price: 1.400, img: "فواكه/pexels-unaizat97-10493957.jpg" },
            { id: "f1_9", name: "أناناس", desc: "أناناس حلو وطازج", price: 1.600, img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200" },
            { id: "f1_10", name: "رمان", desc: "رمان طازج وحبوب ممتلئة", price: 1.800, img: "فواكه/pexels-nicholas-sarro-1227502403-24802107.jpg" }
        ]
    },
    {
        id: "f2", name: "سوق الفاكهة الطازجة", category: "fruits",
        logo: "فواكه/pexels-viktoria-slowikowska-5677306.jpg",
        cover: "فواكه/pexels-viktoria-slowikowska-5677306.jpg",
        location: "إبراء",
        tag: "أفضل أنواع الفاكهة",
        products: [
            { id: "f2_1", name: "تفاح أخضر", desc: "تفاح مقرمش ومنعش", price: 1.300, img: "فواكه/pexels-marina-agrelo-3547441-12511888.jpg" },
            { id: "f2_2", name: "كمثرى", desc: "كمثرى طازجة وحلوة", price: 1.400, img: "فواكه/pexels-shliftik-7636166.jpg" },
            { id: "f2_3", name: "خوخ", desc: "خوخ طري وحلو", price: 1.600, img: "hفواكه/pexels-ivett-35669394.jpg" },
            { id: "f2_4", name: "برقوق", desc: "برقوق طازج", price: 1.500, img: "فواكه/pexels-ivett-35669394.jpg" },
            { id: "f2_5", name: "شمام", desc: "شمام حلو وعطري", price: 1.300, img: "فواكه/pexels-rudysh10-30716465.jpg" },
            { id: "f2_6", name: "جوافة", desc: "جوافة طازجة", price: 1.400, img: "فواكه/pexels-dhruvrchauhan-13546496.jpg" },
            { id: "f2_7", name: "بابايا", desc: "بابايا ناضجة", price: 1.700, img: "فواكه/pexels-alleksana-4113812.jpg" },
            { id: "f2_8", name: "دراجون فروت", desc: "فاكهة التنين الطازجة", price: 2.200, img: "فواكه/pexels-ivett-36935095.jpg" },
            { id: "f2_9", name: "توت مشكل", desc: "تشكيلة توت طازج", price: 2.500, img: "فواكه/pexels-arthousestudio-4558293.jpg" },
            { id: "f2_10", name: "ليمون", desc: "ليمون طازج للعصائر والطبخ", price: 0.800, img: "فواكه/pexels-christelle-wehbe-72523922-29310032.jpg" }
        ]
    },

    // ================= 2. الخضروات =================
    {
        id: "v1", name: "خيرات الخضروات", category: "veg",
        logo: "خضروات/pexels-zandatsu-12974968.jpg",
        cover: "خضروات/pexels-zandatsu-12974968.jpg",
        location: "سناو",
        tag: "خضروات محلية طازجة",
        products: [
            { id: "v1_1", name: "طماطم", desc: "طماطم طازجة", price: 0.700, img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200" },
            { id: "v1_2", name: "خيار", desc: "خيار مقرمش وطازج", price: 0.600, img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=200" },
            { id: "v1_3", name: "بطاطس", desc: "بطاطس للاستخدام اليومي", price: 0.800, img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200" },
            { id: "v1_4", name: "بصل", desc: "بصل طازج", price: 0.700, img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200" },
            { id: "v1_5", name: "جزر", desc: "جزر طازج ومقرمش", price: 0.600, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200" },
            { id: "v1_6", name: "فلفل أخضر", desc: "فلفل أخضر طازج", price: 0.800, img: "خضروات/pexels-enginakyurt-15429116.jpg" },
            { id: "v1_7", name: "كوسة", desc: "كوسة طازجة", price: 0.700, img: "خضروات/pexels-alyona-nagel-1468385055-38651480.jpg" },
            { id: "v1_8", name: "باذنجان", desc: "باذنجان طازج", price: 0.700, img: "خضروات/pexels-freestockpro-12944629.jpg" },
            { id: "v1_9", name: "خس", desc: "خس أخضر طازج", price: 0.500, img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=200" },
            { id: "v1_10", name: "بروكلي", desc: "بروكلي طازج", price: 1.000, img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=200" }
        ]
    },
    {
        id: "v2", name: "مزرعة الخير", category: "veg",
        logo: "خضروات/pexels-moh-adbelghaffar-16723207.jpg",
        cover: "خضروات/pexels-moh-adbelghaffar-16723207.jpg",
        location: "إبراء",
        tag: "من المزرعة للمنزل",
        products: [
            { id: "v2_1", name: "طماطم كرزية", desc: "طماطم صغيرة حلوة", price: 1.000, img: "خضروات/pexels-david-munoz-57043824-33421820.jpg" },
            { id: "v2_2", name: "بطاطا حلوة", desc: "بطاطا حلوة طازجة", price: 1.100, img: "خضروات/pexels-bertellifotografia-30893354.jpg" },
            { id: "v2_3", name: "سبانخ", desc: "سبانخ خضراء طازجة", price: 0.800, img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200" },
            { id: "v2_5", name: "قرنبيط", desc: "قرنبيط طازج", price: 1.000, img: "خضروات/pexels-omer-furkan-yakar-542782865-30931726.jpg" },
            { id: "v2_6", name: "فلفل ملون", desc: "تشكيلة فلفل ملون", price: 1.200, img: "خضروات/pexels-sharon-snider-2339082-7258128.jpg" },
            { id: "v2_7", name: "بامية", desc: "بامية طازجة", price: 1.300, img: "خضروات/pexels-shaddam-hossain-3417842-38760273.jpg" },
            { id: "v2_8", name: "فاصوليا خضراء", desc: "فاصوليا طازجة", price: 1.000, img: "خضروات/pexels-rozanova-3004798.jpg" },
            { id: "v2_9", name: "كزبرة", desc: "حزمة كزبرة طازجة", price: 0.300, img: "خضروات/pexels-kindelmedia-7456539.jpg" },
            { id: "v2_10", name: "بقدونس", desc: "حزمة بقدونس طازج", price: 0.300, img: "خضروات/pexels-boryslav-13354858.jpg" }
        ]
    },

    // ================= 3. الملاحم =================
    {
        id: "m1", name: "ملحمة الدار", category: "butchery",
        logo: "لحوم/pexels-wicho-17481109.jpg",
        cover: "https://images.unsplash.com/photo-1551028150-64b9f398f678?w=600",
        location: "سناو",
        tag: "لحوم طازجة يومياً",
        products: [
            { id: "m1_1", name: "لحم بقري طازج", desc: "لحم بقري طازج", price: 3.500, img: "لحوم/pexels-wicho-17481109.jpg" },
            { id: "m1_2", name: "لحم غنم", desc: "لحم غنم طازج", price: 4.500, img: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=200" },
            { id: "m1_3", name: "لحم مفروم", desc: "مفروم طازج", price: 3.800, img: "لحوم/pexels-ogutomacedo-18273982.jpg" },
            { id: "m1_4", name: "كباب لحم", desc: "قطع لحم مناسبة للشواء", price: 4.000, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200" },
            { id: "m1_5", name: "شرائح ستيك", desc: "شرائح لحم للستيك", price: 5.500, img: "لحوم/pexels-mohamed9380-36572261.jpg" },
            { id: "m1_6", name: "ريش غنم", desc: "ريش غنم للشواء", price: 5.000, img: "لحوم/pexels-shameel-mukkath-3421394-5175620.jpg" },
            { id: "m1_7", name: "دجاج كامل", desc: "دجاج طازج", price: 2.000, img: "لحوم/pexels-karyna-panchenko-10842248.jpg" },
            { id: "m1_8", name: "صدور دجاج", desc: "صدور دجاج بدون عظم", price: 2.300, img: "لحوم/pexels-alleksana-6107727.jpg" },
            
        ]
    },
    

    // ================= 4. المخابز =================
 
    {
        id: "b2", name: "مخبز الصباح", category: "bakery",
        logo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150",
        cover: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=600",
        location: "سناو",
        tag: "معجنات وفطائر وحلويات",
        products: [
            { id: "b2_1", name: "خبز لبناني", desc: "خبز لبناني طازج", price: 0.400, img: "خبز/pexels-towfiqu-barbhuiya-3440682-9797029.jpg" },
            { id: "b2_2", name: "خبز برجر", desc: "خبز برجر طري", price: 0.600, img: "خبز/pexels-bestasya-10368954.jpg" },
            { id: "b2_3", name: "كرواسون جبن", desc: "كرواسون محشو بالجبن", price: 0.800, img: "خبز/pexels-cmrcn-30380517.jpg" },
            { id: "b2_4", name: "مافن شوكولاتة", desc: "مافن طازج", price: 0.700, img: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=200" },
            { id: "b2_5", name: "سينابون", desc: "رول قرفة بالصوص", price: 0.900, img: "خبز/pexels-valeriya-27098478.jpg" },
            { id: "b2_6", name: "فطيرة دجاج", desc: "فطيرة محشوة بالدجاج", price: 1.000, img: "خبز/pexels-nahid-alimemmedov-17758354-33277585.jpg" },
            { id: "b2_7", name: "فطيرة لحم", desc: "فطيرة محشوة باللحم", price: 1.000, img: "خبز/pexels-ali-dashti-506667798-28241717.jpg" },
            { id: "b2_8", name: "كوكيز", desc: "كوكيز طازجة", price: 0.600, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200" },
            { id: "b2_9", name: "تارت فواكه", desc: "تارت بالفواكه", price: 1.200, img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=200" },
            { id: "b2_10", name: "كيكة فانيلا", desc: "كيك فانيلا طازج", price: 1.400, img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=200" }
        ]
    },

    // ================= 5. الحلويات =================
  
    {
        id: "sw2", name: "دار الكنافة", category: "sweets",
        logo: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=150",
        cover: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600",
        location: "سناو",
        tag: "ملوك الكنافة والحلويات",
        products: [
            { id: "sw2_1", name: "كنافة نابلسية", desc: "كنافة بالجبن", price: 1.600, img: "حلويات/pexels-enesfilm-8294945.jpg" },
            { id: "sw2_2", name: "كنافة بالقشطة", desc: "كنافة بالقشطة الطازجة", price: 1.500, img: "حلويات/pexels-shameel-mukkath-3421394-6262158.jpg" },
            { id: "sw2_3", name: "كنافة شوكولاتة", desc: "كنافة بالشوكولاتة", price: 1.700, img: "حلويات/pexels-amine-kubranur-cakiroglu-689611212-38935421.jpg" },
            { id: "sw2_4", name: "بسبوسة", desc: "بسبوسة شرقية", price: 0.900, img: "حلويات/pexels-codrin-alex-15861882-29012092.jpg" },
            { id: "sw2_5", name: "بقلاوة فستق", desc: "بقلاوة بالفستق", price: 1.500, img: "حلويات/pexels-obenkural-18543486.jpg" },
            { id: "sw2_6", name: "معمول تمر", desc: "معمول محشو بالتمر", price: 1.000, img: "حلويات/pexels-ali-dashti-506667798-17255940.jpg" },
            { id: "sw2_7", name: "لقيمات", desc: "لقيمات مقرمشة", price: 0.900, img: "حلويات/pexels-shameel-mukkath-3421394-5113425.jpg" },
            { id: "sw2_8", name: "حلا اللوتس", desc: "حلى اللوتس الكريمي", price: 1.500, img: "حلويات/pexels-kemalcanfilm-37124650.jpg" },
            { id: "sw2_9", name: "كريب شوكولاتة", desc: "كريب بالنوتيلا", price: 1.300, img: "حلويات/pexels-roearte-253752635-12872901.jpg" },
            { id: "sw2_10", name: "وافل", desc: "وافل مع صوص الشوكولاتة", price: 1.400, img: "حلويات/pexels-enisahalidi-20468627.jpg" }
        ]
    },

    // ================= 6. الكافيهات =================
    {
        id: "c1", name: "مزاج كافيه", category: "cafes",
        logo: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=150",
        cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
        location: "سناو",
        tag: "قهوة ومشروبات منعشة",
        products: [
            { id: "c1_1", name: "إسبريسو", desc: "قهوة إسبريسو", price: 0.800, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200" },
            { id: "c1_2", name: "أمريكانو", desc: "قهوة أمريكانو", price: 1.000, img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=200" },
            { id: "c1_3", name: "كابتشينو", desc: "كابتشينو كريمي", price: 1.300, img: "pexels-abeer-h-194760305-15484400.jpg" },
            { id: "c1_4", name: "لاتيه", desc: "لاتيه بالحليب", price: 1.300, img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=200" },
            { id: "c1_5", name: "آيس لاتيه", desc: "لاتيه بارد", price: 1.500, img: "pexels-abeer-h-194760305-17275093.jpg" },
            { id: "c1_6", name: "موكا", desc: "قهوة بالشوكولاتة", price: 1.500, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200" },
            { id: "c1_7", name: "شاي كرك", desc: "شاي كرك", price: 0.700, img: "pexels-eat-kubba-15863701-11833306.jpg" },
            { id: "c1_8", name: "ماتشا لاتيه", desc: "ماتشا بالحليب", price: 1.600, img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=200" },
            { id: "c1_9", name: "ميلك شيك", desc: "ميلك شيك", price: 1.500, img: "pexels-batuhan-kocabas-123879152-14662100.jpg" },
            
        ]
    },
    {
        id: "c2", name: "رواق كافيه", category: "cafes",
        logo: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=150",
        cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600",
        location: "إبراء",
        tag: "الروقان والقهوة الأصيلة",
        products: [
            { id: "c2_1", name: "قهوة عربية", desc: "قهوة عربية تقليدية", price: 0.800, img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=200" },
            { id: "c2_2", name: "إسبريسو", desc: "إسبريسو غني", price: 0.800, img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200" },
            { id: "c2_3", name: "فلات وايت", desc: "قهوة بالحليب", price: 1.400, img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=200" },
            { id: "c2_4", name: "لاتيه فانيلا", desc: "لاتيه بنكهة الفانيلا", price: 1.500, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200" },
            { id: "c2_5", name: "آيس أمريكانو", desc: "أمريكانو بارد", price: 1.200, img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=200" },
            { id: "c2_6", name: "آيس موكا", desc: "موكا باردة", price: 1.600, img: "pexels-slytonic-33847787.jpg" },
            { id: "c2_7", name: "شاي أخضر", desc: "شاي أخضر", price: 0.700, img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=200" },
            { id: "c2_8", name: "هوت شوكليت", desc: "شوكولاتة ساخنة", price: 1.300, img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=200" },
            { id: "c2_9", name: "كوكيز", desc: "كوكيز طازجة", price: 0.600, img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200" },
            { id: "c2_10", name: "كيك اليوم", desc: "قطعة كيك يومية", price: 1.300, img: "pexels-badah-q-487825432-17356660.jpg" }
        ]
    },

    // ================= 7. البقالة =================
    {
        id: "g1", name: "بقالة الواحة", category: "grocery",
        logo: "pexels-fajrinugroho-20489330.jpg",
        cover: "pexels-fajrinugroho-20489330.jpg",
        location: "سناو",
        tag: "احتياجاتك اليومية",
        products: [
            { id: "g1_1", name: "أرز بسمتي 5 كجم", desc: "أرز بسمتي", price: 3.000, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200" },
            { id: "g1_2", name: "زيت طبخ 1.5 لتر", desc: "زيت نباتي", price: 2.000, img: "بقالة/pexels-maria-verkhoturtseva-21177529-9005933.jpg" },
            { id: "g1_3", name: "سكر 2 كجم", desc: "سكر أبيض", price: 1.000, img: "بقالة/pexels-marek-kupiec-1696944-9974498.jpg" },
            { id: "g1_4", name: "حليب 1 لتر", desc: "حليب كامل الدسم", price: 0.700, img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200" },
            { id: "g1_5", name: "بيض 30 حبة", desc: "بيض طازج", price: 2.200, img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200" },
            { id: "g1_6", name: "مياه 1.5 لتر × 6", desc: "مياه معدنية", price: 1.200, img: "بقالة/pexels-nicolas-rueda-175965148-17546509.jpg" },
            { id: "g1_8", name: "شيبس", desc: "وجبة خفيفة", price: 0.300, img: "بقالة/pexels-cmrcn-30358849.jpg" },
            { id: "g1_9", name: "مناديل", desc: "مناديل منزلية", price: 0.800, img: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=200" },
            { id: "g1_10", name: "مسحوق غسيل", desc: "مسحوق للغسيل", price: 2.500, img: "بقالة/pexels-kenzero14-21582448.jpg" }
        ]
    },

    
    
];


// ==================== STATE MANAGEMENT ====================
let currentStore = null;
let currentLocation = 'سناو'; // المنطقة الافتراضية
let currentCategory = 'all'; // القسم الافتراضي
let productQuantities = {};

// استدعاء السلة من LocalStorage أو إنشاء سلة جديدة إذا لم تكن موجودة
let cart = JSON.parse(localStorage.getItem('maakAppCart')) || {
    storeId: null,
    storeName: "",
    items: []
};

// دالة لحفظ السلة في LocalStorage
function saveCart() {
    localStorage.setItem('maakAppCart', JSON.stringify(cart));
}

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderVendors("all");
    
    // تحديث أيقونات السلة عند فتح التطبيق لاسترجاع الرقم المحفوظ
    updateCartBadges();
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// ==================== RENDER HOME ====================
function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = categories.map((cat, idx) => `
        <div class="category-card ${idx === 0 ? 'active' : ''}" onclick="filterCategory('${cat.id}', this)">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
        </div>
    `).join('');
}

function setLocation(loc) {
    currentLocation = loc;
    
    // تحديث شكل الأزرار
    const btns = document.querySelectorAll('.loc-btn');
    btns[0].classList.toggle('active', loc === 'سناو');
    btns[1].classList.toggle('active', loc === 'إبراء');
    
    // إعادة تحميل المحلات بناءً على المنطقة الجديدة والقسم الحالي
    renderVendors(currentCategory);
}

function filterCategory(catId, el) {
    // تحديث فوري لشكل الزرار المختار قبل أي عملية تانية، عشان الاستجابة تبان فورية للمستخدم
    currentCategory = catId; // حفظ القسم الحالي
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    // بنأجل رسم المتاجر لأول فريم متاح من المتصفح، عشان تفاعل الزرار (تغيير اللون) يبان فورًا
    // من غير ما ينتظر إعادة بناء كل كروت المتاجر في نفس اللحظة
    requestAnimationFrame(() => {
        renderVendors(catId);
    });
}

function renderVendors(catId) {
    const container = document.getElementById('vendors-container');
    
    // الفلترة بالقسم والمنطقة معاً
    const filtered = stores.filter(s => {
        const matchCategory = (catId === 'all') || (s.category === catId);
        const matchLocation = (s.location === currentLocation);
        return matchCategory && matchLocation;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:20px;">لا توجد متاجر حالياً في هذه المنطقة</p>`;
        return;
    }

    // استخدام DocumentFragment بدل الكتابة المباشرة في innerHTML بيقلل عدد مرات
    // إعادة رسم الصفحة (reflow/repaint) للمتصفح، وده بيخلي الاستجابة أسرع
    const fragment = document.createDocumentFragment();
    filtered.forEach(s => {
        const card = document.createElement('div');
        card.className = 'vendor-card';
        card.onclick = () => openStore(s.id);
        card.innerHTML = `
            <img src="${s.logo}" class="vendor-logo" alt="${s.name}" loading="lazy" decoding="async">
            <div class="vendor-title">${s.name}</div>
            <span class="vendor-tag">${s.tag}</span>
        `;
        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

// ==================== RENDER STORE ====================
function openStore(storeId) {
    currentStore = stores.find(s => s.id === storeId);
    if (!currentStore) return;

    currentStore.products.forEach(p => productQuantities[p.id] = 1);

    document.getElementById('store-nav-title').innerText = currentStore.name;
    document.getElementById('store-detail-name').innerText = currentStore.name;
    document.getElementById('store-detail-cat').innerText = currentStore.tag;
    document.getElementById('store-avatar-img').src = currentStore.logo;
    document.getElementById('store-hero-bg').style.backgroundImage = `url('${currentStore.cover}')`;

    // بنفتح الشاشة فورًا عشان المستخدم يحس إن الضغطة اشتغلت على طول،
    // وبنأجل رسم المنتجات (اللي فيها أكبر عدد صور) لأول فريم متاح
    showScreen('store-screen');
    requestAnimationFrame(() => {
        renderProducts();
        updateFloatingCartBar();
    });
}

function renderProducts() {
    const container = document.getElementById('products-container');

    // استخدام DocumentFragment بدل الكتابة المباشرة في innerHTML بيقلل عدد مرات
    // إعادة رسم الصفحة (reflow/repaint) للمتصفح، وده بيخلي الاستجابة أسرع
    const fragment = document.createDocumentFragment();

    currentStore.products.forEach(p => {
        const qty = productQuantities[p.id] || 1;
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
                <div class="product-top-row">
                    <img src="${p.img}" class="product-img" alt="${p.name}" loading="lazy" decoding="async">
                    <div class="product-details">
                        <div class="product-title">${p.name}</div>
                        <div class="product-desc">${p.desc}</div>
                        <div class="product-price">${p.price.toFixed(3)} ر.ع</div>
                    </div>
                </div>
                <div class="product-bottom-row">
                    <div class="qty-picker">
                        <button class="qty-btn" onclick="adjustProductQty('${p.id}', -1)">-</button>
                        <span class="qty-num" id="qty-${p.id}">${qty}</span>
                        <button class="qty-btn" onclick="adjustProductQty('${p.id}', 1)">+</button>
                    </div>
                    <div class="action-btns">
                        <button class="btn-add-cart" onclick="handleAddToCart('${p.id}')">
                            أضف للسلة
                        </button>
                        <button class="btn-direct-wa" onclick="sendDirectProductWA('${p.id}', event)">
                            اطلب الآن
                        </button>
                    </div>
                </div>
        `;
        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

function adjustProductQty(prodId, delta) {
    let current = productQuantities[prodId] || 1;
    current += delta;
    if (current < 1) current = 1;
    productQuantities[prodId] = current;
    
    // هنا التعديل السريع: بنعدل الرقم فقط من غير ما نعيد تحميل كل المنتجات
    const qtyElement = document.getElementById(`qty-${prodId}`);
    if (qtyElement) {
        qtyElement.innerText = current;
    } else {
        renderProducts();
    }
}

// ==================== CART LOGIC ====================
function handleAddToCart(prodId) {
    const product = currentStore.products.find(p => p.id === prodId);
    const qty = productQuantities[prodId] || 1;

    if (cart.storeId && cart.storeId !== currentStore.id && cart.items.length > 0) {
        const modal = document.getElementById('conflict-modal');
        modal.style.display = 'flex';
        document.getElementById('btn-modal-clear').onclick = () => {
            clearCart();
            executeAddToCart(product, qty);
            closeModal();
        };
        return;
    }

    executeAddToCart(product, qty);
}

function executeAddToCart(product, qty) {
    cart.storeId = currentStore.id;
    cart.storeName = currentStore.name;

    const existing = cart.items.find(i => i.product.id === product.id);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.items.push({ product, quantity: qty });
    }

    saveCart(); // حفظ بعد الإضافة
    updateCartBadges();
    updateFloatingCartBar();
    alert(`تم إضافة ${product.name} إلى السلة!`);
}

function closeModal() {
    document.getElementById('conflict-modal').style.display = 'none';
}

function clearCart() {
    cart = { storeId: null, storeName: "", items: [] };
    saveCart(); // حفظ بعد التفريغ
    updateCartBadges();
    updateFloatingCartBar();
}

function updateCartBadges() {
    const totalItems = cart.items.length; // تم التعديل لعرض عدد الأصناف المختلفة
    document.getElementById('cart-badge-count').innerText = totalItems;
    
    const storeBadge = document.getElementById('store-cart-badge');
    if (storeBadge) storeBadge.innerText = totalItems;
}

function updateFloatingCartBar() {
    const trigger = document.getElementById('floating-cart-trigger');
    if (!trigger) return;

    const totalItems = cart.items.length; // تم التعديل لعرض عدد الأصناف المختلفة

    // الشريط العائم يظهر فقط إذا كنت داخل نفس المتجر الخاص بالسلة
    if (totalItems > 0 && currentStore && cart.storeId === currentStore.id) {
        const subtotal = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        document.getElementById('floating-cart-items').innerText = `${totalItems} منتجات`;
        document.getElementById('floating-cart-total').innerText = `${subtotal.toFixed(3)} ر.ع`;
        trigger.style.display = 'flex';
    } else {
        trigger.style.display = 'none';
    }
}

function openCart() {
    renderCartScreen();
    showScreen('cart-screen');
}

function renderCartScreen() {
    const emptyMsg = document.getElementById('cart-empty-msg');
    const content = document.getElementById('cart-content');
    const list = document.getElementById('cart-items-list');

    if (cart.items.length === 0) {
        emptyMsg.style.display = 'block';
        content.style.display = 'none';
        return;
    }

    emptyMsg.style.display = 'none';
    content.style.display = 'block';

    list.innerHTML = cart.items.map(item => {
        const itemTotal = item.product.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${item.product.name}</h5>
                    <p>${item.product.price.toFixed(3)} ر.ع × ${item.quantity} = <strong>${itemTotal.toFixed(3)} ر.ع</strong></p>
                </div>
                <div class="cart-item-controls" style="display: flex; align-items: center;">
                    <div class="qty-picker" style="gap:8px; padding:2px 6px;">
                        <button class="qty-btn" style="font-size:14px;" onclick="updateCartItemQty('${item.product.id}', -1)">-</button>
                        <span class="qty-num" style="font-size:12px;">${item.quantity}</span>
                        <button class="qty-btn" style="font-size:14px;" onclick="updateCartItemQty('${item.product.id}', 1)">+</button>
                    </div>
                    <button onclick="removeCartItem('${item.product.id}')" style="background:none; border:none; color:red; font-size:18px; cursor:pointer; margin-right:10px;" title="حذف المنتج"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
</svg></button>
                </div>
            </div>
        `;
    }).join('');

    const subtotal = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const delivery = 0.500; // تم التعديل
    const grandTotal = subtotal + delivery;

    document.getElementById('cart-subtotal').innerText = `${subtotal.toFixed(3)} ر.ع`;
    document.getElementById('cart-grandtotal').innerText = `${grandTotal.toFixed(3)} ر.ع `;  
}

function updateCartItemQty(productId, delta) {
    const item = cart.items.find(i => i.product.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart.items = cart.items.filter(i => i.product.id !== productId);
    }

    if (cart.items.length === 0) {
        clearCart();
        renderCartScreen();
        return;
    }

    saveCart(); // حفظ بعد تعديل الكمية
    updateCartBadges();
    updateFloatingCartBar();
    renderCartScreen();
}

function removeCartItem(productId) {
    cart.items = cart.items.filter(i => i.product.id !== productId);
    if (cart.items.length === 0) {
        clearCart();
        renderCartScreen();
        return;
    }
    saveCart();
    updateCartBadges();
    updateFloatingCartBar();
    renderCartScreen();
}

// ==================== WHATSAPP INTEGRATIONS ====================

function sendDirectProductWA(productId, event) {
    if (event) event.preventDefault();

    const product = currentStore.products.find(p => p.id === productId);
    const qty = productQuantities[productId] || 1;
    const itemTotal = product.price * qty;

    const message = `السلام عليكم ورحمة الله وبركاته

أرغب في طلب:

المنتج: ${product.name}
الكمية: ${qty}
السعر: ${itemTotal.toFixed(3)} ر.ع

رسوم التوصيل: 0.500 ر.ع حتى 5 كم (0.800 ر.ع حتى 10 كم)

لتأكيد الطلب يرجى إرسال الموقع وصورة المنزل`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
}

function openCustomWhatsApp(event) {
    if (event) event.preventDefault();

    const message = `السلام عليكم ورحمة الله وبركاته

أرغب في طلب منتج غير موجود ضمن المنتجات المعروضة.

الطلب:
____________________

رسوم التوصيل: 0.500 ر.ع حتى 5 كم (0.800 ر.ع حتى 10 كم)

لتأكيد الطلب يرجى إرسال الموقع وصورة المنزل`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
}

function sendBulkWhatsAppOrder(event) {
    if (event) event.preventDefault();
    if (cart.items.length === 0) return;

    const subtotal = cart.items.reduce((sum, item) => (sum + (item.product.price * item.quantity)), 0);
    const delivery = 0.500; // تم التعديل 
    const grandTotal = subtotal + delivery;

    let cartItemsText = "";
    cart.items.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        cartItemsText += `${item.product.name} — الكمية: ${item.quantity} — السعر: ${itemTotal.toFixed(3)} ر.ع\n`;
    });

    const message = `السلام عليكم ورحمة الله وبركاته

أرغب في طلب:

${cartItemsText}
إجمالي المنتجات: ${subtotal.toFixed(3)} ر.ع
رسوم التوصيل: 0.500 ر.ع حتى 5 كم (0.800 ر.ع حتى 10 كم)

الإجمالي النهائي: ${grandTotal.toFixed(3)} ر.ع

لتأكيد الطلب يرجى إرسال الموقع وصورة المنزل`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;
    
    // تفريغ السلة اختيارياً بعد إرسال الطلب (يمكنك إزالة هذا السطر إذا كنت لا تريده)
    clearCart();
    showScreen('home-screen');
}