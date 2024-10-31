function switchToArabic() {
    document.documentElement.setAttribute("lang", "ar");
    document.body.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right";
    document.getElementById("name").textContent = "عبد الحفيظ التميمي";
    document.getElementById("label-address").textContent = "العنوان:";
    document.getElementById("address").textContent = "فلسطين/رام الله";
    document.getElementById("label-phone").textContent = "الهاتف:";
    document.getElementById("phone").textContent = "0595995652";
    document.getElementById("label-status").textContent = "الحالة الاجتماعية:";
    document.getElementById("status").textContent = "متزوج";
    document.getElementById("label-email").textContent = "البريد الإلكتروني:";
    document.getElementById("email").textContent = "abedttt@gmail.com";
    document.getElementById("label-dob").textContent = "تاريخ الميلاد:";
    document.getElementById("dob").textContent = "8.8.1979";
    document.getElementById("intro").textContent = "أنا أبحث عن وظيفة وأرغب في الانضمام إلى مؤسسة لتحسين مهاراتي.";
    document.getElementById("experience-title").textContent = "الخبرات";
    document.getElementById("experience-description").textContent = "لقد اكتسبت خبرة كبيرة في سوق الهواتف المحمولة وتم ترقيتي من تاجر إلى مشرف في عام 2014. التعامل مع العملاء وتطوير علاقاتي مع الشركات والمتاجر أعطاني الفرصة للترقية مرة أخرى إلى مشرف أول في عام 2015.";
    document.getElementById("experience-list").innerHTML = `
        <li><strong>مروج:</strong> 2009-2010، فريق القنوات - كوكا كولا الأردن</li>
        <li><strong>تاجر:</strong> 2010-نوفمبر 2011، فريق القنوات - سامسونج الأردن</li>
        <li><strong>تاجر:</strong> BCI - سامسونج 2011-2012، الأردن</li>
        <li><strong>تاجر:</strong> وندرمان - سامسونج موبايل 2012-2017، الأردن</li>
        <li><strong>مشرف:</strong> متجر الحياة الذهبية 2018-2019، الأردن</li>
        <li><strong>موظف متجر:</strong> مجموعة أبو شقرة 2019-الآن، الأردن</li>
        <li><strong>مشرف:</strong> أوكسفورد تيليكوم 2020-2023، الأردن</li>
    `;
    document.getElementById("skills-title").textContent = "المهارات";
    document.getElementById("skills-list").innerHTML = `
        <li>القيادة</li>
        <li>اتصالات ممتازة</li>
        <li>تحمل ضغط العمل</li>
    `;
    document.getElementById("languages-title").textContent = "مهارات اللغة";
    document.getElementById("languages-list").innerHTML = `
        <li>الإنجليزية: جيدة</li>
    `;
    document.getElementById("computer-skills-title").textContent = "مهارات الكمبيوتر";
    document.getElementById("computer-skills-list").innerHTML = `
        <li>استخدام جيد لبرامج مايكروسوفت أوفيس (وورد، إكسل، باور بوينت)</li>
    `;
}

function switchToEnglish() {
    document.documentElement.setAttribute("lang", "en");
    document.body.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left";
    document.getElementById("name").textContent = "Abed Alhafeeth Altamimi";
    document.getElementById("label-address").textContent = "Address:";
    document.getElementById("address").textContent = "Palestine/Ramallah";
    document.getElementById("label-phone").textContent = "Phone:";
    document.getElementById("phone").textContent = "0595995652";
    document.getElementById("label-status").textContent = "Marital Status:";
    document.getElementById("status").textContent = "Married";
    document.getElementById("label-email").textContent = "Email:";
    document.getElementById("email").textContent = "abedttt@gmail.com";
    document.getElementById("label-dob").textContent = "Date of Birth:";
    document.getElementById("dob").textContent = "8.8.1979";
    document.getElementById("intro").textContent = "I am looking for a job and want to join an institution to improve my skills.";
    document.getElementById("experience-title").textContent = "Experience";
    document.getElementById("experience-description").textContent = "I have gained great experience in the mobile market and was promoted from Merchandiser to Supervisor in 2014. Dealing with customers and developing my relationships with companies and shops gave me the opportunity to be promoted again to Senior Supervisor in 2015.";
    document.getElementById("experience-list").innerHTML = `
        <li><strong>Promoter:</strong> 2009-2010, Channels Team – Coca Cola Jordan</li>
        <li><strong>Merchandiser:</strong> 2010-Nov 2011, Channels Team – Samsung Jordan</li>
        <li><strong>Merchandiser:</strong> BCI - Samsung 2011-2012, Jordan</li>
        <li><strong>Merchandiser:</strong> Wunderman – Samsung Mobile 2012-2017, Jordan</li>
        <li><strong>Supervisor:</strong> Golden Life Store 2018-2019, Jordan</li>
        <li><strong>Store Employee:</strong> Abu Shakra Group 2019-present, Jordan</li>
        <li><strong>Supervisor:</strong> Oxford Telecom 2020-2023, Jordan</li>
    `;
    document.getElementById("skills-title").textContent = "Skills";
    document.getElementById("skills-list").innerHTML = `
        <li>Leadership</li>
        <li>Excellent communication</li>
        <li>Work under pressure</li>
    `;
    document.getElementById("languages-title").textContent = "Language Skills";
    document.getElementById("languages-list").innerHTML = `
        <li>English: Good</li>
    `;
    document.getElementById("computer-skills-title").textContent = "Computer Skills";
    document.getElementById("computer-skills-list").innerHTML = `
        <li>Good use of Microsoft Office programs (Word, Excel, PowerPoint)</li>
    `;
}
