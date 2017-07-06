import React, {Component} from 'react';
import {showOffer} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';


class AdvShema extends Component{

    showOfferHandler(e) {
        let index = parseInt(e.target.getAttribute('value'));
        if (this.props.offerIndex === index) {
          this.props.showOffer(null);
        } else {
          this.props.showOffer(index);
        }

    }
    isActive() {
      return this.props.offerIndex;
    }
    render() {
    console.log(this.isActive());
    return(
      <section className="schema">
        <div className="container">
            <h2 className="schema__title">СХЕМА ПРОДВИЖЕНИЯ ВАШЕГО БИЗНЕСА В ИНТЕРНЕТЕ</h2>
            <div className="schema__block">
                <div className="schema__block__item">
                    <div className="term">
                        <p onClick={this.showOfferHandler.bind(this)} value="1"><i className={ this.isActive() === 1 ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="1"></i><span>1-2</span> НЕДЕЛЯ ПРОДВИЖЕНИЯ</p>
                    </div>
                    <div className="scroll" ref="scroll-1" style={this.isActive() === 1 ? {display: 'block'} : {}}>
                        <p>
                            <span>Установка и настройка панели вебмастера Яндекс и Google;</span><br/>
                            <span>Установка счетчиков (Яндекс. Метрики и Google аналитики);</span><br/>
                            <span>Настройка целей в веб-аналитике;</span><br/>
                            <span>Составление семантического ядра (ядра запросов, по которому будет вестись продвижение сайта);</span><br/>
                            <span>Составление карты метатегов (title, h1, description, h2-h6, keywords, alt);</span><br/>
                            <span>Создание и/или настройка файла sitemap.xml;</span><br/>
                            <span>Создание и/или настройка файла robots.txt.</span><br/>
                        </p>
                    </div>
                </div>
                <div className="schema__block__item">
                    <div className="term">
                        <p onClick={this.showOfferHandler.bind(this)} value="2"><i className={(this.isActive() === 2) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="2"></i><span>3-4</span> НЕДЕЛЯ ПРОДВИЖЕНИЯ</p>
                    </div>
                    <div className="scroll" ref="scroll-2" style={this.isActive() === 2 ? {display: 'block'} : {}}>
                        <p>
                           <span> Организация схемы внутренней перелинковки на сайте;</span><br/>
                            <span>Создание контент-стратегии ресурса;Исправление технических ошибок;</span><br/>
                            <span>Реализация на сайте микроразметки schema.org;</span><br/>
                            <span>Создание/редактура групп в социальных сетях;</span><br/>
                            <span>Анализ конкурентной среды, определение конкурентности запросов (данный фактор влияет на объем закупок ссылочной массы).</span><br/>
                        </p>
                    </div>
                </div>
                <div className="schema__block__item">
                    <div className="term">
                        <p onClick={this.showOfferHandler.bind(this)} value="3"><i className={(this.isActive() === 3) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="3"></i><span>5-8</span> НЕДЕЛЯ ПРОДВИЖЕНИЯ</p>
                    </div>
                    <div className="scroll" ref="scroll-3" style={this.isActive() === 3 ? {display: 'block'} : {}}>
                        <p>
                            <span>Подбор отраслевых ресурсов для размещения ссылок на сайт;</span><br/>
                            <span>Улучшение юзабилити сайта;</span><br/>
                           <span> Комплекс работ для увеличения конверсионности ресурса (CTR элементы и другое);</span><br/>
                            <span>Оптимизация структуры сайта и системы навигации;</span><br/>
                            <span>Создание и оптимизация продающих триггеров (отзывы, гарантии, рекламные акции);</span><br/>
                           <span>Настройка скрипта для сбора е-mail-базы;</span><br/>
                            <span>Настройка системы для редактирования, верстки и отправки писем по e-mail базе.</span><br/>
                        </p>
                    </div>
                </div>
                <div className="schema__block__item">
                    <div className="term">
                        <p onClick={this.showOfferHandler.bind(this)} value="4"><i className={(this.isActive() === 4) ? 'icon-plus icon-plus--rotate': 'icon-plus'} onClick={this.showOfferHandler.bind(this)} value="4"></i><span>+</span> ЕЖЕНЕДЕЛЬНО / ЕЖЕМЕСЯЧНО</p>
                    </div>
                    <div className="scroll" ref="scroll-4" style={this.isActive() === 4 ? {display: 'block'} : {}}>
                        <p>
                            <span>Создание, редактирование и оптимизация контента для поисковых систем;</span><br/>
                            <span>Оптимизация заголовков страниц;</span><br/>
                            <span>Закупка ссылок на сайт;</span><br/>
                            <span>Закупка репостов на сайт;</span><br/>
                            <span>Републикация контента в социальных сетях;</span><br/>
                            <span>Администрирование групп в социальных сетях;</span><br/>
                            <span>Курирование контента в социальных сетях;</span><br/>
                            <span>Создание и распространение инфографики (в зависимости от тарифа);</span><br/>
                            <span>Работа с возражениями, ответы на негативные отзывы или комментарии внутри группы;</span><br/>
                            <span>Проведение опроса аудитории в социальных сетях (в зависимости от тарифа);</span><br/>
                            <span>Подготовка комплекса отчетности.</span><br/>
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
        offerState: store.complexReducer.show,
        offerIndex: store.complexReducer.index
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showOffer}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(AdvShema);
