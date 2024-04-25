import styled from "styled-components";
import Header from "./Header";
const DIV = styled.div`
  height: 500px;

  background-color: rgba(0, 0, 0, 0.5);
`;
const IMG = styled.div`
  background-image: url("/assets/images/headerimg.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
`;
const DIVCENTER = styled.h1`
  display: block-grid;
  height: 400px;
  margin: 20px;
  color: var(--color-grey-0);


  font-size: 1.5rem;
`;
function HeaderSearch() {
  return (
    <IMG>
      <DIV>
        <Header />
        <DIVCENTER>
          <h1
            style={{
              fontSize: "4rem",
              padding: "1.5rem",
              fontFamily: "Aviny",
              color: " #FF8A08",
            }}
          >
            دنیای خودت رو با ما بساز!
          </h1>
          <p style={{ lineHeight: "30px", color: " #9ca3af" }}>
            در سایت ما، آرزوهای خود را به واقعیت تبدیل کنید. <br /> از
            آپارتمان‌های شیک تا خانه‌های مجلل، همه چیز در یک کلیک فاصله دارید.{" "}
            <br />
            به ما بپیوندید و رویای یک زندگی جدید را شروع کنید!
          </p>
         <div  style={{
                display:"grid",
                justifyContent:"end",
                
                alignItems:"end",
                marginRight:"150px",
                marginLeft:"150px",
                backgroundColor:" rgba(100, 150,255, 0.8)",
                
              }}>
          <div style={{width:"50px",backgroundColor:"blue"}}>sell</div>
         <div style={{backgroundColor:" rgba(0, 0,0, 0.8)",width:"230px"}}
             
            >1</div>
         </div>
         
         
        </DIVCENTER>
      </DIV>
    </IMG>
  );
}

export default HeaderSearch;
