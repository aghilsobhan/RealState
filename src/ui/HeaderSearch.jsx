import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
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
const DIVCENTER = styled.div`
  display: block-grid;
  height: 400px;
  margin: 20px;
  color: var(--color-grey-0);

  font-size: 1.5rem;
`;
const H1B = styled.h1`
  font-size: 4rem;
  padding: 1.5rem;
  font-family: Aviny;
  color: #ff8a08;
`;
const PB = styled.p`
  line-height: 30px;
  color: #9ca3af;
`;
const DIVCONTAINER = styled.div`
  display: grid;
  justify-items: center;
  margin-right: 150px;
  margin-left: 150px;
`;
const DIVSELECT = styled.div`
  display: flex;
  padding-right: 10px;
  background-color: rgba(0, 0, 0);
  padding-left: 10px;
`;
const H4SELECT = styled.h4`
  padding-right: 10px;
  padding-left: 10px;
  font-weight: 250;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;
const CONTAINERSEARCH = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 500px;
  height: 80px;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: end;
`;
const INPUTSEARCH = styled.input`
  margin-left: 15px;
  font-family: Vazir;
  width: 30rem;
  color: black;
`;
const SELECT = styled.select`
  width: 150px;
  color: black;
  direction: ltr;
  font-size: 1.2rem;
  height: 25.2px;
`;
function HeaderSearch() {
  return (
    <IMG>
      <DIV>
        <Header />
        <DIVCENTER>
          <H1B> دنیای خودت رو با ما بساز!</H1B>
          <PB>
            در سایت ما، آرزوهای خود را به واقعیت تبدیل کنید. <br /> از
            آپارتمان‌های شیک تا خانه‌های مجلل، همه چیز در یک کلیک فاصله دارید.{" "}
            <br />
            به ما بپیوندید و رویای یک زندگی جدید را شروع کنید!
          </PB>
          <DIVCONTAINER>
            <DIVSELECT>
              <H4SELECT>خرید</H4SELECT>|
              <H4SELECT>رهن</H4SELECT>|
              <H4SELECT>اجاره</H4SELECT>
            </DIVSELECT>
            <CONTAINERSEARCH>
              <Button style={{ marginLeft: "15px" }}>جستجو</Button>
              <INPUTSEARCH
                type="text"
                name="search"
                id="input-search"
                placeholder="جستجو..."
              />
              <SELECT name="select-home" id="search-select">
                <option
                  style={{ color: "black", fontSize: "1.2rem" }}
                  value="apartment"
                >
                  آپارتمان
                </option>
                <option value="villa">ویلا</option>
                <option value="home">خانه</option>
              </SELECT>
            </CONTAINERSEARCH>
          </DIVCONTAINER>
        </DIVCENTER>
      </DIV>
    </IMG>
  );
}

export default HeaderSearch;
