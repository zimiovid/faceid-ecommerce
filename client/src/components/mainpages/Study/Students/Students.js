import React from 'react'
import {motion} from 'framer-motion'

const Students = () => {
    return (
        <div>
            <div className="Result-Student padding-class">
                {/* <>
                        <List selectedId={id} />
                        <AnimatePresence>{id && imageHasLoaded && <Item id={id} key="item" />}</AnimatePresence>
                    </> */}

                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="Result-heading">
                    <h2>РЕЗУЛЬТАТЫ УЧЕНИЦ</h2>
                    <span></span>
                </motion.div>

                <div className="students">
                    <div>
                        <h4>Чумакова Екатерина @kate_permanent59 г.Пермь</h4>
                        <ul>
                            <li>Точка А: Работала в банке, ушла в декрет и решила отучиться на мастера ПМ</li>
                            <li>
                                Точка Б: Работает на себя, сама устанавливает график работы и уделяет максимум внимания
                                своим детям
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Олькова Ирина @iris_permanent_perm г.Пермь</h4>
                        <ul>
                            <li>
                                Точка А: Работала в банке, решила кардинально изменить свою сферу деятельности в пользу
                                перманента
                            </li>
                            <li>
                                Точка Б: Открыла собственную студию перманентного макияжа «Iris permanent», абсолютно ни
                                от кого не зависит, получает высокий доход
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Курбанова Фаниля @faya_lash_kungur г.Кунгур </h4>
                        <ul>
                            <li>
                                Точка А: Мастер по наращиванию ресниц, арендовала место в салоне, пошла обучаться по
                                просьбе своих клиентов
                            </li>
                            <li>
                                Точка Б: Арендовала отдельный кабинет, стала востребованным мастером ПМ в своем городе,
                                в разы увеличила свой доход
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Елизавета Тимофеева @lliza_brow г.Пермь</h4>
                        <ul>
                            <li>
                                Точка А: Студентка, мастер по окрашиванию бровей, была цель увеличить свой доход, на
                                обучение занимала 85000 рублей
                            </li>
                            <li>
                                Точка Б: Сняла собственный кабинет, ни от кого не зависит, за 3 месяца отбила займ на
                                обучение и вышла на стабильный доход
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Елена Старцева @lenaporubova г.Пермь/г.Нытва</h4>
                        <ul>
                            <li>
                                Точка А: Переехала из другого города, искала деятельность со свободным графиком работы и
                                хорошим доходом
                            </li>
                            <li>
                                Точка Б: Востребованный мастер в двух городах сразу, сама выстраивает свой удобный
                                график работы, зарабатывает от 50000 в месяц
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Лариса Фартдинова @larisapichkaleva г.Пермь </h4>
                        <ul>
                            <li>
                                Точка А: Лариса работала в банке, всегда была интересна сфера перманента, уволилась
                                одним днем, когда увидела наш курс
                            </li>
                            <li>
                                Точка Б: Сняла собственный кабинет, ни от кого не зависит, сама устанавливает свой
                                график работы
                            </li>{' '}
                        </ul>
                    </div>

                    <div>
                        <h4>Елена Бисерова г.Добрянка</h4>
                        <ul>
                            <li>
                                Точка А: Мастер-преподаватель по наращиванию ресниц в своем городе, интересно было
                                добавить в свою деятельность новую услугу
                            </li>
                            <li>
                                Точка Б: Владелец собственной студии «Академия красоты», кратно увеличила свой доход
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students

// import React from 'react'

// const Students = () => {
//     return (
//         <div>
//             <div className="Result-Student padding-class">
//                 {/* <>
//                         <List selectedId={id} />
//                         <AnimatePresence>{id && imageHasLoaded && <Item id={id} key="item" />}</AnimatePresence>
//                     </> */}

//                 <h2>Результаты учениц</h2>

//                 <div>
//                     <h4>Чумакова Екатерина @kate_permanent59 г.Пермь</h4>
//                     <ul>
//                         <li>Точка А: Работала в банке, ушла в декрет и решила отучиться на мастера ПМ</li>
//                         <li>
//                             Точка Б: Работает на себя, сама устанавливает график работы и уделяет максимум внимания
//                             своим детям
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4>Олькова Ирина @iris_permanent_perm г.Пермь</h4>
//                     <ul>
//                         <li>
//                             Точка А: Работала в банке, решила кардинально изменить свою сферу деятельности в пользу
//                             перманента
//                         </li>
//                         <li>
//                             Точка Б: Открыла собственную студию перманентного макияжа «Iris permanent», абсолютно ни от
//                             кого не зависит, получает высокий доход
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4>Курбанова Фаниля @faya_lash_kungur г.Кунгур </h4>
//                     <ul>
//                         <li>
//                             Точка А: Мастер по наращиванию ресниц, арендовала место в салоне, пошла обучаться по просьбе
//                             своих клиентов
//                         </li>
//                         <li>
//                             Точка Б: Арендовала отдельный кабинет, стала востребованным мастером ПМ в своем городе, в
//                             разы увеличила свой доход
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4>Елизавета Тимофеева @lliza_brow г.Пермь</h4>
//                     <ul>
//                         <li>
//                             Точка А: Студентка, мастер по окрашиванию бровей, была цель увеличить свой доход, на
//                             обучение занимала 85000 рублей
//                         </li>
//                         <li>
//                             Точка Б: Сняла собственный кабинет, ни от кого не зависит, за 3 месяца отбила займ на
//                             обучение и вышла на стабильный доход
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4>Елена Старцева @lenaporubova г.Пермь/г.Нытва</h4>
//                     <ul>
//                         <li>
//                             Точка А: Переехала из другого города, искала деятельность со свободным графиком работы и
//                             хорошим доходом
//                         </li>
//                         <li>
//                             Точка Б: Востребованный мастер в двух городах сразу, сама выстраивает свой удобный график
//                             работы, зарабатывает от 50000 в месяц
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h4>Лариса Фартдинова @larisapichkaleva г.Пермь </h4>
//                     <ul>
//                         <li>
//                             Точка А: Лариса работала в банке, всегда была интересна сфера перманента, уволилась одним
//                             днем, когда увидела наш курс
//                         </li>
//                         <li>
//                             Точка Б: Сняла собственный кабинет, ни от кого не зависит, сама устанавливает свой график
//                             работы
//                         </li>{' '}
//                     </ul>
//                 </div>

//                 <div>
//                     <h4>Елена Бисерова г.Добрянка</h4>
//                     <ul>
//                         <li>
//                             Точка А: Мастер-преподаватель по наращиванию ресниц в своем городе, интересно было добавить
//                             в свою деятельность новую услугу
//                         </li>
//                         <li>Точка Б: Владелец собственной студии «Академия красоты», кратно увеличила свой доход</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Students
