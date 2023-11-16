import "./index.scss";
import fond from "../../../img/image 12.png";
const Fond = () => {
  return (
    <div id="fond">
      <div className="container">
        <div className="fond">
          <img src={fond} alt="" />
          <div className="fond__text">
            <h1 data-aos="fade-down">О фонде</h1>
            <p data-aos="fade-right">
              Фонд начал свою деятельность в 2013 году. Мы помогаем малоимущим
              семьям и детским домам в регионах улучшить условия и качество их
              жизни, поддерживать здоровье. Мы организовываем досуг,
              благотворительные мероприятия и различные активности, чтобы дети
              были счастливы и чувствовали себя комфортно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fond;
