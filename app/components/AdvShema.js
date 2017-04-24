import React, {Component} from 'react';
import {showOffer} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';


class AdvShema extends Component{

    showOfferHandler(e) {
        let val = 'scroll-' + e.target.getAttribute('value');
        let index = parseInt(e.target.getAttribute('value'));
        console.log(this.props.offerState);
        if(!this.props.offerState) {
            this.props.showOffer(true, index);
            this.refs[val].style = 'display: block;';
        } else {
            this.props.showOffer(false);
            e.target.classList.remove('icon-plus--rotate');
            this.refs[val].style = 'display: none; ';
        }

    }

    render() {

    return(
      <section className="schema">
        <div className="container">
            <h2 className="schema__title">СХЕМА ПРОДВИЖЕНИЯ ВАШЕГО БИЗНЕСА В ИНТЕРНЕТЕ</h2>
            <div className="schema__block">
                <div className="schema__block__item">
                    <div className="term">
                        <p><i className={(this.props.offerState.index === 1) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="1" ></i><span>1-2</span> НЕДЕЛЯ ПРОДВИЖЕНИЯ</p>
                    </div>
                    <div className="scroll" ref="scroll-1">
                        <p>
                            Установка и настройка панели вебмастера Яндекс и Google;<br/>
                            Установка счетчиков (Яндекс. Метрики и Google аналитики);<br/>
                            Настройка целей в веб-аналитике;<br/>
                            Составление семантического ядра (ядра запросов, по которому будет вестись продвижение сайта);<br/>
                            Составление карты метатегов (title, h1, description, h2-h6, keywords, alt);<br/>
                            Создание и/или настройка файла sitemap.xml;<br/>
                            Создание и/или настройка файла robots.txt.<br/>
                        </p>
                    </div>
                </div>
                <div className="schema__block__item">
                    <div className="term">
                        <p><i className={(this.props.offerState.index === 2) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="2"></i><span>3-4</span> НЕДЕЛЯ ПРОДВИЖЕНИЯ</p>
                    </div>
                    <div className="scroll" ref="scroll-2">
                        <p>
                            Организация схемы внутренней перелинковки на сайте;<br/>
                            Создание контент-стратегии ресурса;Исправление технических ошибок;<br/>
                            Реализация на сайте микроразметки schema.org;<br/>
                            Создание/редактура групп в социальных сетях;<br/>
                            Анализ конкурентной среды, определение конкурентности запросов;<br/>
                            (данный фактор влияет на объем закупок ссылочной массы).<br/>
                        </p>
                    </div>
                </div>
                <div className="schema__block__item">
                    <div className="term">
                        <p><i className={(this.props.offerState.index === 3) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="3"></i><span>5-8</span> НЕДЕЛЯ ПРОДВИЖЕНИЯ</p>
                    </div>
                    <div className="scroll" ref="scroll-3">
                        <p>
                            Подбор отраслевых ресурсов для размещения ссылок на сайт;<br/>
                            Улучшение юзабилити сайта;<br/>
                            Комплекс работ для увеличения конверсионности ресурса (CTR элементы и другое);<br/>
                            Оптимизация структуры сайта и системы навигации;<br/>
                            Создание и оптимизация продающих триггеров (отзывы, гарантии, рекламные акции);<br/>
                            Настройка скрипта для сбора е-mail-базы;<br/>
                            Настройка системы для редактирования, верстки и отправки писем по e-mail базе.<br/>
                        </p>
                    </div>
                </div>
                <div className="schema__block__item">
                    <div className="term">
                        <p><i className={(this.props.offerState.index === 4) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="4"></i><span>+</span> ЕЖЕНЕДЕЛЬНО / ЕЖЕМЕСЯЧНО</p>
                    </div>
                    <div className="scroll" ref="scroll-4">
                        <p>
                            Создание, редактирование и оптимизация контента для поисковых систем;<br/>
                            Оптимизация заголовков страниц;<br/>
                            Закупка ссылок на сайт;<br/>
                            Закупка репостов на сайт;<br/>
                            Републикация контента в социальных сетях;<br/>
                            Администрирование групп в социальных сетях;<br/>
                            Курирование контента в социальных сетях;<br/>
                            Создание и распространение инфографики (в зависимости от тарифа);<br/>
                            Работа с возражениями, ответы на негативные отзывы или комментарии внутри группы;<br/>
                            Проведение опроса аудитории в социальных сетях (в зависимости от тарифа);<br/>
                            Подготовка комплекса отчетности.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
    }
};

const mapStateToProps = (store) => {
    return {
        offerState: store.complexReducer.show
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showOffer}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(AdvShema);