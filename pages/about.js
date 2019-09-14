import Layout from "../components/MyLayout";
import "../styles/style.scss";
import { Container } from "reactstrap";

export default function About() {
  return (
    <Layout>
      <Container className="mt-4 post-body">
        <h3>درباره چلیپا کابل پویا</h3>
        <hr />
        <p>
          شرکت چلیپا کابل پویا با بهره گیری از سالها تجربه در صنعت کابل , یکی از
          تامین کنندگان سیم و کابل است که با وجود کارشناسان با تجربه و مدیریت
          منسجم و منظم این شرکت را به یک مجموعه معتبر و شناخته شده در پروژه های
          نفتی , فولادی , پالایشگاهی , ساختمانی و.. تبدیل نموده است چلیپا یکی از
          با سابقه ترین شرکتهای مهندسی بازرگانی است که در حال حاضر نمایندگی رسمی
          کابل متال و صنعتی الکتریک خراسان را دارا می باشد این شرکت با سابقه
          درخشان در تامین انواع سیم و کابلهای فشار ضعیف و فشار متوسط و نیز
          کابلهای افشان , کابلهای ابزار دقیق , کابلهای مقاوم در برابر حرارت و
          کابلهای خاص و ...می باشد ما با شناسایی فرصتهای جدید , محصولات متنوع و
          با کیفیت تامین کرده تا منحصر به فرد بودنمان را حفظ کنیم
        </p>
        <hr />
        <p>
          چطور توانایی های ما نتایج مثبتی برای شما به ارمغان داشته ؟ ما طیف
          گسترده ای از کابلهای مسی و آلومینیومی با کیفیت بالا ارائه میکنیم
        </p>
      </Container>
    </Layout>
  );
}
