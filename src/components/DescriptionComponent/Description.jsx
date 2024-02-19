
import "./Description.css";

// eslint-disable-next-line react/prop-types
const Description = ({click}) => {
  
  
  return (
    <div className="description">
      <button id="start" className="start-btn" onClick={click}>
        Teste Başla
      </button>
      <div className="info-text">
        <h2 style={{ textAlign: "center" }}>Test Hakkında Bilgiler</h2>
        <ol className="list-text">
          <li>Test 10 sorudan oluşacaktır.</li>
          <li>
            Soruyu işaretledikten sonra tekrar aynı soruya geri gelemessin.
          </li>
          <li>Test sonunda doğru, yanlış ve test skorun paylaşılacak.</li>
          <li>Soruları dikkatli oku geri dönemeyeceğini bil !!</li>
        </ol>
      </div>
    </div>
  );
};

export default Description;
