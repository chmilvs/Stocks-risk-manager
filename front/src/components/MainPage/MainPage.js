import './MainPage.css'

function MainPage() {

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h2 id="banner-title">Toffee</h2>
                        <p id="banner-text">Риск-менеджер для акций компаний американского рынка.
                            Больше никаких необдуманных покупок.</p>
                    </header>
                    {/*<span className="image"><img src="./images/2280235027.jpg"/></span>*/}
                </div>
                <a href="#one" className="goto-next scrolly">Next</a>
            </section>


            <section id="one" className="spotlight style1 bottom">
                <span className="image fit main"><img src="images/pic02.jpg" alt=""/></span>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-12-medium">
                                <header>
                                    <h2>Odio faucibus ipsum integer consequat</h2>
                                    <p>Nascetur eu nibh vestibulum amet gravida nascetur praesent</p>
                                </header>
                            </div>
                            <div className="col-4 col-12-medium">
                                <p>Toffee поможет вам диверсифицировать средства,
                                    вложенные в акции компаний и выбрать их оптимальную долю в портфеле,
                                    исходя из размера капитала и заданного процента риска.</p>
                            </div>
                            <div className="col-4 col-12-medium">
                                <p>Morbi enim nascetur et placerat lorem sed iaculis neque ante
                                    adipiscing adipiscing metus massa. Blandit orci porttitor semper.
                                    Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
                                    mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
                                    ipsum dolor nullam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="two" className="spotlight style1 bottom">
                <span className="image fit main"><img src="images/pic02.jpg" alt=""/></span>
                <div className="content">
                    <div className="container">
                        <p>
                            Morbi enim nascetur et placerat lorem sed iaculis neque ante
                                    adipiscing adipiscing metus massa. Blandit orci porttitor semper.
                                    Arcu phasellus tortor enim mi mi nisi praesent adipiscing. Integer
                                    mi sed nascetur cep aliquet augue varius tempus. Feugiat lorem
                                    ipsum dolor nullam.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainPage;
