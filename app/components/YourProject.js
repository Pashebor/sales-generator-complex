import React from 'react';

const YourProject = () => {
  return(
    <section className="project">
      <div className="project__layer">
        <div className="container">
         <h2 className="project__title">КАК БУДЕТ СТРОИТСЯ РАБОТА НАД ВАШИМ ПРОЕКТОМ?</h2>
         <p className="project__text">Для продвижения сайта каждого нашего клиента создается рабочая группа из 7 узконаправленных специалистов под руководством Менеджера проекта (Project Manager):</p>
         <div className="project__manager">
           <figure>
             <img src="images/user.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
             <figcaption>МЕНЕДЖЕР ПРОЕКТА</figcaption>
           </figure>
           <div className="project__manager__arrow project__manager__arrow--left">
               <img src="images/up-arrow.svg"/>
           </div>
             <div className="project__manager__arrow project__manager__arrow--down">
                 <img src="images/up-arrow.svg"/>
             </div>
             <div className="project__manager__arrow project__manager__arrow--right">
                 <img src="images/up-arrow.svg"/>
             </div>
         </div>
         <div className="project__empolyee">
          <div className="project__empolyee__item">
            <figure>
              <img src="images/analitic.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
              <figcaption>SEO АНАЛИТИК</figcaption>
            </figure>
          </div>
          <div className="project__empolyee__item">
            <figure>
              <img src="images/copyrighter.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
              <figcaption>КОПИРАЙТЕР</figcaption>
            </figure>
          </div>
          <div className="project__empolyee__item">
            <figure>
              <img src="images/editor.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
              <figcaption>РЕДАКТОР</figcaption>
            </figure>
          </div>
          <div className="project__empolyee__item">
            <figure>
              <img src="images/webanal.svg" alt="Интернет-маркетолог" title="Интернет-маркетолог"/>
              <figcaption>ИНТЕРНЕТ-МАРКЕТОЛОГ</figcaption>
            </figure>
          </div>
          <div className="project__empolyee__item">
            <figure>
              <img src="images/designer.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
              <figcaption>ДИЗАЙНЕР</figcaption>
            </figure>
          </div>
          <div className="project__empolyee__item">
            <figure>
              <img src="images/programer.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
              <figcaption>ПРОГРАММИСТ</figcaption>
            </figure>
          </div>
          <div className="project__empolyee__item">
            <figure>
              <img src="images/coder.svg" alt="Менеджер проекта" title="Менеджер проекта"/>
              <figcaption>ВЕРСТАЛЬЩИК</figcaption>
            </figure>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default YourProject;
