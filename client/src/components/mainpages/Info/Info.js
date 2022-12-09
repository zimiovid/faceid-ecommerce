import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'



const Info = () => {
        const {pathname} = useLocation()
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [pathname])

    //     var pathToFile = "....";
    //          downloadFile(file) {
    //     location.href = pathToFile + file;
    // }

    return (
        <div>
            НАПОЛНЕНИЕ САЙТА ПО ПРИКАЗУ 
1 раздел " Основные сведения" - в него нужно разместить текстом (не файлом!) следующую информацию:
Общество с ограниченной ответственностью "ЭльСэда" (ООО "ЭльСэда")
Адрес местонахождения юридического лица: 454004, Челябинская область, г. Челябинск, ул. Университетская набережная, д. 94, помещ. 25.
Адрес осуществления деятельности юридического лица: Республика Татарстан, г. Казань, ул. Чистопольская, д. 85, пом. 6-8 офис №2
ИНН 7451344328 КПП 745101001 ОГРН 1127451015130
Учредитель: Гордеев Валентин Олегович
Представительства и филиалы не предусмотрены 
Учебный центр "....." (напишите то название, которое вы будете использовать в рекламе)
Дата создания Учебного центра: нужно написать дату создания центра (если даты нет, тогда напишите сегодняшнее число и обязательно с указанием года)
Режим работы: с 10-00 до 20-00 (если не так, то напишите правильное время)
График работы: с понедельника по субботу, перерыв с 12-00 до 12-30 (если не так, то скорректируйте время, это время может меняться в зависимости от ваших пожеланий, указывайте минимальное время, лучше задержаться на обучении, чем придет человек в пустые двери, перерыв должен быть обязательно)
Телефон учебного центра: 8-.... (напишите актуальный номер телефона, если есть городской, то с указанием кода города, если несколько телефонов, то через запятую)
Электронная почта: pro@elseda.ru (нужно указать электронную почту учебного центра, куда будет приходить вся корреспонденция, если это у вас единая почта, то ее и указываете).

2 раздел "Структура и органы управления образовательной организацией" - в этом разделе нужно указать следующую информацию:
Руководитель Учебного центра - нужно указать ФИО полностью
Заместитель руководителя (имеется ввиду учебного центра) - если есть такой человек, то нужно написать полностью ФИО
Секретарь учебного центра - пишем полностью ФИО (этот человек должен быть обязательно)
Затем прикрепляем файл с активной ссылкой "Положение о структурном подразделении "Учебный центр" (см. файл 1, этот документ нужно подписать электронной цифровой подписью и разместить).

3 Раздел "Документы" должен содержать следующую информацию:
Устав с активной ссылкой на него (нужно отсканировать одним документов полностью весь устав и разместить)
Свидетельство о государственной аккредитации образовательных программ не предусмотрено, так как реализуемые образовательные программы не подпадают под требование обязательной государственной аккредитации (так полностью и пишем это предложение).
Затем прикрепляете ПВТР (Правила внутреннего трудового распорядка обучающихся, утвержденные руководителем учебного центра (см. файл 2 ПВТР, его нужно распечатать, подписать, поставить печать, отсканировать единым файлом с синей подписью и синей печатью, и прикрепить в этот раздел с активной ссылкой)
Далее текстом продолжаем: Коллективный договор не предусмотрен.
Отчет о результатах самообследования не предусмотрен (эти 2 предложения нужно сделать отдельными строками, то есть писать в одну строчку нельзя, так как смысл их абсолютно разный).
Предписания надзорных органов и отчеты по их выполнению - не предусмотрено.
Далее прикрепляем списком с активными ссылками следующие файлы:
- Правила приема обучающихся (см. файл 3, распечатать, подписать и поставить печать, отсканировать с синими печатями и синей подписью, отсканировать одним документом, разместить)
- Режим занятий обучающихся (см. файл 4, распечатать, подписать и поставить печать, отсканировать с синими печатями и синей подписью, отсканировать одним документом, разместить)
- Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся (см. файл 5, распечатать, подписать и поставить печать, отсканировать с синими печатями и синей подписью, отсканировать одним документом, разместить)
- Порядок и основания перевода, отчисления и восстановления обучающихся (см. файл 6, распечатать, подписать и поставить печать, отсканировать с синими печатями и синей подписью, отсканировать одним документом, разместить)
- Порядок оформления возникновения, приостановления и прекращения отношений между учебным центром и обучающимися или родителями несовершеннолетних обучающихся (см. файл 7, распечатать, подписать и поставить печать, отсканировать с синими печатями и синей подписью, отсканировать одним документом, разместить).

4 Раздел «Образование» должен содержать следующую информацию:
Сначала текстом вставляем следующую информацию:
Учебный центр ООО «ЭльСэда» реализует образовательные услуги по следующим направлениям:
- профессиональное обучение (профессиональная подготовка, профессиональная переподготовка, повышение квалификации);
- дополнительного профессиональное образование (профессиональная переподготовка, повышение квалификации);
- дополнительное образование детей и взрослых.
Затем пишем перечень реализуемых программ с активными ссылками (мы подаем 3 программы, поэтому на сейчас должно быть представлено 3 программы с активными ссылками, см. файл 8, 9, 10), названия файлов должно иметь такое же как название программы, указано в самом документе на первом листе;
Затем нужно разместить учебные планы по указанным программа (см. файл 11, 12, 13) с активными ссылками;
Затем выкладываем календарный учебный график по вышеуказанным программам (см. файл 14, 15, 16) с активными ссылками;
Затем выкладываем приказ об утверждении образовательных программ (см. файл 17) с активной ссылкой;
Затем выкладываем информацию о численности обучающихся с активной ссылкой «Информация о численности обучающихся» (см. файл 18), сейчас это просто активная ссылка на пустой файл, так как нет образовательного процесса, чтобы можно было указать какие-то цифры.
Затем выкладываем Выписку из реестра образовательных лицензий: здесь пока пусто, так как нет еще номера лицензии.

5 Раздел «Образовательные стандарты»:
Указываем следующую информацию:
ФГОС не предусмотрен.
Затем выкладываем профессиональный стандарт по тем направлениям, по которым обучаем, из того, что заявили выкладывает ПС 1069н (см. файл 19), его выкладываем с активной ссылкой.

6 Раздел «Руководство. Педагогический (научно-педагогический) состав» должен содержать следующую информацию:
- о руководителе учебного центра (ФИО, должность, контактный телефон, адрес электронной почты);
- о заместителях руководителя (ФИО, должность, контактный телефон, адрес электронной почты), если они предусмотрены, то укажите информацию, которая представлена в скобочках;
- о персональном составе педагогических работников для каждой образовательной программы в форме электронного документа, этот файл вами будет периодически корректироваться в зависимости от ваших педагогов (см. файл 20).

7 Раздел «Материально-техническое обеспечение и оснащенность образовательного процесса» должна включать следующую информацию.
Нужно скопировать информацию из файла 21 и текстом разместить.
Затем после текста разместить с активной ссылкой на санитарно-эпидемиологическое заключение (когда получим «на руки» тогда вам сканом передадим).

8 Раздел «Стипендии и меры поддержки обучающихся» должна быть указана следующая информация.
Пишем текстом:
Стипендии обучающимся не предусмотрены. Общежитие и интернат обучающимся не предоставляется. Трудоустройство выпускников не предусмотрено.
Меры социальной поддержки обучающимся не предоставляются.

9 Раздел «Платные образовательные услуги» должна быть указана следующая информация.
Выкладываем с активной ссылкой «Порядок оказания платных образовательных услуг» (см. файл 22).
Затем выкладываем образец договора на оказание платных образовательных услуг с активной ссылкой (см. файл 23), его нужно скорректировать под ваши данные.
Затем выкладываем Прейскурант цен платных образовательных услуг с активной ссылкой.

10 Раздел «Финансово-хозяйственная деятельность» должен содержать следующую информацию.
Пишем текстом:
Объем образовательной деятельности, финансовое обеспечение которой осуществляется по договорам об образовании за счет средств физических лиц и (или) юридических лиц: 0 руб. 00 копеек.
Вышеуказанные объемы из ПФХД от 31.12.2021 (по итогам финансового года) – эту информацию напишете на будущий год.
Затем нужно предусмотреть ссылку на План ФХД итоговый за текущий год после получения лицензии, на сегодня эта ссылка должна быть не активной либо временно не размещать.
Информация о поступлении финансовых и материальных средств по итогам финансового года: размещаем Отчет о финансовых результатах за текущий год после получения лицензии с активной ссылкой (на сегодня пока не выкладываем).
Затем выкладываем с активной ссылкой «Отчет об исполнении ПФХД - собственные доходы – на текущий год после получения лицензии (пока не выкладываем либо делаем не активной, так как деятельности нет).
Затем выкладываем с активной ссылкой План ФХД на 2022 (пока не выкладываем либо делаем не активной ссылкой, так как деятельности нет).

11 Раздел «Вакантные места для приема (перевода) обучающихся» должен содержать следующую информацию.
 Дата обновления информации о вакантных местах: 14.12.2021 (нужно периодически обновлять эту информацию).
Далее пишем текстом:
Реализуемые образовательные программы:
1) Основная программа профессионального обучения – программа профессиональной подготовки по профессии 13138 «Косметик» 4 уровень квалификации:
- за счет бюджетных ассигнований федерального бюджета – не предусмотрено;
- за счет бюджетных ассигнований бюджетов субъекта Российской Федерации – не предусмотрено;
- за счет бюджетных ассигнований местных бюджетов – не предусмотрено;
- средств физических и (или) юридических лиц – 25.
2) Дополнительная профессиональная программа повышения квалификации «Деятельность мастера производственного обучения в современных условиях»:
- за счет бюджетных ассигнований федерального бюджета – не предусмотрено;
- за счет бюджетных ассигнований бюджетов субъекта Российской Федерации – не предусмотрено;
- за счет бюджетных ассигнований местных бюджетов – не предусмотрено;
- средств физических и (или) юридических лиц – 25.
3) Дополнительная общеобразовательная программа – дополнительная общеразвивающая программа «Организация деятельности салона красоты»:
- за счет бюджетных ассигнований федерального бюджета – не предусмотрено;
- за счет бюджетных ассигнований бюджетов субъекта Российской Федерации – не предусмотрено;
- за счет бюджетных ассигнований местных бюджетов – не предусмотрено;
- средств физических и (или) юридических лиц – 25.

12 Раздел «Доступная среда» должен содержать следующую информацию.
Сначала выкладываем с активной ссылкой на Паспорт доступности в ООО «ЭльСэда» (см. файл 24).
Затем текстом пишем:
Специально оборудованные учебные классы: имеются расширенные двери в помещения учебных классов, позволяющие беспрепятственному проходу инвалидов всех категорий.
Объекты для проведения практических занятий, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья: территория учебного центра полностью доступна для инвалидов с различными расстройствами здоровья. Территория без перепадов высот, имеющая подходы и подъезды.
Учебные кабинеты, приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья: предусмотрена звукоусиливающая аппаратура, запланирована запись аудиофайлов для передачи слушателю через различные виды гаджетов.
Средства обучения и воспитания, приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья: 
Обеспечение беспрепятственного доступа в здания образовательной организации: на центральном входе установлен пандус с нормативным уклоном и перилами, оборудованные с обеих сторон. Входная группа без порогов. Ширина дверных проемов позволяет беспрепятственному проходу инвалидами всех категорий. 
Доступ к информационным системам и информационно-телекоммуникационным сетям, приспособленным для использования инвалидами и лицами с ограниченными возможностями здоровья: официальный сайт образовательной организации имеет формат для слабовидящих, позволяющий получить информацию о деятельности. На сайте размещены контактные телефоны сотрудников, по которым можно получить консультации. Сотрудники образовательной организации проинструктированы о действиях при визите лиц с ограниченными возможностями и инвалидов, уведомлены о необходимости оказания помощи при получении информации.
Наличие специальных технических средств обучения коллективного и индивидуального пользования: звукоусиливающая аппаратура имеется в наличии.
Наличии условий для беспрепятственного доступа в общежитие, интернат: не предусмотрено по причине отсутствия общежития и интерната.
Количестве жилых помещений в общежитии, интернате, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья – не предусмотрено по причине отсутствия общежития и интерната.
Затем разместить с активной ссылкой «Положение об обучении инвалидов» (см. файл 25).

13 Раздел «Международное сотрудничество» должен содержать следующую информацию.
Пишем текстом:
Международное сотрудничество на 01.12.2021 не предусмотрено.
Документ о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки – отсутствует.
Документ о международной аккредитации образовательных программ – отсутствует.


САЙТ ДОЛЖЕН ИМЕТЬ ВЕРСИЮ ДЛЯ СЛАБОВИДЯЩИХ.

        </div>
    )
}



export default Info
