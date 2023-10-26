import { Row } from "react-bootstrap";

export const ContactView = () => {
  return (
    <Row className="mx-auto justify-content-md-center">
      <h1>Contact Matt Gaughan</h1>

      <form
        action="input"
        method="post"
        id="contact-form"
        className="contact-form"
      >
        <label className="inputEmail" htmlFor="contact-email">
          E-mail: *
        </label>
        <br />
        <input type="email" id="contact-email" required />
        <br />
        <label className="inputTelephone" htmlFor="contact-telephone">
          Telephone: *
        </label>
        <br />
        <input type="tel" id="contact-telephone" required />
        <br />
        <label className="inputMessage" htmlFor="my-input">
          Message:{" "}
        </label>
        <br />
        <label htmlFor="my-input"></label>
        <textarea id="my-input" maxLength="240"></textarea>
        <br />
        <input type="submit" value="Send nonmessage" />
      </form>

      <div className="profile">
        <br />
        My most recent employment:
        <br />
        <br />
        Merrigan and Merrigan Law
        <br />
        10 Forbes Rd., Suite 110W
        <br />
        Braintree, MA 02184
        <br />
        Phone: +1 (781) 356-2500
        <br />
        www.MerriganandMerrigan.com
        <br />
        <br />
        <a href="mailto:mattgaugs@gmail.com">mattgaugs@gmail.com</a>
        <br />
      </div>
      <script src="js/tota11y.min.js"></script>
    </Row>
  );
};
