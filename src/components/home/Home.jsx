import Button from "../UiElements/Button";
import classes from "./Home.module.css";

export default function HomePage() {
  return (
    <section className={classes["main"]}>
      <div className={classes["secMain"]}>
        <h4 className={classes["paragraph-one"]}>
          Your all-in-one <span>study companion</span>
        </h4>
        <h2 className={classes["title"]}>
          Organize your <span>student life</span>
        </h2>
        <p className={classes["paragraph-two"]}>
          Everything you need to study, plan, and stay productive in one place.
        </p>

        <div className={classes["buttons"]}>
          <Button href="/sign-up" className={classes["button"]}>
            <span>➔</span> Get Started
          </Button>
          <Button outline href="/about" className={classes["button"]}>
            <span>▶</span> More About Us
          </Button>
        </div>
      </div>

      <div className={classes["features"]}>
        <div className={classes["card"]}>
          <div className={classes["icon"]}>📊</div>

          <div>
            <h3>Stay Organized</h3>
            <p>Keep all your tasks in one place.</p>
          </div>
        </div>

        <div className={classes["card"]}>
          <div className={classes["icon"]}>⏰</div>

          <div>
            <h3>Boost Focus</h3>
            <p>Use productivity tools to stay on track.</p>
          </div>
        </div>

        <div className={classes["card"]}>
          <div className={classes["icon"]}>📚</div>

          <div>
            <h3>Track Progress</h3>
            <p>Visualize your progress and achieve your goals.</p>
          </div>
        </div>

        <div className={classes["card"]}>
          <div className={classes["icon"]}>👥</div>

          <div>
            <h3>Built for Students</h3>
            <p>Everything you need, designed for your life.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
