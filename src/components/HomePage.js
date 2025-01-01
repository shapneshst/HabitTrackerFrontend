import React from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate("/register");
      };
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">Habit Tracker</h1>
        <p className="subtitle">Build Consistent Habits, Achieve Your Goals</p>
        <button className="cta-button" onClick={handleSignUpClick}>
          Sign Up Now
        </button>
      </header>

      <section className="intro">
  <h2>Introduction to Habit Tracker</h2>
  <div className="intro-content">
    <p>
      Welcome to <strong>Habit Tracker</strong>, your ultimate tool for personal growth and self-improvement. Whether you're striving to adopt new habits or eliminate bad ones, we make it easy to track progress, stay motivated, and achieve long-term success.
    </p>
    <p>
      <strong>The Habit Tracker</strong> is designed to help you build good habits and break bad ones, ensuring personal growth and long-term success. Whether you're looking to improve productivity, focus on health goals, or enhance your daily routine, our platform provides an intuitive experience to track progress, stay accountable, and achieve your goals.
    </p>
    <p>
      <em>Start building consistent habits today and transform your life with Habit Tracker.</em>
    </p>
    {/* <button className="cta-button">Learn More</button> */}
  </div>
</section>


<section className="why-habit-tracking">
  <h2>Why Habit Tracking is Important</h2>
  <div className="why-content">
    <p>
      Developing habits is the foundation for long-term personal growth and success. Studies have shown that it takes anywhere from <strong>21 to 66 days</strong> to form a new habit. During this period, tracking your progress consistently can significantly boost your chances of achieving your goals. 
    </p>
    <p>
      Habit Tracker makes this process easier by providing you with the tools to monitor your daily habits, identify patterns, and build accountability. Whether you're striving to adopt a healthier lifestyle, increase productivity, or achieve work-life balance, tracking your habits ensures you stay focused and committed.
    </p>
    <p>
      Consistency is the key to success. With Habit Tracker, you can set clear goals, visualize your progress, and overcome obstacles that typically derail self-improvement efforts. Start leveraging the power of <strong>habit tracking</strong> to transform your routines and unlock your full potential.
    </p>
  </div>
</section>


      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Customizable Habit Lists</h3>
            <p>Create a list of habits tailored to your lifestyle.</p>
          </div>
          <div className="feature-card">
            <h3>Daily Reminders & Notifications</h3>
            <p>Get reminders to stay consistent and build streaks.</p>
          </div>
          <div className="feature-card">
            <h3>Progress Insights & Analytics</h3>
            <p>Analyze your habit patterns with detailed charts.</p>
          </div>
          <div className="feature-card">
            <h3>Streak Tracking</h3>
            <p>Stay motivated by maintaining daily streaks.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Habit Tracking Journey</h2>
        <p>
          Ready to transform your life? Join thousands of people improving their
          habits with Habit Tracker.
        </p>
        <button className="cta-button" onClick={handleSignUpClick}>Get Started</button>

      </section>
    </div>
  );
};

export default HomePage;
