
import React from 'react';
const Advancement = () => {
    return(
        <section className="advancement">
            <div className="container">
                <h1 className="advancement__title">КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ САЙТА</h1>
                <h5 className="advancement__subtitle">Использование самых эффективных методов для получения максимального результата</h5>
                <div className="advancement-variants">
                    <div className="advancement-variants__item">
                       <figure>
                         <img src="images/rocket.svg" />
                       </figure>
                       <h6>ПОДГОТОВКА САЙТА К ПРОДВИЖЕНИЮ</h6>
                       <p>Исправление технических ошибок, оптимизация всех существующих страниц сайта</p>
                    </div>
                    <div className="advancement-variants__item">
                       <figure>
                         <img src="images/chain.svg"/>
                       </figure>
                       <h6>ВНЕШНЯЯ И ВНУТРЕННЯЯ  ОПТИМИЗАЦИЯ САЙТА</h6>
                       <p>Наращивание ссылочной массы, а также продвижение в социальных сетях</p>
                    </div>
                    <div className="advancement-variants__item">
                       <figure>
                         <img src="images/list.svg"/>
                       </figure>
                       <h6>СОЗДАНИЕ КАЧЕСТВЕННОГО ЭКСПЕРТНОГО КОНТЕНТА</h6>
                       <p>Составление семантического ядра сайта, публикация  экспертных статей, верстка</p>
                    </div>
                    <div className="advancement-variants__item">
                       <figure>
                         <img src="images/graph.svg"/>
                       </figure>
                       <h6>УВЕЛИЧЕНИЕ КОНВЕРСИОННОСТИ РЕСУРСА</h6>
                       <p> Увеличение количества обращений в Вашу компанию, за счет различных элементов</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Advancement;
