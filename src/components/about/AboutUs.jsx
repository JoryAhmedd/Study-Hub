import classes from "@/components/about/AboutUs.module.css";
import Button from "../UiElements/Button";
export default function AboutUsPage() {
  return (
    <section className={classes["main"]}>
      <div className={classes["div-one"]}>
        <p className={classes["title"]}>About Us</p>
        <h2 className={classes["paragraph-one"]}>
          Hi, we're <span>Study Hub.</span>
        </h2>
        <p className={classes["paragraph-two"]}>
          Study Hub is your all-in-one space to learn, plan, focus, grow. We are
          here to make student life simpler, smarter, and more productive.
        </p>
      </div>

      <div className={classes["div-two"]}>
        <div className={classes["sec-one"]}>
          <p className={classes["title"]}>Our Mission</p>
          <h4 className={classes["title-two"]}>
            Helping students become their best everyday.
          </h4>
          <p className={classes["paragraph"]}>
            We build tools and resources that support your academic journey,
            boost your productivity, and help you stay inspired - every step of
            the way.
          </p>
        </div>

        <div className={classes["sec-two"]}>
          <p className={classes["title"]}>Our Values</p>

          <div className={classes["sec-onetwo"]}>
            <div>
              <p className={classes["number"]}>01</p>
              <h4>Student First</h4>
              <p>Everything we do starts with student and their needs</p>
            </div>

            <div>
              <p className={classes["number"]}>02</p>
              <h4>Focus & Clarity</h4>
              <p>We believe focus leads to progress and real results.</p>
            </div>

            <div>
              <p className={classes["number"]}>03</p>
              <h4>Simplicity</h4>
              <p>We keep things clean, easy, and distraction free.</p>
            </div>

            <div>
              <p className={classes["number"]}>04</p>
              <h4>Focus & Clarity</h4>
              <p>We encourage learning, improvement, and staying curious.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["div-three"]}>
        <h2>Let's grow together.</h2>
        <p>
          Study Hub is more than a platform - it's a community. Let's support,
          inspire, and achieve more together.
        </p>
        <Button href="/sign-up" className={classes["btn"]}>
          Join Study Hub
        </Button>
      </div>
    </section>
  );
}
